/** @type{string} */
export const EPSILON = "ε";
export class StateMachine {
  /**
   * 
   * @param {Set<string>} Q Set of all states 
   * @param {string} s 
   * @param {string} q0 Inital state
   * @param {Set<string>} F Set of all final states
   * @param {TransitionFunction} d The transition function
   */
  constructor(Q, q0, F, d) {
    this.Q = Q;
    this.q0 = q0;
    this.F = F;
    this.d = d;
    this.flowchart = "";
    this.node = 1;
    this.input = "";
    console.log("Constructed F", F);
    console.log("Constructed Q", Q);
  }
  /**
   * @param {string} input Input to match with the NFA
   * @return {boolean} 
   */
  matches(input) {
    this.input = input;
    let currentStates = [this.q0];
    // this.chartInit(this.q0);
    for (let i = 0; i < input.length; i++) {
      //get next character from input string
      const c = input[i];
      //the next states
      let next = [];
      //travel the ε arrows first
      let withEpsilons = currentStates
        .flatMap(state => this.d.get(state, EPSILON)) //get ε targets and flatten
        .filter(s => s);//remove "undefined" (dead states)
      // console.log("first e", withEpsilons);
      next = currentStates.concat(withEpsilons).unique();
      // console.log("after e", next);
      //travel along arrows matching the input
      next = next.flatMap(state => this.d.get(state, c)).filter(s => s);
      // console.log("input match", next);
      //travel the ε arrows again
      withEpsilons = next
        .flatMap(state => {
          const epsilonStates = this.d.get(state, EPSILON);
          return epsilonStates;
        }).filter(s => s);

      next = next.concat(withEpsilons).unique().filter(s => s);
      // console.log(next);
      //update the current states
      currentStates = next;
    }
    // console.log("final", currentStates);
    //return true if currentStates include
    //one of the Final states
    return currentStates.some(state => this.F.has(state));
  }

  _startNewInputSegment() {
    this.startNode = this.node;
    this.previous = this.nextForPrev;
    this.nextForPrev = [];
  }
  _chartInit(q0) {
    this.flowchart = "graph TD\n  ";
    this.node = 1;
    this.previous = [{ state: q0, index: 1 }];
    /** @type {{state: string, index: number}} */
    this.nextForPrev = [...this.previous];
  }
  /**
   * 
   * @param {string} fromState 
   * @param {string[]|undefined} next 
   * @param {string} input
   */
  _drawChart1(fromState, next, input) {
    console.log("drawing", fromState, next, input);
    console.log("Prev:", this.previous);
    // return;
    let rows = "";
    if (next)
      next.forEach((state, i) => {
        if (state) {
          const prevId = this.previous.find(p => p.state === state).index;
          rows += `  ${prevId}[${fromState}] --> |${input}| ${this.node}[${state}]\n`
          this.nextForPrev.push({ state, index: this.node });
          this.node++;
        }
      })
    this.flowchart += rows;
  }
  /**
   * Get the tree representation of the 
   * NFA simulation
   * @param {string} input Input String
   * @returns Markdown for Mermaid js
   */
  drawChart(input) {
    if (!input) return "";
    this.input = input;
    let graph = "graph TD\n";
    this.node = 0;
    this.lastNodeDrawn = 0;
    graph += this._addNode(0, this.q0, 0)
    return graph;
  }
  _addNode(parentNode, parentState, inputIndex) {
    //this node is the next one in the graph, 
    //this node index must be unique for each
    this.node++;
    if (inputIndex > this.input.length - 1) return "";
    //This will contain the nodes arising
    //from this state and matching rest of the input
    let subtree = "";
    /**used to determine failed/succesful leaf node final state
      *and color accordingly*/
    const isAtEnd = inputIndex == this.input.length - 1;
    //the current character in the input string
    const c = this.input[inputIndex];


    /**@type {string[]} */
    let next = [parentState];
    // console.log("Start state", next, c);
    let withEpsilons = this.d.get(parentState, EPSILON).filter(s => s);
    next = next.concat(withEpsilons).unique();
    // console.log("First e", next);
    //travel input arrows
    next = next.flatMap(state => this.d.get(state, c)).filter(s => s)
    // console.log("Input arrows", next);
    //travel the ε arrows
    withEpsilons = next.flatMap(state => this.d.get(state, EPSILON)).filter(s => s);
    next = next.concat(withEpsilons).unique();
    // console.log("after e", next);
    //next has all next states, including ε ones
    for (const state of next) {
      subtree += `${parentNode}[${parentState}] --> |${c}| ${this.node}[${state}]\n`;
      this.lastNodeDrawn = this.node;
      let subsubtree = this._addNode(this.node, state, inputIndex + 1);
      if (subsubtree === "") {
        //this node is the leaf
        if (!isAtEnd) {
          //input isn't over but we have reached a "dead" state
          //which leads nowhere with this input character
          //=> color red
          if (this.lastNodeDrawn >= this.node)
            subtree += `style ${this.node} fill: red\n`;
        }
        //check if this is the final state
        const isFinalState = this.F.has(state);
        // if (this.lastNodeDrawn >= this.node - 1)
        console.log(isAtEnd)
        subtree += `style ${this.node - 1} fill : ${isFinalState && isAtEnd ? 'green' : 'red'}\n`;
      }
      subtree += subsubtree;
    }
    return subtree;
  }
}
export class TransitionFunction {
  /**
   * @param {Map<String, Map<String Set<string>>>} d
   * Transition function
   */
  constructor(d = {}) {
    this.d = d;
  }
  /**
   * Adds a (from*input)->next transition
   * @param {string} from Present state
   * @param {Array<string>} inputs The inputs
   * @param {Array<string>} next Next state.
   */
  add(from, inputs, next) {
    if (!this.d[from]) this.d[from] = {};
    inputs.forEach(input => {
      this.d[from][input] = (this.d[from][input] ?? []).concat([...new Set(next)]);
    })
  }
  /**
   * Get the next state
   * @param {string} state Current state
   * @param {string} input Input
   * @returns {Array<string>} Next state
   */
  get(state, input) {
    // console.log('get', state, input, "return", this.d[state]?.[input]);
    return (this.d[state]?.[input] ?? []);
  }
  /**
   * 
   * @param {string} start State
   * @param {Set<string>} finalStates 
   * @returns 
   */
  getDiagram(start, finalStates) {
    let graph = "graph LR\n";
    let td = {};
    for (const state in this.d) {
      td[state] = {};
      for (const input in this.d[state]) {
        for (const target of this.d[state][input]) {
          (td[state][target] ?? (td[state][target] = [])).push(input);
        }
      }
    }
    for (const state in td) {
      if (finalStates.has(state)) {
        graph += `style ${state} stroke-width: 4px\n`;
      }
      for (const target in td[state]) {
        graph += `${state}((${state})) --> |${td[state][target].join(",")}| ${target}\n`
      }
    }
    graph += `$start -.-> ${start}\n`;
    return graph;
  }
}
Array.prototype.unique = function () {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j])
        a.splice(j--, 1);
    }
  }

  return a;
};
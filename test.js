// _addNode(parentNode, parentState, inputIndex) {
//   if (inputIndex > this.input.length - 1) return "";
//   //this node is the next one in the graph,
//   //this node index must be unique for each
//   this.node++;
//   //This will contain the nodes arising
//   //from this state and matching rest of the input
//   let subtree = "";
//   /**used to determine failed/succesful leaf node final state
//     *and color accordingly*/
//   const isAtEnd = inputIndex == this.input.length - 1;
//   //the current character in the input string
//   const c = this.input[inputIndex];


//   /**@type {string[]} */
//   let next = [parentState];
//   console.log("Start state", next, c);
//   let withEpsilons = this.d.get(parentState, EPSILON).filter(s => s);
//   next = next.concat(withEpsilons).unique();
//   console.log("First e", next);
//   //travel input arrows
//   next = next.flatMap(state => this.d.get(state, c)).filter(s => s)
//   console.log("Input arrows", next);
//   //travel the ε arrows
//   withEpsilons = next.flatMap(state => this.d.get(state, EPSILON)).filter(s => s);
//   next = next.concat(withEpsilons).unique();
//   console.log("after e", next);
//   //next has all next states, including ε ones
//   for (const state of next) {
//     subtree += `${parentNode}[${parentState}] --> |${c}| ${this.node}[${state}]\n`;
//     let subsubtree = this._addNode(this.node, state, inputIndex + 1);
//     if (subsubtree === "") {
//       //this node is the leaf
//       if (!isAtEnd) {
//         //input isn't over but we have reached a "dead" state
//         //which leads nowhere with this input character
//         //=> color red
//         // subtree += `style ${this.node} fill: red\n`;
//       }
//       //check if this is the final state
//       const isFinalState = this.F.has(parentState);
//       // subtree += `style ${this.node} fill: ${isFinalState ? 'green' : 'red'}\n`;
//     }
//     subtree += subsubtree;
//   }
//   return subtree;
// }
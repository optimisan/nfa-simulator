import { TransitionFunction, StateMachine, EPSILON } from "./machine.js";
const Q = new Set(["1", "2", "3", "4"]);
const F = new Set(["b"]);
const d = new TransitionFunction();
// d.add("1", ["0", "1"], ["1"]);
// d.add("1", ["1"], ["2"]);
// d.add("2", ["0", EPSILON], ["3"]);
// d.add("3", ["1"], ["4"]);
// d.add("4", ["0", "1"], ["4"]);
d.add("a", ["0"], ["a"]);
d.add("a", ["1"], ["b"]);
d.add("b", ["1"], ["b"]);
d.add("b", ["0"], ["a"]);
console.log(d.getDiagram("a", F));
const machine = new StateMachine(Q, "1", F, d);
console.log(d.d);
console.log(machine.matches("0"));
console.log(machine.drawChart("010110"))
// console.log(machine.flowchart)

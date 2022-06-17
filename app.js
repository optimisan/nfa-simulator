import { faDiagram, source0 } from "./example.js";
import { EPSILON, StateMachine, TransitionFunction } from "./machine.js";

/**
 * @type {Set<string>}
 */
let Q = new Set(["a", "b"]);
/**@type {Set<string>} */
let F = new Set(["b"]);
let alphabet = new Set(["0", "1"]);
let alArr = ["0", "1"];
let q0 = "a";
//Render example
mermaid.mermaidAPI.render("graphDiv", source0, code => {
  document.getElementById("flowchart-0").innerHTML = code
});
document.getElementById("fa-diagram").innerHTML = faDiagram
//focusout listeners
document.getElementById("q").addEventListener("focusout", e => {
  const text = e.target.value;
  Q = new Set(text.split(";").filter(s => s.trim() !== ""));
})
document.getElementById("alphabet").addEventListener("focusout", e => {
  const text = e.target.value;
  alphabet = new Set(text.split(";").filter(s => s.trim() !== ""));
})
document.getElementById("q0").addEventListener("focusout", e => {
  q0 = e.target.value.trim();
  if (q0 == "") {
    showError("q0");
    document.querySelector("#q0 ~ div").innerText = "There must be exactly one initial state."
    return;
  }
  if (!Q.has(q0)) {
    document.getElementById("q0").classList.add("is-invalid")
    document.querySelector("#q0 ~ div").innerText = "State not found in Q. NFA won't recognise non-empty strings."
  } else document.getElementById("q0").classList.remove("is-invalid")
})
document.getElementById("f").addEventListener("focusout", e => {
  const text = e.target.value;
  F = new Set(text.split(";").filter(s => s.trim() !== ""));
  if (F.size == 0) {
    document.getElementById("f").classList.add("is-invalid");
    document.querySelector("#f ~ div").innerText = `[Empty list]No input will be recognised.`

    return;
  }
  let foundError = false;
  F.forEach(state => {
    if (!Q.has(state)) {
      document.querySelector("#f ~ div").innerText = `State ${state} not found in Q.`
      foundError = true;
      document.getElementById("f").classList.add("is-invalid");
    }
  })
  if (!foundError) {
    document.getElementById("f").classList.remove("is-invalid")
  }
})
function showError(s) {
  document.getElementById(s).classList.add("is-invalid")
}
function removeError(s) {
  document.getElementById(s).classList.remove("is-invalid")
}
///Build the transition function table
document.getElementById("load").addEventListener("click", buildTable)
function buildTable() {
  if (Q.size === 0) {
    showError("q"); return;
  }
  if (alphabet.size == 0) {
    showError("alphabet"); return;
  }
  const ele = document.getElementById("table")
  let thead = `<tr>
  <th class="col">δ</th>
  <th class="col">ε</th>`;
  alArr = [];
  alphabet.forEach(s => { thead += `<th class="col">${s}</th>`; alArr.push(s); });
  thead += "</tr>";
  let tbody = "";
  let inputs = alphabet.size + 1;
  let row = "";
  while (inputs-- > 0) {
    row += '<td><input class="form-control"/></td>';
  }
  Q.forEach(state => {
    tbody += "<tr><th scope='row'>" + state + "</th>" + row + "</tr>";
  })
  ele.getElementsByTagName("thead")[0].innerHTML = thead;
  ele.getElementsByTagName("tbody")[0].innerHTML = tbody;
}
//Simulate machine run
document.getElementById("enter").addEventListener("click", simulate);

function simulate() {
  if (validate()) {
    const d = new TransitionFunction();
    const table = document.getElementById("table");
    table.querySelectorAll('tbody tr').forEach(row => {
      const state = row.querySelector("th").innerText.trim();
      d.add(state, [EPSILON], row.querySelectorAll("td input")[0].value);
      row.querySelectorAll("td input").forEach((input, i) => {
        if (i > 0) {
          // console.log(Q[i - 1])
          if (input.value.trim() !== "")
            d.add(state, [alArr[i - 1]], input.value.trim().split(";").filter(s => s !== ''));
        }
      })
    })
    // console.log(d.d);
    const machine = new StateMachine(Q, q0, F, d);
    const diag = d.getDiagram(q0, F);
    document.getElementById("results").innerHTML = "";
    const inputs = document.getElementById("string").value.split(";").map(s => s.trim()).filter(s => s !== '');
    addResult.count = 0;
    inputs.forEach(input => {
      addResult(machine, input);
    })
    renderMermaid(diag, "fa-diagram");
    svgs.forEach(s => {
      document.getElementById(s.id).innerHTML = s.svg;
    })
  }
}
let svgs = [];
/**
 *    
 * @param {StateMachine} machine 
 * @param {string} input 
 */
function addResult(machine, input, i) {
  const matched = machine.matches(input);
  const count = addResult.count;
  const str = `<section class="bg-light border rounded px-3 py-2">
            <div class="display-6 text-${matched ? "success" : "danger"} border-bottom border-text-${matched ? "success" : "danger"}">
              ${input}
              <span class="fs-3 material-symbols-rounded">${matched ? "verified" : "dangerous"}</span>
            </div>
            <div class="accordion" id="acc-${count}">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-${count}"
                    aria-expanded="true"
                    aria-controls="collapse-${count}"
                  >
                    State Flowchart
                  </button>
                </h2>
                <div
                  id="collapse-${count}"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#acc-${count}"
                >
                  <div class="accordion-body" id="flowchart-${count}"></div>
                </div>
              </div>
            </div>
          </section>`;
  document.getElementById("results").innerHTML += str;
  renderMermaid(machine.drawChart(input), "flowchart-" + count);
  addResult.count++;
}
function validate() {
  return true;
}
function renderMermaid(source, divId) {
  console.log(source);
  mermaid.mermaidAPI.render("graphDiv", source, code => {
    //  document.getElementById(divId).innerHTML = code
    svgs.push({ svg: code, id: divId });
  });
}
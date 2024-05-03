// File: js/sundanese.js

// Array of student names
let names = [
  "Asep",
  "Dede",
  "Ade",
  "Nana",
  "Eneng",
  "Ujang",
  "Deden",
  "Yaya",
  "Dadang",
  "Euis",
  "Jaja",
  "Nining",
  "Yayan",
  "Tati",
  "Dina",
  "Aa",
  "Wawan",
  "Ina",
  "Dudung",
  "Awi",
  "Ita",
  "Yadi",
  "Yuli",
  "Ucok",
  "Yayan",
  "Nia",
  "Edo",
  "Yosep",
  "Yanti",
  "Abah",
  "Neneng",
  "Adek",
  "Ujang",
  "Teti",
  "Tata",
  "Ucu",
  "Aji",
  "Udin",
  "Yanti",
  "Cici",
];

// Function to fill the table with student names
function fillTable() {
  let tbody = document.querySelector("tbody");

  names.forEach(function (name) {
    let row = document.createElement("tr");
    row.innerHTML = `
            <th scope="row"><input type="checkbox" name="" id=""></th>
            <td class="text-start">${name}</td>
            ${createCheckboxes()}
        `;
    tbody.appendChild(row);
  });
}

// Function to create checkboxes for each day
function createCheckboxes() {
  let checkboxes = "";
  for (let i = 1; i <= 31; i++) {
    checkboxes += `<td><input type="checkbox" name="" id=""></td>`;
  }
  return checkboxes;
}

// Call fillTable function when the page is loaded
window.onload = fillTable;

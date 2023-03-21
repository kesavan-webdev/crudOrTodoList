// Get Elements

const employeeName = document.getElementById("employee-Name");
const mobileNum = document.getElementById("employee-mobileNum");
const submitBtn = document.getElementById("btn-submit");
const formEl = document.getElementById("form");
const listItem = document.getElementById("listItem");

// console.log(employeeName, mobileNum, submitBtn, formEl, listItem);
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = employeeName.value;
  const number = mobileNum.value;
  // console.log(name, number);
  if (name.trim() === "" && number.trim() === "") {
    alert("fill the fields");
  } else {
    let newEl = document.createElement("p");
    newEl.className = "list";
    newEl.innerHTML = `<span>${name}</span> <span> ${number} </span>`;
    console.log(newEl);
    listItem.appendChild(newEl);
  }
});

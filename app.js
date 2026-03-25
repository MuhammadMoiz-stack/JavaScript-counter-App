//Javascript Counter Number

console.log("-----------");
console.log("Hello, Everone This is My New Javascript Project number Counter ");
console.log("-----------");

alert("Number Counter New javascript project Of counting Number !!!");

const increasebtn = document.getElementById("increase-btn");
const countingnumber = document.getElementById("counting");
const decreasebtn = document.getElementById("decrease-btn");
const resetbtn = document.getElementById("reset-btn");

let count = 0;

// Increase Btn Function

increasebtn.addEventListener("click", function () {
  count++;
  countingnumber.textContent = count;
});

// decrease Btn Function

decreasebtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countingnumber.textContent = count;
  }
});

// reset Btn Function

resetbtn.addEventListener("click", function () {
  count = 0;
  countingnumber.textContent = count;
});

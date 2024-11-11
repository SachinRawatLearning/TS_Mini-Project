const button = document.getElementById("btn")!;

button.addEventListener("click", () => {
  alert("Clicked!!!");
});
console.log(button);

let mystery: unknown = 23;

const len = (mystery as string).length;
console.log(len);

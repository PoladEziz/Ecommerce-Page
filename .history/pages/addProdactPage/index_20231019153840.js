let form = document.querySelector("form");
let idInput = document.querySelector("input-id");
let nameInput = document.querySelector("input-name");
let aboutInput = document.querySelector("input-about");
let priceInput = document.querySelector("input-price");
let btn = document.querySelector("button");
form.addEventListener("submit", handleAdd);
function handleAdd(e) {
  e.preventDefault();
  checkProdact();
}
function createDataBase() {
  let dataBase = [];
  localStorage.setItem("product", JSON.stringify(dataBase));
}
function getDataBase() {
  let dataBase = localStorage.getItem("product");
  if (dataBase) {
    return JSON.parse(dataBase);
  } else {
    createDataBase();
    let dataBase = localStorage.getItem("product");
    return JSON.parse(dataBase);
  }
}
function checkProdact() {
  let dataBase = getDataBase();
  for (let index = 0; index < dataBase.length; index++) {
    if (dataBase[index].id == idInput.value) {
      dataBase[index].productCount += 1;
      break;
    } else {
      createProduct();
    }
  }
  console.log(dataBase);
}
function createProduct() {
  let dataBase = getDataBase();
  let product = {
    id: idInput.value,
    name: nameInput.value,
    about: aboutInput.value,
    price: priceInput.value,
    productCount: 1,
  };
  console.log(product);
  dataBase.push(product);
  console.log(dataBase);
  localStorage.setItem("product", JSON.stringify(dataBase));
}

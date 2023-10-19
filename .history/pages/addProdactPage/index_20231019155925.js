let form = document.querySelector("form");
let idInput = document.querySelector(".input-id");
let nameInput = document.querySelector(".input-name");
let aboutInput = document.querySelector(".input-about");
let priceInput = document.querySelector(".input-price");
let selectedCount = document.querySelector("select");
let imgInput =document.querySelector('.img-input')
let btn = document.querySelector("button");
let productExist = false;
form.addEventListener("submit", handleAdd);

function handleAdd(e) {
  e.preventDefault();
  checkProduct();
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
function checkProduct() {
  let products = getDataBase();
  console.log(products);
  for (let index = 0; index < products.length; index++) {
    if (products[index].productId == idInput.value) {
      products[index].productCount += +selectedCount.value;
      productExist = true;
      break;
    } else {
      productExist = false;
    }
  }

  if (productExist) {
    localStorage.setItem("product", JSON.stringify(products));
  } else {
    createProduct();
  }
}


// file reader
let imageFile = "";
imgInput.addEventListener("change", (event) => {
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.addEventListener("load", () => {
    imageFile = reader.result;
  });
});
imgInput.addEventListener('click', change)
 ()=>{

}
function createProduct() {
  let dataBase = getDataBase();
  let product = {
    productId: idInput.value,
    productName: nameInput.value,
    productInfo: aboutInput.value,
    productAmount: priceInput.value,
    productCount: +selectedCount.value,
  };
  dataBase.push(product);
  localStorage.setItem("product", JSON.stringify(dataBase));
}

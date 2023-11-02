let ul = document.querySelector("ul");
let h2 = document.querySelector("h2");
function getProduct() {
  let data = JSON.parse(localStorage.getItem("product"));

  h2.innerText = ` ${data.length} Items`;
  data.forEach((element) => {
    ul.innerHTML += `
    <li>
    <div class="image-box">
      <img
        class="main-photo"
        src="${element.productImg}"
        alt=""
      />
      <div class="buttons-box">
        <div class="ratigns">
          <img
            src="../../assets/img/icon emojione-star.png"
            alt=""
            srcset=""
          />
          <h5>4.3</h5>
        </div>
        <button class="no-fav-btn">
        <img class="no-fav" src="../../assets/img/no-fav.svg" alt="">
        </button>
      </div>
    </div>

    <h3>${element.productName} <br> # <span>${element.productId} </span>  </h3>
    <h5>${element.productInfo} <br> <p>${element.productCount}</p></h5>
    <h4>$ ${element.productAmount}</h4>
<div class="buttons">
<button class="add">
  <i class="fa-solid fa-cart-shopping"></i>
</button>
<button class="delete">
  <i class="fa-sharp fa-solid fa-trash"></i>
</button>
</div>
   </li>
   `;
  });
}
getProduct();
// let addIcon=document.querySelector('.fa-solid fa-cart-shopping')

// delete action
let deleteBtn = document.querySelectorAll(".delete");
deleteBtn.forEach((element) => {
  element.addEventListener("click", () => deleteProduct(element));
});
function deleteProduct(element) {
  let data = JSON.parse( localStorage.getItem("product");
  let productId =
    element.parentElement.parentElement.querySelector("span").innerText;
  let productCount = element.parentElement.parentElement.querySelector("h5 p");


  if (productCount.innerText > 1) {
    productCount.innerText = productCount.innerText - 1;
    removeLocalStorage(productId,data)

  } else {
    element.parentElement.parentElement.remove();
  }
}


function removeLocalStorage(id, data){
  console.log(id, data);
data.forEach((element)=>{
  console.log(element);
})
}

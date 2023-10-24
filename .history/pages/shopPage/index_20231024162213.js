let ul = document.querySelector("ul");
let h2=document.querySelector('h2')
function getProduct() {
  let data = JSON.parse(localStorage.getItem("product"));
  console.log(data);
  h2.innerText=` ${data.length} items`
  data.forEach((element) => {
    console.log(data.length);
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

    <h3>${element.productName} <br> #${element.productId} </h3>
    <p>${element.productInfo} <br> ${element.productCount}</p>
    <h4>$ ${element.productAmount}</h4>
  </li>
    `;
    let noFavBtns= document.querySelectorAll('.no-fav-btn')
noFavBtns.forEach((element)=>{
  element.addEventListener('click',()=>checkFav(element) )
})
  });
}
getProduct();
let fav= false
function checkFav(button) {
  console.log(button);
  if(fav){
    button.querySelector('img').src='../../assets/img/no-fav.svg'
  }
  
}

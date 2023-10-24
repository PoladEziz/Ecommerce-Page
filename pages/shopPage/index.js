let ul = document.querySelector("ul");
function getProduct() {
  let data = JSON.parse(localStorage.getItem("product"));
  console.log(data);
  data.forEach((element) => {
    console.log(element);
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
        <button>
          <img src="../../assets/img/no-fav.svg" alt="">
        </button>
      </div>
    </div>

    <h3>${element.productName}</h3>
    <p>${element.productInfo}</p>
    <h4>Rs. 1790</h4>
  </li>
    `;
  });
}
getProduct();

let errorMsg = document.querySelector(".error-msg");
let nameInput = document.querySelector(".name-input");
let passwordInput = document.querySelector(".password-input");
let btn = document.querySelector("button");
btn.addEventListener("click", login);
function login(e) {
  e.preventDefault();
  console.log('login olunmadi');
  if (nameInput.value && passwordInput.value) {
    findUser();
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
  }
}
function findUser() {
  let dataBase = JSON.parse(localStorage.getItem("users"));
  for (let index = 0; index < dataBase.length; index++) {
    if (
      dataBase[index].name == nameInput.value &&
      dataBase[index].password == passwordInput.value
    ) {
      console.log("login olundu");
      window.location.href = "../homePage/index.html";
      break;
    } else {
      console.log("login olunmadi");
    }
  }
}

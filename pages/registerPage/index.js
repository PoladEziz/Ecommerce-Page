let nameInput = document.querySelector("input[type=text]");
let passwordInput = document.querySelector("input[type=password]");
let form = document.querySelector("form");
let errorMsg = document.querySelector(".error-msg");
let errorMsg2=document.querySelector(".error-msg-2");
let btn = document.querySelector("button");
let userExist=false;
localStorage.removeItem('users')
form.addEventListener("submit", handleRegister);
function handleRegister(e) {
  e.preventDefault();
  if (nameInput.value && passwordInput.value) {
    errorMsg.style.display = "none";
    chekUser()
  } else {
    errorMsg.style.display = "block";
  }
}
function createDataBase() {
  let dataBase = [];
  localStorage.setItem("users", JSON.stringify(dataBase));
}
function getDataBase() {
  let users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    return users;
  } else {
    createDataBase();
    let users = JSON.parse(localStorage.getItem("users"));
    return users;
  }
}
function chekUser() {
    let dataBase=getDataBase()
    for (let index = 0; index < dataBase.length; index++) {
    if (dataBase[index].name==nameInput.value) {
     userExist=true;
     break;  
    }        
    else{
        userExist=false;
    }
}
checkExist()
}
function checkExist() {
    console.log(userExist);
    if (userExist) {
        errorMsg2.style.display='block'
    }
    else{
        errorMsg2.style.display='none'
        createUser()
    }
}
function createUser() {
    let dataBase=getDataBase()
    let user={
        name:nameInput.value,
        password:passwordInput.value,
    }
    dataBase.push(user)
    localStorage.setItem('users',JSON.stringify(dataBase))

}

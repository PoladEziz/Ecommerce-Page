let nameInput = document.querySelector("input[type=text]");
let passwordInput = document.querySelector("input[type=password]");
let form = document.querySelector("form");
let btn = document.querySelector("button");
let userExist=false;
form.addEventListener("submit", handleRegister);
function handleRegister(e) {
  e.preventDefault();
  if (nameInput.value && passwordInput.value) {
    chekUser()
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
    }
    else{
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

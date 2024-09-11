const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function printGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    //greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting에서 "hidden" 클래스를 제거하여 표시되도록 한다
}

function onLoginSubmit(event){
    event.preventDefault();  // 페이지 새로고침을 멈춘다 
    loginForm.classList.add(HIDDEN_CLASSNAME);   // 폼에 "hidden" 클래스 추가: username을 입력하면 input 창을 없앤다 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);  // DB에 username을 영구 저장
    printGreetings();
}

function handleLinkClick(){
    alert("clicked");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // localStorage가 empty이면: loginForm에서 "hidden"을 제거하고 input을 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // localStorage에 username 정보가 있으면: greeting에서 "hidden"을 제거하고 innerText 출력 
    printGreetings();
}




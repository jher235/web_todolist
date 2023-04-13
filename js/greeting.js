const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const gre = document.querySelector("#greeting")


const HIDDEN_CLASSNAME = "hidden";
const USK = "username"

function onLogInSubmit(event){
    event.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    
    
    localStorage.setItem(USK,username)
    paintGreetings(username)

}


function paintGreetings(username){
    gre.innerText = `Hello ${username}`;
    gre.classList.remove(HIDDEN_CLASSNAME);

}


const savedUsername = localStorage.getItem(USK);


if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLogInSubmit);
}else{
    paintGreetings(savedUsername)
}
 








// toggle 매우 유용함
//''나 ""를 사용하는 것이 아니라 `${변수}`이런식으로 ``를 사용해야함


// function handleMouseEnter(){
//     js.innerText = "Mouse is here!"
// }

// function handleMouseLeave(){
//     js.innerText = "Mouse is gone!"

// }

// function handleWindowReisze(){
//     document.body.style.backgroundColor = "tomato";

// }

// function handleWindowCopy(){
//     alert("copier!")

// }

// function handleOffline(){
//  alert("SOS no WIFI")
// }

// function handleOnline(){
//     console.log("on WIFI")

// }


// js.onmouseleave = handleMouseLeave;
// js.onclick =  handleTitleClick1;
// js.onmouseenter = handleMouseEnter;


// window.addEventListener("resize",handleWindowReisze);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleOffline);
// window.addEventListener("online",handleOnline);

// window.oncopy = handleWindowCopy()




// function handleTitleClick1(){
//     title[0].querySelector("h2").style.color = "red";
    
// }

// function handleTitleClick2(){
  
//     title[1].querySelector("h1").style.color = "blue";
// }


// title[0].querySelector("h2").addEventListener("click",handleTitleClick1);
// title[1].querySelector("h1").addEventListener("click",handleTitleClick2);









// 앞에 on이 붙어있으면 이벤트
// title[0].querySelector("h2").innerText = "hihi"
// title[1].querySelector("h1").innerText = "hihi"
// title[2].querySelector("h1").innerText = "hihi"
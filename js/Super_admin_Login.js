//-------Get values From Database--------
let UserID = 123//-------Get values From Database--------
let UserPassword = "fff"//-------Get values From Database--------

//-------Get values From Database--------

//----- functions------
let loginBut = document.getElementById("loginBut")
let field1 = document.getElementById("field1")
let field2 = document.getElementById("field2")
let loginmessage = document.getElementById("loginmessage")


loginBut.onmouseenter = function () {
    console.log(field1.value + field2.value)
}

loginBut.onclick = function () {
    if (field1.value == UserID && field2.value == UserPassword) {
        window.location.href = "Super_create_account.html";
    }
    else {
        loginmessage.style.visibility = "visible"
    }
}
//---------------------------------------------------

let headlogin = document.getElementById("headlogin");
let contentHereBG = document.getElementById("contentHereBG");
let loginContainer = document.getElementById("loginContainer");
let contentHere = document.getElementById("contentHere");

contentHereBG.style.opacity = " 100%";
contentHereBG.style.zIndex = " 1";
loginContainer.style.zIndex = "-1";
loginContainer.style.opacity = "100%";

headlogin.onclick = function () {
    contentHereBG.style.opacity = " 10%";
    contentHereBG.style.zIndex = " 1";
    loginContainer.style.zIndex = "2";
    loginContainer.style.opacity = "100%";
}

contentHere.onmouseleave = function () {
    contentHereBG.style.opacity = " 100%";
    contentHereBG.style.zIndex = " 1";
    loginContainer.style.zIndex = "-1";
    loginContainer.style.opacity = "100%";
}

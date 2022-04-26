
let c1 = document.getElementById("circle_1");
// console.log(c1)
let c1Location = c1.getBoundingClientRect()
// console.log(c1Location)


//---------------------------------------------------------

let eduPro = document.getElementById("eduPro1")
let applyFor = document.getElementById("applyFor1")
let depOf = document.getElementById("depOf1")
let about = document.getElementById("about1")
let home = document.getElementById("home1")
let contactUs = document.getElementById("contactUs1")
let faq = document.getElementById("faq1")

// --------bars names by id -----------
//#eduPro1 , #applyFor1 , #depOf1 , #about1 , #home1, #contactUs1, #faq1

//--------------- lines and circles above bars ---------------------
let allLines = document.getElementById("linesmainContainStartMenu") // to show lines while loading
let line_1 = document.getElementById("line1")
let line_2 = document.getElementById("line2")
let line_3 = document.getElementById("line3")
let line_4 = document.getElementById("line4")
let line_5 = document.getElementById("line5")
let line_6 = document.getElementById("line6")
let circle_1 = document.getElementById("circle_1")
let circle_2 = document.getElementById("circle_2")
let circle_3 = document.getElementById("circle_3")
let circle_4 = document.getElementById("circle_4")
let circle_5 = document.getElementById("circle_5")
let circle_6 = document.getElementById("circle_6")
let circle_7 = document.getElementById("circle_7")
//--------------- lines and circles above bars ---------------------


// let ele = document.getElementById("spareMenu")
// var rect = ele.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);




//-------- Resize function to enlarge bars(During loading Time)--------

window.onload = function () {
    allLines.setAttribute("style", "opacity:0%")
    eduPro.setAttribute("style", "height:70px");
    applyFor.setAttribute("style", "height:70px");
    depOf.setAttribute("style", "height:70px");
    about.setAttribute("style", "height:70px");
    home.setAttribute("style", "height:70px")
    contactUs.setAttribute("style", "height:70px")
    faq.setAttribute("style", "height:70px")
}
//---------------------- eduPro bar -----------------
setTimeout(resize_eduPro, 500); // 500 is time value increase for slower move
var eduPro_heightt = 70;
function resize_eduPro() {
    eduPro_heightt += 4;
    eduPro.setAttribute("style", `height:${eduPro_heightt}px`);
    if (eduPro_heightt < 550) {
        setTimeout(resize_eduPro, 1);;
    }
}
// -------another method for animation-------

// requestAnimationFrame(resize_eduPro);
// var eduPro_heightt = 70;
// function resize_eduPro() {
//     eduPro_heightt += 1;
//     eduPro.setAttribute("style", `height:${eduPro_heightt}px`);
//     if (eduPro_heightt < 550) {
//         requestAnimationFrame(resize_eduPro);
//     }
// }
//------------------------applyFor bar----------------------------
setTimeout(resize_applyFor, 500);
var applyFor_heightt = 70;
function resize_applyFor() {
    applyFor_heightt += 4;
    applyFor.setAttribute("style", `height:${applyFor_heightt}px`);
    if (applyFor_heightt < 210) {
        setTimeout(resize_applyFor, 1);;
    }
}
//--------------------------depOf bar--------------------------
setTimeout(resize_depOf, 500);
var depOf_heightt = 70;
function resize_depOf() {
    depOf_heightt += 4;
    depOf.setAttribute("style", `height:${depOf_heightt}px`);
    if (depOf_heightt < 420) {
        setTimeout(resize_depOf, 1);;
    }
}
//-------------------------about bar---------------------------
setTimeout(resize_about, 500);
var about_heightt = 70;
function resize_about() {
    about_heightt += 4;
    about.setAttribute("style", `height:${about_heightt}px`);
    if (about_heightt < 530) {
        setTimeout(resize_about, 1);;
    }
}
//------------------------home bar----------------------------
setTimeout(resize_home, 500);
var home_heightt = 70;
function resize_home() {
    home_heightt += 4;
    home.setAttribute("style", `height:${home_heightt}px`);
    if (home_heightt < 630) {
        setTimeout(resize_home, 1);;
    }
    //---last bar height complete then the lines appear 
    else if (home_heightt == 630) {
        setTimeout(showlines, 500);
        var lines_opacity = 0;
        function showlines() {
            lines_opacity += 1;
            allLines.setAttribute("style", `opacity:${lines_opacity}%`);
            if (lines_opacity < 100) {
                setTimeout(showlines, 1);
            };
        }
    }
}

//-------------------------contactUs bar---------------------------
setTimeout(resize_contactUs, 500);
var contactUs_heightt = 70;
function resize_contactUs() {
    contactUs_heightt += 4;
    contactUs.setAttribute("style", `height:${contactUs_heightt}px`);
    if (contactUs_heightt < 480) {
        setTimeout(resize_contactUs, 1);;
    }
}
//------------------------faq bar----------------------------
setTimeout(resize_faq, 500);
var faq_heightt = 70;
function resize_faq() {
    faq_heightt += 4;
    faq.setAttribute("style", `height:${faq_heightt}px`);
    if (faq_heightt < 310) {
        setTimeout(resize_faq, 1);;
    }
}
//-==========================================================
let anything;
//-------- resize function for bars --------

//-------- line1 -------
eduPro.onmouseover = function () {
    eduPro.style.height = "600px";
    //-------------------------------------------------
    line_1.style.bottom = "210px";
    line_1.style.transform = "rotate(-71deg) scaleX(3.08)";
    //-------------------------------------------------
    circle_1.style.boxShadow = "0px 0px 5px 5px rgba(77, 199, 236, 0.616)";
}
eduPro.onmouseleave = function () {
    eduPro.style.height = "550px";//550
    //-------------------------------------------------
    line_1.style.bottom = "210px"
    line_1.style.right = "149px"
    line_1.style.transform = "rotate(-68.5deg) scaleX(2.72)";
    //----------------------------------------
    circle_1.style.boxShadow = "0px 0px 0px 0px rgba(77, 199, 236, 0.0)";
}
//-------- line1 , line2 -------

applyFor.onmouseover = function () {
    applyFor.style.height = "270px";
    //-------------------------------------------------
    line_1.style.bottom = "266px";
    line_2.style.bottom = "271px";
    //-------------------------------------------------
    line_1.style.transform = "rotate(-64.5deg) scaleX(2.32)";
    line_2.style.transform = "rotate(228deg) scaleX(1.5)";
    //------------------------------------------------  
    circle_2.style.boxShadow = "0px 0px 5px 5px rgba(77, 199, 236, 0.616)";
}

applyFor.onmouseleave = function () {
    applyFor.style.height = "210px";//210
    //-------------------------------------------------
    line_1.style.bottom = "210px"
    line_1.style.right = "149px"
    line_2.style.bottom = "210px";
    line_2.style.right = "149px";
    line_1.style.transform = "rotate(-68.5deg) scaleX(2.72)";
    line_2.style.transform = "rotate(237.5deg) scaleX(1.85)";
    //--------------------------------------------------
    circle_2.style.boxShadow = "0px 0px 0px 0px rgba(77, 199, 236, 0.0)";
}
//-------- line2 , line3 -------
depOf.onmouseover = function () {
    depOf.style.height = "470px";
    //-------------------------------------------------
    line_2.style.bottom = "210px";
    line_3.style.bottom = "468px";
    line_2.style.transform = "rotate(242.8deg) scaleX(2.17)";
    //-------------------------------------------------
    line_3.style.transform = "rotate(-155.8deg) scaleX(1.12)";
    //-------------------------------------------------

    circle_3.style.boxShadow = "0px 0px 5px 5px rgba(77, 199, 236, 0.616)";
}
depOf.onmouseleave = function () {
    depOf.style.height = "420px";//420
    //-------------------------------------------------
    line_2.style.bottom = "210px";
    line_2.style.right = "149px";
    line_3.style.bottom = "419px";
    line_3.style.right = "281px";
    line_2.style.transform = "rotate(237.5deg) scaleX(1.85)";

    line_3.style.transform = "rotate(-141deg) scalex(1.3)";
    //-------------------------------------------------
    circle_3.style.boxShadow = "0px 0px 0px 0px rgba(77, 199, 236, 0.0)";
}
//-------- line3 , line4 -------
about.onmouseover = function () {
    about.style.height = "600px";
    //-------------------------------------------------
    line_3.style.bottom = "416px";
    line_4.style.bottom = "597px";
    line_3.style.transform = "rotate(-126.6deg) scaleX(1.7)";
    //-------------------------------------------------

    line_4.style.transform = "rotate(-166.9deg) scaleX(1.04)";
    //-------------------------------------------------
    circle_4.style.boxShadow = "0px 0px 5px 5px rgba(77, 199, 236, 0.616)";

}
about.onmouseleave = function () {
    about.style.height = "530px";//530
    //-------------------------------------------------
    line_3.style.bottom = "419px";
    line_3.style.right = "281px";
    line_4.style.bottom = "529px";
    line_4.style.right = "416px";
    line_3.style.transform = "rotate(-141deg) scalex(1.3)";


    line_4.style.transform = "rotate(-143.1deg) scalex(1.25)";
    //-------------------------------------------------
    circle_4.style.boxShadow = "0px 0px 0px 0px rgba(77, 199, 236, 0.0)";
}
//-------- line4 , line5 -------
home.onmouseover = function () {
    home.style.height = "710px";
    //-------------------------------------------------
    line_4.style.bottom = "529px";
    line_5.style.bottom = "476px";
    line_4.style.transform = "rotate(-126.7deg) scaleX(1.67)";
    //-------------------------------------------------

    line_5.style.transform = "rotate(-60.4deg) scaleX(2)";
    //-------------------------------------------------
    circle_5.style.boxShadow = "0px 0px 5px 5px rgba(77, 199, 236, 0.616)";
}
home.onmouseleave = function () {
    home.style.height = "630px";//630
    //-------------------------------------------------
    line_4.style.bottom = "529px";
    line_4.style.right = "416px";
    line_5.style.bottom = "476px";
    line_5.style.right = "682px";
    line_4.style.transform = "rotate(-143.1deg) scalex(1.25)";


    line_5.style.transform = "rotate(-49.1deg) scalex(1.5)";
    //-------------------------------------------------
    circle_5.style.boxShadow = "0px 0px 0px 0px rgba(77, 199, 236, 0.0)";
}
//-------- line5 , line6 -------
contactUs.onmouseover = function () {
    contactUs.style.height = "560px";
    //-------------------------------------------------
    line_5.style.bottom = "558px";
    line_6.style.bottom = "309px";
    line_5.style.transform = "rotate(-28deg) scaleX(1.13)";
    //-------------------------------------------------

    line_6.style.transform = "rotate(-61.6deg) scaleX(2.12)";
    //-------------------------------------------------
    circle_6.style.boxShadow = "0px 0px 5px 5px rgba(77, 199, 236, 0.616)";
}
contactUs.onmouseleave = function () {
    contactUs.style.height = "480px";//480
    //-------------------------------------------------
    line_5.style.bottom = "476px";
    line_5.style.right = "682px";
    line_6.style.bottom = "309px";
    line_6.style.right = "817px";
    line_5.style.transform = "rotate(-49.1deg) scalex(1.5)";


    line_6.style.transform = "rotate(-51.1deg) scalex(1.6)";
    //-------------------------------------------------
    circle_6.style.boxShadow = "0px 0px 0px 0px rgba(77, 199, 236, 0.0)";
}
//-------- line6 -------
faq.onmouseover = function () {
    faq.style.height = "400px";
    //-------------------------------------------------
    line_6.style.bottom = "397px";
    line_6.style.transform = "rotate(-30.9deg) scaleX(1.18)";
    //-------------------------------------------------
    circle_7.style.boxShadow = "0px 0px 5px 5px rgba(77, 199, 236, 0.616)";
}
faq.onmouseleave = function () {
    faq.style.height = "310px";//310
    //-------------------------------------------------
    line_6.style.bottom = "309px";
    line_6.style.right = "817px";
    line_6.style.transform = "rotate(-51.1deg) scalex(1.6)";
    //-------------------------------------------------
    circle_7.style.boxShadow = "0px 0px 0px 0px rgba(77, 199, 236, 0.0)";
}
//----------------------------------------------
let mainContainSplit = document.getElementById("mainContainSplit")

// window.onscroll = function () {
//     if (window.scrollY >= 760) {
//         mainContainSplit.style.display = "none";

//     } else {
//         mainContainSplit.style.display = "block";
//     }
// };

//-------------- رسم السيجما بالـ canvas ---------- sigma top ----------------
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
ctx.beginPath();
// ctx.strokeStyel = "orange";
ctx.moveTo(0, 0);
ctx.lineTo(70, 0);
ctx.lineTo(118, 180);
ctx.lineTo(95, 175);
ctx.quadraticCurveTo(75, 60, 0, 50); //-- من الشمال لليمين ...1 نقطة شد على محور الأكس..  2 نقطة شد على محور الواى
// م3موقع النتقطة اكس قبل الشد ...4  موقع النقطة واى قبل الشد 
ctx.closePath()
ctx.fillStyle = "#001125";
ctx.fill()
// ctx.stroke();
//-------------- رسم السيجما بالـ canvas ---------- sigma bottom ----------------
var d = document.getElementById("myCanvas2");
var ctxx = d.getContext("2d")
ctx.beginPath();
// ctx.strokeStyel = "orange";
ctxx.moveTo(0, 0);
ctxx.lineTo(90, 0);
ctxx.lineTo(118, 150);
ctxx.lineTo(100, 145);
ctxx.quadraticCurveTo(85, 50, 0, 50); //-- من الشمال لليمين ...1 نقطة شد على محور الأكس..  2 نقطة شد على محور الواى
// م3موقع النتقطة اكس قبل الشد ...4  موقع النقطة واى قبل الشد 
ctxx.closePath()
ctxx.fillStyle = "#001125";
ctxx.fill()
// ctx.stroke();
//-------------- رسم السيجما بالـ canvas --------------------------

//-----------------sigma side menu bottun hover and loading time ----------------
let menuButton = document.getElementById("menuButton")
let menuText = document.getElementById("menuText")
let buttonback = document.getElementById("buttonback")
let sigmaSide = document.getElementById("sigmaSide")
let sigmaSideFixed = document.getElementById("sigmaSideFixed")
let sigmaSidemove = document.getElementById("sigmaSidemove")
let sigmaSidemoveGray = document.getElementById("sigmaSidemoveGray")
let sigmaSidemove1 = document.getElementById("sigmaSidemove1")
let sigmaSidemove1Gray = document.getElementById("sigmaSidemove1Gray")
let sigmaSidemoveMenu = document.getElementById("sigmaSidemoveMenu")
let unline1 = document.getElementById("unline1")
let unline2 = document.getElementById("unline2")
let unline3 = document.getElementById("unline3")
let unline4 = document.getElementById("unline4")
let unline5 = document.getElementById("unline5")
let unline6 = document.getElementById("unline6")
let unline7 = document.getElementById("unline7")


menuButton.onclick = function () {
    //------- button part-----

    menuButton.style.left = "232px"
    menuButton.style.transform = "scale(.8)"
    menuButton.style.opacity = "50%"
    menuText.style.left = "232px"
    menuText.style.opacity = "0%"
    //------- body part-----
    sigmaSidemoveMenu.style.left = "0px"
    sigmaSidemoveMenu.style.opacity = "100%"
    //----------------------------
    sigmaSideFixed.style.left = "0px";
    sigmaSidemove.style.left = "50px";
    sigmaSidemoveGray.style.left = "0px";
    sigmaSidemoveGray.style.opacity = "100%";
    sigmaSidemove1.style.left = "50px";
    sigmaSidemove1Gray.style.left = "0px";
    sigmaSidemove1Gray.style.opacity = "100%";
    //----------------------------
    unline1.style.width = "48px"
    unline1.style.opacity = "100%"
    unline2.style.width = "75px"
    unline2.style.opacity = "100%"
    unline3.style.width = "125px"
    unline3.style.opacity = "100%"
    unline4.style.width = "170px"
    unline4.style.opacity = "100%"
    unline5.style.width = "145px"
    unline5.style.opacity = "100%"
    unline6.style.width = "61px"
    unline6.style.opacity = "100%"
    unline7.style.width = "47px"
    unline7.style.opacity = "100%"
    //------- button tail part-----
    buttonback.style.left = "10px"
}
sigmaSide.onmouseleave = function hidemenu() {
    //------- button part-----
    menuButton.style.left = "0px"
    menuButton.style.transform = "scale(1)"
    menuButton.style.opacity = "100%"
    menuText.style.left = "-17px"
    menuText.style.opacity = "50%"
    //------- body part-----
    sigmaSideFixed.style.left = "-50px";
    sigmaSidemove.style.left = "-180px";
    sigmaSidemoveGray.style.left = "-195px";
    sigmaSidemoveGray.style.opacity = "0%";
    sigmaSidemove1.style.left = "-180px";
    sigmaSidemove1Gray.style.left = "-195px";
    sigmaSidemove1Gray.style.opacity = "0%";
    sigmaSidemoveMenu.style.left = "-220px"
    sigmaSidemoveMenu.style.opacity = "0%"
    unline1.style.width = "0px"
    unline1.style.opacity = "0%"
    unline2.style.width = "0px"
    unline2.style.opacity = "0%"
    unline3.style.width = "0px"
    unline3.style.opacity = "0%"
    unline4.style.width = "0px"
    unline4.style.opacity = "0%"
    unline5.style.width = "0px"
    unline5.style.opacity = "0%"
    unline6.style.width = "0px"
    unline6.style.opacity = "0%"
    unline7.style.width = "0px"
    unline7.style.opacity = "0%"
    //------- button tail part-----
    buttonback.style.left = "-8px"
}

window.onscroll = function () {
    console.log(scrollY)
    if (scrollY <= 500) {
        menuButton.style.left = "232px"
        menuButton.style.transform = "scale(.8)"
        menuButton.style.opacity = "50%"
        menuText.style.left = "232px"
        menuText.style.opacity = "0%"

        sigmaSidemoveMenu.style.left = "0px"
        sigmaSidemoveMenu.style.opacity = "100%"

        sigmaSideFixed.style.left = "0px";
        sigmaSidemove.style.left = "50px";
        sigmaSidemoveGray.style.left = "0px";
        sigmaSidemoveGray.style.opacity = "100%";
        sigmaSidemove1.style.left = "50px";
        sigmaSidemove1Gray.style.left = "0px";
        sigmaSidemove1Gray.style.opacity = "100%";

        unline1.style.width = "48px"
        unline1.style.opacity = "100%"
        unline2.style.width = "75px"
        unline2.style.opacity = "100%"
        unline3.style.width = "125px"
        unline3.style.opacity = "100%"
        unline4.style.width = "170px"
        unline4.style.opacity = "100%"
        unline5.style.width = "145px"
        unline5.style.opacity = "100%"
        unline6.style.width = "61px"
        unline6.style.opacity = "100%"
        unline7.style.width = "47px"
        unline7.style.opacity = "100%"

        buttonback.style.left = "10px"
        //----------this function for split menu ----- 
        splitmenuButton.style.opacity = "100%"
        spareMenu.style.opacity = "0%"
        splitmenuButton.style.zIndex = "2"
        //----------this function for split menu ----- 
    }
    if (scrollY >= 800) {
        setTimeout(function () {
            menuButton.style.left = "0px"
            menuButton.style.transform = "scale(1)"
            menuButton.style.opacity = "100%"
            menuText.style.left = "-17px"
            menuText.style.opacity = "50%"

            sigmaSideFixed.style.left = "-50px";
            sigmaSidemove.style.left = "-180px";
            sigmaSidemoveGray.style.left = "-195px";
            sigmaSidemoveGray.style.opacity = "0%";
            sigmaSidemove1.style.left = "-180px";
            sigmaSidemove1Gray.style.left = "-195px";
            sigmaSidemove1Gray.style.opacity = "0%";
            sigmaSidemoveMenu.style.left = "-220px"
            sigmaSidemoveMenu.style.opacity = "0%"
            unline1.style.width = "0px"
            unline1.style.opacity = "0%"
            unline2.style.width = "0px"
            unline2.style.opacity = "0%"
            unline3.style.width = "0px"
            unline3.style.opacity = "0%"
            unline4.style.width = "0px"
            unline4.style.opacity = "0%"
            unline5.style.width = "0px"
            unline5.style.opacity = "0%"
            unline6.style.width = "0px"
            unline6.style.opacity = "0%"
            unline7.style.width = "0px"
            unline7.style.opacity = "0%"

            buttonback.style.left = "-8px"
        }, 1000)
        //----------this function for split menu ----- 
        splitmenuButton.style.opacity = "0%"
        spareMenu.style.opacity = "100%"
        splitmenuButton.style.zIndex = "-1"
        //----------this function for split menu ----- 
    }
    //-------- to show up botton ----------
    if (window.scrollY >= 800) {
        upBotton.style.display = "flex";
    } else {
        upBotton.style.display = "none";
    }

}
//----------------- sigma side menu bottun hover and loading time ----------------

//----------------split menu part ---------
let spareMenu = document.getElementById("spareMenu")
let splitmenuButton = document.getElementById("splitmenuButton")
//------ some actions in onscroll function above------
splitmenuButton.onclick = function () {
    splitmenuButton.style.opacity = "0%"
    spareMenu.style.opacity = "100%"
    splitmenuButton.style.zIndex = "-1"
}
spareMenu.onmouseleave = function () {
    splitmenuButton.style.opacity = "100%"
    spareMenu.style.opacity = "0%"
    splitmenuButton.style.zIndex = "2"
}
//----------------split menu part ---------

//------------- up botton -----------------------
let upBotton = document.getElementById("upBotton")

upBotton.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

//------------- up botton -----------------------
//-------------------------------------------------------------

//-------------------Content Here--------------------------------
window.onload = function () {
    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly

}
let counter = document.getElementById("counter")


function countdown() {
    counter.innerHTML -= 1;
    if (counter.innerHTML === "0") {
        window.location.href = 'login.html';
    }
}
setInterval(countdown, 1000);



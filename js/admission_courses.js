
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
    // console.log(scrollY)
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


//---------------------------------------------------
//-------------------Content Here--------------------------------

//-------Get values From Database--------

let StudyProgram   // changed when checkout or submit clicked
let UserSpecialization  // changed when checkout or submit clicked

let CPPSelect  // changed when c++ add or remove clicked
let PaythonSelect  // changed when c++ add or remove clicked
let MathSelect  // changed when Math add or remove clicked
let StatisticsSelect  // changed when staiistics add or remove clicked

let AdmissionCourseFee  //changed when checkout clicked


let Step2 = true;  //-------Get values From Database--------
let Step3; //changed when checkout clicked and //-------Get values From Database--------
let Step4; //-------Get values From Database--------
let Step5; //-------Get values From Database--------
let Step6; //-------Get values From Database--------
let Step7; //-------Get values From Database--------
let Step8; //-------Get values From Database--------

//-------Get values From Database--------
//----------------------------------------------------------
//---------------bar functions------------------
//---------------bar functions------------------
let step1Circle = document.getElementById("step1")
let step2Circle = document.getElementById("step2")
let step3Circle = document.getElementById("step3")
let step4Circle = document.getElementById("step4")
let step5Circle = document.getElementById("step5")
let step6Circle = document.getElementById("step6")
let step7Circle = document.getElementById("step7")
let step8Circle = document.getElementById("step8")

if (Step2 === true) {
    step2Circle.style.backgroundImage = "url('/image/true.png')";
    step2Circle.style.backgroundSize = "65px 65px";
    step2Circle.innerHTML = " ";
}
if (Step3 === true) {
    step3Circle.style.backgroundImage = "url('/image/true.png')";
    step3Circle.style.backgroundSize = "65px 65px";
    step3Circle.innerHTML = " ";
}
if (Step4 === true) {
    step4Circle.style.backgroundImage = "url('/image/true.png')";
    step4Circle.style.backgroundSize = "65px 65px";
    step4Circle.innerHTML = " ";
}
if (Step5 === true) {
    step5Circle.style.backgroundImage = "url('/image/true.png')";
    step5Circle.style.backgroundSize = "65px 65px";
    step5Circle.innerHTML = " ";
}
if (Step6 === true) {
    step6Circle.style.backgroundImage = "url('/image/true.png')";
    step6Circle.style.backgroundSize = "65px 65px";
    step6Circle.innerHTML = " ";
}
if (Step7 === true) {
    step7Circle.style.backgroundImage = "url('/image/true.png')";
    step7Circle.style.backgroundSize = "65px 65px";
    step7Circle.innerHTML = " ";
}
if (Step8 === true) {
    step8Circle.style.backgroundImage = "url('/image/true.png')";
    step8Circle.style.backgroundSize = "65px 65px";
    step8Circle.innerHTML = " ";
}
//---------------bar functions------------------
//---------------bar functions------------------

//------------------------------------
let progType = "Academic"; // name of the program stored here
let specialType = "Statistics"; // name of the Specialization stored here

//---------function to detect program Type-------
let Academic = document.getElementById("Academic");
let Profissional = document.getElementById("Profissional");
//------------------------------------
let mainadS1S2Academic = document.getElementById("mainadS1S2Academic")
let mainadS1S2Prof = document.getElementById("mainadS1S2Prof")
//--------
Academic.onchange = function () {
    if (Academic.checked) {
        progType = document.getElementById('Academic').value;
        // console.log(progType)
        //-------to show academic program options------
        mainadS1S2Prof.style.display = "none"
        mainadS1S2Academic.style.display = "block"
        specialType = "Statistics"
    }
}
Profissional.onchange = function () {
    if (Profissional.checked) {
        progType = document.getElementById('Profissional').value;
        specialType = "Statistical Quality Control & Assurance"
        // console.log(progType)
        //-------to show Prof program options------
        mainadS1S2Prof.style.display = "block"
        mainadS1S2Academic.style.display = "none"
    }
}
//---------function to detect Specialization Type-------
let Statistics = document.getElementById("Statistics");
let ComputerScience = document.getElementById("ComputerScience");
let InformationSystems = document.getElementById("InformationSystems");
let OperationsResearch = document.getElementById("OperationsResearch");
let OperationsManagement = document.getElementById("OperationsManagement");
let DemographyBiostatistics = document.getElementById("DemographyBiostatistics");
//------------------------------------
Statistics.onchange = function () {
    if (Statistics.checked) {
        specialType = Statistics.value;
        // console.log(specialType)
    }
}
ComputerScience.onchange = function () {
    if (ComputerScience.checked) {
        specialType = ComputerScience.value;
        // console.log(specialType)
    }
}
InformationSystems.onchange = function () {
    if (InformationSystems.checked) {
        specialType = InformationSystems.value;
        // console.log(specialType)
    }
}
OperationsResearch.onchange = function () {
    if (OperationsResearch.checked) {
        specialType = OperationsResearch.value;
        // console.log(specialType)
    }
}
OperationsManagement.onchange = function () {
    if (OperationsManagement.checked) {
        specialType = OperationsManagement.value;
        // console.log(specialType)
    }
}
DemographyBiostatistics.onchange = function () {
    if (DemographyBiostatistics.checked) {
        specialType = DemographyBiostatistics.value;
        // console.log(specialType)
    }
}
//----------------------- Select admission courses ----------
let TotalPayment = 0;
let TotalNum = document.getElementById("TotalNum")//to show the cost to user
let coursesArr = [" ", " ", " ", " "];
let totalPaymentCourses = document.getElementById("totalPaymentCourses")//to show courses Names to user
//-----add buttons-------
let cppAdd = document.getElementById("cppAdd")
let statisticsAdd = document.getElementById("statisticsAdd")
let mathematicsAdd = document.getElementById("mathematicsAdd")
let paythonAdd = document.getElementById("paythonAdd")
//-----Remove buttons-------
let cppRemove = document.getElementById("cppRemove")
let statisticsRemove = document.getElementById("statisticsRemove")
let mathematicsRemove = document.getElementById("mathematicsRemove")
let paythonRemove = document.getElementById("paythonRemove")

//----------Add and Del buttons Functions------

cppRemove.style.pointerEvents = "none"
statisticsRemove.style.pointerEvents = "none"
mathematicsRemove.style.pointerEvents = "none"
paythonRemove.style.pointerEvents = "none"

cppAdd.onclick = function () {
    TotalPayment += 400;
    TotalNum.innerText = `${TotalPayment}`;
    cppAdd.style.pointerEvents = "none"
    cppRemove.style.pointerEvents = "all"
    coursesArr[0] = "| C++ |"
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    CPPSelect = true;
    //-------- changes on database from Here -------
}
cppRemove.onclick = function () {
    TotalPayment -= 400;
    TotalNum.innerText = `${TotalPayment}`;
    cppAdd.style.pointerEvents = "all"
    cppRemove.style.pointerEvents = "none"
    coursesArr[0] = " "
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    CPPSelect = false;
    //-------- changes on database from Here -------
}
statisticsAdd.onclick = function () {
    TotalPayment += 400;
    TotalNum.innerText = `${TotalPayment}`;
    statisticsAdd.style.pointerEvents = "none"
    statisticsRemove.style.pointerEvents = "all"
    coursesArr[1] = "| Statistics |"
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    StatisticsSelect = true;
    //-------- changes on database from Here -------
}
statisticsRemove.onclick = function () {
    TotalPayment -= 400;
    TotalNum.innerText = `${TotalPayment}`;
    statisticsAdd.style.pointerEvents = "all"
    statisticsRemove.style.pointerEvents = "none"
    coursesArr[1] = " "
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    StatisticsSelect = false;
    //-------- changes on database from Here -------
}
mathematicsAdd.onclick = function () {
    TotalPayment += 400;
    TotalNum.innerText = `${TotalPayment}`;
    mathematicsAdd.style.pointerEvents = "none"
    mathematicsRemove.style.pointerEvents = "all"
    coursesArr[2] = "| Mathematics |"
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    MathSelect = true;
    //-------- changes on database from Here -------
}
mathematicsRemove.onclick = function () {
    TotalPayment -= 400;
    TotalNum.innerText = `${TotalPayment}`;
    mathematicsAdd.style.pointerEvents = "all"
    mathematicsRemove.style.pointerEvents = "none"
    coursesArr[2] = " "
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    MathSelect = false
    //-------- changes on database from Here -------
}
paythonAdd.onclick = function () {
    TotalPayment += 400;
    TotalNum.innerText = `${TotalPayment}`;
    paythonAdd.style.pointerEvents = "none"
    paythonRemove.style.pointerEvents = "all"
    coursesArr[3] = "| Paython |"
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    PaythonSelect = true;
    //-------- changes on database from Here -------
}
paythonRemove.onclick = function () {
    TotalPayment -= 400;
    TotalNum.innerText = `${TotalPayment}`;
    paythonAdd.style.pointerEvents = "all"
    paythonRemove.style.pointerEvents = "none"
    coursesArr[3] = " "
    totalPaymentCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `;
    //-------- changes on database from Here -------
    PaythonSelect = false;
    //-------- changes on database from Here -------
}
//-------------Pay Now elements ---------
let payNowButton = document.getElementById("payNowButton")// Main Payment
let popUpPayNow = document.getElementById("popUpPayNow")// Alert min req.
let popUpPayNowClose = document.getElementById("popUpPayNowClose")// close alert
let popupmessage = document.getElementById("popupmessage")// Final checkout
let popupmessage1 = document.getElementById("popupmessage1")// after checkout popup
let mainOptionsadS1S2 = document.getElementById("mainadS1S2Academic")// Academic options container
let cancelB = document.getElementById("cancelB")// cancel button
let checkoutB = document.getElementById("checkoutB")// checkout button
let YourProgramIs = document.getElementById("YourProgramIs")// to fill Your Program Is in popup message
let YourSpecializationIs = document.getElementById("YourSpecializationIs")// to fill Your Specialization Is in popup message
let YourAdmissionCourses = document.getElementById("YourAdmissionCourses")// to fill Your Admission Courses are in popup message
let YouWillPay = document.getElementById("YouWillPay")// to fill You Will Pay in popup message

//---------------Pay Now Button Functions---------
//-----when First paynow button  clicked------
payNowButton.onclick = function () {
    if (TotalPayment === 0 || Step2 === false) {
        popUpPayNow.style.display = "flex"
        popUpPayNowClose.style.display = "block"
    }
    else {
        YourProgramIs.innerText = `${progType}`
        YourSpecializationIs.innerText = `${specialType}`
        YourAdmissionCourses.innerText = `${coursesArr[0]}  ${coursesArr[1]}  ${coursesArr[2]}  ${coursesArr[3]} `
        YouWillPay.innerText = `${TotalPayment} L.E`
        popupmessage.style.display = "flex"
        mainOptionsadS1S2.style.opacity = "15%"
    }
}
//----when cancel button clicked----
cancelB.onclick = function () {
    popupmessage.style.display = "none"
    mainOptionsadS1S2.style.opacity = "100%"
}
//------ when check out clicked-----
checkoutB.onclick = function () {
    step3Circle.style.backgroundImage = "url('/image/true.png')";
    step3Circle.style.backgroundSize = "65px 65px";
    step3Circle.innerHTML = " ";
    popupmessage.style.display = "none"
    popupmessage1.style.display = "flex"
    //----to delete prof option --------
    var temp1 = document.getElementById("selectProgramProfissional");
    temp1.remove();

    //-------- changes on database from Here -------
    StudyProgram = progType;
    UserSpecialization = specialType;
    AdmissionCourseFee = "Paid";
    Step3 = true;
    //-------- changes on database from Here -------
}
//---------when last cancel clicked and back to page -------
let cancelB2 = document.getElementById("cancelB2")// close button after checkout
cancelB2.onclick = function () {
    popupmessage1.style.display = "none"
    mainOptionsadS1S2.style.opacity = "100%"
}
//-----when alert popup appear------
popUpPayNowClose.onclick = function () {
    popUpPayNow.style.display = "none"
    popUpPayNowClose.style.display = "none"
}
//------------------------------------------------
//-------------Submit Prof Program elements ---------
let SubmitButton = document.getElementById("SubmitButton")
let popUpSubmit = document.getElementById("popUpSubmit")
let popUpSubmitClose = document.getElementById("popUpSubmitClose")
let popupmessage2 = document.getElementById("popupmessage2")
let YourProgramIsProf = document.getElementById("YourProgramIsProf")// to fill Your Program Is in popup message2
let YourSpecializationIsPrdf = document.getElementById("YourSpecializationIsProf")// to fill Your Specialization Is in popup message2


//-----when First ٍSubmit button  clicked------
SubmitButton.onclick = function () {
    if (Step2 === false) {
        popUpSubmit.style.display = "flex"
        popUpSubmitClose.style.display = "block"
    }
    else {
        YourProgramIsProf.innerText = `${progType}`
        YourSpecializationIsProf.innerText = `${specialType}`
        popupmessage2.style.display = "flex"
        mainadS1S2Prof.style.opacity = "15%"
        //-------- changes on database from Here -------
        StudyProgram = progType;
        UserSpecialization = specialType;
        //-------- changes on database from Here -------
    }
}
//-----alert submit popup appears------
popUpSubmitClose.onclick = function () {
    popUpSubmit.style.display = "none"
    popUpSubmitClose.style.display = "none"
}
//---------when  Prof close clicked and back to Prof page -------
let cancelBProf = document.getElementById("cancelBProf")// close button 
cancelBProf.onclick = function () {
    popupmessage2.style.display = "none"
    mainadS1S2Prof.style.opacity = "100%"
}

//-------to set specialization for Prof program-----
let ProfSpecializationType = document.getElementById("ProfSpecializationType")
ProfSpecializationType.onchange = function () {
    specialType = ProfSpecializationType.value;
}
//-------------------Content Here--------------------------------
//---------------------------------------------------

let test = document.getElementById("step8")
test.onmouseenter = function () {
    console.log(`StudyProgram = ${StudyProgram}`)
    console.log(`UserSpecialization = ${UserSpecialization}`)
    console.log(`CPPSelect = ${CPPSelect}`)
    console.log(`PaythonSelect = ${PaythonSelect}`)
    console.log(`MathSelect = ${MathSelect}`)
    console.log(`StatisticsSelect = ${StatisticsSelect}`)
    console.log(`AdmissionCourseFee = ${AdmissionCourseFee}`)
    console.log(`-------------------------------------`)
}

//--------- Reference user attributes used in all pages-------
// let UserID
// let FirstName
// let LastName
// let UserEmail
// let UserMobile
// let UserCountry
// let UserGender
// let UserLanguage
// let IDPhoto
// let UserPassword
// let IDValid // True\False

// let StudyProgram  //Academic\Professional
// let UserSpecialization

// let CPPSelect = situation1 // True\False
// let PaythonSelect // True\False
// let MathSelect // True\False
// let StatisticsSelect // True\False

// let AdmissionCourseFee //Paid
// let MainCourseFee //Paid

// let Document1
// let Document2
// let Document3
// let Document4
// let Document5
// let Document6

// let Step2Field //(Message)

// let Step3Field1 //(GroupName)
// let Step3Field2 //(Message)

// let Step4Cpp //(Num)
// let Step4paython //(Num)
// let Step4Math //(Num)
// let Step4Statistics //(Num)

// let Step5Field //(Message)
// let Step6Field //(Message)
// let Step7Field //(Message)
// let Step8Field //(Message)

// let Step2 = true;  //-------Get values From Database--------
// let Step3 = false; //-------Get values From Database--------
// let Step4 = false; //-------Get values From Database-------
// let Step5 = false; //-------Get values From Database-------
// let Step6 = false; //-------Get values From Database-------
// let Step7 = false; //-------Get values From Database-------
// let Step8 = false; //-------Get values From Database-------

//--------- Reference user attributes used in all pages-------

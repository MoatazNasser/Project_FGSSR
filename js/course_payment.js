


//---------------------------------------------------
//-------------------Content Here--------------------------------


//-------Get values From Database--------
let MainCourseFee //= "Paid"; //changed when confirm clicked and or //-------Get values From Database--------
let StudyProgram = "Professional" //-------Get values From Database-------- //Academic
let UserSpecialization = "Web" //-------Get values From Database-------- 
let UserCountry = "Egypt"  //-------Get values From Database--------

let Step2; //= true;  //-------Get values From Database--------
let Step3; //= true; //-------Get values From Database--------
let Step4; //= true; //-------Get values From Database--------
let Step5; //= true; //-------Get values From Database--------
let Step6 = true; //-------Get values From Database--------
let Step7; //changed when confirm clicked and //-------Get values From Database--------
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
    step2Circle.style.backgroundImage = "url('image/true.png')";
    step2Circle.style.backgroundSize = "65px 65px";
    step2Circle.innerHTML = " ";
}
if (Step3 === true) {
    step3Circle.style.backgroundImage = "url('image/true.png')";
    step3Circle.style.backgroundSize = "65px 65px";
    step3Circle.innerHTML = " ";
}
if (Step4 === true) {
    step4Circle.style.backgroundImage = "url('image/true.png')";
    step4Circle.style.backgroundSize = "65px 65px";
    step4Circle.innerHTML = " ";
}
if (Step5 === true) {
    step5Circle.style.backgroundImage = "url('image/true.png')";
    step5Circle.style.backgroundSize = "65px 65px";
    step5Circle.innerHTML = " ";
}
if (Step6 === true) {
    step6Circle.style.backgroundImage = "url('image/true.png')";
    step6Circle.style.backgroundSize = "65px 65px";
    step6Circle.innerHTML = " ";
}
if (Step7 === true) {
    step7Circle.style.backgroundImage = "url('image/true.png')";
    step7Circle.style.backgroundSize = "65px 65px";
    step7Circle.innerHTML = " ";
}
if (Step8 === true) {
    step8Circle.style.backgroundImage = "url('image/true.png')";
    step8Circle.style.backgroundSize = "65px 65px";
    step8Circle.innerHTML = " ";
}
//---------------bar functions------------------
//---------------bar functions------------------

let S1S2Prog = document.getElementById("S1S2Prog")
let S1S3Cost = document.getElementById("S1S3Cost")




let PayNowButton = document.getElementById("PayNowButton")
let popUpSub = document.getElementById("popUpSub")
let popUpPayClose = document.getElementById("popUpPayClose")
let popupmessage = document.getElementById("popupmessage")
let popupmessage2 = document.getElementById("popupmessage2")
let checkoutB = document.getElementById("checkoutB")
let CoursePayS1 = document.getElementById("CoursePayS1")
let cancelB = document.getElementById("cancelB")
let YourProgramIs = document.getElementById("YourProgramIs")
let YourSpecializationIs = document.getElementById("YourSpecializationIs")
let YouWillPay = document.getElementById("YouWillPay")


PayNowButton.onclick = function () {
    if (Step6 === false) {
        popUpSub.style.display = "flex";
        popUpPayClose.style.display = "block";
    }
    else if (Step6 === true) {
        YourProgramIs.innerText = `${StudyProgram}`
        YourSpecializationIs.innerText = `${UserSpecialization}`
        YouWillPay.innerText = `${S1S3Cost.innerText}`
        CoursePayS1.style.opacity = "15%"
        popupmessage.style.display = "flex"
    }
}
//-----------when checkout button clicked--------
checkoutB.onclick = function () {
    popupmessage.style.display = "none"
    popupmessage2.style.display = "flex"
    step7Circle.style.backgroundImage = "url('image/true.png')";
    step7Circle.style.backgroundSize = "65px 65px";
    step7Circle.innerHTML = " ";
    //-------- changes on database from Here -------
    Step7 = true;
    MainCourseFee = "Paid"
    //-------- changes on database from Here -------
}
cancelB.onclick = function () {
    popupmessage.style.display = "none"
    CoursePayS1.style.opacity = "100%"
}
//----------to close pop up alert --------------
popUpPayClose.onclick = function () {
    popUpSub.style.display = "none";
    popUpPayClose.style.display = "none";
}

//---------when last close clicked and back to page -------
let closeB2 = document.getElementById("closeB2")// close button after checkout
closeB2.onclick = function () {
    popupmessage2.style.display = "none"
    CoursePayS1.style.opacity = "100%"
}

window.onload = function () {
    if (StudyProgram === "Professional" || StudyProgram === "Academic") {
        S1S2Prog.innerText = `${StudyProgram} Program`
        if (StudyProgram === "Professional" && UserCountry === "Egypt") {
            S1S3Cost.innerText = `7000 L.E`
        }
        else if (StudyProgram === "Academic" && UserCountry === "Egypt") {
            S1S3Cost.innerText = `1200 L.E`
        }
        else if (StudyProgram === "Professional" && UserCountry != "Egypt") {
            S1S3Cost.innerText = `1500 $`
        }
        else if (StudyProgram === "Academic" && UserCountry != "Egypt") {
            S1S3Cost.innerText = `1000 $`
        }
    }
    if (MainCourseFee === "Paid") {
        PayNowButton.style.pointerEvents = "none";
    }

    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly
}
//-------------------Content Here--------------------------------
//---------------------------------------------------


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


//------------------
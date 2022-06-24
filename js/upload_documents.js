


//---------------------------------------------------
//-------------------Content Here--------------------------------

//-------Get values From Database--------


let Document1 //changed when confirm clicked
let Document2 //changed when confirm clicked
let Document3 //changed when confirm clicked
let Document4 //changed when confirm clicked
let Document5 //changed when confirm clicked
let Document6 //changed when confirm clicked


let StudyProgram //= "Professional" //-------Get values From Database-------- //Academic
let MainCourseFee //= "Paid" //-------Get values From Database--------
let Step2 //= true;  //-------Get values From Database--------
let Step3 //= true; //-------Get values From Database--------
let Step4 //= true; //-------Get values From Database--------
let Step5; //changed when confirm clicked and //-------Get values From Database--------
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

let submitButton = document.getElementById("submitButton")
let popUpSub = document.getElementById("popUpSub")
let popUpSubClose = document.getElementById("popUpSubClose")
let popupmessage = document.getElementById("popupmessage")
let confirmBut = document.getElementById("confirmBut")
let UploadDocS1 = document.getElementById("UploadDocS1")
let cancelBut = document.getElementById("cancelBut")
let D1 = document.getElementById("D1")
let D2 = document.getElementById("D2")
let D3 = document.getElementById("D3")
let D4 = document.getElementById("D4")
let D5 = document.getElementById("D5")
let D6 = document.getElementById("D6")


submitButton.onclick = function () {
    if (Step4 === false || StudyProgram != "Professional") {
        popUpSub.style.display = "flex";
        popUpSubClose.style.display = "block";
    }
    else {
        UploadDocS1.style.opacity = "15%"
        popupmessage.style.display = "flex"
    }
}
//-----------when confirm button clicked--------
confirmBut.onclick = function () {
    popupmessage.style.display = "none"
    UploadDocS1.style.opacity = "100%"
    step5Circle.style.backgroundImage = "url('image/true.png')";
    step5Circle.style.backgroundSize = "65px 65px";
    step5Circle.innerHTML = " ";
    //-------- changes on database from Here -------
    Step5 = true;
    Document1 = D1.value;
    Document2 = D2.value;
    Document3 = D3.value;
    Document4 = D4.value;
    Document5 = D5.value;
    Document6 = D6.value;
    //-------- changes on database from Here -------
}
cancelBut.onclick = function () {
    popupmessage.style.display = "none"
    UploadDocS1.style.opacity = "100%"
}
//----------to close pop up alert --------------
popUpSubClose.onclick = function () {
    popUpSub.style.display = "none";
    popUpSubClose.style.display = "none";
}


window.onload = function () {

    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly
    if (MainCourseFee === "Paid") {
        submitButton.style.pointerEvents = "none";
    }
}
//-------------------Content Here--------------------------------
//---------------------------------------------------

let test = document.getElementById("step8")
test.onmouseenter = function () {
    console.log(D1.value)
    console.log(D2.value)
    console.log(D3.value)
    console.log(D4.value)
    console.log(D5.value)
    console.log(D6.value)
    console.log(Step5)
    console.log("------------------")
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


//------------------



//---------------------------------------------------
//-------------------Content Here--------------------------------

//-------Get values From Database--------
let Step2Field //= "complete"//(Message) Complete or Reject or resend your Id

let Step3Field1 //= "A"//(GroupName)
let Step3Field2 //= "We added you to whatsApp groups" //(Message)  We added you to whatsApp groups || or You need to add more admission courses

let Step4Cpp //= 100 //(Num) 
let Step4paython //= 100//(Num)
let Step4Math //= 100//(Num)
let Step4Statistics // = 100 //(Num)

let Step5Field  // Complete when Step5 = true
let Step6Field //= "Copmlete"//(Message) Complete or Check your E-mail
let Step7Field // Complete when Step7 = true 
let Step8Field //= "Complete"//(Message) // complete 

let CPPSelect //= true //-------Get values From Database--------
let PaythonSelect //= true //-------Get values From Database--------
let MathSelect //= true //-------Get values From Database--------
let StatisticsSelect //= true //-------Get values From Database--------
let Step2;  //-------Get values From Database--------
let Step3 //= true;//-------Get values From Database--------
let Step4; //-------Get values From Database--------
let Step5 //= true; //-------Get values From Database--------
let Step6; //-------Get values From Database--------
let Step7 //= true; //-------Get values From Database--------
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


//-------------------Content Here--------------------

//----- functions------
let S1S2Cont = document.getElementById("S1S2Cont"); // step2

let cppPaid = document.getElementById("cppPaid"); // step3*
let paythonPaid = document.getElementById("paythonPaid"); // step3*
let mathPaid = document.getElementById("mathPaid"); // step3*
let statPaid = document.getElementById("statPaid"); // step3*

let groupValue = document.getElementById("groupValue"); // step3**
let S1S33Cont2 = document.getElementById("S1S33Cont2"); // step3**

let cppMark = document.getElementById("cppMark"); // step4
let paythonMark = document.getElementById("paythonMark"); // step4
let mathMark = document.getElementById("mathMark"); // step4
let statMark = document.getElementById("statMark"); // step4

let S1S5Cont = document.getElementById("S1S5Cont"); // step5

let S1S6Cont = document.getElementById("S1S6Cont"); // step6

let S1S7Cont = document.getElementById("S1S7Cont"); // step7

let S1S8Cont = document.getElementById("S1S8Cont"); // step8

window.onload = function () {

    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly


    if (Step2Field != undefined || Step2Field != null) {
        S1S2Cont.innerText = `${Step2Field}`
    }

    if (Step3 === true) {
        if (CPPSelect === true) {
            cppPaid.innerText = `Paid`
        }
        else { cppPaid.innerText = `-` };
        if (PaythonSelect === true) {
            paythonPaid.innerText = `Paid`
        }
        else { paythonPaid.innerText = `-` };
        if (MathSelect === true) {
            mathPaid.innerText = `Paid`
        }
        else { mathPaid.innerText = `-` };
        if (StatisticsSelect === true) {
            statPaid.innerText = `Paid`
        }
        else { statPaid.innerText = `-` };
    }
    if (Step3 === true) {
        groupValue.innerText = `${Step3Field1}`
        S1S33Cont2.innerText = `${Step3Field2}`
    }

    if (Step4Cpp != undefined || Step4Cpp != null) {
        cppMark.innerText = `${Step4Cpp}`
    }
    if (Step4paython != undefined || Step4paython != null) {
        paythonMark.innerText = `${Step4paython}`
    }
    if (Step4Math != undefined || Step4Math != null) {
        mathMark.innerText = `${Step4Math}`
    }
    if (Step4Statistics != undefined || Step4Statistics != null) {
        statMark.innerText = `${Step4Statistics}`
    }
    if (Step5 === true) {
        S1S5Cont.innerText = `Complete`
    }
    if (Step6Field != undefined || Step6Field != null) {
        S1S6Cont.innerText = `${Step6Field}`
    }

    if (Step7 === true) {
        S1S7Cont.innerText = `Complete`
    }
    if (Step8Field != undefined || Step8Field != null) {
        S1S8Cont.innerText = `${Step8Field}`
    }
}
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

// let CPPSelect // True\False
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
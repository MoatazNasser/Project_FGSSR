


//---------------------------------------------------
//-------------------Content Here--------------------------------

//-------Get values From Database--------
let UserID = 123//-------Get values From Database--------
let UserPassword = "fff"//-------Get values From Database--------

//-------Get values From Database--------

//----- functions------
let loginBut = document.getElementById("loginBut")
let field1 = document.getElementById("field1")
let field2 = document.getElementById("field2")
let loginmessage = document.getElementById("loginmessage")

window.onload = function () {
    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly

}
loginBut.onmouseenter = function () {
    console.log(field1.value + field2.value)
}

loginBut.onclick = function () {
    if (field1.value == UserID && field2.value == UserPassword) {
        window.location.href = "my_process.html";
    }
    else {
        loginmessage.style.visibility = "visible"
    }
}
//-------------------Content Here--------------------
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
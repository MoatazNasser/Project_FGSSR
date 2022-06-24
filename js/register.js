


//---------------------------------------------------
//-------------------Content Here--------------------------------

//-------Get values From Database--------
let UserID  //when register clicked
let FirstName //when register clicked
let LastName //when register clicked
let UserEmail //when register clicked
let UserMobile //when register clicked
let UserCountry //when register clicked
let UserGender //when register clicked
let IDPhoto //when register clicked
let UserPassword //when register clicked

//-------Get values From Database--------
let req1 = document.getElementById("req1")//name
let req11 = document.getElementById("req11")//pass
let req2 = document.getElementById("req2")//ID
let req3 = document.getElementById("req3")//Email
let req4 = document.getElementById("req4")//Mobile
let req5 = document.getElementById("req5")//country
let req6 = document.getElementById("req6")//gender
let req7 = document.getElementById("req7")//upload id
let req8 = document.getElementById("req8")//terms

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let Pass = document.getElementById("Pass")
let ID = document.getElementById("ID")
let Email = document.getElementById("Email")
let Mobile = document.getElementById("Mobile")
let UploadID = document.getElementById("UploadID")
let Country = document.getElementById("Country")
let Terms1 = document.getElementById("Terms1")
let Gender1 = document.getElementById("Gender1")
let Gender2 = document.getElementById("Gender2")

let registerBut = document.getElementById("registerBut")

let regContainer = document.getElementById("regContainer")
let showpopup = document.getElementById("showpopup")
let popupTerms = document.getElementById("popupTerms")
let closeBut = document.getElementById("closeBut")

//------------ pop up message ----------
showpopup.onclick = function () {
    popupTerms.style.display = "block"
    regContainer.style.opacity = "25%"
}
closeBut.onclick = function () {
    popupTerms.style.display = "none"
    regContainer.style.opacity = "100%"
}
//------------ pop up message ----------

let genderr = "Male";
//----- functions------
Gender1.onchange = function () {
    if (Gender1.checked) {
        genderr = Gender1.value;
    }
}
Gender2.onchange = function () {
    if (Gender2.checked) {
        genderr = Gender2.value;
    }
}
window.onload = function () {
    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly

}


registerBut.onclick = function () {
    if (fname.value === "" || lname.value === "") {
        req1.style.visibility = "visible"
    }
    else {
        req1.style.visibility = "hidden"
    }
    if (Pass.value === "") {
        req11.style.visibility = "visible"
    }
    else {
        req11.style.visibility = "hidden"
    }
    if (ID.value === "") {
        req2.style.visibility = "visible"
    }
    else {
        req2.style.visibility = "hidden"
    }
    if (Email.value === "") {
        req3.style.visibility = "visible"
    }
    else {
        req3.style.visibility = "hidden"
    }
    if (Mobile.value === "") {
        req4.style.visibility = "visible"
    }
    else {
        req4.style.visibility = "hidden"
    }
    if (UploadID.value === "") {
        req7.style.visibility = "visible"
    }
    else {
        req7.style.visibility = "hidden"
    }
    if (Terms1.checked === false) {
        req8.style.visibility = "visible"
    }
    else {
        req8.style.visibility = "hidden"
    }
    if (fname.value != "" && lname.value !== "" && Pass.value != "" && ID.value != "" && Email.value != "" && Mobile.value != "" && UploadID.value != "" && Terms1.checked != false) {
        //-------- changes on database from Here -------
        FirstName = fname.value;
        LastName = lname.value;
        UserID = ID.value;
        UserEmail = Email.value;
        UserMobile = Mobile.value;
        UserCountry = Country.value;
        UserGender = genderr;
        IDPhoto = UploadID.value;
        UserPassword = Pass.value;
        //-------- changes on database from Here -------
        window.location.href = "login.html";
    }
}
// console.log(Terms1.value)


registerBut.onmouseenter = function () {
    console.log(fname.value)
    console.log(lname.value)
    console.log(Pass.value)
    console.log(ID.value)
    console.log(Email.value)
    console.log(Mobile.value)
    console.log(UploadID.value)
    console.log(Country.value)
    console.log(genderr)
    console.log(Terms1.checked)
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
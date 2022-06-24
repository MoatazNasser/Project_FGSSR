


//---------------------------------------------------
//-------------------Content Here--------------------------------

//-------Get values From Database--------
let FirstName //when register clicked
let LastName //when register clicked
let UserMobile //when register clicked
let IDPhoto //when register clicked
let UserPassword //when register clicked

//-------Get values From Database--------


let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let Pass = document.getElementById("Pass")
let Mobile = document.getElementById("Mobile")
let UploadID = document.getElementById("UploadID")

let editBut = document.getElementById("editBut")

let saved = document.getElementById("saved")




//----- functions------

window.onload = function () {
    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly

}


editBut.onclick = function () {
    //-------- changes on database from Here -------
    if (fname.value != "") {
        FirstName = fname.value;
    }

    if (lname.value != "") {
        LastName = lname.value;
    }
    if (Pass.value != "") {
        UserPassword = Pass.value;
    }
    if (Mobile.value != "") {
        UserMobile = Mobile.value;
    }
    if (UploadID.value != "") {
        IDPhoto = UploadID.value;
    }
    //-------- changes on database from Here -------

    saved.style.visibility = "visible"
}



editBut.onmouseenter = function () {
    console.log(fname.value)
    console.log(lname.value)
    console.log(Pass.value)
    console.log(Mobile.value)
    console.log(UploadID.value)
    console.log(FirstName)
    console.log(LastName)
    console.log(UserPassword)
    console.log(UserMobile)
    console.log(IDPhoto)
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
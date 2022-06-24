



//---------------------------------------------------
//-------------------Content Here--------------------------------
//-------Get values From Database--------

let StudyProgram = "Professional"  // changed when checkout or submit clicked //Academic //Professional
let UserSpecialization  // changed when checkout or submit clicked

let CPPSelect  // changed when c++ add or remove clicked
let PaythonSelect  // changed when c++ add or remove clicked
let MathSelect  // changed when Math add or remove clicked
let StatisticsSelect  // changed when staiistics add or remove clicked

let AdmissionCourseFee //= "Paid"  //changed when checkout clicked
let MainCourseFee //= "Paid"//-------Get values From Database--------

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

//------------------------------------
let progType = "Academic"; // name of the program stored here
let specialType = "Statistics"; // name of the Specialization stored here

//---------function to detect program Type-------
let Academic = document.getElementById("Academic");
let Professional = document.getElementById("Professional");
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
Professional.onchange = function () {
    if (Professional.checked) {
        progType = document.getElementById('Professional').value;
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
    step3Circle.style.backgroundImage = "url('image/true.png')";
    step3Circle.style.backgroundSize = "65px 65px";
    step3Circle.innerHTML = " ";
    popupmessage.style.display = "none"
    popupmessage1.style.display = "flex"
    //----to delete prof option --------
    var temp1 = document.getElementById("selectProgramProfessional");
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


window.onload = function () {

    //go to sigma directly
    document.getElementById('mainContainSplit').scrollIntoView(true);
    //go to sigma directly
    //----acadimic course active (hide prof. option)
    if (AdmissionCourseFee === "Paid") {
        var temp1 = document.getElementById("selectProgramProfessional");
        temp1.remove();
    }
    if (MainCourseFee === "Paid" && StudyProgram === "Academic") {
        var temp1 = document.getElementById("selectProgramProfessional");
        temp1.remove();
        payNowButton.style.pointerEvents = "none";
    }
    //----Professional course active (hide acadimic option )
    if (MainCourseFee === "Paid" && StudyProgram === "Professional") {
        document.getElementById("Professional").checked = true;
        mainadS1S2Prof.style.display = "block"
        mainadS1S2Academic.style.display = "none"
        SubmitButton.style.pointerEvents = "none";

        var temp2 = document.getElementById("selectProgramAcademic");
        temp2.remove();
    }
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

// Global Variables
var studentsArray = [];
var myjsonObj = [{}];
var jsObj = JSON.parse(myjsonObj);



// Loads local data first
function init() {
    if (localStorage.studentsRecord) {
        studentsArray = JSON.parse(localStorage.studentsRecord);
        for (var i = 0; i < studentsArray.length; i++) {
            postInput(studentsArray[i].companyName,
            studentsArray[i].jobLocation, studentsArray[i].postingWeb, 
            studentsArray[i].jobTitle, studentsArray[i].time);
        }
    }
}

// Runs app
function display(){
    // prevent page from reloading.
    // e.preventDefault();
    timeNow();
    grabInput();
    postInput();
        
}

// Setting up Date
function timeNow(){
    const todayTime = new Date();
    const month = (todayTime .getMonth() + 1);
    const day = ('0' + todayTime .getDate()).slice(-2);
    const year = (todayTime .getFullYear());
    const hour = (todayTime .getHours());
    const min = ('0' + todayTime.getMinutes()).slice(-2);
    const sec = (todayTime.getSeconds());
    // Concatinating date to single string.
    const currentDate = month + "/" + day + "/" + year + " " + hour +":"+ min;
    return currentDate;
}

function grabInput (){

    const companyName = document.querySelector('#companyNameInput').value; 
    const jobLocation = document.querySelector('#jobLocationInput').value 
    const postingWeb = document.querySelector('#postingWebInput').value 
    const jobTitle = document.querySelector('#jobTitleInput').value 
    const time = timeNow();
    var stuObj = {companyName: companyName, jobLocation: jobLocation, postingWeb: postingWeb, jobTitle: jobTitle, time: time };
        studentsArray.push(stuObj);
        localStorage.studentsRecord = JSON.stringify(studentsArray);
        postInput(companyName, jobLocation, postingWeb, jobTitle, time);
        document.getElementById("companyNameInput").value = "";
        document.getElementById("jobLocationInput").value = "";
        document.getElementById("postingWebInput").value = "";
        document.getElementById("jobTitleInput").value = "";
        document.getElementById(time).value = "";

}


function postInput(companyName, jobLocation, postingWeb, jobTitle, time){
    const table = document.getElementById("results");
    const row = table.insertRow(-1);
    const companyNameCell = row.insertCell(0);
    const jobLocationCell = row.insertCell(1);
    const postingWebCell = row.insertCell(2);
    const jobTitleCell = row.insertCell(3);
    const timeCell = row.insertCell(4);
    companyNameCell.innerHTML = companyName;
    jobLocationCell.innerHTML = jobLocation;        
    postingWebCell.innerHTML = postingWeb; 
    jobTitleCell.innerHTML = jobTitle; 
    timeCell.innerHTML = time;
}

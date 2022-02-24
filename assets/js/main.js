// Global Variables
var postingArray = [];
let i = 0;

// Loads local data first
function init() {
   
    if (localStorage.postingRecord) {
        postingArray = JSON.parse(localStorage.postingRecord);
        for (var i = 0; i < postingArray.length; i++) {
            postInput(
            // postingArray[i].numberId, 
            postingArray[i].companyName,
            postingArray[i].jobLocation,
            postingArray[i].postingWeb, 
            postingArray[i].jobTitle,
            postingArray[i].time
            );

        }
    }
}

// Setting up Date
function timeNow(){
    const todayTime = new Date();
    const month = (todayTime.getMonth() + 1);
    const day = ('0' + todayTime.getDate()).slice(-2);
    const year = (todayTime.getFullYear());
//     const hour = ('0' + todayTime.getHours()).slice(-2);
//     const min = ('0' + todayTime.getMinutes()).slice(-2);
//     const sec = (todayTime.getSeconds());
    // Concatinating date to single string.
    const currentDate = month + "/" + day + "/" + year;
    // const currentDate = sec;
    return currentDate;
}


function numberIdNow(){
  
    let currentNumberId = document.querySelector('#inc').value = ++i;
    return currentNumberId;
}

function grabInput (){

    const companyName = document.querySelector('#companyNameInput').value; 
    const jobLocation = document.querySelector('#jobLocationInput').value 
    const postingWeb = document.querySelector('#postingWebInput').value 
    const jobTitle = document.querySelector('#jobTitleInput').value 
    // const numberId = numberIdNow();
    const time = timeNow();
    

    var postingObj = {companyName: companyName, jobLocation: jobLocation, postingWeb: postingWeb, jobTitle: jobTitle, time: time };
        postingArray.push(postingObj);
        localStorage.postingRecord = JSON.stringify(postingArray);
        postInput( companyName, jobLocation, postingWeb, jobTitle, time);
        document.getElementById("companyNameInput").value = "";
        document.getElementById("jobLocationInput").value = "";
        document.getElementById("postingWebInput").value = "";
        document.getElementById("jobTitleInput").value = "";
        (time).value = "";
}


function postInput( companyName, jobLocation, postingWeb, jobTitle, time){
    const table = document.getElementById("results");
    const row = table.insertRow(1);

    // const numberIdCell = row.insertCell(0);
    const companyNameCell = row.insertCell(0);
    const jobLocationCell = row.insertCell(1);
    const postingWebCell = row.insertCell(2);
    const jobTitleCell = row.insertCell(3);
    const timeCell = row.insertCell(4);

    // numberIdCell.innerHTML = numberId;
    companyNameCell.innerHTML = companyName;
    jobLocationCell.innerHTML = jobLocation;        
    postingWebCell.innerHTML = postingWeb; 
    jobTitleCell.innerHTML = jobTitle; 
    timeCell.innerHTML = time;
}

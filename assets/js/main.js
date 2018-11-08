// Runs app
function display(){
    
    timeNow();
    grabInput();
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
    const currentDate = month + "/" + day + "/" + year + " " + hour +":"+ min + " " +sec;

    return currentDate;
}

function grabInput (){

    const companyName = document.querySelector('#companyNameInput').value 
    const jobLocation = document.querySelector('#jobLocationInput').value 
    const postingWeb = document.querySelector('#postingWebInput').value 
    const jobTitle = document.querySelector('#jobTitleInput').value 

    const table = document.getElementById("results");
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.innerHTML = companyName;
        cell2.innerHTML = jobLocation;        
        cell3.innerHTML = postingWeb; 
        cell4.innerHTML = jobTitle; 
        cell5.innerHTML = timeNow();

    // Resets form.
    $('#form')[0].reset();
}

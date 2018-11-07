// Runs app
function display(){

    grabInput();
    currentDate();
}



// Display current date of submition.
function currentDate(){

    const todayTime = new Date();
    const month = (todayTime .getMonth() + 1);
    const day = ('0' + todayTime .getDate()).slice(-2);
    const year = (todayTime .getFullYear());
    const hour = (todayTime .getHours());
    const min = ('0' + todayTime.getMinutes()).slice(-2);
    
    document.getElementById("currentDateDiv").innerHTML += '<p>' + month + "/" + day + "/" + year + " " + hour +":"+ min + '</p>';

}

//Grabs user input and places it in a div. 
// function grabInput (){

//     const companyName = document.querySelector('#companyNameInput').value 
//     document.getElementById('companyNameDiv').innerHTML += '<p>' + companyName + '</p>';

//     const jobLocation = document.querySelector('#jobLocationInput').value  
//     document.getElementById('jobLocationDiv').innerHTML +='<p>' + jobLocation + '</p>';

//     const postingWeb = document.querySelector('#jobLocationInput').value  
//     document.getElementById('postingWebDiv').innerHTML += '<p>' + postingWeb + '</p>';
    
//     const jobTitle = document.querySelector('#jobTitleInput').value  
//     document.getElementById('jobTitleDiv').innerHTML += '<p>' + jobTitle + '</p>';

   
//     // Resets form.
//     $('#form')[0].reset();
// }

function grabInput (){

    const companyName = document.querySelector('#companyNameInput').value 
    document.getElementById('companyNameDiv').innerHTML += '<tr><td><p>' + companyName + '</p></td></tr>';

    const jobLocation = document.querySelector('#jobLocationInput').value  
    document.getElementById('jobLocationDiv').innerHTML += '<tr><td><p>' + jobLocation + '</p></td></tr>';

    const postingWeb = document.querySelector('#jobLocationInput').value  
    document.getElementById('postingWebDiv').innerHTML += '<tr><td><p>' + postingWeb + '</p></td></tr>';
    
    const jobTitle = document.querySelector('#jobTitleInput').value  
    document.getElementById('jobTitleDiv').innerHTML += '<tr><td><p>' + jobTitle + '</p></td></tr>';

   
    // Resets form.
    $('#form')[0].reset();
}

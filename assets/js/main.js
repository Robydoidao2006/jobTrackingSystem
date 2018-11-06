// Submit event
function display(){

    const companyName = document.querySelector('#companyNameDiv').value 
    document.getElementById('test1').innerHTML = companyName;

    const jobLocation = document.querySelector('#jobLocationDiv').value  
    document.getElementById('test2').innerHTML = jobLocation;

    // const postingWebsite = document.querySelector('#postingWebsiteDiv').value
    // document.getElementById('postingWebsiteDiv').innerHTML = postingWebsite;


    // var x = document.getElementById("postingWebsite").selectedIndex;
    // (document.getElementsByTagName("option")[x].value).innerHTML;

    current_date();
}


// Display current date on submition
function current_date(){

    const todayTime = new Date();
    const month = (todayTime .getMonth() + 1);
    const day = ('0' + todayTime .getDate()).slice(-2);
    const year = (todayTime .getFullYear());
    const hour = (todayTime .getHours());
    const min = ('0' + todayTime.getMinutes()).slice(-2);
    
    document.getElementById("current-date-Div").innerHTML = (month + "/" + day + "/" + year + " " + hour +":"+ min);

}



var form1 = document.getElementById("form1"); //Email and username form section
var form2 = document.getElementById("form2"); //Form section for password
var next = document.getElementById("next"); //next button
var back = document.getElementById("back"); //back button
var email = document.getElementById("email"); //email field
var username = document.getElementById("name"); //username field
var login = document.getElementById("login"); //initial login button
var signup = document.getElementById("signup"); //signup button
var login_section = document.getElementById("login-container"); //login form
var regEx = /\S+@\S+\.\S+/;
var input1 = form1.getElementsByTagName("input"); //An array of all input fields in sign up email section
var input2 = form2.getElementsByTagName("input"); //An array of all input fields in sign up password section
var input3 = login_section.getElementsByTagName("input");  //An array of all input fields in Log in section
var submit_login = document.getElementById("submit-login"); //second login button
var submit_signup = document.getElementById("submit-signup"); //button to complete sign up
var object = {
    "Email": "",
    "Username": "",
    "Password": ""
}; //object for the storage of form data

signup.addEventListener("click", ()=> {
    form1.style.display = "block";
    signup.style.display = "none";
    login.style.display = "none";
}); //this dispalys form1 containing the email section when the initial sign up button is clicked

login.addEventListener("click", ()=> {
    login_section.style.display = "block";
    signup.style.display = "none";
    login.style.display = "none";
}); //this displays the login in form when the initail log in button is clicked  

submit_signup.addEventListener('click', store);

function store() {
    if (input2[1].value !== input2[0].value) {
        input2[1].style.backgroundColor = "red";
        document.getElementById("mismatch").style.display = "block";
        /* When the value of password and confirm password aren't thesame change confirm 
        password background color red */
    } 
    else if (input2[1].value == input2[0].value) {
        if (input2[0].value !== entryPassword) {
            input2[1].style.backgroundColor = "white";
            document.getElementById("mismatch").style.display = "none";
            object.Email = input1[0].value; 
            object.Username = username.value;
            object.Password = input2[0].value; 
            strg = JSON.stringify(object);
            back_strg = JSON.parse(strg);
            localStorage.setItem("Data", strg);
            console.log(back_strg); //the object isn't being displayed in console because of window.location 
            /* Only if the passwords match, the values of the different form input are 
            stored in an object */
            var location = window.location = "../Farming-Firm-Website/accueil.html"; //when all is done redirect to userAccount
            if(!location) {
                location = window.location = "./user-account.html";
            }
            return location
        } else {
            alert("input another password");
        } 
    }  
} 

input2[1].addEventListener('keyup', ()=> {
    if (input2[1].value !== input2[0].value) {
        input2[1].style.backgroundColor = "red";
        document.getElementById("mismatch").style.display = "block";
    } else if (input2[1].value == input2[0].value) {
        input2[1].style.backgroundColor = "white";
        document.getElementById("mismatch").style.display = "none";
    }
}); //test if the value entered in password and confirm fields are thesame 

next.addEventListener("click",check);//runs check function when next button is clicked

function check() {
    if(input1[0].value !=="" && input1[1].value !=="") {
        entryData();
        if(input1[0].value !== entryEmail && input1[1].value !== entryUserName) {
            form2.style.display = "block";
            form1.style.display = "none";  //need to check email and username 
             /* At the end of the first if, proceeds to displaying form2 containing password when both values of
             the input email and username aren't emtpy or in the system already */ 
        } else if (input1[0].value == entryEmail && input1[1].value == entryUserName) {
            alert("Email and Username already in the system");
        } else if(input1[0].value == entryEmail) {
            alert("Email already in the system");
        } else if (input1[1].value == entryUserName) {
            alert("Username already in the system");
        } 
    } else {alert("please fill the input fields to continue");}
   //the first if checks if the input values aren't blank     
} 

back.addEventListener("click", ()=> {
    form2.style.display = "none";
    form1.style.display = "block";
});//displays form1 when clicked on i.e goes back

submit_login.addEventListener("click", ()=> {
    userAccount();
}); 

function initialize() {
    strg = JSON.stringify(object);
    localStorage.setItem("Data", strg);
    entryJSON = localStorage.getItem("Data"); //retrieving account data from storage
} //used to initialize local storage null

function entryData() {
    entryJSON = localStorage.getItem("Data"); //retrieving account data from storage
    if(!entryJSON) {
        initialize();
    }
    entry = JSON.parse(entryJSON); //Parsing the account data stored locally back as an object for test
    entryEmail = entry.Email;
    entryPassword = entry.Password;
    entryUserName = entry.Username;
}

function userAccount(event) {
    entryData();
    if (input3[0].value !== "" && input3[1].value !== "") {
        if((input3[0].value == entryEmail) && (input3[1].value == entryPassword)) {
                console.log("valid");
                var location = window.location = "../Farming-Firm-Website/accueil.html"; //when all is done redirect to Accueil
                if(!location) {
                    location = window.location = "./user-account.html";
                }
                return location 
        } else {
            alert("account not found");
        }
    } else {alert("fill the inputs");}
    
} //need to add a loop to address multiple values

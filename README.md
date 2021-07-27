# Atenna Signup
Atenna Signup is the realization of a sign up and sign in to a company called ATENNA (learn about ATENNA <a href="../Farming-Firm-Website/README.md">in this README file</a>).
<br />
User can creates an account by clicking on the sign up button. Fills in the necessary data required, that is email, username, and password in a form. 

On form submission Javascript does certain data verification and validation before the signup process can be valid like: 
<ul>
    <li>If the account doesn't exist already</li>
    <li>If the certain data is not empty, or if passwords are greater than 8 figuers</li>  
</ul>

After signup validated the user's data is stored in an object and the object is stored in browser's local storage.
The user is then redirected to the company's homepage or a user-account page.

User also has the possibility to sign into an already existing account via login button, javascript does data verification and validation to ensure account is valid and in the system already. After the verifications the user is redirected to the company's homepage or a user-account page. 

I used the browser's local storage for all data persistency.
Javascript is also used to make the form a multiple step form.

#### Note
This project renders user authentification for a farming firm company called ATENNA. For user to be redirected to ATENNA's homepage after sign up or sign in you'll need ATENNA's main website source codes, which are found <a href="../Farming-Firm-Website">in this repository</a>
<br />
But for the sake of making this project independent I have created a user account page, where user is redirected to if ATENNA source code can't be found.

---

## Preview

<img src="./images/signup.png" alt="signup">

---

## Coming Soon
- [ ] External storage implementation
- [ ] Multiple accounts: since am using the browser's local storage adding the possibility for a multiple users to have accounts

---

## Contributors
 <a href="https://github.com/tchassijordan">
 tchassi jordan</a>

---

## Contributing 
Pull requests are welcome. For major changes/propose impovements, please open an issue first to discuss what you would like to change.

---

<h3 align="left">Languages and tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

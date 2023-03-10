"use strict";

// toggle between login and signup
const toggleBtn = document.querySelector('.toggle--btn');
const signupElement = document.querySelector('.signup');
const loginElement = document.querySelector('.login');

toggleBtn.addEventListener('click', () => {
    // statement
    if (signupElement.classList.contains('hide')) {
        signupElement.classList.remove('hide')
        signupElement.classList.add('show')
        toggleBtn.innerHTML = 'Login';
        loginElement.classList.remove('show');
        loginElement.classList.add('hide');
    } else {
        signupElement.classList.remove('show')
        signupElement.classList.add('hide')
        toggleBtn.innerHTML = 'Sign Up'
        loginElement.classList.remove('hide');
        loginElement.classList.add('show');
    }
})


// login logic
const loginForm = document.querySelector('.login--form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    console.log(username + " " + password);
});


// signup logic
const signupForm = document.querySelector('.signup--form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const department = e.target[1].value;
    const email = e.target[2].value;
    const phoneNo = e.target[3].value;
    const password = e.target[4].value;
    const confirmPassword = e.target[5].value;
    //selection statement to confirm the user entry
    if (password === confirmPassword) {
        console.log("Matched");
        //save new user to the database
    } else {
        alert("Don't match");
        //tell the user to enter correct password
    }
})


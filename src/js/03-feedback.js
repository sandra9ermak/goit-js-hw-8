
import throttle from "lodash.throttle";

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('form');

form.addEventListener('input', throttle(event => {
    
    const userData = {
        email: email.value,
        message: message.value,
    };

    const saveUserData = JSON.stringify(userData);
    localStorage.setItem("feedback-form-state", saveUserData);
}, 500));

const saveData = localStorage.getItem("feedback-form-state");

if (saveData) {
    email.value = JSON.parse(saveData).email;
    message.value = JSON.parse(saveData).message;
} 

form.addEventListener('submit', event => {
    event.preventDefault();

    event.currentTarget.reset();

    console.log(saveData);
    localStorage.clear();
});
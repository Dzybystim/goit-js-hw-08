const throttle = require('lodash.throttle');

const formElement = document.querySelector('.feedback-form');
const emailElement = document.querySelector('[name=email]');
const messageElement = document.querySelector('[name=message]');


function savesValue(event) {
event.preventDefault();

let user = {
    email: emailElement.value,
    message: messageElement.value
};

localStorage.setItem("feedback-form-state", JSON.stringify(user))

}

formElement.addEventListener('input', throttle(savesValue, 500));


let localBase = localStorage.getItem("feedback-form-state");

try {
    let parsedLocalBase = JSON.parse(localBase);

    emailElement.value = parsedLocalBase.email;
    messageElement.value = parsedLocalBase.message;

} catch (error) {
   console.warn('Еще нет значений в форме!')

}


function ClearingFields(event) {
    event.preventDefault();
     

    console.log(localStorage.getItem("feedback-form-state"))

    formElement.reset()
    localStorage.removeItem("feedback-form-state");
}


formElement.addEventListener('submit', ClearingFields)
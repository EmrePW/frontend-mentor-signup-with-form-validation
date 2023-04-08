const form = document.getElementById("myForm")

const username = document.getElementById("fname");
const surname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInput();
})

function setError(element, message){
    const input_field = element.parentElement;
    const error_display = input_field.querySelector(".error");
    const exclamation_mark = input_field.querySelector(".warn");

    error_display.innerHTML = message;
    error_display.classList.add("error-active");
    exclamation_mark.classList.add("active");
    input_field.classList.add("error");
}

function validateInput() {
    const username_value = username.value.trim();
    const surname_value = surname.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();

    if(username_value === ""){
        setError(username, "First Name cannot be empty");
    }
    
    if(surname_value === ""){
        setError(surname,"Last Name cannot be empty");
    }

    if(email_value === ""){
        setError(email, "Looks like this is not an email");
    }

    if(password_value === ""){
        setError(password, "Password cannot be empty");
    }
}
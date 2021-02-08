const form = document.getElementById("contact_form");
const lastName = document.getElementById("lname");
const firstName = document.getElementById("fname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const text = document.getElementById("text");

//REG EXPRESSION//

function isEmail(email) {
	const add = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return add.test(email);
}

function isPhone(phone) {
	const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    return re.test(phone);
}
const requireValue = function(){
    //get the values from the inputs

    const lastNameValue = lastName.value;
    const firstNameValue = firstName.value;
    const phoneValue = phone.value;
    const emailValue = email.value;
    const textValue = text.value;

    if (lastNameValue === "") {
        //show error
        //add error class
        setErrorFor(lname, "Last name is required");
        return false;
    } else {
        setSuccessFor(lname);
    }

    if (firstNameValue === "") {
        setErrorFor(fname, "First name is required")
        return false;
    } else {
        setSuccessFor(fname);
    }

    if (!isPhone(phoneValue)) {
        setErrorFor(phone, "Phone number is not valid")
        return false;
    } else {
        setSuccessFor(phone);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email address cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not a valid address");
        return false;
    } else {
        setSuccessFor(email);
    }

    if (textValue === "") {
        setErrorFor(text, "Message cannot be blank");
        return false;
    } else {
        setSuccessFor(text);
    }

    return true;
}


// TRIGGERS FOR VALID/INVALID INPUTS // 

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form_container
    const errorMessage = formControl.querySelector("small")
    //add error message inside small
    errorMessage.innerText = message;
    //add error class 
    formControl.className = "form_container error"; 
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form_container success";
}
 
function setErrorFor(textarea, message) {
    const formControl = textarea.parentElement; 
    const errorMessage = formControl.querySelector("small")
    errorMessage.innerText = message;
    formControl.className = "form_container error"; 
}

function setSuccessFor(textarea) {
	const formControl = textarea.parentElement;
	formControl.className = "form_container success";
}

//REG EXPRESSION//

 //ARRANGING DATA//

 let requireFields = {
    lastName: lastName.value, 
    firstName: firstName.value,
    phone: phone.value,
    email: email.value,
    text: text.value
}

// SUBMIT // 
form.addEventListener('submit', e => {
    e.preventDefault();
    if (requireValue() === true) {
        console.log(requireFields);
        document.getElementById("send_button").addEventListener("click",function(){
            document.getElementsByClassName("dialog_box")[0].classList.add("active");
          });
    }
});


//DIALOG BOX//

document.getElementById("close_button").addEventListener("click",function(){
    document.getElementsByClassName("dialog_box")[0].classList.remove("active");
});

const popUp = function
// for error
let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("number-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const Phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// name validation
function nameValidation() {
  // trim to remove the whitespaces
  let isValid = true;
  var userNamevalue = username.value.trim();
  if (userNamevalue.length === 0) {
    nameError.innerHTML = "name is required";
    isValid = false;
  } else if (!isName(userNamevalue)) {
    nameError.innerHTML = "Write full name";
    isValid = false;
  } else {
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
  return isValid;
}

// name validation
function emailValidation() {
  let isValid = true;
  // trim to remove the whitespaces
  var emailValue = email.value.trim();
  // email validation
  if (emailValue === "") {
    emailError.innerHTML = "Email is required";
    isValid = false;
  } else if (!isEmail(emailValue)) {
    emailError.innerHTML = "Not a valid Email";
    isValid = false;
  } else {
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
  return isValid;
}

// phone validation
function phoneValidation() {
  let isValid = true;
  // trim to remove the whitespaces
  var phoneValue = Phone.value.trim();
  // phone validation
  if (phoneValue === "") {
    phoneError.innerHTML = "Phone no is required";
    isValid = false;
  } else if (phoneValue.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    isValid = false;
  } else if (!isPhone(phoneValue)) {
    phoneError.innerHTML = "Only digits please.";
    isValid = false;
  } else {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
  return isValid;
}

// message validation
function messageValidation() {
  let isValid = true;
  let messageValue = message.value.trim();
  // message validation
  var required_char = 25;
  var enterChar = required_char - messageValue.length;
  if (enterChar > 0) {
    messageError.innerHTML = `${enterChar} more characters required!`;
    isValid = false;
  } else {
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
  return isValid;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isName(Name) {
  return /^[A-Za-z]*\s{1}[A-Za-z]*$/.test(Name);
}

function isPhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

// submit validation
function validateForm() {
  if (
    !nameValidation() ||
    !emailValidation() ||
    !phoneValidation() ||
    !messageValidation()
  ) {
    alert("ERROR STATE!!!");
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);

    return false;
  } else {
    alert("message sent succesfully...");
   setTimeout(function(){
    emailError.innerHTML = ``;
    nameError.innerHTML = ``;
    phoneError.innerHTML = ``;
    messageError.innerHTML = ``;
    submitError.innerHTML = ``;
   },1000);
    document.getElementById("username").value = null;
    document.getElementById("email").value = null;
    document.getElementById("phone").value = null;
    document.getElementById("message").value = null;
    document.getElementById("name-error").value = null;
    document.getElementById("email-error").value = null;
    document.getElementById("number-error").value = null;
    document.getElementById("message-error").value = null;
    document.getElementById("submit-error").value = null;
  }
}

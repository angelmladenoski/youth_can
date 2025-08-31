const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

//ERROR MESSAGE
const nameFeedback = document.getElementById("nameFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const messageFeedback = document.getElementById("messageFeedback");

contactForm.addEventListener("submit", (e) => {
  //NAME VALIDATION
  if (nameInput.value === "" || nameInput.value == null) {
    e.preventDefault();
    nameFeedback.innerHTML = "Name is required";
  } else {
    nameFeedback.innerHTML = "";
  }

  //EMAIL VALIDATION
  if (
    emailInput.value === "" ||
    emailInput.value == null ||
    !emailInput.value.includes("@")
  ) {
    e.preventDefault();
    if (emailInput.value === "" || emailInput.value == null) {
      emailFeedback.innerHTML = "Email is required";
    } else {
      emailFeedback.innerHTML = "Valid email is required";
    }
  } else {
    emailFeedback.innerHTML = "";
  }

  //MESSAGE VALIDATION
  if (
    messageInput.value === "" ||
    messageInput.value == null ||
    messageInput.value.length < 10
  ) {
    e.preventDefault();

    if (messageInput.value === "" || messageInput.value == null) {
      messageFeedback.innerHTML = "Message is required";
    } else {
      messageFeedback.innerHTML = "Message must be at least 10 characters";
    }
  } else {
    messageFeedback.innerHTML = "";
  }
});

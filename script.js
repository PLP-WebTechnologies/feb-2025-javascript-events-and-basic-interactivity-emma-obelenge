// Event Handling 🎈

// 1. Button Click Event
const button = document.getElementById("change-text-btn");
button.addEventListener("click", () => {
  button.textContent = "You clicked me!";
  button.style.backgroundColor = "#4CAF50";
});

// 2. Hover Effect
const hoverElement = document.getElementById("hover-box");
hoverElement.addEventListener("mouseover", () => {
  hoverElement.style.backgroundColor = "#FFD700";
});
hoverElement.addEventListener("mouseout", () => {
  hoverElement.style.backgroundColor = "#f4f4f4";
});

// 3. Keypress Detection
document.addEventListener("keypress", (event) => {
  const keyDisplay = document.getElementById("key-display");
  keyDisplay.textContent = `You pressed: ${event.key}`;
});

// 4. Bonus: Double-Click Action
const secretButton = document.getElementById("secret-btn");
secretButton.addEventListener("dblclick", () => {
  alert("You discovered the secret action! 🎉");
});

// Interactive Elements 🎮

// 1. Image Gallery
const images = document.querySelectorAll(".gallery img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    const display = document.getElementById("image-display");
    display.src = img.src;
    display.alt = img.alt;
    display.style.display = "block";
  });
});

// 2. Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => (content.style.display = "none"));

    tab.classList.add("active");
    tabContents[index].style.display = "block";
  });
});

// Form Validation 📋✅

// 1. Form Validation
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  if (!email.value.includes("@")) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.value.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters long.";
    return;
  }

  errorMessage.textContent = "Form submitted successfully!";
});

// 2. Real-Time Feedback
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
  const feedback = document.getElementById("password-feedback");
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password is too short.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Password looks good!";
    feedback.style.color = "green";
  }
});

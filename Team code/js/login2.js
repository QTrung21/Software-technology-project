// querySelector returns the first element class matches a CSS selector
const inputUsernameRegister = document.querySelector("#name");
const inputEmailRegister = document.querySelector("#email");
const inputPasswordRegister = document.querySelector("#password");
const btnRegister = document.querySelector(".flip-card__btn");

// Add a click event to the element with the ID btnRegister
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" 
    inputEmailRegister.value === ""
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  }
  else {
    const user = {
      username: inputUsernameRegister.value,
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value,
    };
    // Creates a user object
    let json = JSON.stringify(user);
    // Stores the JSON string in local storage using the username as the key
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "home.html";
  }
});
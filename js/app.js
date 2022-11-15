const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});






/*
console.log(window.auth);


auth.onAuthStateChanged(user => {
  if (!user) {
    console.log("user logged in");
    //location.replace("learn.html");
    //location.replace("index.html");
  } else {
    console.log("user logged out");
  }
})
*/
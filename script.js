const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const container = document.getElementById("container");
const success = document.getElementById("success");
const dismiss = document.getElementById("dismiss");

form.addEventListener("submit", (e) => {
  let messages = "Email is required";
  let filter = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  if (email.value === "" || email.value == null) {
    errorElement.innerText = messages;
    email.classList.add("err");
  } else if (email.value.match(filter)) {
    errorElement.innerText = "";
    container.classList.add("non-visible");
    success.classList.remove("non-visible");
    return true;
  } else {
    errorElement.innerText = messages;
    email.classList.add("err");
  }

  if (messages.length > 0) {
    e.preventDefault();
    return false;
  }

  return true;
});

dismiss.addEventListener("click", function () {
  container.classList.remove("non-visible");
  success.classList.add("non-visible");
});

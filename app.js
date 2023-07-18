const form1 = document.getElementById("form1");
const submit = document.getElementById("submit");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  first.innerText = form1["first"].value;
  last.innerText = form1["last"].value;
  email.innerText = form1["email"].value;
  subject.innerText = form1["subject"].value;
  message.innerText = form1["message"].value;
});

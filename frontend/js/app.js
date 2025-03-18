const email = document.getElementById("email");

email.addEventListener("change", changeEmail);

function changeEmail(event){
    console.log(event.target.value);
}
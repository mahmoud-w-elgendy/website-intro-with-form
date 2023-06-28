// Getting form input (all of them in one array and email&button input only)
const inputs = document.querySelectorAll("input:not(input[type='button'])");
const email = document.querySelector("input[type='email']");
const button = document.querySelector("input[type='button']");
const emailSpan = document.querySelector("span.email");
const emailRegex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
// setting up on click event
button.addEventListener("click", (e)=>{
    e.preventDefault();
    // checking if empty
    for(let input of inputs) {
        if(!input.value) {
            input.classList.add("failed");
        }
    }
    // verifying email address
    if(!(email.value.match(emailRegex)) && email.value != "") {
        email.classList.add("failed");
        emailSpan.textContent = "Looks like this is not an email";
    }
});
for(let input of inputs) {
    input.addEventListener("focus", ()=> {
        input.classList.remove("failed");
    });
}
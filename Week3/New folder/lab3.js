window.addEventListener("load", initialize);

function initialize(){
    
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", submitForm);
}


function submitForm(){
     
    var pTags = document.querySelectorAll("#form p");
    var spans = document.querySelectorAll("span");
    var textFeilds = document.querySelectorAll("input[type='text']");
    var blanks = false;
    for(var i = 0; i < textFeilds.length;i++){
       
        if(textFeilds[i].value == ""){
           
            spans[i].innerHTML = "*";
           
            pTags[i].classList.add("red");
           
            blanks = true;
           
            
            }
            
        }
        if(blanks == false){
        validate();
    }

}

function validate(){
    //checking email
    var email = document.getElementById("email");
    var cemail = document.getElementById("cemail");
    var first = document.getElementById("first-name");
    var last = document.getElementById("last-name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    
    if(email.value === cemail.value && checkEmail(email.value) && checkname(first.value)&& checkname(last.value)&& checkphone(phone.value)){
        displayResults();
    }
    else if (!checkEmail(email.value)){alert("enter a better email")}
    else if (!checkname(first.value) || !checkname(last.value)){alert("enter a valid name")}
    else if (!checkphone(phone.value)){alert("enter a valid number")}
    else{
        alert("Emails Do Not Match");
    }
    //checking emails
    
}
function checkEmail(email){
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}
function checkname(first){
    var re = /[A-Z][a-zA-Z][^#&<>\"~;$^%_{}?]{1,20}$/i;
    return re.test(first);
}
function checkphone(phone){
      var re = /^\d{3}\d{3}\d{4}$/;
    return re.test(phone);
  }



function displayResults(){
   
    var first = document.getElementById("first-name");
    var last = document.getElementById("last-name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
   
    var form = document.getElementById("form");
    form.style.display = "none";
   
    var confirm = document.getElementById("confirmation");
    confirm.style.display = "block";
   
    var info = document.getElementById("info");
    
    var person = {
    first:first.value,
    last:last.value,
    email:email.value,
    phone:phone.value
}
   
    info.innerHTML = person.first + " " + person.last + "<br/>";
   
    info.innerHTML += person.email + "<br/>";
   
    info.innerHTML += person.phone + "<br/>";
}
/* Photo credit from Unsplash.com 
and parts of code referenced from from w3schools.com*/

//...........................................Form Validation

function validateEmail(){

  let a = document.forms["booking"]["email"].value;

  console.log(a != "");
  console.log(a.indexOf("@") == -1);
  console.log(a.match("@") > 1);

  if(a != ""){
    if(a.indexOf("@") == -1 || a.match("@") > 1){
      console.log("here");
      document.getElementById("revise").style.display = "block";
    }
    else if(a.indexOf(".com") == -1){
      document.getElementById("revise").style.display = "block";
    }
    else{
      document.getElementById("revise").style.display = "none";
    }
  }
  
}

function validateEmailM(){

  let a = document.forms["mail"]["email"].value;

  console.log(a != "");
  console.log(a.indexOf("@") == -1);
  console.log(a.match("@") > 1);

  if(a != ""){
    if(a.indexOf("@") == -1 || a.match("@") > 1){
      console.log("here");
      document.getElementById("reviseM").style.display = "block";
    }
    else if(a.indexOf(".com") == -1){
      document.getElementById("reviseM").style.display = "block";
    }
    else{
      document.getElementById("reviseM").style.display = "none";
    }
  }
}

document.getElementById("msg").onsubmit = submitFormMore;

function submitFormMore() {
  let a = document.forms["mail"]["fnameM"].value;
  let b = document.forms["mail"]["emailM"].value;
  let c = document.forms["mail"]["phoneM"].value;
  let d = document.forms["mail"]["messageM"].value;

  if (a == "" || b == "" || c == "" || d == "") {
    alert("Oops, Not Submited! \nPlease make sure the \nfirst Name,\nEmail, \nPhone and \nmessage fields \nare all filled out");
    return false;
  }
  else{
    if(confirm("Please confirm: You are about to send a message")){
      alert("Thank you, your message has been send.")
      return true;
    }
    else{
      return false;
    }
}
}
// document.getElementById("submitApp").onclick = submitForm;

document.getElementById("schd").onsubmit = submitForm;

function submitForm() {
    let a = document.forms["booking"]["fname"].value;
    let b = document.forms["booking"]["lname"].value;
    let c = document.forms["booking"]["email"].value;
    let d = document.forms["booking"]["phone"].value;
    let e = document.forms["booking"]["date"].value;

    if (a == "" || b == "" || c == "" || d == "" || e == "") {
      alert("Oops, Not Submited! \nPlease make sure the \nfirst Name,\nLast Name,\nEmail, \nPhone and \nBooking Date fields \nare all filled out");
      return false;
    }
    else{
      if(confirm("You are submitting an appointment for " + e + ".\nPlease confirm")){
        alert("Thank you, your appointment has been submitted.")
        return true;
      }
      else{
        return false;
      }
    }
  }






  //.......................................................................Contact Tab
function openForm(evnt, option) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(option).style.display = "flex";
  evnt.currentTarget.className += " active";

}

document.getElementById("defaultOpen").click();


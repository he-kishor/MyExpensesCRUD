document.addEventListener('DOMContentLoaded', function () {
    let loginbox=document.querySelector('.from-box-login');
    let registerLink = document.querySelector('.register-link');
    let registerBox = document.querySelector('.from-box-register');
    let otpButton = document.querySelector('.btnotp');
    let otpBox = document.querySelector('.from-box-otp');
    let registerbutton=document.querySelector('.registerbtn');
  
    registerLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
  
      // Show the register section and hide other sections
      registerBox.style.display = 'block';
      otpBox.style.display = 'none';
      loginbox.style.display='none';

    });
  
    otpButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default button behavior
  
      // Show the OTP section and hide other sections
      otpBox.style.display = 'block';
      registerBox.style.display = 'none';
      loginbox.style.display='none';
    });
    registerbutton.addEventListener('click',function(event){
     // show again login page 
      registerBox.style.display = 'none';
      otpBox.style.display = 'none';
      loginbox.style.display='block';
    });

  });
  
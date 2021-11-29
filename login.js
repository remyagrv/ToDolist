

document.getElementById("myBtn").addEventListener("click", function() {
  validate( redirect);
});
temp=0;
function validate( callback)
{
  
    let username = document.getElementById("floatingInput");  
    let password = document.getElementById("floatingPassword"); 
  if( (username.value =="admin") && (password.value =="12345"))
  { temp =1;
    callback(temp);
  }else if(username.value == null || username.value == "") {
           alert("Please enter the username.");
            return false;
           
       }else if (password.value == null || password.value == "") {
            alert("Please enter the password.");
            return false;
       }  
  else if (username.value!="admin"){
    alert("Incorrect Username "); 
    return false;
  }else if (password.value!="12345"){
    alert("Incorrect Password"); 
    return false;
 
}
}

function redirect(x)
{
   
  if (x==1){
    alert("hai");
    window.open("./main.html");}
  
}






























// // document.getElementById("myBtn").addEventListener("click", validate);


// // function validate(){  
// //   let username = document.getElementById("floatingInput");  
// //   let password = document.getElementById("floatingPassword"); 
 
// //   if( (username.value =="admin") && (password.value =="12345"))
// //   {
// //     redirect();
    
    
// //   }else if(username.value == null || username.value == "") {
// //            alert("Please enter the username.");
// //            return false;
// //        }else if (password.value == null || password.value == "") {
// //             alert("Please enter the password.");
// //             return false;
// //        }  
// //   else if (username.value!="admin"){
// //     alert("Incorrect Username "); 
// //     return false; 
// //   }else if (password.value!="12345"){
// //     alert("Incorrect Password"); 
// //     return false; 
// //   }
// // }
  

// //   function redirect()
// //   {
    
// //       window.location.href=".\main.html";
    
// //   }




// const usernameEl = document.querySelector('#floatingInput');

// const passwordEl = document.querySelector('#floatingPassword');


// const form = document.querySelector('#signup');


// const checkUsername = () => {

//     let valid = false;

    

//     const username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//         showError(usernameEl, 'Username cannot be blank.');
    
//     } else {
//         showSuccess(usernameEl);
//         valid = true;
//     }
//     return valid;
// };




// const checkPassword = () => {
//     let valid = false;


//     const password = passwordEl.value.trim();

//     if (!isRequired(password)) {
//         showError(passwordEl, 'Password cannot be blank.');
   
//     } else {
//         showSuccess(passwordEl);
//         valid = true;
//     }

//     return valid;
// };

// const isUsernameValid = (username) => {
//   const re = /^admin$/;
//   return re.test(username);
// };



// const isPasswordSecure = (password) => {
//     const re = new RegExp("12345");
//     return re.test(password);
// };

// const isRequired = value => value === '' ? false : true;



// const showError = (input, message) => {
//     // get the form-field element
//     const formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     const error = formField.querySelector('small');
//     error.textContent = message;
// };

// const showSuccess = (input) => {
//     // get the form-field element
//     const formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     const error = formField.querySelector('small');
//     error.textContent = '';
// }


// form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
        
//         isPasswordValid = checkPassword();

//     let isFormValid = isUsernameValid &&isPasswordValid ;

//     // submit to the server if the form is valid
//     if (isFormValid) {
//       window.location.href=".\main.html";
//     }
// });


// const debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//         // cancel the previous timer
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         // setup a new timer
//         timeoutId = setTimeout(() => {
//             fn.apply(null, args)
//         }, delay);
//     };
// };

// form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//         case 'username':
//             checkUsername();
//             break;
        
//         case 'password':
//             checkPassword();
//             break;
       
//     }
// }));
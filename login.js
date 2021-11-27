

document.getElementById("myBtn").addEventListener("click", function() {
  validate(redirect);
});

function validate(callback)
{
  let username = document.getElementById("floatingInput");  
  let password = document.getElementById("floatingPassword"); 
 
  if( (username.value =="admin") && (password.value =="12345"))
  {
    callback();
  }else if(username.value == null || username.value == "") {
           alert("Please enter the username.");
           return false;
       }else if (password.value == null || password.value == "") {
            alert("Please enter the password.");
            return false;
       }  
  else if (username.value!="admin"){
    alert("Incorrect Username "); 
    return false; 
  }else if (password.value!="12345"){
    alert("Incorrect Password"); 
    return false; 
  }
 
}
function redirect()
{
  
  console.log(`redirected`);
  
}






























// document.getElementById("myBtn").addEventListener("click", validate);


// function validate(){  
//   let username = document.getElementById("floatingInput");  
//   let password = document.getElementById("floatingPassword"); 
 
//   if( (username.value =="admin") && (password.value =="12345"))
//   {
//     redirect();
    
    
//   }else if(username.value == null || username.value == "") {
//            alert("Please enter the username.");
//            return false;
//        }else if (password.value == null || password.value == "") {
//             alert("Please enter the password.");
//             return false;
//        }  
//   else if (username.value!="admin"){
//     alert("Incorrect Username "); 
//     return false; 
//   }else if (password.value!="12345"){
//     alert("Incorrect Password"); 
//     return false; 
//   }
// }
  

//   function redirect()
//   {
    
//       window.location.href=".\main.html";
    
//   }
document.getElementById("btn").addEventListener("click", function() {
    addition(2,7,sub);
  });

  function addition(a,b,callback)
{
    
   var sum = a+b;
   callback(sum,1);
}
function sub(sum,s)
{
    var result = sum - s;
    document.write(`${sum} - ${s} = ${result}`);
    
}
// addition(2,7,sub);

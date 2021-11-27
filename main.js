let count = 0;
function server(){
    // document.getElementById("button").disabled = true;
    var xhttp = new XMLHttpRequest();
    // var x = document.createElement("INPUT");
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            // document.getElementById("demo").innerHTML = this.responseText;
                var response = JSON.parse(this.responseText);
                var Jproduct = response;
                buildTable(Jproduct);
                function buildTable(data){
                    var table = document.getElementById('myTable');
                    for(var i=0; i< data.length; i++)
                    { 
                        if ((data[i].completed)==true ){
                        var row =   `<tr>
                                            <td>${data[i].id}</td>
                                            <td>${data[i].title.strike()}</td>
                                            <td>${data[i].innerHTML = '<input type="checkbox" disabled name="checkbox" checked />'}</td> 
                                    </tr>`
                                    
                                    table.innerHTML += row;
                        }else{
                            var row =   `<tr>
                                                <td>${data[i].id}</td>
                                                <td>${data[i].title}</td>
                                                <td>${data[i].innerHTML = '<input name="checkbox" onchange="checkboxes();" type="checkbox"/>'}</td> 
                                        </tr>`
                                        table.innerHTML += row;
                                        
                                        
                        }
                        
                                    
                    }
                    let a = document.forms["main"];
    let x = a.querySelectorAll('input[type="checkbox"]:checked');
    count = x.length;
    console.log(count);
  
                   
                }
                
                      }
    }
     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
}
// var tasks= document.querySelectorAll(".tasks");
// for(var f=0;f<tasks.length;f++){
//     tasks[f].onclick = function(){
//         this.classList.toggle('completed');
//     }
// }
// function  crossout(id) {
//     var box = document.getElementById(id);
//     box.style = "text-decoration: line-through";
//   }

function checkboxes(){
    

    var b = document.forms["main"];
    var y = b.querySelectorAll('input[type="checkbox"]:checked');
    var out = (y.length-count);
    console.log(out);
    if ((out%5 == 0)&& (out>1)){
        alert(`Congrats!!! ${out} Tasks have been Successfully Completed.`);
    }
}

                            
    






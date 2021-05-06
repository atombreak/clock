let d = new Date();

const hrs = document.getElementById("h")
const min = document.getElementById("m")
const sec = document.getElementById("s")

 h = d.getHours();
 m = d.getMinutes();
 s = d.getSeconds();
 
 hrs.innerHTML = h;
 min.innerHTML = m;  
 sec.innerHTML = s;
 

function printime(){
 let d = new Date();
 
 h = d.getHours();
 m = d.getMinutes();
 s = d.getSeconds();
 hrs.innerHTML = h;
 min.innerHTML = m;  
 sec.innerHTML = s;
}

setInterval(printime, 1000);

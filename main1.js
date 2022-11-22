function add() {
    let  element = document.createElement("div")
    element.innerHTML = document.getElementsByTagName("input")[0].value + '<i class="fa-solid fa-x" onclick="this.parentElement.remove()" ></i>'    
    if (document.getElementsByTagName("input")[0].value === "") { alert("Hecne daxil etmemisiniz") }
     else {document.getElementById("main").append(element)
        document.getElementsByTagName("input")[0].value = ""    
    }


}

 let I= document.querySelectorAll("i")
for(let i=0;i<I.length;i++) {
    I[i].addEventListener( "click", function() {this.parentElement.remove()})}








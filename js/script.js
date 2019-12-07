var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


function getwords() {
    text = words.value;
    if(document.getElementById("words").value != "")
    {document.getElementById("p4").innerHTML += '<br>'+text+'  <i>posted on</i>  '+datetime}
    document.getElementById("words").value = ""
}
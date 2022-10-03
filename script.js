let username="";
document.querySelector(".input").addEventListener("change",function(event) {
    event.preventDefault();
    username=document.getElementById("username").value;
    console.log(username);
});
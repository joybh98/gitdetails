let username="";
document.querySelector(".input").addEventListener("change",function(event) {
    event.preventDefault();
    username=document.getElementById("username").value;
    //console.log(username);
    
    const baseUrl="https://api.github.com/users/";

    const fullUrl=baseUrl+username;

    // get user endpoint, then getting the response as json
    fetch(fullUrl).then(res=>res.json())
    // as json is our actual data check if we have the right data
    .then(data=>console.log(data));
});
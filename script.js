let username="";

document.querySelector(".input").addEventListener("change",function(event) {
    event.preventDefault();
    username=document.getElementById("username").value;
    //console.log(username);

    let userdata= {
        name:"",
        email:"",
        followers:0,
    };

    const baseUrl="https://api.github.com/users/";

    const fullUrl=baseUrl+username;

    // get user endpoint, then getting the response as json
    fetch(fullUrl).then(res=>res.json())
    // as json is our actual data check if we have the right data
    .then(
        data=>{
            userdata.name=data.name;
            userdata.email=data.email;
            userdata.followers=data.followers
        }).then(
            let div = document.createElement('div');
            div.className="card";
            let text=document.createTextNode(userdata);
            div.appendChild(text);
            document.body.appendChild(div);
        );
});
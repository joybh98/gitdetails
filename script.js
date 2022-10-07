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
    const userDetails=fetch(fullUrl).then(res=>res.json())
    // as json is our actual data check if we have the right data
    .then(
        data=>{
            return ([data.login,data.name,data.followers,data.following]);
    });

    const getDetails=()=>{
        userDetails.then((a)=>{
            console.log(a);
        })
    }
    getDetails();
});
let username="";

document.querySelector("form").addEventListener("submit",function(event) {

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
            //console.log(data);
            return ([data.avatar_url,data.login,data.name,data.followers,data.following]);
    });
    document.getElementById("userDetails").className="userDetails is-flex";
    const getDetails=()=>{
        userDetails.then((a)=>{
            //console.log(a);
            document.getElementById("userimage").src=a[0];
            document.getElementById("username").innerHTML=`Username: ${a[1]}`;
            document.getElementById("name").innerHTML=`Name: ${a[2]}`;
            document.getElementById("followers").innerHTML=`Followers: ${a[3]}`;
            document.getElementById("following").innerHTML=`Following: ${a[4]}`;
        })
    }

    getDetails();
});
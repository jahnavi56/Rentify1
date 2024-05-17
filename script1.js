
    var users = [];
    function adduser(){
var user={
        email:"",
    password:"",
};
    for(a in user){
        user[a] = document.getElementById(a).value;
}
    users.push(user);
    displayUser()
    clearForm()
}

    function displayUser() {
        document.querySelector("tbody").innerHTML = ""
users.forEach((usr,i)=>{
    var mytr=document.createElement("tr")
    for(a in usr){
        var mytd=document.createElement("td")
    mytd.innerHTML=usr[a]
    mytr.appendChild(mytd)
    }
    var edtd=document.createElement("td");
    mytr.appendChild(edtd)
    var edbtn=document.createElement("button")
    edtd.appendChild(edbtn)
    edbtn.innerHTML="Edit"
    edbtn.setAttribute("onclick","edituser("+i+")")

    var detd=document.createElement("td");
    mytr.appendChild(detd)
    var delbtn=document.createElement("button")
    detd.appendChild(delbtn)
    delbtn.innerHTML="Delete"
    delbtn.setAttribute("onclick","deleteuser("+i+")")

    document.querySelector("tbody").appendChild(mytr)
})
}
    function edituser(i){
        gIndex = i;
    for(a in users[i]){
        document.getElementById(a).value = users[i][a];
}
    document.getElementById("btn").style.display="none"
    document.getElementById("btn1").style.display="block"
    displayUser()

}
    function updateuser(){
        document.getElementById("btn").style.display = "block"
document.getElementById("btn1").style.display="none"
    var user={
        email:"",
    password:"",
};
    for(a in user){
        user[a] = document.getElementById(a).value;
}
    users[gIndex] = user;
    displayUser()
    clearForm()
}
    function deleteuser(i){
        users = users.filter((usr, index) => {
            return i != index
        })
displayUser()
}
    function clearForm(){
    var user={
        email:"",
    password:"",
};
    for(a in user){
        document.getElementById(a).value = ""

    }

}

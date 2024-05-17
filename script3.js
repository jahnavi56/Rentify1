
var users = [];
function adduser() {
    var user = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };
    for (a in user) {
            user[a] = document.getElementById(a).value;
    }
    users.push(user);
    displayuser();
    clearform();
}
function displayuser() {
    document.querySelector("tbody").innerHTML = "";
    users.forEach((usr, i) => {
        var mytr = document.createElement("tr");
        for (a in usr) {
            var mytd = document.createElement("td");
            mytd.innerHTML = usr[a];
            mytr.appendChild(mytd);
        }
        var edtd = document.createElement("td")
        mytr.appendChild(edtd)
        var edbtn = document.createElement("button")
        edtd.appendChild(edbtn)
        edbtn.innerHTML = "Edit"
        edbtn.setAttribute("onclick", "edituser(" + i + ")")

        var detd = document.createElement("td");
        mytr.appendChild(detd)
        var debtn = document.createElement("button")
        detd.appendChild(debtn)
        debtn.innerHTML = "delete"
        debtn.setAttribute("onclick", "deleteuser(" + i + ")")
        document.querySelector("tbody").appendChild(mytr)
    });
}
function edituser(i) {
    gIndex = i;
    for (a in users[i]) {
            document.getElementById(a).value = users[i][a]
    }
    document.getElementById("addbutton").style.display = "none"
    document.getElementById("updatebutton").style.display = "block"
    displayuser()
}
function updateuser() {
    document.getElementById("addbutton").style.display = "block"
    document.getElementById("updatebutton").style.display = "none"
    var user = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };
    for (a in user) {
            user[a] = document.getElementById(a).value;
    }
    users[gIndex] = user;
    displayuser()
    clearform()
}
function deleteuser(i) {
    users = users.filter((usr, index) => {
        return i != index;
    })
    displayuser()
    clearform()
}
function clearform() {
    var user = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };
    for (a in user) {
            document.getElementById(a).value = ""
    }

}

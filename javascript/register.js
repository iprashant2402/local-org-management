// Get the modal
let modal = document.getElementById("createOrgModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let dropdown = document.getElementsByTagName("select")[0];

let orgs = getAllOrgs();
orgs.forEach((item)=>{
    let option = document.createElement('option');
    option.setAttribute('value',item.name);
    option.textContent = item.name;
    dropdown.appendChild(option);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('org').addEventListener('change', function() {
    if(this.value == "create"){
        modal.style.display = "block";
    }
  });


function submitForm(){
    const userid = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const dob = document.getElementById("bday").value;
    const isAdmin = document.getElementById("isAdmin").checked;
    const org = document.getElementById('org').value;
    
    const user = {
        id: userid,
        email: email,
        pass: pass,
        dob: dob,
        admin: isAdmin,
        org: org
    };

    createUser(user);
    setCurrentUser(user);
    setCurrentOrg(org);
    window.location.replace('/views/usersList.html');
}

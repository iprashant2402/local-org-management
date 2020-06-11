function login(){

    const id = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const users = getAllUsers();
    users.forEach(item => {
        if((id == item.id) || (id == item.email)){
            if(pass == item.pass){
                setCurrentUser(item);
                setCurrentOrg(item.org);
                window.location.replace("/views/usersList.html");
            }else{
                alert("Invalid Password");
            }
        }
    });    

}
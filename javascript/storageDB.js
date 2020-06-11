const db = localStorage;

function getStorage(){
    
    const users = db.getItem('users');
    const orgs = db.getItem('orgs');
    const currentUser = db.getItem('currentUser');
    
    return {
        users: JSON.parse(users),
        orgs: JSON.parse(orgs),
        currentUser: JSON.parse(currentUser)
    }

}

function setCurrentUser(user){
    let currentUser = JSON.stringify(user);
    db.setItem('currentUser', currentUser);       
}

function logout(){
    db.removeItem('currentUser');
}

function getCurrentUser(){
    return JSON.parse(db.getItem('currentUser'));
}

function setCurrentOrg(org){
    let currentOrg = JSON.stringify(org);
    db.setItem('currentOrg', currentOrg);       
}

function removeCurrentOrg(){
    db.removeItem('currentOrg');
}

function getCurrentOrg(){
    return JSON.parse(db.getItem('currentOrg'));
}

function createUser(user){
    let users = db.getItem('users');
    if(users===null){
       users = [];
       users.push(user);
       db.setItem('users', JSON.stringify(users)); 
    }else{
       let tempUsers = JSON.parse(users);
       tempUsers.push(user);
       db.setItem('users', JSON.stringify(tempUsers));
    }
}

function getAllUsers(){
    return JSON.parse(db.getItem('users'));
}

function getAllUsersForOrg(org){
    const users = JSON.parse(db.getItem('users'));
    const tempUsers = [];
    users.forEach(item=>{
        if(item.org == org){
            tempUsers.push(item);
        }
    });
    return tempUsers;
}
 
function createOrg(org){
    let orgs = db.getItem('orgs');
    if(orgs===null){
       orgs = [];
       orgs.push(org);
       db.setItem('orgs', JSON.stringify(orgs)); 
    }else{
       let tempOrgs = JSON.parse(orgs);
       tempOrgs.push(org);
       db.setItem('orgs', JSON.stringify(tempOrgs));
    }
}

function getAllOrgs(){
    return JSON.parse(db.getItem('orgs'));
}

function removeUser(id){
    let users = db.getItem('users');
    if(users!==null){
        users = JSON.parse(users);
        users.filter(item => item.id !== id);
        db.setItem('users',JSON.stringify(users));
        return true;
    }
    return false;
}

function editUser(user){
    let users = db.getItem('users');
    if(users!==null){
        users = JSON.parse(users);
        users.map(item => {
            if(item.id == user.id){
                return user;
            }else{
                return item;
            }
        });
        db.setItem('users', JSON.stringify(users));
    }
    return false;
}

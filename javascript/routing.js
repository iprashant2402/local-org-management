const loggedIn = db.getItem('currentUser');
if(loggedIn){
    if(window.location.href != 'http://127.0.0.1:5500/views/usersList.html'){
        window.location.replace('/views/usersList.html');
    }
}else{
    if(window.location.href == 'http://127.0.0.1:5500/views/usersList.html'){
        window.location.replace('/views/signin.html');
    }
}
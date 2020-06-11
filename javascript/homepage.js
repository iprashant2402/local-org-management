function signout() {
  logout();
  window.location.replace("/views/signin.html");
}

function refreshUserList() {
  const orgRoot = document.getElementsByTagName("custom-header")[0].shadowRoot;
  const org = orgRoot.getElementById("header-select").value;
  console.log(org);

  const users = getAllUsersForOrg(org);
  const user = getCurrentUser();
  document.getElementById("welcome-note").textContent = "Welcome " + user.id;

  let div = document.getElementsByTagName("tbody")[0];
  div.innerHTML = "";
  users.forEach((item) => {
    let listItem = document.createElement("tr");
    for (let prop in item) {
      if (prop == "id" || prop == "email" || prop == "dob") {
        let td = document.createElement("td");
        td.textContent = item[prop];
        listItem.appendChild(td);
      }
    }
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "table-btn");
    editBtn.textContent = "Edit User";
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "table-btn");
    deleteBtn.setAttribute("onclick", 'deleteUser("'+item.id+'")');
    deleteBtn.textContent = "Delete User";
    td1.appendChild(editBtn);
    td2.appendChild(deleteBtn);
    listItem.appendChild(td1);
    listItem.appendChild(td2);
    div.appendChild(listItem);
  });
}

function deleteUser(id) {
  removeUser(id);
  refreshUserList();
}

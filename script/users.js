let users = JSON.parse(localStorage.getItem("users")) || [];

function addUser(email, password, username) {
    users.push({ email, password, username });
    localStorage.setItem("users", JSON.stringify(users));
}
const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const title = document.getElementById("title")

if (currentUser) {
    title.textContent = `Bonjour : ${currentUser.username}`
}
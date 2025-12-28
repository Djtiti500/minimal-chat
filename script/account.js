const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const title = document.getElementById("welcome-message")

if (currentUser) {
    title.textContent = `Bonjour : ${currentUser.username}`
}

if (!currentUser) {
    window.location.href = "login_page.html"
}
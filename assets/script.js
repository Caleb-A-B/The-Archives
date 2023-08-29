const navbarMenu = document.querySelector(".navbar .links")
const showPopupBtn = document.querySelector(".login-btn")
const hideMenuBtn = navbarMenu.querySelector(".close-btn")
const hidePopupBtn = document.querySelector(".form-popup .close-btn")
const formPopup = document.querySelector(".form-popup")
const menuBtn = document.querySelector(".form-popup")
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a")

menuBtn.addEventListener("click", () => {
    navbarMenuMenu.classList.toggle("show-menu")
})

hideMenuBtn.addEventListener("click", () => menuBtn.click())

//showing popup form
showPopupBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("show-popup")
})

//houdini the popup form
hidePopupBtn.addEventListener("click", ()=> showPopupBtn.click())

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) =>{
        e.preventDefault()
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup")
    })
})
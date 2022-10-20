const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay')

menuBtn.addEventListener('click', function(){
    this.classList.toggle("open")
    menu.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})
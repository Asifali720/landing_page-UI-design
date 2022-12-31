<script>
burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
nav = document.querySelector('.navbar')
navLogo = document.querySelector('.nav-logo')



burger.addEventListener('click', ()=>{
  navList.classList.toggle('.v-class')
  navLogo.classList.toggle('.v-class')
  nav.classList.toggle('.h-nav')
})
</script>
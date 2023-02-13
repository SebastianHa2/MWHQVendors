const navMenu = document.querySelector('.sidenav')
const sideNav = document.querySelector('._navInSideBar')


 if(window.fbUser.email==='nat@mywardrobehq.com' || window.fbUser.email==="sebastian@tangle.io" || window.fbUser.email==='pragmatron@gmail.com'|| window.fbUser.email==='dawidhaczela@gmail.com' || window.fbUser.email === 'npawlak11@gmail.com'){
navMenu.classList.add("showSideNav")
sideNav.classList.remove("navInSideBarHide")
 }
 else{
      navMenu.classList.remove("showSideNav")
      sideNav.classList.add("navInSideBarHide")
      
 }


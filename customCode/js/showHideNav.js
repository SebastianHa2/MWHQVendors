const navMenu = document.querySelector('.sidenav')
const sideNav = document.querySelector('._navInSideBar')


 if(window.fbUser.email==='nat@mywardrobehq.com' || window.fbUser.email==="sebastian@tangle.io" || window.fbUser.email==='pragmatron@gmail.com'|| window.fbUser.email==='dawidhaczela@gmail.com' || window.fbUser.email === 'npawlak11@gmail.com' || window.fbUser.email === 'rob@mywardrobehq.com' || window.fbUser.email === 'eden@mywardrobehq.com' || window.fbUser.email === 'victoria@mywardrobehq.com' || window.fbUser.email === 'lily@mywardrobehq.com' || window.fbUser.email === 'ruby@mywardrobehq.com' || this.fbUser.email === 'sebastian-12323-tangle-test@outlook.com'){
navMenu.classList.add("showSideNav")
sideNav.classList.remove("navInSideBarHide")
 }
 else{
      navMenu.classList.remove("showSideNav")
      sideNav.classList.add("navInSideBarHide")
      
 }


return function(){
const navMenu = document.querySelector('.sidenav')
const sideNav = document.querySelector('._navInSideBar')
if($getUser('showNav')){
$setUser('showNav', false)
navMenu.classList.remove("showSideNav");
sideNav.classList.add("navInSideBarHide")
}
else{
navMenu.classList.add("showSideNav");
sideNav.classList.remove("navInSideBarHide")
$setUser('showNav', true)

}
}
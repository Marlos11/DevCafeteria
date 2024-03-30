
/* const links = document.querySelector('.navBar')

const showMenu=()=>{

  console.log(links)
   
  if( links.style.display === 'block'){
    links.style.display = 'none'
  }else{
    links.style.display = 'block'
  }
  
} */

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("navBar").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
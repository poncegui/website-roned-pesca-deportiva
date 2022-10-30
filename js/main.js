
// JAVASCRIPT NAVBAR
// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     navbar.classList.toggle('active');
//     menu.classList.toggle('fa-times');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     menu.classList.remove('fa-times');
// }

// lllllllllllllllllllll
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle("fa-bars");
	navbar.classList.toggle('open');
}




// JAVASCRIPT FORMULARIOS

    const $form = document.querySelector('#form');  
    const $formBooking = document.querySelector('#formBooking');
    const $buttonMailto = document.querySelector('#btn');
    const $buttonBooking = document.querySelector('#btnBooking');

  

    function handleSubmit(e) {
      e.preventDefault();
      const form = new FormData(this);
      $buttonMailto.setAttribute('href', `mailto:info@roned.es?subject=subject ${form.get('asunto')}  
      &body= CONSULTA:  ${form.get('message')} NOMBRE:  ${form.get('name')}  TELÉFONO:  ${form.get('phone')} `)
      $buttonMailto.click();
      this.reset();
    
    }

    function handleSubmitBooking(e){
      e.preventDefault();
      const formBooking = new FormData(this);
      $buttonBooking.setAttribute('href', `mailto:info@roned.es?subject=subject ${formBooking.get('name')}  
      &body= FECHA ENTRADA  ${formBooking.get('dateStart')}   FECHA SALIDA  ${formBooking.get('dateEnd')}  PERSONAS  ${formBooking.get('pescadores')}   
      DÍAS ${formBooking.get('days')}   TIPO DE PESCA  ${formBooking.get('pesca')}  ALOJAMIENTO  ${formBooking.get('hotel')}  
      HABITACIONES  ${formBooking.get('bedroom')}   BAÑOS  ${formBooking.get('bathroom')}  ALQUIER BARCO?  ${formBooking.get('rentBoat')}`)
      $buttonBooking.click();
      this.reset();

    }


    $form.addEventListener('submit', handleSubmit);
    $formBooking.addEventListener('submit', handleSubmitBooking);

    
// Scroll up


document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){


    window.scrollTo({
     behavior:"smooth",
     top:0
    })



}

//   let currentScroll = document.documentElement.scrollTop;

//     if (currentScroll > 0){
//         window.requestAnimationFrame(scrollUp);
//         window.scrollTo (0, currentScroll - (currentScroll / 10));
//     }
//     console.log("click")
// }


buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    let scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    } else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}

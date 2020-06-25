const toggleButton = document.getElementById("navi-toggle");
const elements = document.getElementsByClassName('navigation__item');
const inicio = document.getElementById("inicio");
const mision = document.getElementById("mision");
const servicios = document.getElementById("servicios");
const equipo = document.getElementById("equipo");
const contacto = document.getElementById("contacto");

let toggleState = false;

toggleButton.addEventListener('click', () => {
    toggleState = !toggleState;
})

Array.from(elements).forEach( function(element,index )  {
    element.addEventListener('click', () => {
        if(toggleState) {

            toggleState = false;
            toggleButton.checked = false;
           
            switch(index) {
                case 0:
                    inicio.scrollIntoView({ behavior: 'auto', block: 'center'});
                break;
                case 1:
                    mision.scrollIntoView({ behavior: 'auto', block: 'center'});
                break;
                case 2:
                    servicios.scrollIntoView({ behavior: 'auto', block: 'center'});
                break;
                case 3:
                    equipo.scrollIntoView({ behavior: 'auto', block: 'center'});
                break;
                case 4:
                    contacto.scrollIntoView({ behavior: 'auto', block: 'center'});
                break;
            }
        }
    })
});

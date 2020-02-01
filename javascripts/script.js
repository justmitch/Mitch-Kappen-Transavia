/*Voor het maken van de filter heb ik de code van Joost gebruikt*/
/*https://codepen.io/joostf/pen/MOxQex*/
var body = document.querySelector('body');
var btnFilterOpen = document.querySelector('header button');
var btnFilterClose = document.querySelector('form button');

btnFilterOpen.addEventListener('click', openFilter);
btnFilterClose.addEventListener('click', closeFilter);

function openFilter() {
  body.classList.add('filter');
}

function closeFilter(e) {
  e.preventDefault()
  body.classList.remove('filter');
}

<!--Functie voor het afspelen en pauzeren audio op detailpagina-->
                    var vid = document.getElementById("myVideo");

                    function playVid() {
                      vid.play();
                    }

                    function pauseVid() {
                      vid.pause();
                    }

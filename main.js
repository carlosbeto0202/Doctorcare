window.addEventListener('scroll', onScroll)

const navigation = document.getElementById("navigation")

onScroll()

function onScroll(){ /* on scroll é uma funcion da Doom do JS, sig= quando eu realizar um scroll */
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
  
}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2;
    
    /* verificar se a seção passou da linha 
    Quais dados vou precisar ?  */
    /* console.log(+.offsetTop) // alterar o + para a secao que vou precisar ex: home, about, footer*/

  /*   console.log(services.offsetTop)
    console.log(home.offsetHeight) */

    const sectionTop = section.offsetTop; //topo da secao, onde inicia 
    const sectionHeight = section.offsetHeight; // altura da secao
    // o top da secao chegou ou passou a linha alvo 
    const sectionTopReachOrPassedTargtLine = targetLine >= sectionTop;

    // verica se a base esta abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight; //a seção termina a onde 
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    
    /* console.log(`este eh o target ${sectionTopReachOrPassedTargtLine}`); */

    const sectionBoundaries = sectionTopReachOrPassedTargtLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute(`id`)
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove(`active`)
    if (sectionBoundaries) {
        menuElement.classList.add(`active`)
    }
    
}

function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add("scroll")
    } else{ 
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll(){
    if (scrollY > 400){
        backToTopButton.classList.add("show")
    } else{ 
        backToTopButton.classList.remove("show")
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')

}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services .header,
    #services .card,
    #about,
    #about header,
    #about .content`);


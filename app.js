gsap.registerPlugin(ScrollTrigger); //registro el plugin ScrollTrigger

gsap.defaults({ease: 'none', duration: 2}); //estilos por defecto(?

const tl = gsap.timeline(); //creo una linea del tiempo (se ejecuta una animacion atras de la otra. No todas al mismo tiempo)


tl.from('.section__1', {color:'black'}) //les digo que a las secciones que se van a mover en estas direcciones]
tl.to('.section__1', {color:'transparent'})

tl.from('.section__2', {xPercent: -100, opacity:0}) //les digo que a las secciones que se van a mover en estas direcciones]
tl.to('.section__2', {scale:0.8, color:'white'})

tl.from('.hola', {color:'white'})
tl.to('.hola', {color:'black'})

//tl.from('.section__3', {xPercent: 100,})
tl.from('.section__3', {xPercent: -100})
tl.to('.section__3', { backgroundColor:'white'})
tl.from('.section__4', {yPercent: -100})
tl.to('.section__4', {color:'transparent'})
//tl.from('.section__4', {scale:4, opacity:0})
//tl.to('.section__4', {scale:0.3})

tl.from('.section__5', {yPercent: 100})
tl.to('.section__5', {color:'transparent'})

tl.from('.span', {color:'white'})
tl.to('.span', {color:'transparent'})


tl.from('.text', {xPercent: 250})
tl.to('.text', {xPercent: -250})

tl.from('.text_2', {xPercent: -900})
tl.to('.text_2', {xPercent: 400})

ScrollTrigger.create({
    animation:tl,
    trigger: '.contenedor__Animacion',
    markers:true, //muestra las marcas de inicio y fin
    start: 'bottom bottom',//acomodo las marcas de inicio
    end: '+=6000', //La Animacion termina 4000 px abajo]
    pin: true, //clava en la pantalla el contenedor que contiene todas las animaciones]
    scrub: true,
})


TweenMax.to(".overlay p", 2, {
    opacity:0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay img", 2, {
    opacity:0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInout
   })

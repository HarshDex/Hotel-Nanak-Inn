gsap.registerPlugin(ScrollTrigger);

var rellax = new Rellax('.rellax');

const header = document.querySelector('.bedroom-heading');

gsap.to(header,{
    height:0,
    opacity : 0,
    scrollTrigger : {
        trigger: ".page1",
        start : "60% 40%",
        end : "70% 30% ",
        scrub : true,
        markers : true,
    }
})
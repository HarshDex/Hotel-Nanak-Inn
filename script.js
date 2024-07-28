gsap.registerPlugin(ScrollTrigger);

document.body.addEventListener("mousemove",(dets)=>{
    console.log(dets.x,dets.y);
    gsap.to('.cursor',{
        x : dets.clientX,
        y : dets.clientY
    })
})

gsap.from('.menu',{
    opacity : 0,
    delay : 2,
})

// loader animation starts
const loader = document.querySelector('.loader h1');
let count = 0;

// Set the interval to update the countdown
const timer = setInterval(() => {
    if (count <= 100) {
        loader.textContent = count;
        count+=5;
    } else {
        clearInterval(timer);

        // Start the existing GSAP animation once the countdown reaches 100
        const loadingTime = gsap.timeline();
        loadingTime.to('.loader h1', {
            opacity: 0,
            duration: 1,
        }).to('.loader', {
            opacity: 0,
            duration: 2,
            onComplete: () => {
                document.querySelector('.loader').style.display = 'none'; // Hide loader after animation
            }
        });
    }
}, 30);
// loader animation ends 



// page1 animation starts
const tl = gsap.timeline();
const page1ScrollTrigger = {
    trigger : ".page1",
    scroller : "body",
    start : "center center",
    end : 'bottom center',
    scrub : 2,
}
tl.to('.page1-part1',{
    y : "-100%",
    delay : 1,
    scrollTrigger : page1ScrollTrigger,
})
tl.to('.page1-part2',{
    delay : 1,
    y : "100%",
    scrollTrigger : page1ScrollTrigger,
})
tl.from('.page1-inside-container1 h1',{
    opacity : 0,
    scrollTrigger : page1ScrollTrigger
})

gsap.to('.page1',{
    scrollTrigger : {
        trigger : '.page1',
        scroller : 'body',
        start: "bottom bottom",
        end : "bottom -200%",
        pin : true,
    }
})

const tl2 = gsap.timeline();

tl2.to(['#D','#A2'], {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom 92%',
        end: 'bottom 40%',
        scrub: 1,
    }
})
.to(['#H1', '#L'], {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom 94%',
        end: 'bottom 40%',
        scrub: 1,
    }
})
.to(['#A1', '#U'], {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom 96%',
        end: 'bottom 40%',
        scrub: 1,
    }
})
.to(['#R', '#H2'], {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom 98%',
        end: 'bottom 40%',
        scrub: 1,
    }
})
.to('#C', {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom bottom',
        end: 'bottom 40%',
        scrub: 1,
    }
});

// page1 inside animations starts here
const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1-inside-container2-image1",
        scroller: 'body',
        start: "top 45%",
        end: "top -50%",
        scrub: 3,
    }
});

tl4.from('.page1-inside-container2-image1', {
    width: "20vw",
    height: "40vh",
    y: "200%",
    duration: 1,
})
.to('.page1-inside-container2-image1', {
    y: 0,
    duration: 1,
    delay: 1
})
.to('.page1-inside-container2-image1', {
    y: "-200%",
    duration: 1,
    width: "20vw",
    height: "40vh",
});


const page1Inside = document.querySelector('.page1-inside-container2-image1');
page1Inside.addEventListener('mousemove',(dets)=>{
    gsap.to('.page1-inside-container2-image1-text',{
        opacity : 1,
        y : dets.clientY-70,
    })
})
page1Inside.addEventListener('mouseleave',()=>{
    gsap.to('.page1-inside-container2-image1-text',{
        opacity : 0,
    })
})
page1Inside.addEventListener('mousemove',()=>{
    console.log("cursor visible")
    gsap.to('.cursor',{
        scale : 1,
    })
})
page1Inside.addEventListener('mouseleave',()=>{
    console.log("cursor hidden")
    gsap.to('.cursor',{
        scale : 0,
    })
})

// page1 inside animations ends here

// page 1 ends here

// menu animations starts here

const tl3 = gsap.timeline();

tl3.to('#contact', {
    x: "-7em",
    duration: 0.15,
})
.to('#service', {
    x: "-14em",
    duration: 0.15,
})
.to('#studio', {
    x: "-21em",
    duration: 0.15,
})
.to('#work', {
    x: "-28em",
    duration: 0.15,
});

tl3.pause();

let flag = false;
document.querySelector('.menu').addEventListener('click', () => {
    if (!flag) {
        tl3.play();
    } else {
        tl3.reverse();
    }
    flag = !flag;
});
// menu animation ends here 
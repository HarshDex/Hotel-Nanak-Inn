gsap.registerPlugin(ScrollTrigger);

var rellax = new Rellax('.rellax');

var map = L.map('map').setView([29.8477, 80.5365], 13);  // Your hotel coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: ''
}).addTo(map);

L.marker([29.8477, 80.5365]).addTo(map)  // Marker at hotel location
.bindPopup('Nanak Hotel')
.openPopup();


document.body.addEventListener("mousemove",(dets)=>{
    gsap.to('.cursor',{
        x : dets.clientX -5,
        y : dets.clientY -10,
    })
})

// loader animation starts
const loader = document.querySelector('.loader h1');
let count = 0;

// Set the interval to update the countdown
gsap.from('.loading-image',{
    opacity : 0,
    duration: 1.3,
    onComplete: () => {
        document.querySelector('.loading-image').style.display = 'none'; 
    }
})
const timer = setInterval(() => {
    if (count <= 100) {
        loader.textContent = count+'%';
        count+=5;
    } else {
        clearInterval(timer);

        // Start the existing GSAP animation once the countdown reaches 100
        const loadingTime = gsap.timeline();
        loadingTime.to('.loader h1', {
            opacity: 0,
            duration: 1,
        })
        .to('.loader', {
            opacity: 0,
            duration: 2,
            onComplete: () => {
                document.querySelector('.loader').style.display = 'none'; 
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

// page1 inside animations ends here

// page 1 ends here

// menu animations starts here
const menuTl = gsap.timeline({paused: true});

menuTl
.to('.menu',{
    y : '100%',
    duration : 0.5,
})
.from('.item',{
    y : "-35vw",
    stagger : 0.2,
})

document.querySelector('.menu-button').
addEventListener("click",()=>{
    menuTl.play();
})
document.querySelector('.close-button').addEventListener('click',()=>{
    menuTl.reverse();
})

gsap.to('.menu-button',{
    color : "black",
    scrollTrigger : {
        trigger : ".page2",
        start : 'top 30%',
        end : 'top 10%',
        scrub : true,
    }
})
// menu animation ends here 




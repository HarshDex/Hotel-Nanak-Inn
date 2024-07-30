gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function() {
//     const audio = document.getElementById("background-audio");
//     const toggleButton = document.getElementById("toggle-sound");

//     // Function to update button icon based on audio state
//     function updateButtonIcon() {
//         if (audio.paused) {
//             toggleButton.innerHTML = `<i class="ri-volume-mute-fill"></i>`;
//         } else {
//             toggleButton.innerHTML = `<i class="ri-volume-up-line"></i>`;
//         }
//     }

//     // Toggle play/pause on button click
//     toggleButton.addEventListener("click", function() {
//         if (audio.paused) {
//             audio.play().catch(error => {
//                 console.error('Error playing audio:', error);
//             });
//         } else {
//             audio.pause();
//         }
//         updateButtonIcon();
//     });

//     // Attempt to play the audio when the page loads
//     audio.play().then(() => {
//         updateButtonIcon();
//     }).catch(error => {
//         console.error('Error playing audio:', error);
//     });
// });


document.body.addEventListener("mousemove",(dets)=>{
    gsap.to('.cursor',{
        x : dets.clientX -5,
        y : dets.clientY -10,
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
        loader.textContent = count+'%';
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
        end : "bottom 0%",
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
    y : "-100%",
    stagger : 0.2,
})

document.querySelector('.menu-button').
addEventListener("click",()=>{
    menuTl.play();
})
document.querySelector('.close-button').addEventListener('click',()=>{
    menuTl.reverse();
})
// menu animation ends here 


// page2 aniation

gsap.to('.page2', {
    backgroundColor:'#F8F2EB',
    delay : 0.3,
    scrollTrigger : {
        trigger : ".page2",
        start : 'top 80%',
        end : 'top 40%',
        scrub : true,
    }
})
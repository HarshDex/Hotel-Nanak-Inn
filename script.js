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

if (window.innerWidth <= 600) {
  // For small devices (below 576px)
  menuTl
    .to('.menu', {
      y: '100%',
      // Optionally adjust or remove the duration
      duration: 0.3 // Smaller duration on small devices if needed
    })
    .from('.item', {
      stagger: 0.2, // Keep stagger effect only
    });
} else {
  // For larger devices
  menuTl
    .to('.menu', {
      y: '100%',
      duration: 0.5,
    })
    .from('.item', {
      y: '-35vw',
      stagger: 0.2,
    });
}

document.querySelector('.menu-button').addEventListener("click", () => {
  menuTl.play();
});

document.querySelector('.close-button').addEventListener('click', () => {
  menuTl.reverse();
});

// ScrollTrigger logic (remains the same)
gsap.to('.menu-button', {
  color: "black",
  scrollTrigger: {
    trigger: ".page2",
    start: 'top 30%',
    end: 'top 10%',
    scrub: true,
  }
});

// menu animation ends here 


// Get references to HTML elements
const sliderContainer = document.querySelector(".slider-container");
const slidesLeft = document.querySelector(".left-slide");
const slidesRight = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

// Calculate the total number of slides
const slidesLength = slidesRight.querySelectorAll("div").length;

// Initialize the active slide index
let activeSlidesIndex = 0;

// Set initial position for left slides
slidesLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add click event listeners to up and down buttons
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// Function to change the active slide
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlidesIndex++;
    if (activeSlidesIndex > slidesLength - 1) {
      activeSlidesIndex = 0;
    }
  } else if (direction === "down") {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = slidesLength - 1;
    }
  }

  // Update the transform property to change the slide position
  slidesRight.style.transform = `translateY(-${
    activeSlidesIndex * sliderHeight
  }px)`;
  slidesLeft.style.transform = `translateY(${
    activeSlidesIndex * sliderHeight
  }px)`;
};

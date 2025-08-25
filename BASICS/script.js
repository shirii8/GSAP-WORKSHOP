gsap.to(".box1",{
    x:300,
   y:20,
    duration: 2,
    delay:1,
    repeat:2,
})

gsap.from(".box2",{
    x:1200,
    duration:2,
    opacity: 0,
    delay:1,
    borderRadius:"20%",
    repeat: -1,
     ease: "elastic.out(.1, 0.3)" // amplitude, period
})

gsap.to(".box3", {
    x:1200,
    y:30,
    duration:2,
    delay:1,
    rotate: 360,
    scale:0.5,
    borderRadius:"50%",
    backgroundColor: "blue",
     ease: "elastic.out(0.2, 10)" ,// amplitude, period
     repeat:1,
})

// Amplitude (a)
// Controls how strong the overshoot (bounce) is.

// Higher amplitude = bigger first bounce
// elastic.out(1, 0.3) → normal bounce
// elastic.out(2, 0.3) → much stronger bounce

// Period (p)
// Controls the time between bounces (frequency).
// Smaller period = faster bounces.
// Larger period = slower, stretched-out bounces.
// elastic.out(1, 0.2) → quick shaky bounce
// elastic.out(1, 0.8) → slower, stretched bounce

// gsap.from(".textAnimation h1", {
//     y:30,
//     duration:2,
//     delay:1,
//     opacity:0,
//     stagger:1,
// })

var tl = gsap.timeline();  //note the ()
tl.from("h1", {
    duration: 0.8,
    delay:1,
    y:30,
    opacity: 0,
    repeat:-1,
    stagger:0.2

})

gsap.fromTo()
// This gives you the most control, letting you define both the starting and ending states of the animation explicitly.
// JavaScript (app.js):

// gsap.fromTo(target, {fromVars}, {toVars})
gsap.fromTo(".box",
  { // Starting state
    opacity: 0,
    y: -100
  },
  { // Ending state
    opacity: 1,
    y: 100,
    duration: 2
  }
);

// Stagger
// This property animates a group of elements with a slight delay between each one.

gsap.to(".box", {
  y: 100,
  duration: 1,
  stagger: 0.2 // Each box starts 0.2s after the previous one
});

// Repeat & Yoyo
// ●	repeat: Makes an animation run more than once. Use -1 for an infinite loop.
// ●	yoyo: If true, the animation will go back and forth. It must be used with repeat.

gsap.to(".box", {
  x: 400,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Easing
// Easing controls the rate of change of an animation, giving it a more natural feel.

gsap.to(".box", {
  x: 600,
  duration: 2,
  ease: "bounce.out"
});

________________________________________
// Sequencing with Timelines
// Timeline in GSAP
// A timeline is a container for multiple animations that lets you sequence them and control them as a single unit.

let tl = gsap.timeline();

tl.to(".box", { x: 300, duration: 1, rotation: 360 })
  .to(".box", { y: 200, duration: 1, backgroundColor: "#dc3545" })
  .to(".box", { x: 0, duration: 1, rotation: 0 });

________________________________________
// Advanced Techniques with GSAP
// ScrollTrigger: Animating on Scroll 🚀
// This plugin triggers animations based on the user's scroll position.



gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: true,
  },
  x: 500,
  rotation: 360,
  duration: 3
});


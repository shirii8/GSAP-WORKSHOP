// Function for page 1 animation (initial load animations)
const page1animation = () => {
  // Create a GSAP timeline for sequencing animations
  var tl = gsap.timeline();

  // Animate nav elements (logo, menu items, button)
  tl.from("nav h1, nav ul, nav button", {
    y: -10,          // move slightly upwards
    duration: 0.7,   // animation duration
    opacity: 0,      // fade in from invisible
    delay: 1,        // wait 1 second before starting
    stagger: 0.15,   // animate one after another (0.15s gap)
  });

  // Animate the main heading in .center-1
  tl.from(".center-1 h1", {
    x: -300,         // slide in from left
    opacity: 0,      // fade in
    duration: 0.5,   // duration
  });

  // Animate paragraph in .center-1
  tl.from(".center-1 p", {
    x: -300,         // slide in from left
    opacity: 0,      // fade in
    duration: 0.5,
  });

  // Animate button in .center-1
  tl.from(".center-1 button", {
    opacity: 0,      // fade in
    duration: 0.5,
  });

  // Animate image inside .center-2
  tl.from(
    ".center-2 img",
    {
      opacity: 0,    // fade in
      x: 300,        // slide in from right
      duration: 0.5,
    },
    "-=0.5"          // start 0.5s earlier (overlap with previous animation)
  );

  // Animate images at the bottom of section-1
  tl.from(".section-1-bottom img", {
    y: 20,           // move upward into place
    opacity: 0,      // fade in
    duration: 0.5,
    stagger: 0.2,    // animate one after another
  });
};

// Run the page1animation function immediately
page1animation();


// Create a second timeline for scroll-triggered animations
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",   // animation starts when section-2 enters viewport
    start: "top 80%",        // start when section top reaches 80% of viewport
    scroller: "body",        // body is used as scroller
    end: "top -5%",          // end when section top reaches -5% (above viewport)
    scrub: 2,                // smooth scrubbing (ties animation to scroll)
  },
});

// Animate services section
tl2.from(".services", {
  y: 30,             // slide up slightly
  opacity: 0,        // fade in
  duration: 0.5,
});

// Animate first line left element
tl2.from(
  ".element.line-1.left",
  {
    x: -300,         // slide in from left
    opacity: 0,      // fade in
    duration: 0.8,
  },
  "animation"        // label to sync with right element
);

// Animate first line right element
tl2.from(
  ".element.line-1.right",
  {
    x: 300,          // slide in from right
    opacity: 0,
    duration: 0.8,
  },
  "animation"        // synced with line-1 left
);

// Animate second line left element
tl2.from(
  ".element.line-2.left",
  {
    x: -300,         // slide in from left
    opacity: 0,
    duration: 0.8,
  },
  "animation-2"      // label to sync with line-2 right
);

// Animate second line right element
tl2.from(
  ".element.line-2.right",
  {
    x: 300,          // slide in from right
    opacity: 0,
    duration: 0.8,
  },
  "animation-2"      // synced with line-2 left
);

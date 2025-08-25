// Select the custom cursor element
const cursor = document.querySelector(".cursor");

// Select the main section where hover effects will happen
const main = document.querySelector("#main");


// Track mouse movement across the whole window
window.addEventListener("mousemove", (e) => {
  
  // Animate cursor to follow the mouse position smoothly
  gsap.to(cursor, {
    x: e.clientX,          // set X position to mouse X
    y: e.clientY,          // set Y position to mouse Y
    duration: 0.2,         // smooth trailing effect (0.2s)
    ease: "power1.out"     // easing for smooth deceleration
  });
});


// When mouse enters the main section
main.addEventListener("mouseenter", () => {
  cursor.textContent = "View More";  // show text inside cursor
  
  // Animate cursor into a pill-shaped button
  gsap.to(cursor, {
    width: 100,             // increase width
    height: 35,             // increase height
    borderRadius: "20px",   // make pill shape
    padding: "0 10px",      // add space for text
    backgroundColor: "#ffffff8a",  // semi-transparent white
    duration: 0.3,          // animation duration
    ease: "power2.out"      // smooth ease-out transition
  });
});


// When mouse leaves the main section
main.addEventListener("mouseleave", () => {
  cursor.textContent = "";  // remove text inside cursor
  
  // Animate cursor back to original circle
  gsap.to(cursor, {
    width: 20,              // shrink back
    height: 20,             // shrink back
    borderRadius: "50%",    // make it circular again
    padding: 0,             // remove padding
    backgroundColor: "#fade5e", // restore original color
    duration: 0.3,          // animation duration
    ease: "power2.inOut"    // smooth in & out easing
  });
});
























































































// const cursor = document.querySelector(".cursor");
// const main = document.querySelector("#main");

// window.addEventListener("mousemove", (e) => {
//   gsap.to(cursor, {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 0.2,
//     ease: "power1.out"
//   });
// });



// main.addEventListener("mouseenter", function () {
//   cursor.innerHTML = 'view more';
//   gsap.to(cursor, {
//     backgroundColor: "#ffffff8a",
//     scale: 1.3,
//   });
// });

// main.addEventListener("mouseleave", function () {
//   cursor.innerHTML = '';
//   gsap.set(cursor, {
//     scale: 0.8,
//     backgroundColor: "#fff"
//   });
// });

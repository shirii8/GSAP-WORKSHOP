function breakTheText() {
    const h1 = document.querySelector("h1"); // Selects the first `<h1>` element from the document.Stored in the variable `h1`
    const h1Text = h1.textContent;

    const splittedText = h1Text.split(""); // splits the string into individual characters 
    // Splits the text into an **array of characters**.  
// - `"Hello"` → `["H", "e", "l", "l", "o"]`.

    const halfValue = splittedText.length / 2;

    let clutter = "";
    //Initializes an empty string.  
//- This will be used to **build new HTML code** by wrapping each character in `<span>` tags.



    splittedText.forEach(function(elem, index) {
        
        if (index < halfValue) {
            clutter += `<span class="a">${elem}</span>`;

//They make it easier to:
// Embed variables directly inside strings (string interpolation).
// Write multi-line strings.
// Use expressions inside strings.

        } else {
            clutter += `<span class="b">${elem}</span>`;
        }
    });

// - If the character is in the **first half** → wrap it in `<span class="a">`.  
// - If it’s in the **second half** → wrap it in `<span class="b">`.  
// - `${elem}` is a **template literal** → it injects the actual character into the string.  
// - `&nbsp;` is a non-breaking space → adds spacing between characters.  

// Example (if text = `"Hello"`):  
// ```html
// <span class="a">H &nbsp;</span>
// <span class="a">e &nbsp;</span>
// <span class="b">l &nbsp;</span>
// <span class="b">l &nbsp;</span>
// <span class="b">o &nbsp;</span>

// Final Effect
// Your <h1> text is split into two halves:
// First half → styled with class "a"
// Second half → styled with class "b"

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a",{
    y:50,
    duration: 0.1,
    stagger:0.1,
    delay:0.5,
    opacity:0,
    ease:"power.out",
   
})

gsap.from("h1 .b",{
    y:50,
    duration: 0.1,
    stagger:-0.1,
    delay:0.5,
    opacity:0,
    ease:"power.out"
})
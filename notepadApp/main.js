//Author's note: Capitalized words (EXAMPLE) are important vocabulary words. Understanding these words and what you mean when you say them will give you a much deeper understanding of what you are doing.

// In our index.html file, we told the computer that when the button gets clicked, it should run a function with the name of "clicked" and pass it the event. Let's break that down into something a little more understandable:

//First, we have to define our function. Let's use a function declaration for this exercise; this means that we are DECLARING that a FUNCTION exists. 

//Remember, we told the computer that our function would be called "clicked" so we have to name it that here. JavaScript is case-sensitive, so "CLICKED" will not work, and neither will "Clicked" or "cLICKED".
function clicked(e) {
    //Now that our function is declared, we need to DEFINE it. The definition of the function is what commands will be run by the computer when the function is INVOKED.

    //First, it's worth noting the "e" inside of the parentheses after our function name. That "e" is the "event" that we passed in from the HTML. We have to have that event to refer to so we can do this:
    e.preventDefault();
    //We must preventDefault to keep the page from refreshing when we click our button. Normally, this is considered a "submit" event and would cause the page to refresh. This is not a thorough explanation, but let's move on. Just don't forget you need to do this when you submit a form!

    //Next, let's get the text out of the text input that our user can type into:
    let input = document.getElementById("new-item").value;
    //Tip: Here's another DECLARATION. We're declaring a VARIABLE this time. The easiest way to think of a variable is a container, like a cardboard box with the name we've given it written on the side. Our box can hold anything, like numbers or strings! Any time we REFERENCE, or look at the contents of our box, we see what has been ASSIGNED to it, or what it contains.

    //So, we're getting the element by the ID attached to it, then selecting -only- the "value" property, which is the text our user entered.

    //Next, let's grab the <ul> list element from our HTML so we can manipulate it.
    let list = document.getElementById("note-list");

    //Let's use the createElement METHOD that's part of the "document" object to create an "li" tag. This is the same as an HTML <li> </li>
    let note = document.createElement("li")

    //Now that we've created our list item, we can modify the PROPERTIES. The text the element contains is a PROPERTY! So, we can set that text to equal something. In this case, that something is our variable from earlier, "input", which is just a placeholder for whatever our user typed in to the input before they hit submit.
    note.innerText = input
    //So, remember- we're setting the innerText property of our note (which is an <li>) to be the same as whatever is inside of our box labeled "input".

    //And finally, we use a method which is part of the <ul> which we're referring to as "list" to attach the <li> which we're referring to as "note" to it.

    //In plainer English, all HTML lists have a superpower: they can attach other things to themselves! We just have to tell the list what we want it to attach to itself. We do that by passing the thing to attach into the parentheses.
    list.appendChild(note)
}
//And that's our app!
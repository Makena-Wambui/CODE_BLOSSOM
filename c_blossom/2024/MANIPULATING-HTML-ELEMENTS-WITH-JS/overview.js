/*
JS can be used to manipulate HTML elements on a webpage

We can use JS to access the html elements,
then modify their attributes, styles, and content.

In this way, we are able to create dynamic and interactive webpages

There are several methods we can use to identify the HTML elements we want to manipulate using JS


1. using the element's id:
    we assign an id to an html element;
    then use document.getElementById() method to access the element

2. using the element's class name:
    we assign a class name to an html element
    then use document.getElementsByClassName() method to access the element

3. using the element's tag name:
    we can use document.getElementsByTagName() method to access all elements with a specific tag name

ACCESSING PROPERTIES OF AN ELEMENT:
    Once you identify what html element you want to manipulate,
    you can access its properties using JS dot notation

    To access text content of an element, we can use the innerText or innerHTML property

    To access the style properties of an element, we can use the style property

    To access the attributes of an element, we can use the getAttribute() method

USING EVENT LISTENERS TO RESPOND TO USER INTERACTIONS:
    Use event listeners to listen for user interactions with the webpage such as clicks, hovers, and key presses.

    Event listeners - functions executed when a particular event occurs

    eg we can use the onclick event listener to execute a function when a user clicks on a button
*/

// getElementById() - to target a specific element with a specific id
// ids are unique to each element, so this method will only return one element

// getElementsByClassName() - to target all elements with a specific class name
// returns a collection of elements

// getElementsByTagName() - to target all elements with a specific tag name
// returns a collection of elements

// examples:
let element1 = document.getElementById("id1");

let elements = document.getElementsByClassName("class1");

let elements2 = document.getElementsByTagName("p");

// now we can access the properties and methods of the elements we have selected
/*
WHAT ARE PROPERTIES:
They are values that describe the state of an element;
innertext, innerHTML, value, style, and src attribute are all properties of an element
*/

/*
WHAT ARE METHODS:
They are functions that can be called on an element;
They allow you to manipulate the element in some way

EG changing its innerHTML, classname or style properties

*/

// Examples of how you can access an element's properies and methods

// Change the content of an element
element1.innerText = "Hello World";

// Add a new CSS class to the element
element1.classList.add("new-class");

// change the bg color of an element
element1.style.backgroundColor = "blue";

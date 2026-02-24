# Assignment-4

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answers: These are methods to find or select HTML elements so you can change them with JavaScript.
getElementById: Finds one specific element using its unique id.
getElementsByClassName: Finds all elements that have a specific class name.
querySelector: A modern tool that finds the first element using CSS selectors (like .myClass or #myId).
querySelectorAll: Finds all elements matching a CSS selector and puts them in a list.


2. How do you create and insert a new element into the DOM?
    Answers: Create: Use document.createElement('div').
Add Content: Use .textContent = "Hello" to add text.
Insert: Use .appendChild() to put it inside a parent element on the page.

3. What is Event Bubbling? And how does it work?
    Answers: When an event like a click happens on an element, it first runs on that element, then bubbles up to its parent, then the grandparent, and so on, until it reaches the very top. It’s like a bubble rising in water.
   
4. What is Event Delegation in JavaScript? Why is it useful?
    Answers: Instead of adding an event listener to every single child (like every <li> in a <ul>), you add one listener to the parent. Because of Bubbling, the parent can catch events from its children.
   
5. What is the difference between preventDefault() and stopPropagation() methods?
     Answers: preventDefault(): Stops the browser's default action (like stopping a link from opening or a form from refreshing).
stopPropagation(): Stops the event from bubbling up to the parents. It keeps the event contained to that one element.

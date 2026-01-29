# JavaScript Event Listeners

## Overview

Event listeners allow JavaScript to respond to user interactions and system events. They are fundamental to interactive web applications.

## Adding Event Listeners

### Method 1: addEventListener() - Recommended

```javascript
// Basic syntax
element.addEventListener(event, callback);
element.addEventListener(event, callback, options);

// Example
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// With arrow function
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// With options
button.addEventListener("click", handleClick, { once: true }); // Fires once
```

### Method 2: Inline HTML

```html
<button onclick="handleClick()">Click me</button>

<script>
  function handleClick() {
    console.log("Button clicked!");
  }
</script>
```

### Method 3: Direct Property Assignment

```javascript
const button = document.getElementById("myButton");
button.onclick = function () {
  console.log("Button clicked!");
};
```

---

## Main Mouse Events

### click

Fires when element is clicked.

```javascript
button.addEventListener("click", (event) => {
  console.log("Clicked at:", event.clientX, event.clientY);
});
```

### dblclick

Fires when element is double-clicked.

```javascript
element.addEventListener("dblclick", () => {
  console.log("Double clicked!");
});
```

### mousedown

Fires when mouse button is pressed down.

```javascript
element.addEventListener("mousedown", (event) => {
  console.log("Mouse button pressed:", event.button);
  // 0 = left, 1 = middle, 2 = right
});
```

### mouseup

Fires when mouse button is released.

```javascript
element.addEventListener("mouseup", () => {
  console.log("Mouse button released");
});
```

### mouseover

Fires when mouse enters element (bubbles).

```javascript
element.addEventListener("mouseover", () => {
  console.log("Mouse over element");
});
```

### mouseout

Fires when mouse leaves element (bubbles).

```javascript
element.addEventListener("mouseout", () => {
  console.log("Mouse left element");
});
```

### mouseenter

Fires when mouse enters element (does not bubble).

```javascript
element.addEventListener("mouseenter", () => {
  console.log("Mouse entered element");
});
```

### mouseleave

Fires when mouse leaves element (does not bubble).

```javascript
element.addEventListener("mouseleave", () => {
  console.log("Mouse left element");
});
```

### mousemove

Fires when mouse moves over element.

```javascript
element.addEventListener("mousemove", (event) => {
  console.log("Position:", event.clientX, event.clientY);
});
```

---

## Main Keyboard Events

### keydown

Fires when any key is pressed (before character is generated).

```javascript
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
  console.log("Key code:", event.keyCode); // Deprecated but still works
  console.log("Code:", event.code);
});
```

### keyup

Fires when key is released.

```javascript
document.addEventListener("keyup", (event) => {
  console.log("Key released:", event.key);
});
```

### keypress

Fires when character is generated (deprecated, use keydown instead).

```javascript
input.addEventListener("keypress", (event) => {
  console.log("Character:", event.key);
});
```

---

## Form Events

### submit

Fires when form is submitted.

```javascript
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  console.log("Form submitted");
  // Process form data
});
```

### change

Fires when input value changes and loses focus.

```javascript
const input = document.getElementById("myInput");
input.addEventListener("change", (event) => {
  console.log("Value changed to:", event.target.value);
});
```

### input

Fires as user types/modifies input value (in real-time).

```javascript
const input = document.getElementById("myInput");
input.addEventListener("input", (event) => {
  console.log("Current value:", event.target.value);
});
```

### focus

Fires when element receives focus.

```javascript
input.addEventListener("focus", () => {
  console.log("Input focused");
  input.style.borderColor = "blue";
});
```

### blur

Fires when element loses focus.

```javascript
input.addEventListener("blur", () => {
  console.log("Input blurred");
  input.style.borderColor = "gray";
});
```

---

## Document/Window Events

### load

Fires when entire page (including images) has loaded.

```javascript
window.addEventListener("load", () => {
  console.log("Page fully loaded");
});
```

### DOMContentLoaded

Fires when DOM is ready (before images load).

```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");
});
```

### scroll

Fires when user scrolls page.

```javascript
window.addEventListener("scroll", () => {
  console.log("Scroll position:", window.scrollY);
});
```

### resize

Fires when window is resized.

```javascript
window.addEventListener("resize", () => {
  console.log("New size:", window.innerWidth, window.innerHeight);
});
```

### beforeunload

Fires before user leaves page.

```javascript
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "Are you sure you want to leave?";
});
```

---

## Touch Events

### touchstart

Fires when touch begins.

```javascript
element.addEventListener("touchstart", (event) => {
  console.log("Touch points:", event.touches.length);
});
```

### touchmove

Fires when finger moves on screen.

```javascript
element.addEventListener("touchmove", (event) => {
  event.preventDefault();
  const touch = event.touches[0];
  console.log("Position:", touch.clientX, touch.clientY);
});
```

### touchend

Fires when touch ends.

```javascript
element.addEventListener("touchend", (event) => {
  console.log("Touch ended");
});
```

---

## Event Object Properties

```javascript
element.addEventListener("click", (event) => {
  // Important properties:
  event.type; // 'click'
  event.target; // Element that triggered event
  event.currentTarget; // Element event listener is on
  event.preventDefault(); // Stop default action
  event.stopPropagation(); // Stop bubbling
  event.clientX; // Mouse X position
  event.clientY; // Mouse Y position
  event.key; // Keyboard key pressed
  event.timestamp; // When event occurred
});
```

---

## Event Delegation

Handle events on parent element for multiple children.

```javascript
const list = document.getElementById("myList");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked item:", event.target.textContent);
  }
});
```

---

## Removing Event Listeners

```javascript
// Define callback outside
function handleClick() {
  console.log("Clicked");
}

// Add listener
button.addEventListener("click", handleClick);

// Remove listener (must use same reference)
button.removeEventListener("click", handleClick);
```

---

## Event Listener Options

```javascript
// Options object
element.addEventListener("click", callback, {
  capture: false, // Capture phase (true) or bubble phase (false)
  once: true, // Execute only once, then remove
  passive: true, // Cannot call preventDefault()
});

// Shorthand boolean (capture phase)
element.addEventListener("click", callback, true);
```

---

## Common Event Patterns

### Prevent Form Submission

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Validate and process form
});
```

### Detect Enter Key Press

```javascript
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter pressed");
  }
});
```

### Toggle Class on Click

```javascript
button.addEventListener("click", () => {
  element.classList.toggle("active");
});
```

### Stop Event Propagation

```javascript
childElement.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent parent handlers
  console.log("Child clicked");
});
```

### Get Mouse Coordinates

```javascript
document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x}, ${y}`);
});
```

---

## Event Listener Comparison

| Event      | Trigger              | Bubbles | Cancelable |
| ---------- | -------------------- | ------- | ---------- |
| click      | Click element        | Yes     | Yes        |
| dblclick   | Double click         | Yes     | No         |
| mouseenter | Mouse enters         | No      | No         |
| mouseleave | Mouse leaves         | No      | No         |
| mouseover  | Mouse over           | Yes     | No         |
| mouseout   | Mouse leaves         | Yes     | No         |
| keydown    | Key pressed          | Yes     | Yes        |
| keyup      | Key released         | Yes     | No         |
| input      | Value changes        | Yes     | No         |
| change     | Value changed (blur) | Yes     | No         |
| focus      | Element focused      | No      | No         |
| blur       | Element unfocused    | No      | No         |
| submit     | Form submitted       | Yes     | Yes        |
| scroll     | Page scrolled        | No      | No         |
| resize     | Window resized       | No      | No         |

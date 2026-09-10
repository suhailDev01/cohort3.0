# 📝 Taskify — A Simple Task Manager

A small task manager built using plain **HTML, CSS and JavaScript** — no framework, no library, just DOM manipulation, localStorage and a lot of debugging 😅

This project was also my playground to actually understand some core JS/Browser concepts properly, instead of just reading theory. Below I've noted down what I learned, in my own words, while building this.

---

## ✨ Features

- ➕ Add a task with title, description and category
- ✏️ Edit an existing task
- ❌ Delete a single task / delete all tasks
- ✅ Mark a task as completed
- 🔍 Live search tasks (title, description, category, status)
- 📊 Dashboard showing total / completed / pending task counts
- 🌗 Dark / Light theme toggle (persisted in localStorage)
- 🖼️ Category-based icons for each task
- 💾 Everything saved in `localStorage` — refresh-proof

---

## 🛠️ Tech Used

- HTML5
- CSS3 (custom properties, glassmorphism style cards)
- Vanilla JavaScript (DOM, Event Delegation, localStorage)
- Remix Icon (for theme toggle icons)

---

## 📚 Things I Learned While Building This

### Attribute vs Property
Attritube is a raw value, we write in html tags like value="Enter Name", it will always be a string, and stays same as what you write in html, we can set/get it using setAttribute() and getAttribute(), property on the other hand is a value on JS object of that element like input.value, it can be string, boolean, number or anything, it shows live current value, it can be changes on user interactions, we can get/set it like element.value = "Punit"

### Attribute Methods
getAttribute, setAttribute, removeAttribute, hasAttribute

### `input.value` vs `input.getAttribute("value")`
input.value is a property, which shows current live value of the input, even if the user chamges the input value, input.value will always gives us current changed value, It change automatically when user type something, but on the other hand input.getAttribute("value") is a attribute, it will give us raw value of the input which we defined on the input while creating like value="Enter Name", it will be always a string and it dont change as user types.

### Event Bubbling
It is default condition in which an event triggered on child elements propagates upwards towards its parent and then grandparent and so on, it allows the parent element to respond to the event which was triggered by the child element.

### Event Capturing
It is reverse of event bubbling, in this condition event propagation starts from the ancestors of the child element on which the event was triggered, it goes from upwards to down towards the target child element, to enable it we must pass the 3rd parameter to addEventListener.

### Browser Rendering Pipeline

1. **HTML** — this is raw html with tags like div, section, a, etc, it is just a plain text file till now.
2. **Parsing** — in this process browser reads our html from top to bottom character by character to understand what is tag, text, attribute etc.
3. **Tokenization** — in this process browser break full html text into small pieces called "tokens", like if we wrote `<p>hello</p>`, then p becomes one token, hello becomes one, `</p>` becomes one token and so on.
4. **DOM tree** — after tokenization browser takes all this tokens and build a tree from it, which we call DOM tree, it shows parent child relation using nodes.
5. **CSS** — this is our raw stylesheet file, which contains style rules, browser needs to process this too.
6. **CSSOM tree** — browser reads the css file and converts this into css dom tree, containing styles with other rules like specificity, selectors, this will be used for mapping with html tags later.
7. **DOM + CSSOM** — at this point browser takes both the trees - DOM and CSSOM, and combine them together matching html elements with their styles.
8. **Render tree** — this is the final tree created by combining both DOM and CSSOM, it contains only that elements which will be shown on the screen, here each node have its element with its styles, browser use this tree to decide the layout like size and positions, and using this it paints the pixels on screen.

---
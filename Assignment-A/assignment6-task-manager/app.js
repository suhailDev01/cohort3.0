const formModale = document.querySelector("#addTaskModale");
const updateModale = document.querySelector("#updateModale");
const categoryInput = document.querySelector("#createCategory");
const titleInput = document.querySelector("#createTitle");
const descriptionInput = document.querySelector("#createDescription");

const editInput = document.querySelector("#editTitle");
const editDescription = document.querySelector("#editDescription");
const editCategory = document.querySelector("#editCategory");

const taskForm = document.querySelector("#addTaskForm");
const updateForm = document.querySelector("#updateForm");
const addCloseBtn = document.querySelector(".addCloseBtn");
const editCloseBtn = document.querySelector(".editCloseBtn");
const addTaskBtn = document.querySelector("#addTaskBtn");
const submitBtn = document.querySelector("#submitBtn");
const editTaskBtn = document.querySelector("#editTaskBtn");
const taskContainer = document.querySelector(".tasks");
const delAllTasksBtn = document.querySelector("#delAllTasks");
const sliderIcon = document.querySelector(".sliderIcon");
const slider = document.querySelector(".slider");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const pendingTasks = document.querySelector("#pendingTasks");
const themeSwitch = document.querySelector("#themeSwitch");
const body = document.querySelector("body");
const main = document.querySelector("main");

const searchInput = document.querySelector("[data-search]");

// Variables -
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let id = JSON.parse(localStorage.getItem("id")) || 1;

// Show Form on add task button
addTaskBtn.addEventListener("click", () => {
    formModale.style.display = "flex";
    body.classList.add("modalOpen");
});

// Close Form on close button
addCloseBtn.addEventListener("click", () => {
    formModale.style.display = "none";
    body.classList.remove("modalOpen");
});

editCloseBtn.addEventListener("click", () => {
    updateModale.style.display = "none";
    body.classList.remove("modalOpen");
});

// functions -
function setValue(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function getValue(value){
    return JSON.parse(localStorage.getItem(value));
}

function handleDelete(element, elementId){
    tasks = tasks.filter((task) => task.id !== elementId);
    setValue("tasks", tasks);
    element.remove(); 
    if(tasks.length === 0){
        delAllTasksBtn.classList.add("hide");
    }
    updatedashboard();
    // Instead of calling UI function that re renders the whole UI, i used this dom remove method so that it will be removed from DOM.
}

function handleEditBtnClick(element, elementId){
    updateModale.style.display = "flex";
    body.classList.add("modalOpen");
    updateModale.dataset.editElementId = elementId;
    let task = tasks.find(elem => elem.id === elementId);
    updateForm[0].value = task.title;
    updateForm[1].value = task.description;
    updateForm[2].value = task.category;
}

function handleComplete(element, elementId){
    const taskStatus = element.querySelector(".taskStatus");
    element.querySelector(".compBtn").remove();
    element.querySelector(".editBtn").remove();
    taskStatus.classList.add("completed");
    taskStatus.textContent = "Completed"; // No full UI render here too
    tasks = tasks.map((task) => {
        if(task.id === elementId){
            task.status = "completed";
        }
        return task;
    });
    setValue("tasks", tasks); 
    updatedashboard();
}

const taskImages = {
    work: "./Assets/work.png",
    study: "./Assets/book.png",
    health: "./Assets/health.png",
    finance: "./Assets/finance.png",
    shopping: "./Assets/shopping.png"
};

// UI - 
function generateUI(){
    taskContainer.innerHTML = "";

    tasks.forEach(task => {
        let section = document.createElement("section");
        const taskTop = document.createElement("section");
        const taskDescription = document.createElement("section");
        const taskBtns = document.createElement("section");

        const taskInfo = document.createElement("div");
        const taskTags = document.createElement("div");
        const taskIcon = document.createElement("div");
        const Img = document.createElement("img");
        const pTitle = document.createElement("p");
        const pDescription = document.createElement("p");
        const taskStatus = document.createElement("span");
        const taskCategory = document.createElement("span");
        const editBtn = document.createElement("button");
        const delBtn = document.createElement("button");
        const compBtn = document.createElement("button");

        const titleText = document.createTextNode(task.title);
        const descText = document.createTextNode(task.description);

        editBtn.textContent = "Edit";
        delBtn.textContent = "Delete";
        compBtn.textContent = "Complete";
        taskStatus.textContent = task.status;
        taskCategory.textContent = task.category;

        section.dataset.id = task.id;

        section.classList.add("task");
        taskTop.classList.add("taskTop");
        taskDescription.classList.add("taskDescription");
        taskBtns.classList.add("taskBtns");

        taskInfo.classList.add("taskInfo");
        taskTags.classList.add("taskTags");
        taskIcon.classList.add("taskIcon");
        pTitle.classList.add("taskTitle");

        editBtn.classList.add("editBtn");
        delBtn.classList.add("delBtn");
        compBtn.classList.add("compBtn");

        if(task.status === "completed"){
            taskStatus.classList.add("completed");
        } else {
            taskStatus.classList.add("pending");
            taskBtns.append(editBtn, compBtn);
        }

        taskStatus.classList.add("tags", "taskStatus");
        taskCategory.classList.add("tags", "taskCategory");

        Img.setAttribute("src", `${task.img}`);
        Img.setAttribute("alt", "Category Image");

        taskIcon.append(Img);
        pTitle.append(titleText);
        taskInfo.append(taskIcon, pTitle);
        taskTags.append(taskStatus, taskCategory);
        taskTop.append(taskInfo, taskTags);

        pDescription.append(descText);
        taskDescription.append(pDescription);

        taskBtns.append(delBtn);

        section.appendChild(taskDescription);
        taskDescription.before(taskTop);
        taskDescription.after(taskBtns);
        taskContainer.prepend(section);
        task.element = section;
    });
}

generateUI();

function checkValidation(data){
    if(data.title.trim() === "" || 
        data.description.trim() === "" ||
        data.category.trim() === ""){
            console.log("Form data is incorrect");
            return false; 
        } 
    return true;    
}

function updatedashboard(){ 
    const totalTaskCount = tasks.length;
    const completedTaskCount = tasks.filter((task) => task.status === "completed").length;
    totalTasks.textContent = totalTaskCount;
    completedTasks.textContent = completedTaskCount;
    pendingTasks.textContent = totalTaskCount - completedTaskCount;
}

updatedashboard();

// * Creating a new task on clicking submit button
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // When researching i got to know about this method of getting form values -
    const formData = new FormData(taskForm);
    const task = Object.fromEntries(formData);

    if(!checkValidation(task)) return;

    task.status = "pending";
    task.id = id++;
    task.img = taskImages[task.category.toLowerCase()];
    setValue("id", id);

    tasks.push(task);
    setValue("tasks", tasks);
    updatedashboard();
    
    if(delAllTasksBtn.classList.contains("hide")){
        delAllTasksBtn.classList.remove("hide");
    }

    generateUI();
    formModale.style.display = "none";
    body.classList.remove("modalOpen");
    taskForm.reset();
});

editTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let taskId = +updateModale.dataset.editElementId;
    let element = document.querySelector(`[data-id="${taskId}"]`);
    let task = tasks.find((task) => task.id === taskId);
    const form = new FormData(updateForm);
    const formData = Object.fromEntries(form);

    formData.status = task.status;
    formData.id = taskId;
    formData.img = task.img;

    if(!checkValidation(formData)) return;

    element.querySelector(".taskStatus").textContent = formData.status;
    element.querySelector(".taskCategory").textContent = formData.category;
    element.querySelector(".taskTitle").textContent = formData.title;
    element.querySelector(".taskDescription").textContent = formData.description;

    tasks = tasks.map((elem) => {
        if(elem.id === taskId){
            return formData;
        };
        return elem;
    });

    setValue("tasks", tasks);
    updateModale.style.display = "none";
    body.classList.remove("modalOpen");
    updateForm.reset();
});

// * Deleting an task using event delegation - 
taskContainer.addEventListener("click", (e) => {
    let btn = e.target.textContent;
    let parent = e.target.closest(".task"); // closest is used to get closest anscestor -
    let parentId = +parent.dataset.id; // + will convert it into a number, coz dataset.id is string
    console.log("Element id -", parent);

    if(btn === "Delete") handleDelete(parent, parentId);
    if(btn === "Complete") handleComplete(parent, parentId);
    if(btn === "Edit") handleEditBtnClick(parent, parentId);
});

// * Delete all tasks -
delAllTasksBtn.addEventListener("click", () => {
    taskContainer.innerHTML = "";
    setValue("tasks", []);
    tasks = [];
    delAllTasksBtn.classList.add("hide");
    updatedashboard();
});

console.log(tasks);

// * Search functionality -
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    tasks.forEach(task => {
        const isVisible = task.title.toLowerCase().includes(value) || task.description.toLowerCase().includes(value) || task.category.toLowerCase().includes(value) || task.status.toLowerCase().includes(value);

        task.element.classList.toggle("hide", !isVisible);
    })
});

// * Theme toggle -
const theme = getValue("theme") || "dark";
body.dataset.theme = theme;

function checkToggleBtn(){
    slider.classList.toggle("sliderCheck");
    sliderIcon.classList.toggle("sliderMove");
    sun.classList.toggle("opacityZero");
    moon.classList.toggle("flex");
} 

if(theme === "dark"){
    checkToggleBtn();
} else {
    body.classList.add("light");
}

themeSwitch.addEventListener("change", (e) => {  
    const theme = getValue("theme") || "dark";
    checkToggleBtn();
    if(theme === "dark"){
        body.setAttribute("class", "light");
        setValue("theme", "light");
        body.dataset.theme = "light";
    } else {
        body.classList.remove("light");
        setValue("theme", "dark");
        body.dataset.theme = "dark";
    }  
});

// localStorage.clear();

// * Checking if tasks are already exists or not, if exists then only we render the delete all tasks button -
window.onload = () => {
    if(tasks.length){
        delAllTasksBtn.classList.remove("hide");
    }
};


// ? Explainantions - 
// * Attrubute vs Properties - 
// Attritube is a raw value, we write in html tags like value="Enter Name", it will always be a string, and stays same as what you write in html, we can set/get it using setAttribute() and getAttribute(), property on the other hand is a value on JS object of that element like input.value, it can be string, boolean, number or anything, it shows live current value, it can be changes on user interactions, we can get/set it like element.value = "Punit"

// * Attribute methods - 
// getAttribute, setAttribute, removeAttribute, hasAttribute -
main.setAttribute("id", "mainBox");
const getMainId = main.getAttribute("id");
console.log("Main ID -", getMainId);

main.removeAttribute("id"); // Id attribute removed
const hasId = main.hasAttribute("id"); 
console.log(hasId); // false

// * input.value vs input.getAttribute("value")
// input.value is a property, which shows current live value of the input, even if the user chamges the input value, input.value will always gives us current changed value, It change automatically when user type something, but on the other hand input.getAttribute("value") is a attribute, it will give us raw value of the input which we defined on the input while creating like value="Enter Name", it will be always a string and it dont change as user types.

// * Event Propagation Demonstration -
// * Event bubbling
const Grandparent1 = document.querySelector("#Grandparent1");
const Parent1 = document.querySelector("#Parent1");
const Child1 = document.querySelector("#Child1");

Child1.addEventListener("click", () => {
    console.log("Child Button Cliked...");
});

Parent1.addEventListener("click", () => {
    console.log("Parent Click Eventlistner Active");
});

Grandparent1.addEventListener("click", () => {
    console.log("Grandparent Click Eventlistner Active");
});

// * Output for event bubbling (default beahviour) -- 
// Child Button Cliked...
// Parent Click Eventlistner Active
// Grandparent Click Eventlistner Active

// * Event capturing
const Grandparent2 = document.querySelector("#Grandparent2");
const Parent2 = document.querySelector("#Parent2");
const Child2 = document.querySelector("#Child2");

Child2.addEventListener("click", () => {
    console.log("Child Button Cliked...");
}, true);

Parent2.addEventListener("click", () => {
    console.log("Parent Click Eventlistner Active");
}, true);

Grandparent2.addEventListener("click", () => {
    console.log("Grandparent Click Eventlistner Active");
}, true);

// * Output for event capturing -- 
// Grandparent Click Eventlistner Active
// Parent Click Eventlistner Active
// Child Button Cliked... 

// ? Event bubbling vs Event Caputring
// Event Bubbling - It is default condititon in which an event triggered on child elements propgates upwards towards its parent and then grandparent and so on, it allows the parent element to respond to the event which was triggered by the the child element. 

// Event Capturing - It is reverse of event bubbling, in this condition event propogation starts from the anscetors of the child element on which the event was triggered, it goes from upwards to down towards the target child element, to eneable it we must pass the 3rd parameter to addEventListener.

// ? Browser Rendering Pipeline - 
// 1. HTML - this is raw html with tags like div, section, a, etc, it is just a plain text file till now, 
// 2. Parsing - in this process broweser reads our html from top to bottom character by character to understand what is tag, text, attribute etc.
// 3. Tokenization - In this process browser break full html text into small pieces called "tokens", like if we wrote <p>hello</p>, then p becomes one token, hello becomes one, </p> becomes one token and so on,    
// 4. DOM tree - after tokenization browser takes all this tokens and build a tree from it, which we call DOM tree, it shows parent child relation using nodes, 
// 5. CSS - this is our raw stylesheet file, which contains style rules, browser needs to process this too, 
// 6. CSSOM tree - browser reads the css file and converts this into css dom tree, containing styles with other rules like specificity, selectors, this will be used for mapping with html tags later.
// 7. DOM + CSSOM - at this point browser takes both the trees - DOM and CSSOM, and combine them together macthing html elements with thier styles.  
// 8. Render tree - this is the final tree created by combining both DOM and CSSOM, it contains only that elements which will be shown on the screen, here each node have its element with its styles, browser use this tree to decide the layout like size and positions, and using this it paints the pixels on screen. 
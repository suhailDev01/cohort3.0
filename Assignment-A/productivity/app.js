const sideLinks = document.querySelector("#sideLinks");
const dashboard = document.querySelector("#dashboard");
const todos = document.querySelector("#todos");
const todoDash = document.querySelector(".todoDash");
const dailyplanner = document.querySelector("#dailyplanner");
const body = document.body;

function getValue(value){
    return JSON.parse(localStorage.getItem(value));
}

function setValue(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

// Dashboard Navigation 
sideLinks.addEventListener("click", (e) => {
    let target = e.target.closest("li");
    if (target) {
        let targetSection = target?.dataset.section;
        if(!targetSection) return;
        document.querySelector(".active")?.classList.remove("active");
        document.querySelectorAll(".contentSections")?.forEach(elem => {
            elem.classList.add("hide");
        });
        document.querySelector(`#${targetSection}`).classList.remove("hide");
        target.classList.add("active");
    }
});

// Functions -
const doValidation = (element) => {
    return element.trim() === "";
}

// Todo List logic -
let todoItems = getValue("todoItems") || [];
let plans = getValue("plans") || [];

const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoContainer = document.querySelector(".todoLists");
const todoSection = document.querySelector(".todoSection");
const impTodosContainer = document.querySelector(".impTodos");
const impTodoBox = document.querySelector(".impTodoBox");

function handleTick(elem) {
    let id = Number(elem.closest("li").dataset.id);
    let status;
    todoItems = todoItems.map((todo) => {
        if (id === todo.id) {
            todo.isCompleted = !todo.isCompleted;
            status = todo.isCompleted;
        }
        return todo;
    });
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    const todo = todoDash.querySelector(`[data-id="${id}"]`);
    todo.querySelector(".todoStatus").textContent = (status === true) ? "Completed" : "Incomplete";
}

function generateTodos() {
    todoContainer.innerHTML = "";
    impTodosContainer.innerHTML = "";
    let numOfImp = todoItems.filter((todo) => todo.isImportant === true).length;

    todoItems.forEach((todo) => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;
        li.className = "todo border border-gray-500 flex justify-between rounded-xl p-5 py-3";
        li.innerHTML = `
            <div class="todoInfo flex items-center gap-3">
                <input ${todo.isCompleted ? "checked" : ""} type="checkbox" onchange="handleTick(this)" id=${todo.id} class="w-5 h-5 cursor-pointer">
                <label for=${todo.id} class="text-xl cursor-pointer">${todo.title}</label>
            </div>
            <div class="todoBtns flex gap-3">
                <i class="text-lg ri-star-fill text-white cursor-pointer impBtn ${todo.isImportant ? "impTodo" : ""}"></i>
                <i class="text-red-400 text-lg ri-delete-bin-line cursor-pointer delBtn"></i>
            </div>
        `
        if (impTodoBox.classList.contains("hide") && numOfImp >= 1) {
            impTodoBox.classList.remove("hide");
        }
        todo.isImportant ? impTodosContainer.prepend(li) : todoContainer.prepend(li);
    })
};

addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let inputVal = todoInput.value;
    if (doValidation(inputVal)) return;
    let todo = {
        title: inputVal, isCompleted: false, isImportant: false, id: Date.now()
    }
    todoItems.push(todo);
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    todoInput.value = "";
    generateTodos();
    generateTodosSidebar();
});

function handleTodoDelete(id) {
    todoItems = todoItems.filter((todo) => todo.id !== id);
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    let numOfImp = todoItems.filter((todo) => todo.isImportant === true).length;
    if(!numOfImp) impTodoBox.classList.add("hide");
    generateTodos();
}

function handleMarkImportant(elem, id) {
    let impBtn = elem.querySelector(".impBtn");
    let isImp;

    if (impBtn.classList.contains("impTodo")) {
        impBtn.classList.remove("impTodo");
        isImp = false;
    } else {
        impBtn.classList.add("impTodo");
        isImp = true;
    }
    todoItems = todoItems.map((todo) => {
        if (id === todo.id) {
            todo.isImportant = isImp;
        }
        return todo;
    });
    localStorage.setItem("todoItems", JSON.stringify(todoItems));

    let numOfImp = todoItems.filter((todo) => todo.isImportant === true).length;
    if (impTodoBox.classList.contains("hide") && numOfImp >= 1) {
        impTodoBox.classList.remove("hide");
    } else {
        impTodoBox.classList.add("hide");
    }

    generateTodos();
}

todoSection.addEventListener("click", (e) => {
    let li = e.target.closest("li");
    if (!li) return;
    let id = Number(li.dataset.id);

    let delBtn = e.target.closest(".delBtn");
    let impBtn = e.target.closest(".impBtn");

    if (delBtn) {
        handleTodoDelete(id);
    } else if (impBtn) {
        handleMarkImportant(li, id);
    }
    generateTodosSidebar();
    if(!todoItems.length){
        handleEmptyState("Tasks", todoContainer);
        handleEmptyState("Tasks", todoDash);
    }
});

function getUserLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            },
            (error) => {
                reject(error);
            }
        )

    })
}

// Weather Widget -
async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m`;

    const res = await fetch(url);
    return await res.json();
}

async function getCity(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    return data.address.city
        || data.address.town
        || data.address.village;
}

const weatherMap = {
    0: ["☀️", "Sunny"],
    1: ["🌤️", "Mostly Sunny"],
    2: ["⛅", "Partly Cloudy"],
    3: ["☁️", "Mostly Cloudy"],
    61: ["🌧️", "It's Rainy, Bahar mat nikalna"],
    71: ["❄️", "Snowing"],
    95: ["⛈️", "Thunderstorm, Bahar mat nikalna"]
};

const greetBox = document.querySelector(".greetBox");
function greetings(){
    const hours = new Date().getHours();
    if(hours<12) return "Good Morning👋";
    if(hours<18) return "Good Afternoon👋";
    return "Good Evening👋"
}

function generateTodosSidebar(){
    todoDash.innerHTML = "";
    todoItems.reverse().forEach((todo) => {
        todoDash.innerHTML += `
            <div class="rounded-xl bg-white/5 backdrop-blur-3xl border border-white/15 shadow-2xl shadow-black/20 cursor-pointer p-3" data-id=${todo.id}> 
                <li class="text-2xl text-primary">${todo.title}</li>
                <span class="text-xs font-bold bg-active text-white px-1 rounded-md todoStatus">${todo.isCompleted ? "Completed" : "Incomplete"}</span>
            </div>
        `
    });
}

window.addEventListener("load", async () => {
    if (todoItems.length) {
        generateTodos();
        generateTodosSidebar();
    } else {
        handleEmptyState("Tasks", todoContainer);
        handleEmptyState("Tasks", todoDash);
    }
    if(plans.length){
        renderPlans(plansContainer);
        renderPlansDash();
    } else {
        handleEmptyState("Plans", dailyPlansDash);
        handleEmptyState("Plans", plansContainer);
    }
    if(goals.length){
        generateGoals();
        getGoalsStats();
    }
});


function renderWeather(weather, city){
    console.log(city);
    const weatherCard = document.querySelectorAll(".weatherDash");
    weatherCard.forEach((card) => {
        card.innerHTML = `
            <div> 
                <h1 class="text-7xl">${weatherMap[weather.current.weather_code][0]}</h1>
                <h1 class="">${weatherMap[weather.current.weather_code][1]}</h1>
            </div>

            <div class="text-end text-xl"> 
                <h2 class="text-active font-bold text-4xl">${weather.current.temperature_2m}°C</h2>
                <p class="text-xl font-semibold ">${city}</p>

                <div>
                    <span class="text-sm">Humidity: </span>
                    <strong class="text-sm">${weather.current.relative_humidity_2m}%</strong>
                </div>

                <div>
                    <span class="text-sm">Wind:</span>
                    <strong class="text-sm">${weather.current.wind_speed_10m} km/h</strong>
                </div>
            </div>
        `
    })
}

async function weatherWidget(){
    try{
        const { lat, lon } = await getUserLocation();
        const weather = await getWeather(lat, lon);
        const city = await getCity(lat, lon);
        renderWeather(weather, city);
    } catch(e){
        let errCode = e.code;
        let errMsg;
        if(errCode === 1){
           errMsg = "Location access is blocked. Please enable location permission from your browser settings and click OK.";
        } else {
            errMsg = "Something went wrong while fetching the weather. Please try again later";
        }
        alert(errMsg);    
        console.log("Error", e);
    }
}   

weatherWidget();

greetBox.textContent = greetings();

const currentTime = document.getElementById("currentTime");
const currentDate = document.getElementById("currentDate");
const currentTime2 = document.getElementById("currentTime2");
const currentDate2 = document.getElementById("currentDate2");

function updateDateTime(dateB, timeB) {
    const now = new Date();

    timeB.textContent = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    dateB.textContent =  now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

setInterval(() => {
    updateDateTime(currentDate, currentTime)
}, 1000);

setInterval(() => {
    updateDateTime(currentDate2, currentTime2)
}, 1000);


// Theme -
const sliderIcon = document.querySelector(".sliderIcon");
const slider = document.querySelector(".slider");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const theme = getValue("theme") || "dark";
body.dataset.theme = theme;

function checkToggleBtn(){
    slider.classList.toggle("sliderCheck");
    sliderIcon.classList.toggle("sliderMove");
    setTimeout(() => {
        sun.classList.toggle("opacityZero");
    }, 50); 
    moon.classList.toggle("flex");
} 

if(theme === "dark"){
    checkToggleBtn();
    body.classList.add("dark");
} else {
    body.classList.remove("dark");
}

themeSwitch.addEventListener("change", (e) => {  
    const theme = getValue("theme") || "dark";
    checkToggleBtn();
    if(theme === "dark"){
        body.classList.remove("dark");
        setValue("theme", "light");
        body.dataset.theme = "light";
    } else {
        body.classList.add("dark");
        setValue("theme", "dark");
        body.dataset.theme = "dark";
    }  
});

// Daily Planner -
const planInputTime = document.getElementById("planInputTime");
const planInputTitle = document.getElementById("planInputTitle");
const addPlanBtn = document.getElementById("addPlanBtn");
const plansContainer = document.querySelector(".plansContainer");
const dailyPlansDash = document.querySelector(".dailyPlansDash");

function formatTime(time){
    const [hours, minutes] = time.split(":");

    const date = new Date();
    date.setHours(hours, minutes);

    return date.toLocaleTimeString("en-IN", {
        hour: "numeric", 
        minute: "2-digit",
        hour12: true
    });
}

function renderPlans(container){
    container.innerHTML = "";
    let direction = true;
    plans.forEach((plan) => {
        const li = document.createElement("li");
        li.className = `planLi flex items-center gap-2 ${direction ? 'flex-row-reverse' : ''}`;
        li.dataset.id = plan.id;
        li.innerHTML = `
            <span class="rounded-xl backdrop-blur-3xl border border-white/15 shadow-2xl shadow-black/20 p-3 text-lg bg-active font-semibold text-white">${plan.time.toUpperCase()}</span>
            <span class="w-10 bg-gray-600 h-[2px]"></span>
            <span class="rounded-xl bg-white/5 backdrop-blur-3xl border border-white/15 shadow-2xl shadow-black/20 min-w-[80%] text-lg cursor-pointer flex justify-between overflow-hidden p-3 titleSection" ">
                <div class="planContent flex justify-between w-[100%]"> 
                    <p class="planTitle">${plan.title}</p>
                    <div class="planBtns flex gap-3">
                        <i class="ri-pencil-line planEditBtn cursor-pointer"></i>
                        <i class="text-red-400 text-lg ri-delete-bin-line cursor-pointer planDelBtn"></i>
                    </div>
                </div>
            </span>
        `
        li.querySelector(".titleSection").addEventListener("dblclick", () => {
            handlePlanEdit(li, plan.id);
        });
        container.prepend(li);
        direction = !direction; 
    });
}

function renderPlansDash(){
    dailyPlansDash.innerHTML = "";
    if(plans.length){
        let direction = true;
        plans.forEach((plan) => {
            const li = document.createElement("li");
            li.className = `flex items-center gap-2 ${direction ? 'flex-row-reverse' : ''}`;
            li.dataset.id = plan.id;
            li.innerHTML = `
                <span class="rounded-xl backdrop-blur-3xl border border-white/15 shadow-2xl shadow-black/20 p-2 text-xs bg-active text-white shrink-0">${plan.time.toUpperCase()}</span>
                <span class="w-10 bg-gray-600 h-[2px]"></span>
                <span class="rounded-xl bg-white/5 backdrop-blur-3xl border border-white/15 shadow-2xl shadow-black/20 p-3 min-w-[74%] text-lg cursor-pointe flex justify-between">
                    <p>${plan.title}</p>
                </span>
            `
            dailyPlansDash.prepend(li);
            direction = !direction;
        });
    } else {
        handleEmptyState("Plans", dailyPlansDash);
    }
}

addPlanBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let planTimeVal = formatTime(planInputTime.value);
    let planTitleVal = planInputTitle.value;
    if(doValidation(planInputTime.value) || doValidation(planTitleVal)) return;
    let plan = {
        title: planTitleVal, time: planTimeVal, id: Date.now()
    }
    plans.push(plan);
    setValue("plans", plans);
    renderPlans(plansContainer);
    renderPlansDash();
    planInputTime.value = "";
    planInputTitle.value = "";
});

function handleEmptyState(value, container){
    const li = document.createElement("li");
    li.className = "text-xl text-gray-400 ms-5 font-bold";
    li.textContent = `No ${value} yet`;
    container.append(li);
    console.log(li);
}

// Clear all plans and todos -
const clearPlanBtn = document.getElementById("clearPlans");

clearPlanBtn.addEventListener("click", (e) => {
    plans = [];
    setValue("plans", plans);
    handleEmptyState("Plans", plansContainer);
    renderPlans(plansContainer);
    renderPlansDash();
});

const clearTodoBtn = document.getElementById("clearTodoBtn");

clearTodoBtn.addEventListener("click", (e) => {
    todoItems = [];
    setValue("todoItems", todoItems);
    generateTodos();
    generateTodosSidebar();
    handleEmptyState("Tasks", todoContainer);
    handleEmptyState("Tasks", todoDash);
});

// Delete Plans -
function handlePlanDelete(li, id){
    console.log(plans);
    plans = plans.filter((plan) => {
        console.log(plan.id, id);
        return plan.id !== id;
    });
    setValue("plans", plans);
    li.remove();
}

function makeInput(element, id){
    const input = document.createElement("input");
    input.dataset.id = id;
    input.className = "text-white bg-transparent w-[100%] border-none border-0 outline-none px-2";
    return input;
}

function handlePlanEdit(li, id){  
    let planContent = li.querySelector(".planContent");
    let content = li.querySelector(".planTitle").textContent;
    let titleSection = li.querySelector(".titleSection");
    let input = makeInput(li, id);
    input.value = content;
    planContent.classList.add("hide");
    titleSection.append(input);
    input.focus();

    input.addEventListener("keypress", (e) => {
        let key = e.key;
        if(key === "Enter"){
            handlePlanUpdate(planContent, input, id);
        }
    });

    input.addEventListener("blur", (e) => {
        handlePlanUpdate(planContent, input, id);
    });
}

function handlePlanUpdate(container, input, id){
    let newValue = input.value;
    if(doValidation(newValue)) return;
    plans = plans.map((plan) => {
        if(plan.id === id){
            plan.title = newValue;
        }
        return plan;
    });
    setValue("plans", plans);
    renderPlans(plansContainer);
    renderPlansDash();
    if(input) input.remove();
    container.classList.remove("hide");
}

plansContainer.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if(!li) return;
    const id = Number(li.dataset.id);
    
    const delBtn = e.target.closest(".planDelBtn");
    const editBtn = e.target.closest(".planEditBtn");

    if(delBtn) handlePlanDelete(li, id);
    else if(editBtn) handlePlanEdit(li, id);
    renderPlansDash();
});

// QOutes Section -
const qouteHeading = document.getElementById("qoute");
const qouteAuthor = document.getElementById("qouteAuthor");
// const qouteDash = document.querySelector(".qouteDash");
const qouteRefreshBtn = document.getElementById("qouteRefreshBtn");

async function getQoute(){
    const qouteRes = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
    const data = await qouteRes.json();
    qouteHeading.textContent = data.quote;
    qouteAuthor.textContent = `⸺   ${data.author}`;
}

qouteRefreshBtn.addEventListener("click", (e) => {
    getQoute();
});

getQoute();

// Pomodoro Timer - 
const tMinutes = document.querySelector(".tMinutes");
const tSeconds = document.querySelector(".tSeconds");
const pStartStop = document.getElementById("pStartStop");
const pReset = document.getElementById("pReset");
let isPomodoroRunning = false;
let pomodoroInterval = null;
let isWorkSession = true;

function resetPomodoro(){
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
    isPomodoroRunning = false;
    isWorkSession = true;
    tSeconds.textContent = "00"
    tMinutes.textContent = "25"
    pStartStop.textContent = "Start";
    pStartStop.classList.remove("startStopBtn");
}

function startPomodoro(){
    if(isPomodoroRunning) return;

    isPomodoroRunning = true;

    pomodoroInterval = setInterval(() => {
        let seconds = Number(tSeconds.textContent);
        let minutes = Number(tMinutes.textContent);
        if(seconds === 0 && minutes === 0){
            if(isWorkSession){
                alert(`🌿 Work session completed.
                        
Time to take a well-deserved 5-minute break.`);
                tSeconds.textContent = "00"
                tMinutes.textContent = "05";
                isWorkSession = false;
            } else {
                alert(`🚀 Break's over!
                        
Take a deep breath and start your next focus session.`);
                resetPomodoro();
            }
            return;
        }
        if(seconds === 0){
            seconds = 60;
            minutes--;
        } 
        seconds--;
        tSeconds.textContent = String(seconds).padStart(2, "0")
        tMinutes.textContent = String(minutes).padStart(2, "0")
    }, 1000);
}

pStartStop.addEventListener("click", (e) => {
    pStartStop.classList.add("startStopBtn");
    if(!isPomodoroRunning){
        startPomodoro();
        pStartStop.textContent = "Stop"
    }
    else {
        clearInterval(pomodoroInterval);
        pStartStop.classList.remove("startStopBtn");
        pStartStop.textContent = "Resume";
        isPomodoroRunning = false;
    }
});

pReset.addEventListener("click", resetPomodoro);

// Daily Goals -  
let goals = getValue("goals") || [];
const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");
const goalContainer = document.querySelector(".goalsLists");

addGoalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputVal = goalInput.value;
    if (doValidation(inputVal)) return;
    let goal = {
        description: inputVal, isCompleted: false, id: Date.now()
    }
    goals.push(goal);
    localStorage.setItem("goals", JSON.stringify(goals));
    goalInput.value = "";
    generateGoals();
    getGoalsStats();
});

function generateGoals() {
    goalContainer.innerHTML = "";

    goals.forEach((goal) => {
        const li = document.createElement("li");
        li.dataset.id = goal.id;
        li.className = "goal border border-gray-500 flex justify-between rounded-xl p-5 py-3";
        li.innerHTML = `
            <div class="goalInfo flex items-center gap-3 justify-between w-[100%]">
                <div>
                    <input ${goal.isCompleted ? "checked" : ""} type="checkbox" onchange="handleGoalTick(this)" id=${goal.id} class="w-5 h-5 cursor-pointer">
                    <label label for=${goal.id} class="text-xl cursor-pointer">${goal.description}</label>
                </div>

                <i class="text-red-400 text-lg ri-delete-bin-line cursor-pointer goalDelBtn")></i>
            </div>
        `
        li.querySelector(".goalDelBtn").addEventListener("click", () => {
            handleGoalDelete(goal.id);
        })
        goalContainer.prepend(li);
    })
};

function handleGoalTick(elem){
    let id = Number(elem.closest("li").dataset.id);
    let status;
    goals = goals.map((goal) => {
        if (id === goal.id) {
            goal.isCompleted = !goal.isCompleted;
            status = goal.isCompleted;
        }
        return goal;
    });
    localStorage.setItem("goals", JSON.stringify(goals));
    getGoalsStats();
}

const completedGoals = document.querySelector(".completedGoals");
const totalGoals = document.querySelector(".totalGoals");
const goalsCompleted = document.querySelector(".goalsCompleted");
const sidebar = document.querySelector(".sidebar");

function getGoalsStats(){
    const completedGoalsCount = goals.filter((goal) => goal.isCompleted === true).length;
    completedGoals.textContent = completedGoalsCount;
    totalGoals.textContent = goals.length; 
    goalsCompleted.textContent = `${completedGoalsCount} Out of ${goals.length} is Completed`;
}

function handleGoalDelete(id) {
    goals = goals.filter((goal) => goal.id !== id);
    localStorage.setItem("goals", JSON.stringify(goals));
    generateGoals();
    getGoalsStats();
}

// Handle Dashborad Navigation -
dashboard.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest("[data-card]");
    if(!card) return;
    const cardName = card.dataset.card;
    const element = document.getElementById(cardName);
    const sideElement = document.querySelector(`[data-section="${cardName}"]`);
    if(!element || !sideElement) return;
    dashBoardNavigation(element, sideElement);
});

function dashBoardNavigation(container, sideElement){
    document.querySelectorAll(".contentSections")?.forEach(elem => {
        elem.classList.add("hide");
    });
    container.classList.remove("hide");
    document.querySelector(".active").classList.remove("active");
    sideElement.classList.add("active");
}

const backBtn = document.querySelectorAll(".backBtn");

backBtn.forEach((btn) => {
    const sideElement = document.querySelector(`[data-section="dashboard"]`);
    btn.addEventListener("click", () => {
        dashBoardNavigation(dashboard, sideElement)
    });
})
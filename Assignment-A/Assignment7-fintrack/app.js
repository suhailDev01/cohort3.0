const loginModale = document.getElementById("loginModale");
const registerModale = document.getElementById("registerModale");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const goToRegister = document.getElementById("goToRegister");
const goToLogin = document.getElementById("goToLogin");
const logoutBtn = document.querySelector(".logoutBtn");
const userName = document.querySelector(".userName");
const addTxnModale = document.getElementById("addTxnModale");
const addTxnBtn = document.getElementById("addTxnBtn");
const addCloseBtn = document.querySelector(".addCloseBtn");
const addTxnForm = document.getElementById("addTxnForm");
const submitTxnBtn = document.getElementById("submitTxnBtn");
const txnContainer = document.getElementById("txnBody");
const editTxnModale = document.getElementById("editTxnModale");
const editTxnForm = document.getElementById("editTxnForm");
const updateTxnBtn = document.getElementById("updateTxnBtn");
const editCloseBtn = document.querySelector(".editCloseBtn");
const resetBtn = document.querySelector("#resetBtn");
const body = document.querySelector("body");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const settingsPage = document.getElementById("settingsPage");
const settingsLink = document.getElementById("settingsLink");
const dashboardPage = document.getElementById("dashboardPage");
const dashLink = document.getElementById("dashLink");
const profileName = document.getElementById("profileName");
const profileCurrency = document.getElementById("profileCurrency");
const saveProfileBtn = document.getElementById("saveProfileBtn");
const currencyIcons = document.querySelectorAll(".currencyIcon");

const sliderIcon = document.querySelector(".sliderIcon");
const slider = document.querySelector(".slider");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const curBalanceCount = document.getElementById("curBalanceCount");
const totalIncomeCount = document.getElementById("totalIncomeCount");
const totalExpenseCount = document.getElementById("totalExpenseCount");
const totalTxns = document.getElementById("totalTxns");

let curUser = JSON.parse(localStorage.getItem("user")) || null;
let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Functions -
function isLoggedIn(){
    if(!curUser){
        loginModale.classList.remove("hide");
        return;
    }
    userName.textContent = curUser.username;
    renderTransactions();
    updateStats();
    updateCurrency();
    profileName.value = curUser.username;
}

isLoggedIn();

function updateStats(){
    const totals = transactions.reduce((acc, tnx) => {
            const amount = Number(tnx.amount);
            if(tnx.type === "income"){
                acc.income += amount;
            } else {
                acc.expense += amount;
            }
            return acc;
        }, {income: 0, expense: 0}
    );
    curBalanceCount.textContent = totals.income - totals.expense;
    totalExpenseCount.textContent = totals.expense;
    totalIncomeCount.textContent = totals.income;
    totalTxns.textContent = transactions.length;
}

function logout(){
    localStorage.removeItem("user");
    loginModale.classList.remove("hide");
}

function setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function getTransactionFormData(myForm){
    const form = new FormData(myForm);
    const formData = {
        type: form.get("type").trim(),
        description: form.get("description").trim(),
        amount: form.get("amount").trim(),
        date: form.get("date").trim(),
        category: form.get("category").trim(),
    };
    return formData;
}

function getFormData(myForm){
    const form = new FormData(myForm);
    const formData = {
        username: form.get("username").trim(),
        password: form.get("password").trim(),
    };
    return formData;
}

function checkTnxValidation(tnx){
    if(tnx.type.trim() === "" 
        || tnx.description.trim() === ""
        || tnx.category.trim() === ""
        || tnx.amount.trim() === ""
        || tnx.date.trim() === ""
        ){
        alert("Transaction data is invalid");
        return false;
    }
    return true;
}

function checkValidation(user){
    if(user.username.trim() === "" || user.password.trim() === ""){
        alert("User data is incorrect, Try Again!");
    }
}

function deleteItem(item){
    localStorage.removeItem(item);
}

function login(){
    const formData = getFormData(loginForm);
    checkValidation(formData);

    const user = registeredUsers.find(user => 
        user.username == formData.username &&
        user.password == formData.password 
    );

    if(user){
        curUser = {
            username: user.username,
            currency: "₹"
        };
        setItem("user", curUser);
        loginModale.classList.add("hide");
    } else {
        alert("Username or Password is invalid");
    }

    userName.textContent = curUser.username;
}

function signUp(){
    const formData = getFormData(registerForm);
    checkValidation(formData);

    formData.currency = "₹";
    registeredUsers.push(formData);
    setItem("registeredUsers", registeredUsers);
    loginModale.classList.remove("hide");
    registerModale.classList.add("hide");

    userName.textContent = curUser.username;
}

function getTnxIconAndClass(tnx){
    const element = document.querySelector(`[data-id="${tnx.id}"]`);
    if(tnx.type === "expense"){
        element.querySelector(".tnxAmount").classList.add("exp");
        element.querySelector(".tnxSign").textContent = "-";
    } else {
        element.querySelector(".tnxAmount").classList.remove("exp");
        element.querySelector(".tnxSign").textContent = "+";
    }
}

function renderTransactions(){
    txnContainer.innerHTML = ""; 
    transactions.forEach(tnx => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
           <tr class="transaction" data-id="${tnx.id}">
                <td class="date">${tnx.date}</td>
                <td class="description">${tnx.description}</td>
                <td class="category">${tnx.category}</td>
                <td class="tnxAmount">
                    <span class="tnxSign">+</span> 
                    <span class="amount">${tnx.amount}</span> 
                </td>
                <td class="actions">
                    <i class="tnxBtns editBtn ri-pencil-line"></i>
                    <i class="tnxBtns delBtn ri-delete-bin-line"></i>
                </td>
            </tr>
        `
        tr.dataset.id = tnx.id;
        tr.classList.add("transaction");
        txnContainer.append(tr);
        getTnxIconAndClass(tnx);
        tnx.element = tr;
    });
}

// Event Listeneres
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    login();
    loginForm.reset();
});

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signUp();
    registerForm.reset();
});

goToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginModale.classList.add("hide");
    registerModale.classList.remove("hide");
});

goToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginModale.classList.remove("hide");
    registerModale.classList.add("hide");
});

logoutBtn.addEventListener("click", logout);

addTxnBtn.addEventListener("click", () => {
    addTxnModale.classList.remove("hide");
});

addCloseBtn.addEventListener("click", () => {
    addTxnModale.classList.add("hide");
    addTxnForm.reset();
});

editCloseBtn.addEventListener("click", () => {
    editTxnModale.classList.add("hide");
    editTxnForm.reset();
});

submitTxnBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTxnModale.classList.add("hide");
    const tnxData = getTransactionFormData(addTxnForm);
    if(!checkTnxValidation(tnxData)) return;
    tnxData.id = Date.now();
    transactions.push(tnxData);
    setItem("transactions", transactions);
    renderTransactions();
    addTxnForm.reset();
    updateStats();
    renderChart();
});

function showEditForm(id){
    editTxnModale.classList.remove("hide");
    editTxnModale.dataset.tnxId = id;
    let tnx = transactions.find(t => t.id === id);
    editTxnForm[0].value = tnx.type;
    editTxnForm[1].value = tnx.description;
    editTxnForm[2].value = tnx.amount;
    editTxnForm[3].value = tnx.date;
    editTxnForm[4].value = tnx.category;
}

function handleDelete(id, element){
    txnContainer.removeChild(element);
    transactions = transactions.filter(t => t.type === "Salary");
    setItem("transactions", transactions);
}

txnContainer.addEventListener("click", (e) => {
    const target = e.target;
    const tnxCard = target.closest(".transaction");
    const tnxId = +tnxCard.dataset.id;
    if(target.classList.contains("editBtn")){
        showEditForm(tnxId);
    } else if(target.classList.contains("delBtn")){
        handleDelete(tnxId, tnxCard);
    }
});

updateTxnBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editTxnModale.classList.add("hide");
    const formData = getTransactionFormData(editTxnForm);
    const id = +editTxnModale.dataset.tnxId;
    const element = document.querySelector(`[data-id="${id}"]`);
    formData.id = id;

    element.querySelector(".date").textContent = formData.date;
    element.querySelector(".description").textContent = formData.description;
    element.querySelector(".category").textContent = formData.category;
    element.querySelector(".amount").textContent = formData.amount;
    getTnxIconAndClass(formData);

    transactions = transactions.map(t => {
        return t.id === id ? formData : t;  
    });
    setItem("transactions", transactions);
    updateStats();
    renderChart();
});

resetBtn.addEventListener("click", () => {
    txnContainer.innerHTML = "";
    transactions = [];
    setItem("transactions", []);
    updateStats();
    renderChart();
});

function getValue(key){
    return JSON.parse(localStorage.getItem(key));
}

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
        setItem("theme", "light");
        body.dataset.theme = "light";
    } else {
        body.classList.add("dark");
        setItem("theme", "dark");
        body.dataset.theme = "dark";
    }  
});

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    transactions.forEach(tnx => {
        const isVisible = tnx.description.toLowerCase().includes(value) || tnx.amount.toLowerCase().includes(value) || tnx.category.toLowerCase().includes(value) || tnx.date.toLowerCase().includes(value);

        console.log(tnx.description,isVisible)
        tnx.element.classList.toggle("hide", !isVisible);
    })
    // updateStats();
});

typeFilter.addEventListener("change", (e) => {
    const value = e.target.value.toLowerCase();
    transactions.forEach(tnx => {
        const isVisible = tnx.type.toLowerCase() === value || value === "all";
        tnx.element.classList.toggle("hide", !isVisible);
    }); 
});

function toggleDashboard(){
    settingsPage.classList.toggle("hide");
    dashboardPage.classList.toggle("hide");
    dashLink.classList.toggle("active");
    settingsLink.classList.toggle("active");
}

function updateCurrency(){
    currencyIcons.forEach(cur => {
        cur.textContent = curUser.currency;
    })
}

settingsLink.addEventListener("click", () => {
    toggleDashboard();
});

dashLink.addEventListener("click", () => {
    toggleDashboard();
});

saveProfileBtn.addEventListener("click", () => {
    let usernameVal = profileName.value;
    let userCurrency = profileCurrency.value;
    
    registeredUsers = registeredUsers.map(user => {
        if(curUser.username === user.username){
            user.username = usernameVal,
            user.currency = userCurrency
        }   
        return user;
    });

    setItem("registeredUsers", registeredUsers);
    curUser.username = usernameVal;
    curUser.currency = userCurrency;
    setItem("user", curUser);
    userName.textContent = usernameVal;
    profileName.value = usernameVal;
    updateCurrency();
    renderChart();
    alert("Changes Succesfully Updated");
});


const ctx = document.getElementById('cashFlowChart').getContext('2d');
let myChart = null;

function renderChart(){
    const totalIncome = transactions
            .filter(txn => txn.type === 'income' )
        .reduce((sum, txn)=> sum + Number(txn.amount), 0);

    const totalExpense = transactions.filter(txn => txn.type === 'expense')
        .reduce( (sum, txn) => sum + Number(txn.amount), 0);

    if (myChart) {
        myChart.data.datasets[0].data = [totalIncome, totalExpense];
        myChart.update();
        return; }

    myChart= new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Income', 'Expense'],
            datasets: [{
                label: `Amount ${curUser.currency}`,
                data: [totalIncome, totalExpense],
                backgroundColor: ['#16a34a', '#dc2626'],
                borderRadius: 6,
                barThickness: 60
            }]
        }, options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#94a3b8' },
                    grid: { color: '#1e2d45' }
                },
                x: {
                    ticks: { color: '#e2e8f0' },
                    grid: { display: false }
                }
            }
        }
    });
}

renderChart();


console.log(transactions);

// deleteItem("transactions");

// console.log(registeredUsers);
// localStorage.clear()
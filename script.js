document.addEventListener("DOMContentLoaded", function() {
  const expensenameinput = document.getElementById("expense-name-input");
  const expenseamountinput = document.getElementById("expense-amount-input");
  const addexpensebutton = document.getElementById("add-expense-btn");
  const budgetinput = document.getElementById("budget-input");
  const setbudgetbutton = document.getElementById("set-budget-btn");
  const expenselist = document.getElementById("expenses-list");
  const budgetform = document.getElementById("budget-form");
  const expenseform = document.getElementById("expense-form");
   
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

   const savedBudget = localStorage.getItem("budget");
  if (savedBudget) {
    document.getElementById("total-budget").textContent = savedBudget;
  }

  renderExpenses();
  calculateBalance();

  setbudgetbutton.addEventListener("click", (e) => {
    e.preventDefault();
    const setbudget = Number(budgetinput.value.trim());
    if(isNaN(setbudget) || setbudget <= 0) {
        alert("Please enter a valid budget amount");
        return;
    }
     document.getElementById("total-budget").textContent = setbudget;
     localStorage.setItem("budget", setbudget);

     calculateBalance();
    budgetinput.value = "";

  });
 addexpensebutton.addEventListener("click", (e) => {
    e.preventDefault();
    const expensename = expensenameinput.value.trim();
    const expenseamount = Number(expenseamountinput.value.trim());
    if(expensename === "" || isNaN(expenseamount) || expenseamount <= 0) {
        alert("Please enter a valid expense data");
        return;
    }
     const newexpense = {
      id: Date.now(),
      name: expensename,
      amount: expenseamount,
    };
    
    expenses.push(newexpense);
    saveExpenses();
    renderExpenses();
    calculateBalance();
    expensenameinput.value = "";
    expenseamountinput.value = "";
    });
    
    function saveExpenses() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
    function renderExpenses() {
      expenselist.innerHTML = "";
      expenses.forEach((expense) => {
        const li = document.createElement("li");
        li.innerHTML = `${expense.name} - $${expense.amount}
           <button class="delete-button" data-id="${expense.id}">Delete</button>
        `;
        expenselist.appendChild(li);
      });
    }
    function calculateBalance() {
        const totalbudget = Number(localStorage.getItem("budget")) || 0;
        const totalexpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
        document.getElementById("total-expenses").textContent = totalexpenses;
        const remainingbalance = totalbudget - totalexpenses;
        document.getElementById("remaining-balance").textContent = remainingbalance;

    }

const navlinks = document.querySelectorAll(".nav-link");
const tabs = document.querySelectorAll(".tab");

 navlinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetTab = link.dataset.tab;

    tabs.forEach(tab => {
      tab.classList.remove("active");
      if (tab.id === targetTab) {
        tab.classList.add("active");
      }
    });   
  });
});
});


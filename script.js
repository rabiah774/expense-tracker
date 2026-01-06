const budgetButton = document.getElementById("set-budget-btn");
budgetButton.addEventListener("click", function() {
 const budgetinput = Number(document.getElementById("budget-input").value);
document.getElementById("total-budget").textContent = budgetinput;
if(budgetinput === 0 ) {
    alert("Please enter a budget");
    return;
}
document.getElementById("budget-input").value = "";
} );

const expensebutton = document.getElementById("add-expense-btn");
expensebutton.addEventListener("click", function() {
    const expensename = document.getElementById("expense-name-input").value;
    const expenseamount = Number(document.getElementById("expense-amount-input").value);
    if(expensename === "" || expenseamount === 0) {
        alert("Please enter valid expense name and amount");
        return;
    }
   document.getElementById("expense-list").innerHTML += `<li>${expensename}  - ${expenseamount}</li>`; 
   const totalexpenses = Number(document.getElementById("total-expenses").textContent) + expenseamount;
    document.getElementById("total-expenses").textContent = totalexpenses;
    const totalbudget = Number(document.getElementById("total-budget").textContent);
    const remainingbalance = totalbudget - totalexpenses;
    document.getElementById("remaining-balance").textContent = remainingbalance;

    document.getElementById("expense-name-input").value = "";
    document.getElementById("expense-amount-input").value = "";
});

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



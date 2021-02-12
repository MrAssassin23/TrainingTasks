let total_budget = 0.00
let total_income = 0.00
let total_expense = 0.00
let income_log = []
let expense_log = []

const select_type = document.querySelector('#type');
const input_desc = document.querySelector('#desc');
const input_amount = document.querySelector('#amount');
const btn_add_item = document.querySelector('#add_item');
const total_budget_title = document.querySelector('.total');
const total_income_title = document.querySelector('.income-value');
const total_expense_title = document.querySelector('.expense-value');
const total_expense_per_title = document.querySelector('.expense-per');

select_type.addEventListener('change', e => {
    let border_color = e.target.value === 'income' ? '#28b9b5' : '#ff5049'

    input_desc.addEventListener('focus', (event) => { event.target.style.borderColor = border_color });
    input_amount.addEventListener('focus', (event) => { event.target.style.borderColor = border_color });
    select_type.addEventListener('focus', (event) => { event.target.style.borderColor = border_color });
    btn_add_item.style.color = border_color;
    select_type.style.borderColor = border_color;
})

input_desc.addEventListener('blur', (event) => { event.target.style.borderColor = 'rgba(128, 128, 128, 0.3)'; });
input_amount.addEventListener('blur', (event) => { event.target.style.borderColor = 'rgba(128, 128, 128, 0.3)'; });
select_type.addEventListener('blur', (event) => { event.target.style.borderColor = 'rgba(128, 128, 128, 0.3)'; });

btn_add_item.addEventListener('click', addItem)

function clearInputs() {
    input_desc.value = ''
    input_amount.value = ''
}

function insertItemToUI(item) {
    let item_row = document.createElement('div')
    let item_row_id = `${item.type}-${item.id}`
    let innerHtml
    item_row.classList.add('row')
    item_row.classList.add(`${item.type}-row`)
    item_row.setAttribute('id', item_row_id)
    if (item.type === 'income') {
        innerHtml = '<h4 class="income-desc" > ' + `${item.desc}` + ' </h4><div class="income-row-right"><h4 class="income-amount">' + `+ ${item.amount.toFixed(2)}` + '</h4><button class="delete" id="income-delete"><i class="ion-ios-close-outline"></i></button></div>'
    } else {
        innerHtml = '<h4 class="expense-desc">' + `${item.desc}` + '</h4> <div class="expense-row-right"><h4 class="expense-amount">' + `- ${item.amount.toFixed(2)}` + '</h4><h4 class="expense-percentage">' + `${item.percentage}` + '</h4><button class="delete" id="expense-delete"><i class="ion-ios-close-outline"></i></button></div>'
    }
    item_row.innerHTML = innerHtml

    if (item.type === 'income') {
        document.getElementById('income-log').insertAdjacentElement('beforeend', item_row)
        document.querySelector(`#${item_row_id}`).children[1].children[1].addEventListener('click', e => deleteRow(e))
    } else {
        document.getElementById('expense-log').insertAdjacentElement('beforeend', item_row)
        document.querySelector(`#${item_row_id}`).children[1].children[2].addEventListener('click', e => deleteRow(e))
    }
}

function deleteRow(e) {
    let child_id = e.target.parentNode.parentNode.parentNode.id
    document.getElementById(child_id).remove()
    removeFromLog(child_id)
    updateItemPercentage()
    calculateBudget()
}

function removeFromLog(child_id) {
    split = child_id.split("-");
    type = split[0];
    ID = parseInt(split[1]);
    type === 'income' ? income_log = income_log.filter(e => e.id != ID ) : expense_log = expense_log.filter(e => e.id != ID )
    console.log(expense_log )
    console.log(income_log )
}

function calculateBudget() {
    total_budget = 0.00
    total_income = 0.00
    total_expense = 0.00
    income_log.forEach(l => total_income += l.amount)
    expense_log.forEach(l => total_expense += l.amount)
    total_budget = total_income - total_expense
    updateBudget()
}

function updateBudget() {
    let total_percentage = parseFloat(total_expense / (total_income / 100))
    total_percentage = (total_percentage === Infinity || total_percentage < 1) ? '---' : `${Math.round(total_percentage)}%`

    total_expense_title.innerText = `- ${total_expense.toFixed(2)}`
    total_income_title.innerText = `+ ${total_income.toFixed(2)}`
    total_budget_title.innerText = total_budget.toFixed(2)
    total_expense_per_title.innerText = total_percentage
}

function updateItemPercentage() {
    expense_log.forEach(expense => {
        const expense_item = document.querySelector(`#expense-${expense.id}`)
        let item_updated_per = expense.amount / (total_income / 100)
        item_updated_per = (item_updated_per === Infinity || item_updated_per < 1) ? '---' : `${Math.round(item_updated_per)}%`
        expense_item.children[1].children[1].innerText = item_updated_per
    })
}

function addItem() {
    let item_type = select_type.value
    let item_desc = input_desc.value
    let item_amount = parseFloat(input_amount.value)
    let item_percentage = parseFloat(item_amount / (total_income / 100))
    item_percentage = (item_percentage === Infinity || item_percentage < 1) ? '---' : `${Math.round(item_percentage)}%`
    // Validating Input
    if (input_desc !== "" && item_amount > 0) {
        // Add Item to Log
        let item_id = (item_type === 'income' ? (income_log.length <= 0 ? 0 : income_log[income_log.length - 1].id + 1) : (expense_log.length <= 0 ? 0 : expense_log[expense_log.length - 1].id + 1))
        let item = (item_type === 'income' ? { id: item_id, type: item_type, desc: item_desc, amount: item_amount } : { id: item_id, type: item_type, desc: item_desc, amount: item_amount, percentage: item_percentage })
        item_type === 'income' ? income_log.push(item) : expense_log.push(item)
        
        calculateBudget()
        //Add item to Screen
        insertItemToUI(item)
        updateItemPercentage()
        clearInputs()
    }
}
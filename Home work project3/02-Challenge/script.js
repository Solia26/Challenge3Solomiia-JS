let employees = [];

// Function to render employee list sorted alphabetically by last name
function renderEmployeeList() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ''; // Clear previous content

    // Sort employees alphabetically by last name
    employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

    employees.forEach((employee, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('employee-item');
        listItem.innerHTML = `
            <p><strong>Name:</strong> ${employee.firstName} ${employee.lastName}</p>
            <p><strong>Salary:</strong> ${employee.salary}</p>
        `;
        employeeList.appendChild(listItem);
    });

    // Log computed and aggregated data to the console
    computeAndLogData();
}

// Function to add new employee
function addEmployee() {
    let continueAdding = true;

    // Prompt for employee details
    while (continueAdding) {
        const firstName = prompt('Enter first name:');
        const lastName = prompt('Enter last name:');
        const salary = parseFloat(prompt('Enter salary:'));

        if (firstName && lastName && !isNaN(salary)) {
            employees.push({ firstName, lastName, salary });
        } else {
            alert('Please enter valid input for all fields.');
        }

        const continueInput = prompt('Do you want to add another employee? (yes/no)');
        if (continueInput.toLowerCase() !== 'yes') {
            continueAdding = false;
        }
    }

    // Render updated employee list
    renderEmployeeList();
}

// Function to compute and log data to the console
function computeAndLogData() {
    // Compute and log aggregated data (e.g., total payroll)
    const totalPayroll = employees.reduce((acc, curr) => acc + curr.salary, 0);
    console.log('Total Payroll:', totalPayroll.toFixed(2));
}

// Initial rendering of employee list
renderEmployeeList();
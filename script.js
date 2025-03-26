const employees = [];

document.getElementById("add-employee-btn").addEventListener("click", function () {
  let keepGoing = true;

  while (keepGoing) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salaryInput = prompt("Enter employee's salary:");
    const salary = parseFloat(salaryInput);

    if (!firstName || !lastName || isNaN(salary)) {
      alert("Invalid input. Please try again.");
      continue;
    }

    employees.push({ firstName, lastName, salary });

    keepGoing = confirm("Do you want to add another employee?");
  }

  // Sort employees by last name
  employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

  // Display employees on the page
  const list = document.getElementById("employee-list");
  list.innerHTML = "";
  employees.forEach(emp => {
    const li = document.createElement("li");
    li.textContent = `${emp.firstName} ${emp.lastName} - $${emp.salary.toLocaleString()}`;
    list.appendChild(li);
  });

  // Compute and log payroll summary
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const average = total / employees.length;

  console.log("Payroll Summary:");
  console.log("Total Employees:", employees.length);
  console.log("Total Payroll: $" + total.toLocaleString());
  console.log("Average Salary: $" + average.toFixed(2));
});

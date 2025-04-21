// Problem 1
console.log("problem one")
let employees = [{
    "name": "Sam", "department": "tech", "designation": "Manager", "Salary": 40000, "raiseEligible": true

},
{
    "name": "Mary", "department": "Finance", "designation": "Traniee", "Salary": 18500, "raiseEligible": true
    
},
{
    "name": "Bill", "department": "HR", "designation": "Executive", "Salary": 21200, "raiseEligible": false
    
},
]
console.log(employees)
//Problem 2
console.log("problem two")
let company = {
    "name": "Tech Stars", "Website": "www.techstars.site", "Employees": employees
}
console.log(company)
//Problem 3 
console.log("problem three")
employees.push({
    "name": "Anna", "department": "Tech", "designation": "Executive", "Salary": 25600, "raiseEligible": false
})
console.log(employees)
console.log(company)
//Problem 4 
console.log("problem four")
let total= 0
for(let i=0; i<employees.length;i++){
    //console.log(employees[i].Salary)
    total = total + employees[i].Salary
}
console.log(total)
//problem 5 
console.log("Problem five")
for(let i=0; i<employees.length;i++){
    //console.log(employees[i].Salary)
    if(employees[i].raiseEligible == true){
        let oldsalary = employees[i].Salary
        let newsalary = employees[i].Salary * 1.1
        employees[i].Salary = newsalary
        employees[i].raiseEligible = false
    }
}
console.log(employees)
//Probelm 6
console.log("Problem six")
for(let i=0; i<employees.length;i++){
    //console.log(employees[i].Salary)
    if(employees[i].name == "Anna" || employees[i].name == "Sam"){
        employees[i].wfh = true
    } else{
        employees[i].wfh = false
    }
}
console.log(company)

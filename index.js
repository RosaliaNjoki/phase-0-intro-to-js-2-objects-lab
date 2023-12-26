// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
    
} ; 
   
function updateEmployeeWithKeyAndValue(employee, key, value){ 

    const newObj = {...employee} ;
    newObj[key] = value;
    return newObj;
}     
const worker  = updateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(employee);
console.log(worker);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee.streetAddress="12 Broadway";
    return employee;
}


function deleteFromEmployeeByKey(employee,key, value){
     const newObj = {...employee};
     newObj[key]=value;
     return newObj;
 }
const newEmployee  = deleteFromEmployeeByKey(employee, "name", "");
delete newEmployee.name.valueOf();
console.log(newEmployee);


const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    
    delete employee[key];
    return employee;

}
console.log(employee);
// const employees  = deleteFromEmployeeByKey(employee);
// delete employee.name.valueOf();
// console.log(employee);

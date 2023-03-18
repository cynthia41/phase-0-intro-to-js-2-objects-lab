const employee = {
    name:"",
    streetAddress:""
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

employee.name="Sam";
employee.streetAddress="11 Broadway";
employee;
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee["name"]="Sam";
    employee["streetAddress"]="12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee['name'];
    return employee
}
destructivelyDeleteFromEmployeeByKey()


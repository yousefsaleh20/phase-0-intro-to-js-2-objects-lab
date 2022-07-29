// Write your solution in this file!
const employee = {
    name: 'yousef',
    streetAdress: '123 lane',
  };

  function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...obj}
    newEmployee[key] = value;

    return newEmployee;
  };

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key,) {
    const employeeTwo = {...employee}
    
    delete employeeTwo[key];
    return employeeTwo;
  }

  function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
  }


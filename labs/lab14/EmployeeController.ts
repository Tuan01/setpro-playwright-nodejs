import Employee from "./Employee";

export default class EmployeeController {
    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
            totalSalary += employee.getSalary();
        })
        return totalSalary;
    }

    static getHighestSalaryEmployee(employeeList: Employee[]): Employee {
        let highestSalary = employeeList[0];
        employeeList.forEach(employee => {
            if(employee.getSalary() > highestSalary.getSalary()){
                highestSalary = employee;
            }
        })
        return highestSalary;
    }
}
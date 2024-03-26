import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";


let hung = new FTE("Hung");
let thuy = new FTE("Thuy");
let phong = new Contractor("Phong");

const totalSalary = EmployeeController.getTotalSalary([hung, thuy, phong]);
const highetSalary = EmployeeController.getHighestSalaryEmployee([hung, thuy, phong]);
console.log(`Total salary is ${totalSalary}`);
console.log(`Highest salary is ${JSON.stringify(highetSalary)}`);

interface Employee{
    id?: Number,
    name: string,
    email: string,
    department: string,
    salary: number,
}

interface EmployeeFormProps{
    employee?: Employee;
}

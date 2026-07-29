import Link from "next/link";
import EmployeeDeleteButton from "./EmployeeDeleteButton";


type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
};

interface Props {
  employees: Employee[];
}


export default function EmployeeTable({ employees }: Props) {
  return (
    <table className="w-full border border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-3">ID</th>
          <th className="border p-3">Name</th>
          <th className="border p-3">Email</th>
          <th className="border p-3">Department</th>
          <th className="border p-3">Salary</th>
          <th className="border p-3">Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="border p-3">{employee.id}</td>
            <td className="border p-3">{employee.name}</td>
            <td className="border p-3">{employee.email}</td>
            <td className="border p-3">{employee.department}</td>
            <td className="border p-3">{employee.salary}</td>

            <td className="border p-3 space-x-2">
              <Link
                href={`/employees/edit/${employee.id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>              

              <EmployeeDeleteButton id={employee.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
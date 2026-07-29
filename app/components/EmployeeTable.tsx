import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

export default async function EmployeesPage() {
  const employees = await prisma.employee.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employees</h1>

        <Link
          href="/employees/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Employee
        </Link>
      </div>

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
                <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>

                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
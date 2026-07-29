import Link from "next/link";
import { prisma } from "@/app/lib/prisma";
import EmployeeTable from "@/app/components/EmployeeTable";

export default async function EmployeesPage() {
  const employees = await prisma.employee.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Employee List
        </h1>

        <Link
          href="/employees/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Employee
        </Link>
      </div>

      <EmployeeTable employees={employees} />
    </div>
  );
}
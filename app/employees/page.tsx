import { prisma } from "@/app/lib/prisma";

export default async function EmployeesPage() {
  const employees = await prisma.employee.findMany();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Employees</h1>

      <pre>{JSON.stringify(employees, null, 2)}</pre>
    </div>
  );
}
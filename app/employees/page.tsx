import { prisma } from "@/app/lib/prisma";
import EmployeeTable from "@/app/components/EmployeeTable";

const EmployeeTableAny: any = EmployeeTable;

export default async function EmployeesPage() {
  const employees = await prisma.employee.findMany();

  return (
    <>
      <EmployeeTableAny employees={employees} />
    </>
  );
}
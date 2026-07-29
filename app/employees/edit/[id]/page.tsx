import { prisma } from "@/app/lib/prisma"
import EmployeeForm from "@/app/components/EmployeeForm";

interface Props {
    params: Promise<{ id: string; }>;
}

const page = async ({ params }: Props) => {

    const { id } = await params;

    const employee = await prisma.employee.findUnique({
        where: {
            id: Number(id),
        },
    });

    return (
        <>
            <div className="max-w-3xl mx-auto p-10">
                <h1 className="text-3xl font-bold mb-8">
                    Edit Employee
                </h1>

                <EmployeeForm employee={employee!} />
            </div>
        </>
    )
}

export default page

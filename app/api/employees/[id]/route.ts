import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";


interface Props {
    params: Promise<{ id: string }>
}

// export async function GET(request: Request, {params}: Props){
//     try {
//         const { id } = await params;

//         const employee = await prisma.employee.findUnique({
//             where:{
//                 id: Number(id),
//             },
//         })

//         return NextResponse.json(employee);

//     } catch (error) {
//         console.error(error);
//         return NextResponse.json(
//             {
//                 success: false,
//                 message: error instanceof Error ? error.message : "Unknown Error",
//             },
//             {
//                 status:500
//             }
//         )
//     }
// }

export async function PUT(request: Request, { params }: Props) {
    try {
        const { id } = await params;
        const body = await request.json();

        const employee = await prisma.employee.update({
            where: {
                id: Number(id),
            },
            data: {
                name: body.name,
                email: body.email,
                department: body.department,
                salary: Number(body.salary),
            }
        })

        return NextResponse.json(
            {
                success: true,
                data: employee,
            },
            { status: 200 }
        )

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : "Unknown Error",
            },
            { status: 500 }
        )
    }
}

export async function DELETE(request: Request, { params }: Props) {
    try {
        const { id } = await params;

        await prisma.employee.delete({
            where: {
                id: Number(id)
            }
        })

        return NextResponse.json({
            message: "Employe Deleted successfully"
        },
            { status: 200 }
        )

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to Delete employe"
            },
            { status: 500 }
        )
    }
}
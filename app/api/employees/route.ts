import { prisma } from "@/app/lib/prisma";
import { NextResponse } from 'next/server'


export async function POST(request: Request){
    try {
        const body = await request.json();

        const employee = await prisma.employee.create({
            data: {
                name: body.name,
                email: body.email,
                department: body.department,
                salary: Number(body.salary),
            }
        })
        
        return NextResponse.json(
            {
                success:true,
                date: employee,
            },
            
            {status: 201}
            
        );

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success:false,
                message: "Failed to create employee"
            },
            {status: 500}
        )
    }
}
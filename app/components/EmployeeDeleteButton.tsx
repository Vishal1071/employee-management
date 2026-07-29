"use client"
import api from "../lib/axios";
import { useRouter } from "next/navigation";


export default function EmployeeDeleteButton({ id }: { id: number }) {

    const router = useRouter();

    const handleDelete = async () => {
        try {
            if(!confirm("Delete this Employee"))return;
            // console.log("user id",id);
            const res = await api.delete(`/employees/${id}`);
            

            if (res.status === 200) {
                alert("Deleted Successfully")
                router.refresh();
            }

        } catch (error) {
            console.error(error);

        }
    }

    return (
        <>
            <button onClick={handleDelete} className="bg-red-600 text-white px-3 py-1 rounded">
                Delete
            </button>
        </>
    )
}



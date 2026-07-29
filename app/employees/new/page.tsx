import EmployeeForm from "@/app/components/EmployeeForm";

export default function NewEmployes() {
    return (

        <div className="max-w-3xl mx-auto p-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Add Employee</h1>
                <p className="text-gray-500 mt-2">
                    Fill in the employee details below.
                </p>
            </div>

            <EmployeeForm />
        </div>
    )
}
"use client"

import { Formik } from "formik"
import * as Yup from "yup"
import api from "@/app/lib/axios"
import { useRouter } from "next/navigation"


const employeeSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),

    department: Yup.string()
        .required("Department is required"),

    salary: Yup.number()
        .required("Salary is required")
        .positive("Salary must be a positive number")
})


const EmployeeForm = ({ employee, }: EmployeeFormProps) => {
    const router = useRouter()

    const onSubmit = async (value: {
        name: string;
        email: string;
        department: string;
        salary: number | string;
    }, { resetForm }: any

    ) => {
        try {
            if (employee) {
                //edit
                const res = await api.put(`/employees/${employee.id}`, value);
                if(res.status === 200){
                    alert("Employee update successfully")
                    router.push('/employees')
                }
            } else {
                //create
                const res = await api.post('/employees', value);
                if (res.status === 201) {
                    alert("Employee create successfully")
                    router.push("/employees");
                }
            }
            resetForm();

        } catch (error) {
            console.error(error);
            alert("Somthing went wrong")
        }
    }
    return (
        <Formik
            initialValues={{
                name: employee?.name || "",
                email: employee?.email || "",
                department: employee?.department || "",
                salary: employee?.salary || ""
            }}
            enableReinitialize
            validationSchema={employeeSchema}
            onSubmit={onSubmit}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border p-2 w-full" />

                        {touched.name && errors.name && (
                            <p className="text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label >Email</label>

                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border p-2 w-full"
                        />

                        {touched.email && errors.email && (
                            <p className="text-red-500">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label>Department</label>
                        <input
                            type="text"
                            name="department"
                            value={values.department}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border p-2 w-full"
                        />

                        {touched.department && errors.department && (
                            <p className="text-red-500">{errors.department}</p>
                        )}
                    </div>

                    <div>
                        <label>salary</label>

                        <input
                            type="number"
                            name="salary"
                            value={values.salary}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border p-2 w-full"
                        />

                        {touched.department && errors.department && (
                            <p className="text-red-500">{errors.department}</p>
                        )}
                    </div>
                    <button type="submit" className="bg-black text-white px-5 py-2 rounded">Save employee</button>
                </form>
            )}
        </Formik>
    )
}

export default EmployeeForm

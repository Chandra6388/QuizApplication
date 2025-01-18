import React, { useState } from "react";
import { useFormik } from "formik";
import AddFrom from "../../ExtraComponents/ReusableForm";
import * as Yup from "yup";
const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const fields = [
        {
            name: "username",
            label: "User Name",
            type: "text",
            label_size: 12,
            col_size: 12,
            disable: false,
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            label_size: 12,
            col_size: 12,
            disable: false,
        },

    ];


    return (
        <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex justify-content-center py-4">
                                <a
                                    href="index.html"
                                    className="logo d-flex align-items-center w-auto"
                                >
                                    <img src="assets/img/logo.png" alt="" />
                                    <span className="d-none d-lg-block">NiceAdmin</span>
                                </a>
                            </div> 
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">
                                            Login to Your Account
                                        </h5>
                                        <p className="text-center small">
                                            Enter your username &amp; password to login
                                        </p>
                                    </div>
                                    <div className="row g-3">
                                        <AddFrom
                                            fields={fields.filter(
                                                (fields) => !fields.showWhen || fields.showWhen(formik.values)
                                            )}
                                            page_title="Add Employee" 
                                            hide_cancle_btn={true}
                                            hide_submit_btn={true}
                                          
                                            formik={formik}

                                        />
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit">
                                                Login
                                            </button>
                                        </div>
                                        <div className="col-12">
                                            <p className="small mb-0">
                                                Don't have account?{" "}
                                                <a href="pages-register.html">Create an account</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Login;
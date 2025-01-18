import React , {useState} from "react";
const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
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
                            {/* End Logo */}
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
                                        <div className="col-12">
                                            <label htmlFor="yourUsername" className="form-label">
                                                Username
                                            </label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">
                                                    @
                                                </span>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    id="yourUsername"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your username.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">
                                                Password
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={togglePasswordVisibility}
                                                    style={{ borderLeft: "none" }}
                                                >
                                                    {showPassword ? (
                                                        <i className="bi bi-eye-slash"></i> // Bootstrap icon for hidden
                                                    ) : (
                                                        <i className="bi bi-eye"></i> // Bootstrap icon for visible
                                                    )}
                                                </button>
                                            </div>
                                            <div className="invalid-feedback">
                                                Please enter your password!
                                            </div>
                                        </div>
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
import "bootstrap/dist/css/bootstrap.min.css";
import { Envelope, Lock } from "react-bootstrap-icons";
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(setFormData)
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <h3 className="text-center mb-4">Login</h3>
                <form>
                    {/* Email Field */}
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><Envelope /></span>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><Lock /></span>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>

                    <p className="text-center mt-3">
                        Don&apos;t have an account? <a href="/register" className="text-primary">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

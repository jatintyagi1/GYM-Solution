import "bootstrap/dist/css/bootstrap.min.css";
import { Person, Envelope, Lock, Phone } from "react-bootstrap-icons";
import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(setFormData)
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <h3 className="text-center mb-4">Register</h3>

                <form>
                    {/* Name Field */}
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><Person /></span>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

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

                    {/* Phone Field */}
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><Phone /></span>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number"
                            value={formData.phone}
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
                        Register
                    </button>

                    <p className="text-center mt-3">
                        Already have an account? <a href="/login" className="text-primary">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

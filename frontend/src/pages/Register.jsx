import "bootstrap/dist/css/bootstrap.min.css";
import { Person, Envelope, Lock, Phone } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerStart, registerSuccess, registerFailure } from "../redux/Auth/AuthSlide";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
    name: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().matches(/^\d{10}$/, "Phone must be 10 digits").required("Phone is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Register() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        dispatch(registerStart());

        try {
            const response = await axios.post("http://localhost:5000/api/register", data);
            dispatch(registerSuccess(response.data));
            alert("Registration Successful!");
        } catch (error) {
            dispatch(registerFailure(error.response?.data?.message || "Registration failed"));
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <h3 className="text-center mb-4">Register</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><Person /></span>
                            <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="Full Name" {...register("name")} />
                        </div>
                        <div className="invalid-feedback">{errors.name?.message}</div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><Envelope /></span>
                            <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="Email Address" {...register("email")} />
                        </div>
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>

                    {/* Phone Field */}
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><Phone /></span>
                            <input type="text" className={`form-control ${errors.phone ? "is-invalid" : ""}`} placeholder="Phone Number" {...register("phone")} />
                        </div>
                        <div className="invalid-feedback">{errors.phone?.message}</div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><Lock /></span>
                            <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} placeholder="Password" {...register("password")} />
                        </div>
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-danger text-center">{error}</p>}

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>

                    <p className="text-center mt-3">
                        Already have an account? <a href="/login" className="text-primary">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

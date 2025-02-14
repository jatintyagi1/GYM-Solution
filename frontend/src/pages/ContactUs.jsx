import { Envelope, GeoAlt, Telephone, Facebook, Instagram, Twitter } from "react-bootstrap-icons";

export default function Contact() {
    return (
        <div className="container mt-3 mb-5" style={{ maxWidth: '100%'}}>
            {/* Hero Section */}
            <div className="text-center text-white p-5" style={{ backgroundColor: "#2c3e50", width: '100%' }}>
                <h1>Contact Us</h1>
                <p>We’d love to hear from you! Reach out with any questions.</p>
            </div>

            {/* Contact Section */}
            <div className="row mt-5">
                {/* Contact Form */}
                <div className="col-md-7">
                    <div className="card p-4 shadow-sm">
                        <h3 className="mb-4">Get in Touch</h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" placeholder="Enter subject" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="col-md-5">
                    <div className="card p-4 shadow-sm bg-light">
                        <h3 className="mb-4">Our Contact Details</h3>
                        <p><GeoAlt size={20} className="me-2" />123 Gym Street, New York, USA</p>
                        <p><Telephone size={20} className="me-2" />+1 123-456-7890</p>
                        <p><Envelope size={20} className="me-2" />contact@gymstore.com</p>

                        {/* Business Hours */}
                        <h4 className="mt-4">Business Hours</h4>
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 5:00 PM</p>
                        <p>Sunday: Closed</p>

                        {/* Social Media */}
                        <h4 className="mt-4">Follow Us</h4>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-dark fs-3"><Facebook /></a>
                            <a href="#" className="text-dark fs-3"><Instagram /></a>
                            <a href="#" className="text-dark fs-3"><Twitter /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div className="mt-5">
                <h3 className="text-center mb-3">Find Us Here</h3>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.95373531531574!3d-37.8162791797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df3f28e29%3A0x5045675218ce6e0!2sGym%20Solutions!5e0!3m2!1sen!2sus!4v1645630022003"
                        width="100%"
                        height="400"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Gym Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

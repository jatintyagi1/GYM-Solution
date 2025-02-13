
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <section className="container mb-4">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                            <img src="https://www.gymsolutions.com.au/wp-content/uploads/2022/02/GYM_SOLUTIONS_LOGO_HORIZONTAL_MAN_WHT-1-copy.png" alt="" style={{ width: '150px' }} />
                        </div>
                        <div>
                            <h5>Gym Solution India</h5>
                            <p className="mb-1">18 Mac Person</p>
                            <p className="mb-1">New Delhi</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5>We are available in whole India</h5>
                        <ul className="list-unstyled">
                            <li className="text-light">Contact Us</li>
                            <li className="text-light">About Us</li>
                            <li className="text-light">New Delhi</li>
                            <li className="text-light">Mumbai</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5>Follow Us</h5>
                        <div className="d-flex gap-3 align-items-center">
                            <img src="https://www.gymsolutions.com.au/wp-content/uploads/2021/12/Instagram_logo_2016.svg_-150x150.png" alt="Instagram" className="img-fluid" style={{ width: '30px', cursor: 'pointer' }} />
                            <img src="https://www.gymsolutions.com.au/wp-content/uploads/2021/12/2021_Facebook_icon.svg_-150x150.png" alt="Facebook" className="img-fluid" style={{ width: '30px', cursor: 'pointer' }} />
                            <img src="https://www.gymsolutions.com.au/wp-content/uploads/2023/04/youtube.jpg" alt="Youtube" className="img-fluid" style={{ width: '30px', cursor: 'pointer' }} />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5>Sign Up to Our Mailing List</h5>
                        <form>
                            <div className="mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button type="submit" className="btn btn-danger w-100">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="bg-dark text-center py-3">
                <div className="container">
                    <p className="mb-0">
                        Made by <span className="text-danger">Jatin Tyagi</span>
                    </p>
                    <p className="mb-0">© {new Date().getFullYear()} Gym Solution. All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
};
export default Footer;
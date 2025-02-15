import React from "react";

const TextSlider = () => {
  return (
    <div id="textCarousel" className="carousel slide text-center bg-dark text-white py-4 mt-2" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators" style={{ marginTop: '50px'}}>
        <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="4"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <h2 className="fw-bold">🏋️‍♂️ Upgrade Your Home Gym – Up to 50% Off!</h2>
          <p className="fs-5">Get the best gym equipment at unbeatable prices. Limited-time offer!</p>
          <a href="/shop" className="btn btn-danger mt-2">Shop Now</a>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <h2 className="fw-bold">🚴 High-Quality Treadmills & Bikes – Limited Stock!</h2>
          <p className="fs-5">Boost your cardio with the latest fitness machines. Order before they’re gone!</p>
          <a href="/cardio" className="btn btn-primary mt-2">Explore More</a>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <h2 className="fw-bold">🏆 Best-Selling Dumbbells – Shop Now & Save Big!</h2>
          <p className="fs-5">Upgrade your strength training with premium dumbbells. Hurry, while stocks last!</p>
          <a href="/weights" className="btn btn-warning mt-2">Buy Now</a>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <h2 className="fw-bold">🎉 New Arrivals! Smart Gym Equipment for 2025</h2>
          <p className="fs-5">Discover the latest technology in fitness and take your workouts to the next level.</p>
          <a href="/new-arrivals" className="btn btn-success mt-2">Check Out</a>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <h2 className="fw-bold">🔥 Exclusive Deals on Strength Training Equipment!</h2>
          <p className="fs-5">Build muscle with our top-rated gym gear. Limited-time discount available!</p>
          <a href="/deals" className="btn btn-info mt-2">Grab the Deal</a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#textCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#textCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default TextSlider;

import React from 'react';
import '../Styles/NavCardPage/contactus.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  interest: yup.string().required('Interest is required'),
  motive: yup.string().required('Motive is required'),
  product: yup.string().required('Product is required'),
  postcode: yup.string().matches(/^\d{6}$/, 'Invalid postcode format').required('Post Code is required'),
  country: yup.string().required('Country is required'),
});

const Contactus = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/contact-request/submit-contact-us-request', data);
      alert(response.data.message);  // Show success message
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className="full-page-wrapper">
      <div className="left-page-wrapper">
        <div className="upper-left-container">
          <h1 className="contact-us-heading">CONTACT US</h1>
          <h3 className="phone-heading">Phone: 123456789</h3>
          <h3 className="opening-hour-heading">Opening Hour:</h3>
          <p className="week-text">Monday – Friday: 8am – 4.30pm</p>
          <p className="saturday-text">Saturday: By Appointment – please call 9008 1481</p>
        </div>
        <div className="lower-left-container">
          <p className="lower-left-text">You can check out our range of Used, Remanufactured and New Commercial Gym Equipment in person! Contact Us to come down and visit our huge 2,000 square metre factory and showroom at 18 McPherson St, Banksmeadow, NSW 2019. The closest cross street is Exell Street. We have plenty of parking onsite and pick up is welcomed.</p>
          <p className="lower-left-text">We can organise shipping anywhere just contact us via email or phone and we can work out the shipping for your items. We are happy to help you organise freight anywhere in Australia or overseas. However, please note we take no responsibility for delivery issues or damages to equipment whilst in transit.</p>
        </div>
      </div>
      <div className="right-page-wrapper">
        <h1>Fill out our contact form to get in touch:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter your Name"
            {...register('name')}
            id="name"
            name="name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register('email')}
            id="email"
            name="email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            {...register('phone')}
            id="mobile-number"
            name="mobile-number"
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}

          <label htmlFor="interest">I am interested in:</label>
          <select {...register('interest')} id="interest">
            <option value="Home Gym Use">Home Gym Use</option>
            <option value="Business Gym Use">Business Gym Use</option>
          </select>
          {errors.interest && <p className="error">{errors.interest.message}</p>}

          <label htmlFor="motive">I am:</label>
          <select {...register('motive')} id="motive">
            <option value="Buying Gym Equipment">Buying Gym Equipment</option>
            <option value="Selling Gym Equipment">Selling Gym Equipment</option>
          </select>
          {errors.motive && <p className="error">{errors.motive.message}</p>}

          <label htmlFor="product">What Product are you interested in:</label>
          <input
            type="text"
            id="product"
            name="product"
            {...register('product')}
          />
          {errors.product && <p className="error">{errors.product.message}</p>}

          <label htmlFor="postcode">Post Code:</label>
          <input
            type="text"
            id="post-code"
            name="post-code"
            {...register('postcode')}
          />
          {errors.postcode && <p className="error">{errors.postcode.message}</p>}

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            {...register('country')}
          />
          {errors.country && <p className="error">{errors.country.message}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

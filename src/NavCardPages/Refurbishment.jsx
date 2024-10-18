import React from 'react';
import './../Styles/NavCardPage/refurbishment.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Clean_Service from './../Assets/images/Clean_Service.png';
import Recondition from './../Assets/images/Recondition.png';
import Refurbishment_A from './../Assets/images/Refurbishment_A.png';
import Before_1 from './../Assets/images/Before_1.png';
import Before_2 from './../Assets/images/Before_2.png';
import Before_3 from './../Assets/images/Before_3.png';
import Before_4 from './../Assets/images/Before_4.png';
import After_1 from './../Assets/images/After_1.png';
import After_2 from './../Assets/images/After_2.png';
import After_3 from './../Assets/images/After_3.png';
import After_4 from './../Assets/images/After_4.png';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),   
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  brand: yup.string().required('Brand is required'),
  model: yup.string().required('Model is required')
});

const Refurbishment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), 
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/service-request/submit-service-request', data);
      console.log('request send succesfully')
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className='main-wrapper-container'>
      <h1 className='top-upper-text'>REFURBISHMENT</h1>
      <div className='upper-main-container-wrapper'>
        <div className='left-container'>
          <h3 className='our-service-tier-text'>Our Service Tiers Explained</h3>
          <p className='upper-paragraph-text'>Here at Gym Solutions, we have a passion for refurbishing and maintaining equipment so that they’re restored to their original, premium state. Our team of experts have years of experience with refurbishing commercial fitness equipment and we ensure that every piece of commercial gym equipment is not only fully functioning, but has also been beautifully renewed and ready to give you many more years of use.</p>
          <div className='left-container-icons-wrapper-container'>
            <div className='first-icon-container'>
              <img src={Clean_Service} alt='' />
              <p>Our certified technicians clean the unit thoroughly and inspect each part to ensure that they are in working order. If there are any worn parts beyond 60% of its expected lifetime, they are replaced and we ensure that there aren’t any mechanical problems that we’re aware of.</p>
            </div>
            <div className='second-icon-container'>
              <img src={Recondition} alt='' />
              <p>In our commercial gym equipment maintenance bay, we service, repair and replace components to ensure that the product is fully functional.</p>
            </div>
            <div className='third-icon-container'>
              <img src={Refurbishment_A} alt='' />
              <p>To refurbish equipment, we strip the units down to their base components and recondition motors, bearings, brushes, drive belts, decks and running belts as well as powder coat the unit. Upholstery can be changed and the body and plastics can be sprayed and painted to either freshen up or change the colour scheme.</p>
            </div>
          </div>
        </div>
        <div className='right-container'>
          <h3>Service Request</h3>
          <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>Name : </label>
            <input 
              type='text'
              {...register('name')} 
              placeholder='Enter your Name' 
              id='name' 
              name='name' 
            />
            <p>{errors.name?.message}</p>

            <label htmlFor='email'>Email : </label>
            <input 
               type='email' 
               {...register('email')} 
               placeholder='Enter your Email' 
               id='email' 
               name='email' 
            />
            <p>{errors.email?.message}</p>

            <label htmlFor='address'>Address : </label>
            <input 
              type='text' 
              {...register('address')} 
              placeholder='Enter your Address' 
              id='address' 
              name='address' 
            />
            <p>{errors.address?.message}</p>

            <label htmlFor='city'>City : </label>
            <input 
               type='text' 
               {...register('city')} 
               placeholder='Enter your City' 
               id='city' 
               name='city' 
            />
            <p>{errors.city?.message}</p>

            <label htmlFor='state'>State : </label>
            <input 
              type='text'
              {...register('state')}  
              placeholder='Enter your State' 
              id='state' 
              name='state' 
            />
            <p>{errors.state?.message}</p>

            <label htmlFor='brand'>Equipment & Brand : </label>
            <input 
               type='text'
               {...register('brand')}   
               id='brand' 
               name='brand' 
            />
            <p>{errors.brand?.message}</p>

            <label htmlFor='model'>Model : </label>
            <input 
                type='text' 
                {...register('model')} 
                id='model' 
                name='model' 
            />
            <p>{errors.model?.message}</p>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <div className='middle-container-wrapper'>
        <h3>Gym Equipment Refurbishment Before</h3>
        <div className='upper-image-grid'>
          <img src={Before_1} alt='' />
          <img src={Before_2} alt='' />
          <img src={Before_3} alt='' />
          <img src={Before_4} alt='' />
        </div>
      </div>
      <div className='lower-container-wrapper'>
          <h3>Gym Equipment Refurbishment After</h3>
          <div className='lower-image-grid'>
          <img src={After_1} alt='' />
          <img src={After_2} alt='' />
          <img src={After_3} alt='' />
          <img src={After_4} alt='' />
          </div>
      </div>
    </div>
  );
};

export default Refurbishment;

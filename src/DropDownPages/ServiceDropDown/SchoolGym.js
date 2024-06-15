import React from 'react'
import './schoolDesign.css'
import School_Design_A from './../../Assets/images/School_Design_A.png'
import School_Design_B from './../../Assets/images/School_Design_B.png'
import School_Design_C from './../../Assets/images/School_Design_C.png'
import School_Design_D from './../../Assets/images/School_Design_D.png'
import School_Design_E from './../../Assets/images/School_Design_E.png'
import School_Design_F from './../../Assets/images/School_Design_F.png'
import School_Design_G from './../../Assets/images/School_Design_G.png'
import School_Design_H from './../../Assets/images/School_Design_H.png'

const SchoolImage = [
  {src:School_Design_A},
  {src:School_Design_B},
  {src:School_Design_C},
  {src:School_Design_D},
  {src:School_Design_E},
  {src:School_Design_F},
  {src:School_Design_G},
  {src:School_Design_H},
];

const SchoolGym = () => {
  return (
    <div className='school-full-page-wrapper'>
      <div className='school-top-background-design'>
        <h1 className='school-top-heading-text'>School Gym Design</h1>
      </div>
      <div className='school-main-content-wrapper'>
        <h4 className='school-main-content-heading-text-a'>School Gym Design</h4>
        <p className='school-para-a'>Gym Solutions specialises in the provision of exercise equipment for school gym design, sporting clubs as well as universities.  Through our exclusive partnership with TuffStuff Fitness International we offer you the experience of a company world-renowned for design and biomechanical excellence, as well as excellence in school gym installations. Since 2009, TuffStuff Fitness has remained the exclusive Youth Fitness Equipment supplier to the prestigious National Foundation of Governors’ Fitness Councils® chaired by Jake Steinfeld.</p>
        <p className='school-para-b'>The NFGFC's mission is to build a nation of the fittest, healthiest kids in the world by identifying and supporting innovative ideas that promote physical activity and fitness for children. Through the DON’T QUIT!® Campaign, the NFGFC awards fitness centres to schools in all 50 states. An attractive and unique feature of the campaign is that all DON’T QUIT!® Fitness Centres are fully funded through public/private partnerships.</p>
        <div className='school-image-container-wrapper'>
          {SchoolImage.map((School, index) => (
            <img key={index} src={School.src} alt={`School Design ${index + 1}`} className="image-item" />
          ))}
        </div>
        <h4 className='school-main-content-heading-text-b'>TuffStuff’s KDS Youth Fitness</h4>
        <p className='school-para-c'>TuffStuff’s KDS Youth Fitness Circuit is uniquely designed and modified to work with users who are typically 4’6” through 6’0” height. KDS weight stack units come standard with Colour Coded Safety Stacks, and blended lighter weight stack increments to allow younger and deconditioned youth to work comfortably but also accommodate stronger and bigger youth athletes as well. Also a noise reduction kit using rubber spacers is included standard with all KDS Weight Stack Units minimizing noise issues to nearby classrooms, work areas or other noise sensitive areas. Optional heavier weight stack upgrade kits are also available as well as the extensive TuffStuff range of compact, multifunctional strength equipment.</p>
        <p className='school-para-d'>TuffStuff’s Youth Fitness Compact Platform Trainer (KDS-SPT6P) offers traditional weight resistance movement, in a machine that’s fun for kids to watch and use.  Focused on helping youth develop age-appropriate exercise programs that are engaging at home, school and on the field, TuffStuff’s Youth Fitness Series can help instil the value of physical activity.  Key Features include:</p>
        <ul className='school-main-list-item-container'>
          <li>Full length safety weight stack enclosures</li>
          <li>Quick adjust colour coded weight stack</li>
          <li>Ideal for co-ed classes and mixed age classes</li>
          <li>150 lbs. steel weight stack</li>
          <li>Light Commercial Warranty</li>
        </ul>
        <p className='school-para-e'>GYM SOLUTIONS are the exclusive distributors of TuffStuff Fitness International for Australia & New Zealand. We can organise shipping/container/packing of containers on large orders. No GST on exports out of AU. Retail is at our RRP on single items or package price deals are also available.</p>
        <p className='school-para-f'>We can also do the gym design, installation and maintenance for you. Talk to one of our trained professionals by calling 02 9008 1481 or email us at info@gymsolutions.com.au to find out what we can do for your school or sports club.</p>
      </div>
    </div>
  )
}

export default SchoolGym;
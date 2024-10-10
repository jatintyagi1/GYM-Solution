import '../../Styles/HomePage/ourBrand.css';

import Brand1 from './../../Assets/logo/Brand1.png';
import Brand2 from './../../Assets/logo/Brand2.png';
import Brand3 from './../../Assets/logo/Brand3.png';
import Brand4 from './../../Assets/logo/Brand4.png';
import Brand5 from './../../Assets/logo/Brand5.png';
import Brand6 from './../../Assets/logo/Brand6.png';
import Brand7 from './../../Assets/logo/Brand7.png';
import Brand8 from './../../Assets/logo/Brand8.png';

const BrandImages = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8];

export default function OurBrand() {
    return (
        <section className='our-brand-section'>
            <div className='container'>
                <h2 className='section-title'>Our Brands</h2>
                <div className='brand-grid'>
                    {BrandImages.map((brand, index) => (
                        <div key={index} className='brand-item'>
                            <img src={brand} alt={`Brand ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

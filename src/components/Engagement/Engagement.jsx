import './Engagement.css'

import { GiBowlOfRice } from "react-icons/gi";
import { GiFlour } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';




const Engagement = () => {
  return (
    <section className='container'>

      <div className='box-container'>

        <div className='box'>
          <GiBowlOfRice className='text-primary-400 fw-regular' />
          <h1 className='fs-700 text-primary-400'> Crafted Baked
          </h1>
          <p className='fs-700'>Simply Perfect</p>
        </div>

        <div className='box'>
          <GiFlour className='text-primary-400 fw-regular' />
          <h1 className='fs-700 text-primary-400'> Real Ingredients
          </h1>
          <p className='fs-700'>Always Premium</p>
        </div>

        <div className='box'>
          <FaShop className='text-primary-400 fw-regular' />
          <h1 className='fs-700 text-primary-400'> Bake Shop Way
          </h1>
          <p className='fs-700'>Southampton Born</p>
        </div>

        <div className='box'>
          <FaAward className='text-primary-400 fw-regular' />
          <h1 className='fs-700 text-primary-400'> Award Winning
          </h1>
          <p className='fs-700'>Nationally Recognized</p>
        </div>
      </div>


      <PrimaryButton text="Read more" />
    </section>
  )
}

export default Engagement
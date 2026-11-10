import './GiftInsparation.css'
import GiftBox from "../../common/GiftBox/GiftBox";
import { cards } from "../../data/Data";
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';


const GiftInsparation = () => {
  return (
    <section className="container">
      <div className="gift-content">
        <h1 className='text-primary-400 fs-1100'>Give The Gift of Patt's</h1>

        <GiftBox giftCards={cards} />

        <PrimaryButton text='Shop Our Gift Guide' />


      </div>
    </section>
  )
}

export default GiftInsparation
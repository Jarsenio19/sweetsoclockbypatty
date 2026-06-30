import './ProductCard.css'
import QuickShopButton from '../QuickShopButton/QuickShopButton'

const ProductCard = ({ image, productType, title, price }) => {
  return (
    <>
      <div className='sales-box'>

        <QuickShopButton />

        <img src={image} alt={title} />

        <div className='product-info fs-700 fw-regular text-neutral-100 bg-primary-400'>
          <h3>{title}</h3>

          <div className='product-bottom'>

            <div className='product-type'>
              <span className='fs-100'>PRODUCT TYPE</span>
              <h4 className='fw-regular'>{productType}</h4>
            </div>

            <div className='product-price'>
              <span className='fs-100'>PRICE</span>
              <div className='price-row'>
                <h4 className='price1'>{price}</h4>

                {/* if this for sale price */}
                <h4 className='price2'>{price}</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard

import './ProductCard.css'

const ProductCard = ({ image, productType, name, price, onAddToCart }) => {
  return (
    <div className='sales-box'>

      <img src={image} alt={name} />

      <div className='product-info fs-700 fw-regular text-neutral-100 bg-primary-400'>

        <h3>{name}</h3>

        <div className='product-bottom'>

          <div className='product-type'>
            <span className='fs-100'>SIZE</span>
            <h4 className='fw-regular'>{productType}</h4>
          </div>

          <div className='product-price'>
            <span className='fs-100'>PRICE</span>

            <div className='price-row'>
              <h4 className='price1'>{price}</h4>

              {/* Sale price if needed */}
              <h4 className='price2'>{price}</h4>
            </div>
          </div>

        </div>

        <button
          className='add-to-cart'
          onClick={onAddToCart}
        >
          ADD TO CART
        </button>

      </div>
    </div>
  )
}

export default ProductCard

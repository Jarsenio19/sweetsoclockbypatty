import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='container'>
      <div className="testimonial-section">

        <div className='text'>
          <h3 className='fs-500 text-accent-100 '>TESTIMONIALS</h3>
          <h2 className='text-primary-400 fs-1000'>What people have to say...</h2>

        </div>

        <div className="testimonial-list">

          {/* Testimonial 1 */}
          <div className="box-container">
            <div className="box-details">
              <div className="box-text text-primary-400">

                <div className="stars">★★★★★</div>

                <h2>Best Chocolate Chip Cookies</h2>

                <p>
                  "The best cookies I have ever had and I didn't have to bake them, but they use all of the ingredients any of us would use if baking for our family"
                </p>

                <div className="signature">
                  <span>-Jayjay</span>
                  <div className="signature-line"></div>
                </div>

              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="box-container">
            <div className="box-details">
              <div className="box-text text-primary-400">

                <div className="stars">★★★★★</div>

                <h2>Superb, Scrumptious, Delicious</h2>

                <p>
                  "Patty's baked goods are divine. Every item in this beautiful basket was a delectable treat."
                </p>

                <div className="signature">
                  <span>-Jayson</span>
                  <div className="signature-line"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Testimonial
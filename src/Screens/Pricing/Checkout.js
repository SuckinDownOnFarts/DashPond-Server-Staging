import React from 'react';
import api from '../../api/axios';

const ProductDisplay = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/create-checkout-session');

      window.location = response.data.url
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Checkout
        </button>
      </form>
    </section>
  );
}

export default ProductDisplay
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

//     const Message = ({ message }) => (
//       <section>
//         <p>{message}</p>
//       </section>
//     );

//     export default function App() {
//       const [message, setMessage] = useState("");

//       useEffect(() => {
//         // Check to see if this is a redirect back from Checkout
//         const query = new URLSearchParams(window.location.search);

//         if (query.get("success")) {
//           setMessage("Order placed! You will receive an email confirmation.");
//         }

//         if (query.get("canceled")) {
//           setMessage(
//             "Order canceled -- continue to shop around and checkout when you're ready."
//           );
//         }
//       }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }

// export default ProductDisplay
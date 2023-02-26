// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function OfferForm() {
// //   const [offers, setOffers] = useState([]);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchOffers = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8080/api/offers');
        
// //         const data = response.data;
// //         if (response.status === 200) {
// //           setOffers(data);
// //         } else {
// //           setError(data.message);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //         setError('An error occurred while fetching offers.');
// //       }
// //     };
// //     fetchOffers();
// //   }, []);

// //   return (
// //     <>
// //       <h1>Offers</h1>
// //       {offers.length === 0 && <div>No offers available.</div>}
// //       {offers.length > 0 && (
// //         <ul>
// //           {offers.map((offer) => (
// //             <li key={offer.id}>
// //               {offer.name} - {offer.price}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //       {error && <div>{error}</div>}
// //     </>
// //   );
// // }

// // export default OfferForm;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function OfferForm() {
//   const [offers, setOffers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchOffers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/offers');
        
//         const data = response.data;
//         if (response.status === 200) {
//           setOffers(data);
//         } else {
//           setError(data.message);
//         }
//       } catch (error) {
//         console.error(error);
//         setError('An error occurred while fetching offers.');
//       }
//     };
//     fetchOffers();
//   }, []);

//   return (
//     <>
//       <h1>Offers</h1>
//       {offers.length === 0 && <div>No offers available.</div>}
//       {offers.length > 0 && (
//         <ul>
//           {offers.map((offer) => (
//             <li key={offer.id}>
//               {offer.name} - {offer.price}
//             </li>
//           ))}
//         </ul>
//       )}
//       {error && <div>{error}</div>}
//     </>
//   );
// }

// export default OfferForm;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OfferForm() {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/offers');
        
        const data = response.data;
        if (response.status === 200) {
          setOffers(data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching offers.');
      }
    };
    fetchOffers();
  }, []);

  return (
    <>
      <h1>Offers</h1>
      {offers.length === 0 && <div>No offers available.</div>}
      {offers.length > 0 && (
        <ul>
          {offers.map((offer) => (
            <li key={offer.id}>
              {offer.displayAttributes.name} - {offer.pricingOptions[0].currency} {offer.pricingOptions[0].cost}
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error}</div>}
    </>
  );
}

export default OfferForm;

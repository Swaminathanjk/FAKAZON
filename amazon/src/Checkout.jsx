import React, { useState, useEffect } from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import Header from './Header';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure the path is correct

function Checkout() {
  const [{ basket }] = useStateValue();
  const [username, setUsername] = useState('');
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUsername(userDoc.data().username);
          } else {
            setUsername('Guest');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUsername('Guest');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      <Header />
      <div className='checkout'>
        <div className='checkout_left'>
          <img className='checkout_ad' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6SJqa1bBdwJfNq1qYNr0IQXUNtD0GI7eow&s' alt='' />
          <div className='checkout_title'>
            <h2>Hello, {username}</h2>
            <h2>YOUR SHOPPING CART</h2>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id} // Adding a unique key is a good practice
                id={item.id}
                price={item.price}
                rating={item.rating}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;

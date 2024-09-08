import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
  const [username, setUsername] = useState('');
  const [{ basket }] = useStateValue();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUsername(userDoc.data().username);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUsername('');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // navigate(''); // Redirect to home page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img className="header_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="Logo" />
      </Link>
      <div className="container">
        <div className="search-container">
          <input placeholder=" Search in Amazon...." className="input" type="text" />
          <svg viewBox="0 0 24 24" className="search__icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </div>
      </div>
      <button className='header_toggleButton' onClick={toggleSidebar}>☰</button>
      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
        <div className='sidebar_close' onClick={toggleSidebar}>×</div>
        <span className='sidebar_optionLineOne'>Hello {username || 'Guest'}</span>
            <Link to='/login'>
            {!username && <span className='sign_in'>Sign In</span>}
            </Link>            
            <Link to={username ? '' : '/login'}>   
            {username && <span className='logout' onClick={handleLogout}>Logout</span>}
            </Link>
        <div className='sidebar_option'>
          <span className='sidebar_optionLineOne'>Returns</span>
          <span className='sidebar_optionLineTwo'>& orders</span>
        </div>
        <div className='sidebar_option'>
          <span className='sidebar_optionLineOne'>Your</span>
          <span className='sidebar_optionLineTwo'>Prime</span>
        </div>
        <div className="cart">
        <Link to='/checkout' className='sidebar_option'>
          <ShoppingCart className='header_cart' />
          <span className='sidebar_optionLineTwo sidebar_basketCount'>{basket?.length}</span>
        </Link>
        </div>
        
      </div>
      <div className='header_nav'>
        
          <div className='header_option'>
            <span className='header_optionLineOne'>Hello {username || 'Guest'}</span>
            <Link to='/login'>
            {!username && <span className='header_optionLineTwo'>Sign In</span>}
            </Link>            
            <Link to={username ? '' : '/login'}>   
            {username && <span className='header_optionLineTwo' onClick={handleLogout}>Logout</span>}
            </Link>
          </div>
        
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& orders</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <div className='header_optionBasket'>
          <Link to='/checkout'><ShoppingCart className='header_cart' /></Link>
          <span className='header_optionLineTwo_header_basketCount'>{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

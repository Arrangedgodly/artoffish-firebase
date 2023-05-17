import {BsShop} from 'react-icons/bs';
import {RiGalleryFill} from 'react-icons/ri';
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import AoLogo from '../images/ao-logo.png';

function Header({loggedIn, navigate}) {
  const navigateUser = () => {
    if (loggedIn) {
      navigate('/my-account');
    } else {
      navigate('/');
    }
  }

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <header className="grid grid-cols-2 items-center fixed w-[100%] top-0 left-0 h-[6vh]">
      <img src={AoLogo} alt="Art Offishal Logo" className='w-[50px] justify-self-start m-md' onClick={navigateHome}/>
      <nav className='justify-self-end m-md'>
        <ul className='flex flex-row'>
          <li className='flex flex-col items-center m-sm'><BsShop />Shop</li>
          <li className='flex flex-col items-center m-sm'><RiGalleryFill />Gallery</li>
          <li className='flex flex-col items-center m-sm' onClick={navigateUser}><VscAccount />Account</li>
          <li className='flex flex-col items-center m-sm'><AiOutlineShoppingCart />Cart</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
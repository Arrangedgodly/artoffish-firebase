import {BsShop} from 'react-icons/bs';
import {RiGalleryFill} from 'react-icons/ri';
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import AoLogo from '../images/ao-logo.png';

function Header() {
  return (
    <header className="container flex flex-row">
      <h1 className="font-sans text-xl">ArtOffishal</h1>
      <img src={AoLogo} alt="Art Offishal Logo" className='max-w-[5%]'/>
      <nav>
        <ul className='flex flex-row'>
          <li><BsShop />Shop</li>
          <li><RiGalleryFill />Gallery</li>
          <li><VscAccount />Account</li>
          <li><AiOutlineShoppingCart />Cart</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
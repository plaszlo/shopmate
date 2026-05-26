import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../assets/saw2.png'

export const Header = () => {3
  const activeClass = 'text-xl bg-gray-200 rounded p-2'
  const inActiveClass = 'text-xl p-2'

  return (
    <div className='flex justify-between max-w-304 border-b border-b-gray-200 mx-auto p-1'>
        <Link to='/' className='flex items-center p-3'>
            <img src={LogoImg} className='w-10 mr-1.5' alt="Logo Image" />
            <span className='text-xl'>Shopping Cart</span>
        </Link>
        <nav className='flex items-center'>
          <NavLink to='/' end className={({ isActive }) => isActive ? activeClass : inActiveClass} >Home</NavLink>
          <NavLink to='/cart' className={({ isActive }) => isActive ? activeClass : inActiveClass}>Cart</NavLink>
        </nav>
        <Link to='/cart' className='flex items-center text-xl'>
          <p className='mr-2'>Cart:</p>
          <p>2</p>
        </Link>
    </div>
  )
}

import { Link, Route, Routes } from 'react-router'

function MainNav() {
  return (
    <div>
        <nav className="flex justify-between h-8 bg-green-200 px-4">
    <div className="flex gap-4 items-center">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      {/* <Link to='/recap'>Recap</Link> */}
      {/* <Link to='/recapuserstate'>RecapUserState</Link> */}
      {/* Route ต้องตรงกับ Link */}
      {/* <Link to='/zustand'>EasyZustand</Link> */}
      <Link to='/product'>Product</Link>
      <Link to='/mycart'>Cart</Link>
    </div>
    
    <div className="flex gap-4 items-center">
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  </nav></div>
  )
}

export default MainNav
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }


  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        {user && (<div>
          <span>{user.email}</span>
          <button onClick={handleClick}>Logout</button>
        </div>)}
        {!user && (<div>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
          <Link to="/signup">
            <h1>Signup</h1>
          </Link>
        </div>)}
      </div>
    </header>
  )
}

export default Navbar

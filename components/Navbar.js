import { useRouter } from 'next/router'
import { useContext } from 'react';
import { contextProvider } from '../Global/Context';
export default function Navbar() {
    const {Logout ,user} = useContext(contextProvider)
    const router = useRouter()
    const LogoutUser = ()=>{
        Logout()
    }
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 py-2">
        <a className="navbar-brand" href="#" onClick={()=>{
                  router.push('/')
              }}>
          TEST APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav"style={{marginLeft:'auto'}}>
           
           {user ? <>
            <li className="nav-item mx-2">
              <a className="nav-link" style={{cursor:'pointer',fontSize:'17px'}} onClick={LogoutUser} >
              {user.displayName.toUpperCase()}
              </a>
            </li>
           <li className="nav-item mx-2">
              <a className="nav-link" style={{cursor:'pointer'}} onClick={LogoutUser} >
                Logout
              </a>
            </li>
            
            </> :
            <>
            <li className="nav-item">
              <a className="nav-link" style={{cursor:'pointer'}}  onClick={()=>{
                  router.push('/login')
              }}>
                LogIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{cursor:'pointer'}}  onClick={()=>{
                  router.push('/register')
              }}>
                Register
              </a>
            </li></>}
          </ul>
        </div>
      </nav>
    </>
  );
}

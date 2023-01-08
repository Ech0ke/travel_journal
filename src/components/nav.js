import '../App.css'
import logo from '../images/globe-icon.svg'
export default function NavBar() {
    return (
       <nav>
            <img className="nav--logo" src={logo} alt="" />
            <h1 className='nav--title'>my travel journal.</h1>
       </nav>
    )
}
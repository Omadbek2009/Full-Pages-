import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
function Navbar() {
    return ( 
        <>
            <nav>
                <div className="web">
                    <h1>Omad-<b>web</b></h1>
                </div>
                <div className="a">
                    <Link to='register'>Register</Link>
                    <Link to='human'>Bazadagilar Ro'yhati</Link>
                </div>
            </nav>
        </>
     );
}

export default Navbar;
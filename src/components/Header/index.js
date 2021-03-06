import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Header.module.css';

function Header(props) {
    const Header = styled.header`
        background-color: #282c34;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: calc(7px + 2vmin);
        color: white;
    `;

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("header").style.height = "60px";
    } else {
        document.getElementById("header").style.height = "130px";
    }
    }

    return(
        <Header id='header'>
            <Link to='/' className={styles.LogoLink}>
                <p>Header</p>
                {/* <img src={Logo} alt="Logo"/> */}
            </Link>
            <nav className={styles.NavBar}>
                <ul>
                    <li>
                        <Link 
                            to='/' 
                            className={styles.NavLink}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/About' 
                            className={styles.NavLink}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/Portfolio' 
                            className={styles.NavLink}
                        >
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header>
        
    )
}

export default Header;
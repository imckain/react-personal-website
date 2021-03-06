import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Header.module.css';

function Header(props) {
    const Header = styled.header`
        background-color: var(--grey-background-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: calc(7px + 2vmin);
        color: white;
        border-bottom: 3px solid white;
        box-shadow: var(--main-shadow);
    `;

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("header").style.height = "60px";
        document.getElementById("header").style.backgroundColor = "rgba(51, 51, 51, 0.904)";
        // document.getElementById("header").style.filter = "blur(4px)";
    } else {
        document.getElementById("header").style.height = "130px";
        document.getElementById("header").style.backgroundColor = "rgb(51, 51, 51)";
        document.getElementById("header").style.filter = "blur(0)";
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
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
        font-size: calc(10px + 2vmin);
        color: white;
    `;

    return(
        <div>
            <Header>
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
        </div>
    )
}

export default Header;
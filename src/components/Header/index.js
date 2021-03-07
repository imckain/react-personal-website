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
        font-size: 2vw;
        color: white;
        border-bottom: 3px solid white;
        box-shadow: var(--main-shadow);
        @media only screen and (min-width: 1300px) {
            font-size: 30px
        }
    `;

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("header").style.height = "60px";
        document.getElementById("header").style.backgroundColor = "rgba(51, 51, 51, 0.904)";
        document.getElementById("gh-link").style.display = "none";
        document.getElementById("gh-img").style.paddingRight = "20px";
        document.getElementById("gh-img").classList = "fab fa-github-square fa-lg";
        document.getElementById("lin-link").style.display = "none";
        document.getElementById("lin-img").classList = "fab fa-linkedin fa-lg";
        document.getElementById("ImgLinkContainer").style.width = "fit-content";
        // document.getElementById("header").style.filter = "blur(4px)";
    } else {
        document.getElementById("header").style.height = "130px";
        document.getElementById("header").style.backgroundColor = "rgb(51, 51, 51)";
        document.getElementById("gh-link").style.display = "initial";
        document.getElementById("gh-img").style.paddingRight = "0px";
        document.getElementById("gh-img").classList = "fab fa-github-square fa-2x";
        document.getElementById("lin-link").style.display = "initial";
        document.getElementById("lin-img").classList = "fab fa-linkedin fa-2x";
        // document.getElementById("header").style.filter = "blur(0)";
    }
    }

    return(
        <Header id='header'>
            <div className={styles.ImgLinkContainer} id='ImgLinkContainer'>
                <span>
                    <a href="https://github.com/imckain">
                        <div className={styles.HeaderLinkContainer}>
                            <i id='gh-img' class="fab fa-github-square fa-2x"></i>
                            <span id='gh-link'>&nbsp;&lt;/src/code&gt;</span>
                        </div>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/ianmckain">
                        <div className={styles.HeaderLinkContainer}>
                            <i id='lin-img' class="fab fa-linkedin fa-2x"></i>
                            <span id='lin-link'>&nbsp;Connect With Me!</span>
                        </div>
                    </a>
                </span>
            </div>    
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
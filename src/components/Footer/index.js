import styled from 'styled-components';
import styles from './Footer.module.css';

function Footer(props) {
    const Footer = styled.footer`
        width: 100%;
        height: 250px;
        background-color: #282c34;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: calc(7px + 2vmin);
        color: white;
    `;
    
    return(
        <Footer>
            <div className={styles.FooterContent}>
                <div>
                    <h4>Ian McKain</h4>
                </div>
                <span className={styles.Divider} />
                <div className={styles.ContactContent}>
                    <div className={styles.ContactItem}>
                        <span>Email: &nbsp;</span>
                        <span><a href="mailto:">ianmmckain@gmail.com</a></span>
                    </div>
                    <div className={styles.ContactItem}>
                        <span>Phone: &nbsp;</span>
                        <span><a href="tel:+1(614) 931-0467">(614) 931-0467</a></span>
                    </div>
                    <div className={styles.ImgLinkContainer}>
                        <span>
                            <a href="https://github.com/imckain">
                                <i class="fab fa-github-square fa-2x"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/ianmckain">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default Footer;
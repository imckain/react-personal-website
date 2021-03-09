import styles from './IntroCard.module.css';

function IntroCard(props) {
    

    return(
        <div className={styles.IntroWrapper}>
            <p>Hi! Thank you for visiting my site.
                <br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm Ian and I'm a web developer out of Columbus, OH. 
                My specialities are listed to the right and I have a 
                selection of projects that you may be interested in below. 
                Feel free to checkout my GitHub and to connect with me on LinkedIn. 
                <br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you would like to learn a bit more about me, or to see my resume, 
                please visit the "About" page. If you would like to see my full portfolio,
                plese visit the "Portfolio" page or checkout my GitHub for the source code.
                <br/>
                <br/>
                Happy Coding!
            </p>
        </div>
    )
}

export default IntroCard
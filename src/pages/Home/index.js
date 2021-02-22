import styles from './Home.module.css';

function HomePage(props) {

    return(
        <div className={styles.HomePage}>
            <div className={styles.HomeSplashScreen}>
                <h1>Home Page</h1>
            </div>
        </div>
    )
}

export default HomePage
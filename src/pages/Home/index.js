import styles from './Home.module.css';

function HomePage(props) {

    return(
        <div className={styles.HomePage}>
            <div className={styles.HomeSplashScreen}>
                <h1>Home Page</h1>
            </div>
            <div className="HomeContent">
                <div className="IntroContent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero animi, deserunt voluptate minus consequuntur sit repudiandae ducimus amet sint ipsa quis dolorum necessitatibus sapiente est a quia! Ratione, aspernatur repudiandae.</p>
                </div>
                <div className="ContactForm">
                    <form action="">
                        <input type="submit" value="" className="FormInput"/>
                        <input type="submit" value="" className="FormInput"/>
                        <input type="submit" value="" className="FormInput"/>
                        <input type="submit" value="" className="FormInput"/>
                        <input type="submit" value="" className="FormInput"/>
                        <input type="submit" value="" className="FormInput"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage
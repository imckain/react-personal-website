import styles from './HomeContent.module.css';

import IntroCard from '../../components/IntroCard';
import SkillsList from '../../components/SkillsList';

import photo from '../../assets/me-square.jpeg';


function HomeContent(props) {


    return(
        <div className={styles.HomeContent}>
            <div className={styles.BannerBackground}>
                <div className={styles.ImageContainer}>
                    <img src={photo} alt=""/>
                </div>
                <div className={styles.IntroContent}>
                    <IntroCard />
                    <SkillsList />
                </div>
            </div>
        </div>
    )
}

export default HomeContent
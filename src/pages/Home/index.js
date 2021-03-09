import styles from './Home.module.css';

import SplashScreen from '../../components/SplashScreen';
import HomeContent from '../../components/HomeContent';
import ProjectCard1 from '../../components/ProjectCard1';
import ProjectCard2 from '../../components/ProjectCard2';
import ProjectCard3 from '../../components/ProjectCard3';
import ContactForm from '../../components/ContactForm';



function HomePage(props) {


  return(
    <div className={styles.HomePage}>
        <SplashScreen />
        <HomeContent />
        <div className={styles.ProjectsContainer}>
          <ProjectCard1 />
          <ProjectCard2 />
          <ProjectCard3 />
        </div>
        <div className={styles.ContactFormContainer}>
          <ContactForm />
        </div>
      </div>
  )
}

export default HomePage
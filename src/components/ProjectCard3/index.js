import styles from './ProjectCard3.module.css';

function ProjectCard3(props) {

    return(
        <div className={styles.ProjectCard}>
          <div className={styles.CardBackground}>
          </div>
          <div className={styles.CardBannerBackground}>
            <div className={styles.CardContentContainer}>
              <div className={styles.ProjectTitle}>
                <span>React Real Estate</span>
              </div>
              <div className={styles.CardContent}>
                <div className={styles.ProjectDescriptionLine}>
                  <p>An example React App for a real estate client</p>
                  <div className={styles.CardRule}></div>
                </div>
                <div className={styles.ProjectDescriptionLine}>
                  <p>Full CRUD for admin</p>
                  <div className={styles.CardRule}></div>
                </div>
                <div className={styles.ProjectDescriptionLine}>
                  <p>OAuth secure login for potential buyers</p>
                  <div className={styles.CardRule}></div>
                </div>
                <div className={styles.ProjectDescriptionLine}>
                  <p>Full Stack with React, Node, MongoDB</p>
                  <div className={styles.CardRule}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.CardLinksContainer}>
    
          </div>
        </div>
    )
}

export default ProjectCard3
import styles from './SkillsList.module.css';

import reactImg from '../../assets/techImages/react.png';
import jsImg from '../../assets/techImages/javascript.png';
import nodeImg from '../../assets/techImages/nodejs.png';
import cssImg from '../../assets/techImages/css.png';
import htmlImg from '../../assets/techImages/html5.png';
import mongoImg from '../../assets/techImages/mongo_db.png'
import pythonImg from '../../assets/techImages/python.png'
import djangoImg from '../../assets/techImages/django.png'
import restImg from '../../assets/techImages/api.png'
import mvcImg from '../../assets/techImages/database.png'
import postgresqlImg from '../../assets/techImages/postgresql.png'

function SkillsList(props) {

    return(
        <div className={styles.SkillsListWrapper}>
            <ul>
                <li><img src={reactImg} alt="" className={styles.SkillImg}/> React.JS</li>
                <li><img src={jsImg} alt="" className={styles.SkillImg}/> JavaScript</li> 
                <li><img src={htmlImg} alt="" className={styles.SkillImg}/> HTML</li>
                <li><img src={cssImg} alt="" className={styles.SkillImg}/> CSS</li>
                <li><img src={nodeImg} alt="" className={styles.SkillImg}/> Node.JS</li>
                <li><img src={mongoImg} alt="" className={styles.SkillImg}/> MongoDB</li>
                <li><img src={pythonImg} alt="" className={styles.SkillImg}/> Python</li>
                <li><img src={djangoImg} alt="" className={styles.SkillImg}/> Django</li>
                <li><img src={postgresqlImg} alt="" className={styles.SkillImg}/> PostgreSQL</li>
                <li><img src={restImg} alt="" className={styles.SkillImg}/> REST</li>
                <li><img src={mvcImg} alt="" className={styles.SkillImg}/> MVC</li>
            </ul>
        </div>
    )
}

export default SkillsList
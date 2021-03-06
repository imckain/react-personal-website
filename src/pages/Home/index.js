import { Component } from 'react'

import styles from './Home.module.css';
import photo from '../../assets/me-square.jpeg';
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

let dataWords = '["React.JS", "JavaScript/Node.JS", "Python/Django"]'

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt" style="font-weight: 700"> ${this.txt} </span>`;

      // Initial Type Speed
      let typeSpeed = 300;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);

  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(dataWords);
    const wait = 3000;
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state ={}
    }

    render() {
        return(
            <div className={styles.HomePage}>
                <div className={styles.SplashScreenContainer}>
                    <div className={styles.SplashBackgroundContainer}>
                      <div className={styles.SplashBackground}>
                        <div className={styles.HomeSplashScreen}>
                            <p>Hello! Welcome to the personal website of</p>
                            <h2>Ian McKain</h2>
                            <div className={styles.Message}>
                              <p>A<span className='txt-type' ></span>Developer based out of Columbus, OH</p>
                              <p>specializing in responsive, modern websites & effecient data managment</p> 
                              <p>Checkout my work and drop me a line</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className={styles.HomeContent}>
                  <div className={styles.BannerBackground}>
                    <div className={styles.ImageContainer}>
                        <img src={photo} alt=""/>
                    </div>
                    <div className={styles.IntroContent}>
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
                    </div>
                  </div>
                </div>
                <div className="ContactForm">
                    <form action="">
                        <input type="text" value="" className="FormInput"/>
                        <input type="text" value="" className="FormInput"/>
                        <input type="text" value="" className="FormInput"/>
                        <input type="text" value="" className="FormInput"/>
                        <input type="text" value="" className="FormInput"/>
                        <input type="submit" value="Submit" className="FormInput"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomePage
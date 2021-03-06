import { Component } from 'react'

import styles from './Home.module.css';
import photo from '../../assets/me-square.jpeg'
// import blackBanner from '../../assets/RectANGLE-black.svg'

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
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

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
                              <p><span className='txt-type' ></span>&nbsp;Developer based out of Columbus, OH</p>
                              <p>specializing in responsive, modern websites & effecient data managment</p> 
                              <p>Checkout my work and drop me a line</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className={styles.HomeContent}>
                  {/* <img className={styles.BlackBanner} src={blackBanner} alt=""/> */}
                  <div className={styles.BannerBackground}>
                    <div className={styles.ImageContainer}>
                        <img src={photo} alt=""/>
                    </div>
                    <div className={styles.IntroContent}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero animi, deserunt voluptate minus consequuntur sit repudiandae ducimus amet sint ipsa quis dolorum necessitatibus sapiente est a quia! Ratione, aspernatur repudiandae.</p>
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
                        <input type="submit" value="" className="FormInput"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomePage
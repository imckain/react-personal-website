import { Component } from "react";
import styles from './SplashScreen.module.css';

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

class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state ={}
    }


    render() {
        return(
            <div className={styles.SplashScreenContainer}>
                <div className={styles.SplashBackgroundContainer}>
                    <div className={styles.SplashBackground}>
                    <div className={styles.HomeSplashScreen}>
                        <p>Hello! Welcome to the personal website of</p>
                        <h2>Ian McKain</h2>
                        <div className={styles.Message}>
                        <p>A<span className='txt-type' ></span>Developer based out of Columbus, OH</p>
                        <p>specializing in responsive, modern websites & effecient data managment.</p> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashScreen
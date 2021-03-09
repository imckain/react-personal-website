import styles from './ContactForm.module.css';

function ContactForm(props) {


    return(
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
    )
}

export default ContactForm
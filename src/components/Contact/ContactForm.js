import React from "react";
import '../../style/Contact.css';

export default function ContactForm(){
    return(
        <form className="contact-form">
            <input type="text" className="contact-input" placeholder="Meno" name="sender-name" />
            <input type="text" className="contact-input" placeholder="Priezvisko" name="sender-surename" />
            <input type="email" className="contact-input" placeholder="Váš Email" name="sender-email" />
            <textarea className="contact-input" rows="8" cols="80" placeholder="Správa" name="sender-message"></textarea>
            <input type="submit" className="contact-input contact-submit-btn" value="Odoslať" />
        </form>
    )
}
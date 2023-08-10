import React from "react";
import '../../style/Contact.css';
import ContactForm from "../Contact/ContactForm";
import ContactSidebar from "../Contact/ContactSidebar";

export default function Contact(){
    return(
        <div>
            <ContactForm/>
            <ContactSidebar/>
        </div>
    )
}
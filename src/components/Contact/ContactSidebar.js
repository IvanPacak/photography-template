import React from "react";
import '../../style/Contact.css';

export default function ContactSidebar(){
    return(
        <div id="contact-sidebar">
            <div id="sidebar-facebook" class="contact-social">
                <a rel="noreferrer" href="https://www.facebook.com/Lucia-Pacak-Photography-301290566549875/" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
            </div>

            <div id="sidebar-instagram" class="contact-social">
                <a rel="noreferrer" href="https://www.instagram.com/luciapacak/?hl=sk" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>

            <div id="sidebar-email" class="contact-social">
                <a rel="noreferrer" href="https://www.gmail.com" target="_blank">
                    <i class="fa fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}
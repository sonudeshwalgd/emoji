import React from 'react'
import footer from './Footer.css'


export default function Footer() {
  return (
   
<>
        <footer class="footer">
            <div class="footercard footerabout">About <h4>lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
                    beatae qui! Id et repellendus aliquid.</h4>
            </div>

            <div class="footercard">Link
                <ul>
                    <li>home</li>
                    <li>resume</li>
                    <li>projects</li>
                    <li>about</li>
                    <li>contacts</li>
                </ul>
            </div>

            <div class="footercard">Services
                <ul>
                    <li>web-development</li>
                    <li>web-designing</li>
                    <li>3d-modeling</li>
                    <li>3d-animations</li>
                </ul>
            </div>

            <div class="footercard"><span class="white">Have a question ?</span>
                <ol>
                    <li>roorkee uttarakhand 247667</li>
                    <li>sd703299@gmail.com</li>
                    <li>7300622171</li>
                </ol>

                <a href="www.google.com" target="-sonu" class="fb fb1"><i
                        class="social fa-brands fa-facebook-square"></i></a>
                <a href="www.google.com" target="-sonu" class="fb"><i class="social fa-brands fa-twitter"></i></a>
                <a href="www.google.com" target="-sonu" class="fb"><i class="social fa-brands fa-instagram"></i></a>
                <a href="www.google.com" target="-sonu" class="fb"><i class="social fa-brands fa-whatsapp"></i></a>

            </div>

        </footer>
        </> 
  )
}

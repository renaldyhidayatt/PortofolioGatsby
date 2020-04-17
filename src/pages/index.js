import React from "react"
import { Link } from "gatsby"

import '../components/assets/scss/styles.scss';
import DarkMode from "../components/DarkMode/DarkModeToggle";
import Content from "../components/Content";







class IndexPage extends React.Component{
  componentDidMount(){
    window.addEventListener("scroll", function(){
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0)
    });
  }

  render(){
    return(
      <>
        <header>
          <Link href="/" className="logo">Hunter Rk</Link>
          <ul>
              <li><Link to="#about">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Protofolio</Link></li>
              <li><Link href="#">Team</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><DarkMode /></li>
          </ul>
        </header>
        <div className="site-content">
          <p className="glitch" data-glitch="Web Developer">Web Developer</p>
        </div>
        
        <div className="followme">
          <div className="label">Follow Me</div>
          <div className="spacer"></div>
          <div className="item"><span>Twitter</span></div>
          <div className="item"><span>Instagram</span></div>
          <div className="item"><span>Flickr</span></div>
          <div className="item"><span>Behance</span></div>
          <div className="item"><span>MixCloud</span></div>
        </div>
        <Content />
        <footer className="footer" id="footer">
          <div className="center">
            <p>© 2020 https://www.gatsby.com</p>
          </div>
        </footer>
      </>
    )
  }
}

export default IndexPage;

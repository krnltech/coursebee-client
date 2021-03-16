import {useState} from 'react';
import classNames from "classnames";
import styles from "./Footer.module.css";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
const Footer = () => {
   
   const [fbcolor,setfbcolor] = useState("");
   const [instcolor,setinstcolor] = useState("");
   const [lincolor,setlincolor] = useState("");
   const [youcolor,setyoucolor] = useState("");

  return (
    <div className={classNames(styles.footerBody,"container-fluid")}>
      <div className="row">
        <div className={styles.footerColumn + " col-md-6 col-lg-3"}>
          <ul>
            <li>
              {" "}
              <div className={styles.footerColumnUl1}>
                <div className={styles.footerColumnUl1Border}></div>
                <div>Navigate</div>
              </div>
            </li>
            <li className={styles.footerColumnUl1Li}>
              {" "}
              <a href="#" className={styles.footerColumnUl1LiA1}>
                All Courses
              </a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              {" "}
              <a href="#">Blog</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              {" "}
              <a href="#">Verify A Certificate</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              {" "}
              <a href="#">Documentation</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              {" "}
              <a href="#">FAQs</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              {" "}
              <a href="#">Support | Contact Us </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn + " col-md-6 col-lg-3"}>
          <ul>
            <li>
              {" "}
              <div className={styles.footerColumnUl2}>
                <div className={styles.footerColumnUl1Border}></div>
                <div>Work With Us</div>
              </div>
            </li>
            <li className={styles.footerColumnUl1Li}>
              {" "}
              <a href="#" style={{ paddingTop: "2px" }}>
                About Kernel
              </a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              <a href="#">Our Team | Join</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              <a href="#">Become an Instructor</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              <a href="#">Affiliates</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              <a href="#">Request A New Course</a>
            </li>
            <li className={styles.footerColumnUl1Li}>
              <a href="#">Write for Kernel Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn + " col-md-6 col-lg-3"}>
          <ul>
            <li>
              {" "}
              <div className={styles.footerColumnUl3}>
                <div className={styles.footerColumnUl1Border}></div>
                <div>About Kernel Technologies Ltd</div>
              </div>
            </li>
            <li className={styles.footerColumnUl1Li}>
              <p>
                Kernel is Bangladesh’s leading educational platform for superior
                online courses, professional training and corporate eLearning
                services that help you develop useful skills and accomplish more
                in life. Our online courses and career-track programs are
                designed in collaboration with the best of industry experts and
                organizations in Bangladesh.
              </p>
            </li>

            <li>
              {" "}
              <div className={styles.footerColumnUl3LiBottom}>
                <div className={styles.footerColumnUl1Border}></div>
                <div>Follow Us</div>
              </div>
              <div className={styles.footerColumnIconGroup}> 
                <div className={styles.footerColumnDivIcon} 
                  onMouseEnter={()=>{
                    setfbcolor("blue");
                  }} 
                  onMouseLeave={()=>{
                    setfbcolor("")
                 }}
                >
                  <FaFacebook style={{margin:"auto",color:fbcolor}}/>
                </div>
                <div className={styles.footerColumnDivIcon}
                  onMouseEnter={()=>{
                    setinstcolor("blue");
                  }} 
                  onMouseLeave={()=>{
                    setinstcolor("")
                  }}>
                  <FaInstagram style={{margin:"auto",color:instcolor}} />
                </div>
                <div className={styles.footerColumnDivIcon}  
                  onMouseEnter={()=>{
                    setlincolor("blue");
                  }} 
                  onMouseLeave={()=>{
                    setlincolor("")
                  }}>
                  <FaLinkedin style={{margin:"auto",color:lincolor}} />
                </div>
                <div className={styles.footerColumnDivIcon}  onMouseEnter={()=>{
                    setyoucolor("red");
                  }} 
                   onMouseLeave={()=>{
                    setyoucolor("")
                  }}>
                  <FaYoutube style={{margin:"auto",color:youcolor}} />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={classNames(styles.footerColumn,"col-md-6 col-lg-3")}>
          <ul>
            <li>
              {" "}
              <div className={styles.footerColumnUl4}>
                <div className={styles.footerColumnUl1Border}></div>
                <div>Subscribe For Offers</div>
              </div>
            </li>

            <li className={styles.footerColumnUl1Li}>
              {" "}
              <div>Email Address *</div>
            </li>
            <li>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                />
              </div>
            </li>
            <li> Areas of Interest *</li>
            <li>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label" htmlFor="flexCheckDefault">
                  Technology
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label" htmlFor="flexCheckDefault">
                  Business
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label" htmlFor="flexCheckDefault">
                  Academics
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label" htmlFor="flexCheckDefault">
                  Career & Professional Growth
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label" htmlFor="flexCheckDefault">
                  Learning & Development
                </label>
              </div>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-success mt-3"
                style={{ width: "110px" }}
              >
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

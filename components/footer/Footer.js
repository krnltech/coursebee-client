import Image from 'next/image';
const Footer = () => {
  return (  
    
      <div className="container-fluid" style={{backgroundColor:"#d2dee4",paddingTop:"60px"}}>
        <div className="row">
          
          <div className="col-l-3" style={{width:"440px"}}>
          <ul style={{listStyleType:"none"}}>
              <li>  <div style={{display:"flex",justifyContent:"space-between",width:"80px",marginBottom:"18px"}}>  
                      <div style={{borderLeft:"3px solid green"}}></div> 
                      <div>Navigate</div>
                   </div>
              </li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}> <a href="#" style={{paddingTop:"14px"}}>All Courses</a></li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}> <a href="#" style={{paddingTop:"2px"}}>Blog</a></li>    
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#" style={{paddingTop:"2px"}}>Verify A Certificate</a></li>     
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#" style={{paddingTop:"2px"}}>Documentation</a></li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#" style={{paddingTop:"2px"}}>FAQs</a></li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#" style={{paddingTop:"2px"}}>Support | Contact Us </a></li>
            </ul>
          </div>
          <div className="col-l-3" style={{width:"440px"}}>
          <ul style={{listStyleType:"none"}}>
               <li> <div style={{display:"flex",justifyContent:"space-between",width:"117px",marginBottom:"18px"}}>  
                      <div style={{borderLeft:"3px solid green"}}></div> 
                      <div>Work With Us</div>
                   </div>
              </li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}> <a href="#" style={{paddingTop:"2px"}}>About Bohubrihi</a></li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#">Our Team | Join</a></li>    
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#">Become an Instructor</a></li>     
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#">Affiliates</a></li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#">Request A New Course</a></li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><a href="#">Write for Bohubrihi Blog</a></li>
            </ul>
          </div>
          <div className="col-l-3" style={{width:"440px"}}>
            <ul style={{listStyleType:"none"}}>
               <li>  <div style={{display:"flex",justifyContent:"space-between",width:"236px",marginBottom:"18px"}}>  
                      <div style={{borderLeft:"3px solid green"}}></div> 
                      <div>About Kernel Technologies Ltd</div>
                   </div>
              </li>
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}><p>Bohubrihi is Bangladesh’s leading educational platform for superior online courses, professional training and corporate eLearning services that help you develop useful skills and accomplish more in life. Our online courses and career-track programs are designed in collaboration with the best of industry experts and organizations in Bangladesh.</p></li>
             
              <li>  <div style={{display:"flex",justifyContent:"space-between",width:"90px",marginBottom:"18px"}}>  
                      <div style={{borderLeft:"3px solid green"}}></div> 
                      <div>Follow Us</div>
                   </div>
              </li>
            </ul>
          </div>
          <div className="col-l-3" style={{width:"370px"}}>
          <ul style={{listStyleType:"none"}}>
              <li>  <div style={{display:"flex",justifyContent:"space-between",width:"162px",marginBottom:"18px"}}>  
                      <div style={{borderLeft:"3px solid green"}}></div> 
                      <div>Subscribe For Offers</div>
                   </div>
              </li>
              
              <li style={{borderTop:"1px solid #b5b7ba",paddingTop:"8px",paddingBottom:"8px"}}> <div>Email Address *</div></li>
              <li>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Email Address"/>
                </div>
              </li>
              <li> Areas of Interest *</li>
              <li> 
                <div class="form-check">
                 <input class="form-check-input" type="checkbox"/>
                    <label class="form-check-label" htmlFor="flexCheckDefault" >
                    Technology
                    </label> 
                </div>
              </li>
              <li> 
                <div class="form-check">
                 <input class="form-check-input" type="checkbox"/>
                    <label class="form-check-label" htmlFor="flexCheckDefault" >
                    Business
                    </label> 
                </div>
              </li>
              <li> 
                <div class="form-check">
                 <input class="form-check-input" type="checkbox"/>
                    <label class="form-check-label" htmlFor="flexCheckDefault" >
                    Academics
                    </label> 
                </div>
              </li>
              <li> 
                <div class="form-check">
                 <input class="form-check-input" type="checkbox"/>
                    <label class="form-check-label" htmlFor="flexCheckDefault" >
                    Career & Professional Growth
                    </label> 
                </div>
              </li>
              <li> 
                <div class="form-check">
                 <input class="form-check-input" type="checkbox"/>
                    <label class="form-check-label" htmlFor="flexCheckDefault" >
                    Learning & Development
                    </label> 
                </div>
              </li>
              <li><button type="button" className="btn btn-success mt-3" style={{width:"110px"}}>Subscribe</button></li>
            </ul>
          </div>
        </div>
      
      </div>
    
  );
};
 
export default Footer;

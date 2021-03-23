import { Navbar } from "react-bootstrap";
import { useState } from "react";
import classNames from "classnames";

const SideNav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  return (  
    <>
      <Navbar className={classNames("navbar", "navbar-expand-lg", "bg-dark", "border-top")}>
        {/* Sidebar Button */}
        <button class="btn btn-primary" onClick={showSidebar}>
          Toggle Menu
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </Navbar>
    </>
  );
}
 
export default SideNav;
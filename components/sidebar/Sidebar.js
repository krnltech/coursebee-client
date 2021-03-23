import { useState } from "react";

import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Nav = {
  background: "#15171c",
  height: "80px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};
const NavIcon = {
  marginLeft: "2rem",
  fontSize: "2rem",
  height: "80px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};
const SidebarNav = {
  background: "#15171c",
  width: "250px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: "0",
  left: `${({ sidebar }) => (sidebar ? "0" : "-100%")}`,
  transition: "350ms",
  zIndex: "10",
};
const SidebarWrap = {
  width: "100%"
};

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return(
    <>
      <IconContext.Provider value={{ color: "#fff" }}>

        {/* <Nav>
          <NavIcon to="#">
            <FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center", marginLeft: "200px", color: "green" }}
          >
            GeeksforGeeks
          </h1>
        </Nav> */}

        {/* <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav> */}
        
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

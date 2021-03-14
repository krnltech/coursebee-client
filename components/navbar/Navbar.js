import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";

const NavbarComps = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Link href="/">
            <a>
              <Image
                src="/logo/cb-logo.png"
                alt="site logo"
                width={158}
                height={64}
              />
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <BsFillGrid3X3GapFill />
              <Nav.Link href="#catagories">ক্যাটাগরি</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>              
            </Form>

            <div className={styles.content}>
              <Nav className="mr-auto">
                <Nav.Link href="#courses">কোর্স</Nav.Link>
                <Nav.Link href="#training">ট্রেইনিং</Nav.Link>
                <Nav.Link href="#mentor">মেন্টর হন</Nav.Link>
                <Nav.Link href="#login">লগইন</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarComps;

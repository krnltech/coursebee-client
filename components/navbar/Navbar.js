import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Navbar.module.css';

const NavbarComps = () => {
  return (  
    <>
      <Navbar bg="light" expand="lg">
        <Link href="/"className={styles.logo}>
          <a><Image src="/CB logo.png" alt="site logo" width={158} height={64} /></a>
        </Link>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>

          <div className={styles.content}>
            <Nav className="mr-auto">
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#mentor">Become a mentor</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
          </div>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
 
export default NavbarComps;
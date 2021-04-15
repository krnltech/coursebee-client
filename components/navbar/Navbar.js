import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { changeToBangla, changeToEnglish } from "../../redux/actions/languageAction";

const NavbarComps = () => {
  const dispatch = useDispatch();
  const { isBangla } = useSelector((state) => state.language);
  const toggleLanguage = () => {
    if (isBangla) {
      dispatch(changeToEnglish());
    } else {
      dispatch(changeToBangla());
    }
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Link href="/">
            <Image
              src="/logo/cb-logo.png"
              alt="site logo"
              width={158}
              height={64}
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div
              className={classNames(
                "row mr-auto ml-auto",
                styles.navCenterElement
              )}
            >
              <Dropdown className="col-md-2">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  ক্যাটাগরি
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    ওয়েব ডেভেলপমেন্ট
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    গ্রাফিক্স ডিজাইন
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">মার্কেটিং</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Form inline className="col-md-8">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className={styles.searchInput}
                />
              </Form>
              <Button variant="outline-success" className="col-md-2">
                খুঁজুন
              </Button>
            </div>

            <div className={styles.content}>
              <Nav className="mr-auto">
                <Nav.Link href="#courses">কোর্স</Nav.Link>
                <Nav.Link href="#training">ট্রেইনিং</Nav.Link>
                <Nav.Link href="#mentor">মেন্টর রেজিস্ট্রেশন</Nav.Link>
                <Nav.Link href="#masterclass">মাস্টারক্লাস</Nav.Link>
                <Nav.Link href="/mentor-login">লগইন</Nav.Link>
                <button onClick={toggleLanguage} className="btn btn-primary">
                  {isBangla ? "বাংলা" : "English"}
                </button>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarComps;

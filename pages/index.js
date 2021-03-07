import styles from "../styles/Home.module.css";
import classNames from "classnames";

import { Tabs, Tab, Button } from "react-bootstrap";
import Banner from "../components/banner/Banner";
import SliderComponent from "../components/slider/slider";
import HeadComps from "../components/Head";
import SummaryCard from "../components/summary-card/SummaryCard";
import SuccessCard from "../components/success-stories/SuccessCard";

import { Container, Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <>
        <section className="layer">
          <HeadComps title="Coursebee | Home" iconSource = "/icon/coursebee.ico"/>
          <Banner source="/images/cb-banner.png"/>
        </section>

        {/* Tab-Slider  */}
        <section className={styles.layer}>
            <div className="container">
              <h2 className={styles.sectionTitle}>Best Selling Courses</h2>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Web Development">
                  <div className="pt3">
                    <SliderComponent />
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Graphics Design">
                  <div className="pt-3">
                    <SliderComponent />
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Business">
                  <div className=" pt-3">
                    <SliderComponent />
                  </div>
                </Tab>
              </Tabs>
            </div>
        </section>

        <section className={styles.layer}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Top Rated Courses</h2>
                <div className="">
                    <SliderComponent />
                </div>
            </div>
        </section>

        <section className={styles.layer}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Top Categories</h2>
                <div className="row mt-2">
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/227/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/238/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>Graphics Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/239/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>SEO</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/240/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>IELTS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/257/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>Photography</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/268/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>NodeJs</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/279/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>Wordpress</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="category-box">
                            <div className="category-image">
                                <img src="https://picsum.photos/id/280/200/200" alt=""/>
                                <div className="category-overlay">
                                    <div className="category-overlay-content">
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Motivation  */}
        <section className={styles.layer}>
        <h2 className={styles.sectionTitle}>
          Don't waste your valuable time or money
        </h2>
        <p className={styles.secondTitle}>
          Only Coursebee has all the critical factors to deliver real results
        </p>
        <SummaryCard />
        </section>

        {/* Inner Banner  */}
        <section className={styles.layer}>
        <div
          className={classNames("container fluid", styles.innerBanner)}
        >
          <h2>
            Make the most of your online learning experience
          </h2>
          <p>
            Our Online Learning Resource Center has tips, tricks and inspiring
            stories to help you learn while staying home.
          </p>
          <Button variant="outline-info">View All Courses</Button>
        </div>
        </section>

        {/* Success Stories   */}
        <section className={styles.layer}>
        <SuccessCard />
        </section>
    </>
  );
}

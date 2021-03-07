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
      {/* Head Components + Main Banner */}
      <section className={styles.layer}>
        <HeadComps title="Coursebee | Home" iconSource="/icon/coursebee.ico" />
        <Banner source="/images/cb-banner.png" />
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

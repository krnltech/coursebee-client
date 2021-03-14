import styles from "../styles/Home.module.css";
import classNames from "classnames";

import { Tabs, Tab, Button } from "react-bootstrap";
import Banner from "../components/banner/Banner";
import SliderComponent from "../components/slider/Slider";
import HeadComps from "../components/Head";
import SummaryCard from "../components/summary-card/SummaryCard";
import SuccessCard from "../components/success-stories/SuccessCard";
import Heading from "../components/heading/Heading";

export default function Home() {
  return (
    <>
      <section className="layer">
        <HeadComps title="Coursebee | Home" iconSource="/icon/coursebee.ico" />
        <Banner source="/images/cb-banner.png" />
      </section>

      {/* Best selling course */}
      <section className={styles.layer}>
        <div className="container">
          <Heading headerText="সেরা বিক্রয়কৃত কোর্স"/>
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

      {/* Top rated course */}
      <section className={styles.layer}>
        <div className="container">
          <Heading headerText="শীর্ষ রেটযুক্ত কোর্স"/>
          <div className="">
            <SliderComponent />
          </div>
        </div>
      </section>

      {/* Motivation  */}
      <section className={styles.layer}>
        <Heading headerText="আপনার মূল্যবান সময় বা অর্থ অপচয় করবেন না"/>
        <p className={styles.secondTitle}>
        শুধুমাত্র কোর্সবিতে বাস্তব ফলাফল দেওয়ার জন্য সমস্ত প্রয়োজনীয় রিসোর্সসমূহ রয়েছে
        </p>
        <SummaryCard />
      </section>

      {/* Top catagories */}
      <section className={styles.layer}>
        <div className="container">
          <h2 className={styles.sectionTitle}></h2>
          <Heading headerText="টপ ক্যাটাগরি"/>
          <div className="row mt-2">
            <div className="col-md-3">
              <div className="category-box">
                <div className="category-image">
                  <img src="https://picsum.photos/id/227/200/200" alt="" />
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
                  <img src="https://picsum.photos/id/238/200/200" alt="" />
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
                  <img src="https://picsum.photos/id/239/200/200" alt="" />
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
                  <img src="https://picsum.photos/id/240/200/200" alt="" />
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
                  <img src="https://picsum.photos/id/257/200/200" alt="" />
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
                  <img src="https://picsum.photos/id/268/200/200" alt="" />
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
                  <img src="https://picsum.photos/id/279/200/200" alt="" />
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
                  <img src="https://picsum.photos/id/280/200/200" alt="" />
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

      {/* Inner Banner  */}
      <section className={styles.layer}>
        <div className={classNames("container fluid", styles.innerBanner)}>
          <h2>আপনার অনলাইন শেখার অভিজ্ঞতাটি সর্বাধিক করুন</h2>
          <p>
          আমাদের অনলাইন লার্নিং রিসোর্স সেন্টারে টিপস, কৌশল এবং অনুপ্রেরণামূলক গল্প  রয়েছে আপনাকে শেখানোর  জন্য
          </p>
          <Button variant="outline-info">সমস্ত কোর্স দেখুন</Button>
        </div>
      </section>

      {/* Success Stories   */}
      <section className={styles.layer}>
        <SuccessCard />
      </section>
    </>
  );
}

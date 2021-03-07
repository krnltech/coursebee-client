import styles from '../styles/Home.module.css';

import { Tabs,Tab,Card,Button } from 'react-bootstrap';
import Banner from '../components/banner/Banner';
import SliderComponent from '../components/slider/slider';
import HeadComps from '../components/Head';
// import CarouselComps from '../components/carousel/Carousel';
import SummaryCard from '../components/summary-card/SummaryCard';
import SuccessCard from '../components/success-stories/SuccessCard';

import {Container, Row, Col, Image} from 'react-bootstrap';

export default function Home() {
  return (
    <>
        <section className="layer">
          <HeadComps title="Coursebee | Home" iconSource = "/icon/coursebee.ico"/>
          <Banner source="/images/cb-banner.png"/>
        </section>

        <section className="layer">
            <div className="container">
                <h2 className="section-title">Best Selling Courses</h2>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Web Development">
                        <div className="pt-3">
                            <SliderComponent/>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Graphics Design">
                        <div className=" pt-3">
                            <SliderComponent/>
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Business" >
                        <div className=" pt-3">
                            <SliderComponent/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>

        <section className="layer">
            <div className="container">
                <h2 className="section-title">Top Rated Courses</h2>
                <div>
                    <SliderComponent/>
                </div>
            </div>
        </section>

        <section className="layer">
            <div className="container">
                <h2 className="section-title">Top Categories</h2>
                <div className="row">

                </div>
            </div>
        </section>

        <section className="layer">
          {/*<h2 className="section-title">Explore our catagories to find your perfect program</h2>*/}
          {/*<CarouselComps />*/}
        </section>

        <section className="layer">
          <h2 className="section-title">Don't waste your valuable time or money</h2>
          <p style={{ textAlign: 'center', paddingBottom: '20px'}}>Only Coursebee has all the critical factors to deliver real results</p>
          <SummaryCard />
        </section>
      
      {/* <section className="layer">
        <h2 className="section-title">Explore our catagories to find your perfect program</h2>
        <CarouselComps />
      </section> */}

      <section className="layer" style={{ backgroundColor: '#f7f7f7', padding: '30px'}}>
        <Container fluid >
          <Row>
            <Col md={6}>
                <Image src="/images/project.jpg" alt="" style={{ float: 'right', borderRadius: '20px', height: '500px' }} fluid/>
            </Col>
            <Col md={6}>
              <Col md={6}>
                <h1 style={{ marginBottom: '40px'}}>Project Based Learning</h1>
                
                <p style={{ marginBottom: '40px', fontSize: '20px' }}>Coursebee provides 100% project oriented training. It means you will do real time client's projects as your assignments. Mentors will make you involved in dealing with the real client's experience.</p>
                <Button variant="outline-info">View All Courses</Button>
              </Col>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ marginTop: '30px' }}>
          <Row>
            <Col md={6}>
              <Col md={6} style={{ float: 'right' }}>
                <h1 style={{ marginBottom: '40px'}}>Learn to Earn</h1>
                            
                <p style={{ marginBottom: '40px', fontSize: '20px'}}>The goal of our training is to make you able to earn. Our students: work in online freelancing marketplaces such as Upwork, Fiverr etc, do remote jobs in international companies, do local jobs in good companies.</p>
                <Button variant="outline-info">View All Courses</Button>
              </Col>
            </Col>        
            <Col md={6}>
              <Image src="/images/l-earn.jpg" alt="" style={{ borderRadius: '20px', height: '500px'}} fluid/>
            </Col> 
          </Row>
        </Container>
      </section>      

      <section className="layer">
        <div className="container fluid" style={{ backgroundColor: '#2e3d49', padding: '100px', textAlign: 'center' }}>
          <h2 style={{ color: 'white'}}>Make the most of your online learning experience</h2>
          <p style={{ color: 'white', fontSize: '18px', marginBottom: '20px' }}>Our Online Learning Resource Center has tips, tricks and inspiring stories to help you learn while staying home.</p>
          <Button variant="outline-info">View All Courses</Button>
        </div>
      </section>

      <section className="layer">
        <SuccessCard />
      </section>
    </>
  );
};

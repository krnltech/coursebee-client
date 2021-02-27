import styles from '../styles/Home.module.css';

import Banner from '../components/banner/Banner';
import HeadComps from '../components/Head';
import CarouselComps from '../components/carousel/Carousel';
import SummaryCard from '../components/summary-card/SummaryCard';

import {Container, Row, Col, Image} from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <HeadComps title="Coursebee | Home" iconSource = "/icon/coursebee.ico"/>
      <Banner source="/images/cb-banner.png"/>
      {/* <h2 style={{ textAlign: 'center', paddingBottom: '20px' }}>Explore our catagories to find your perfect program</h2>
      <CarouselComps /> */}

      <h2 style={{ textAlign: 'center' }}>Don't waste your valuable time or money</h2>
      <p style={{ textAlign: 'center', paddingBottom: '20px'}}>Only Coursebee has all the critical factors to deliver real results</p>
      <SummaryCard />

      <Container fluid style={{ marginTop: '70px' }}>
        <Row>
          <Col md={6}>
              <Image src="/images/1.png" style={{ float: 'right' }}/>
          </Col>
          <Col md={6}>
            <Col md={6}>
              <h1>Project Based Learning</h1>
              
              <p>Shikhbe Shobai provides 100% project oriented training. It means you will do real time client's projects as your assignments. Mentors will make you involved in dealing with the real client's experience.</p>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ marginTop: '30px' }}>
        <Row>
          <Col md={6}>
            <Col md={6} style={{ float: 'right' }}>
              <h1>Learn to Earn</h1>
                         
              <p>The goal of our training is to make you able to earn. Our students: work in online freelancing marketplaces such as Upwork, Fiverr etc, do remote jobs in international companies, do local jobs in good companies.</p>
            </Col>
          </Col>        
          <Col md={6}>
            <Image src="/images/1.png" />
          </Col>
        </Row>
      </Container>
      <div className={styles.container}>      
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

    </div>
    </>
  );
};

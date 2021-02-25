import { Image } from 'react-bootstrap';
// import {logo} from 'public/logo/cb-logo.png'

const Banner = ({ source }) => {
  return (
      <>
        <div style={{ width: '100%',backgroundImage: `url(${source})`, position: 'relative', height: '500px', backgroundSize: 'cover' }}>
            <div className="banner">
                <h1 className="title">CourseBee</h1>
                <h5>Explore our schools to find your perfect program</h5>
                <a href="#" className="custom-btn">All Courses</a>
            </div>
        </div>
      </>
  );
}

export default Banner;
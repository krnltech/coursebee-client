import { Image } from 'react-bootstrap';

const Banner = ({ source }) => {
  return (
      <>
        <div style={{ width: '100%',backgroundImage: `url(${source})`, position: 'relative', height: '500px', backgroundSize: 'cover' }}>
            <div className="banner">
                <img src="/logo/cb-logo.png" alt="" style={{ width: '300px', marginBottom: '10px'}}/>
                <h5 className="mb-4 pl-4">Explore our schools to find your perfect program</h5>
                <a href="#" className="custom-btn ml-4">All Courses</a>
            </div>
        </div>
      </>
  );
}

export default Banner;
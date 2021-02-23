import { Image } from 'react-bootstrap';

const Banner = ({ source }) => {
  return (  
    <>
      <div>
        <Image src={source} fluid style={{ width: '100%' }}/>
      </div>
    </>
  );
}
 
export default Banner;
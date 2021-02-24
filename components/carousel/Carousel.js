import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

import CardComps from '../card/Card';

const CarouselComps = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (  
    <>
      <div className="container" style={{ backgroundColor: 'rgb(225, 225, 225)', padding: '20px' }}>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>

          {/* 1 */}
          <Carousel.Item >
          <div style={{ margin: '2px 100px' }}><CardComps /></div>
          </Carousel.Item>

          {/* 2
          <Carousel.Item>
            <div style={{ margin: '2px 100px' }}><CardComps /></div>
          </Carousel.Item> */}

        </Carousel>         
      </div>     
    </>
  );
}
 
export default CarouselComps;
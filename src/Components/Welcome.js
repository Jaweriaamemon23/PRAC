import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image1 from '../Assets/image 3 (3).png';
import Image2 from '../Assets/image 3 (2).png';
import Image3 from '../Assets/teenyicons_right-solid.png';
import Image4 from '../Assets/teenyicons_left-solid.png';
import SecurityUpdate from './Securityupdate';
import Statistics from './Statistics';

function Welcome() {
    return (
<>
        <Carousel
        fade
        prevIcon={<img src={Image4} alt="prevIcon" />}
        nextIcon={<img src={Image3} alt="nextIcon" />}
    >
        <Carousel.Item className="container d-flex justify-content-center">
            <img src={Image1} alt="img1" />
        </Carousel.Item>
        <Carousel.Item className="container d-flex justify-content-center">
            <img src={Image2} alt="img2" />
        </Carousel.Item>
    </Carousel>
<Statistics/>   
   <SecurityUpdate/>

   </>
   );
}

export default Welcome;

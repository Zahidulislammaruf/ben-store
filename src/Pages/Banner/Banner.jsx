import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
  

  

    
    return (
        <div> 
       
            <Carousel>
            <div>
                    <img className=" rounded-lg" src="https://i.ibb.co/TrTdhBx/BigSale3.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/CbR35vp/BigSale2.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/7GhJ0XN/BigSale1.jpg" />
                </div> 
                
            </Carousel> 

        </div>
    );
};

export default Banner;
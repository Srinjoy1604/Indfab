import styles from './Intro.module.css';
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "../../images/Home/Home_page.jpg";
import image2 from "../../images/Home/Home_page.jpg";
import image3 from "../../images/Home/Home_page.jpg";
function Intro() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    const images = [image1, image2, image3];
    return (
        <section className={`${styles.Maindash}`}>
  
                <Carousel
                    plugins={[plugin.current]}
                
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset} className={`${styles.carouselmain} `}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                            <div key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
         


        </section>
    );
};

export default Intro;

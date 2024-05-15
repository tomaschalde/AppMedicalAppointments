import { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
          image: 'https://d1kw0nx8pk9xzh.cloudfront.net/0001/550b84d3/resize-crop(w=1600;h=900):sharpen(level=0):output(format=webp)/up/dt/2022/06/UB-Paciente.jpg',
          title: 'ODONTOLOGÍA',
          description: 'Días y horarios de atención: Lunes a Viernes de 08:00hs a 20:00hs'
        },
        {
          image: 'https://www.traumadrid.es/wp-content/uploads/2022/03/Traumatologia.jpg',
          title: 'TRAUMATOLOGÍA',
          description: 'Días y horarios de atención: Lunes a Viernes de 08:00hs a 20:00hs'
        },
        {
          image: 'https://www.pnc.com/content/dam/pnc-thought-leadership/small-business/business-planning/pnc_insights_sb_how-to-start-private-medical-practice.jpg',
          title: 'MÉDICO CLÍNICO',
          description: 'Días y horarios de atención: Lunes a Viernes de 08:00hs a 20:00hs'
        }
      ];

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
      };
    
      const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
      };

      return (
        
        <div className={styles.carousel}>

            <div className={styles.carouselContainer}>

            <h2 className={styles.carouselTitle}>Especialidades médicas</h2>

              <div className={styles.slide}>

                  <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
                  <h3>{slides[currentSlide].title}</h3>
                  <span>{slides[currentSlide].description}</span>

              </div>

              <div className={styles.containerButtons}>
                <button onClick={prevSlide} className={styles.buttonCarouselIzq}>Anterior</button>
                <button onClick={nextSlide} className={styles.buttonCarouselDer}>Siguiente</button>
              </div>
            </div>


            
        </div>

      )
}

export default Carousel;
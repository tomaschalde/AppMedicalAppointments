import Carousel from "../../components/Carrousel/Carousel";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
        
            <div className={styles.homeSection}>
                <div className={styles.section}>
                    <h1 className={styles.sectionTitle}>Inicio</h1>
                    <div className={styles.sectionDivisor}></div>
                    <p className={styles.sectionIntro}>En el Centro Médico LP, tu salud es nuestra prioridad. Estamos comprometidos a proporcionarte la mejor atención médica posible</p>
                </div>
            </div>
            
            <Carousel />
        </div>
        
    )
}

export default Home;
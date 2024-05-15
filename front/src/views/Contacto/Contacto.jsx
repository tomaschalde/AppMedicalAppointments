import contacts from "../../helpers/contacts"

import styles from "./Contacto.module.css"

const Contacto = () => {

    return (
        <>
             <div className={styles.container}>
                <h1 className={styles.title}>Contáctanos</h1>
                <div className={styles.divisor}></div>
            </div>

            <div className={styles.containerTargets}>
                {
                        contacts.map( (contact) => {
                            return (
                            
                                <div  key={contact.name} className={styles.target}>
                                    <a href={contact.url} target="_blank" rel="noopener noreferrer">
                                        <img src={contact.image} alt="" />
                                        <h3>{contact.dato}</h3>
                                    </a>
                                </div>
                            
                            )
                        })
                }
                
            </div>
        </>
    )
}

export default Contacto;
import React from 'react'
import styles from './Resturant.module.css'


const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
    <>
    <section className={styles.main_card_cointainer}>
    {menuData.map((curElem) =>{
        return(
            <>
            <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_body}>
                    <span className={styles.card_number+styles.card_circle+styles.sub}>1</span>
                    <span className={styles.card_author+styles.subtle}>BREAKFAST</span>
                    <h2 className={styles.card_title}>Maggi</h2>
                    <span className={styles.card_description+styles.subtle}>
                        I love Meggi realy oo yues Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor quae aliquid nobis laudantium vero officiis excepturi incidunt perferendis. Perspiciatis deleniti impedit facere cupiditate, accusantium tempore dolor sed itaque aliquid. 
                    </span>
                    <div className={styles.card_read}>Read</div>
                </div>
                {/* <img src={"image"} alt="" className={styles.card_media}/> */}
                <span className={styles.card_tag+styles.subtle}>Order Now</span>
            </div>
        </div>
        </>
        )
    })}
        </section>
        </>
  )
}

export default MenuCard
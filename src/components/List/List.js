import React from "react";
import styles from "./List.module.css";
const List = ({ data }) => {
  const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } =
    data;
  return (
    <div className={styles.list}>
      <div className={styles.list_content}>
        <div className={styles.list_Image_container}>
          <img src={imageUrl} className={styles.list_Image} alt="Image1" />
        </div>
        <div className={styles.list_details}>
          <div className={styles.list_type}>Sale</div>
          <div className={styles.list_row}>
            <span className={styles.list_price}>{price}</span>
          </div>
          <div className={styles.list_row}>
            <span className={styles.list_address}>{address}</span>
          </div>
         <div className={styles.feature}>
         <div className={styles.list_row}>
            <div className={styles.bed_icon}>
              <i
                className="fa-sharp fa-solid fa-bed"
                style={{ fontSize: 24, color:"gray" }}
              ></i>
            </div>
            <span className={styles.list_numbed}>{numBedroom}</span>
          </div>
          <div className={styles.list_row}>
            <div className={styles.bed_icon}>
            <i class="fa-sharp fa-solid fa-shower" style={{ fontSize: 24, color:"gray" }}></i>
            </div>
            <span className={styles.list_numbed}>{numWashrooms}</span>
          </div>
          <div className={styles.list_row}>
            <div className={styles.bed_icon}>
              <i
                className="fa-solid fa-ruler"
                style={{ fontSize: 24, color:"gray" }}
              ></i>
            </div>
            <span className={styles.list_numbed}>{livingSpace}</span>
          </div>
         </div>
          
        </div>
      </div>
    </div>
  );
};

export default List;

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
      </div>
    </div>
  );
};

export default List;

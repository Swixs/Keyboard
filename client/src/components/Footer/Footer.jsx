import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const columns = [
    { title: "Practice", buttons: ["Race", "Training", "Levels", "Testing"] },
    { title: "Info", buttons: ["Home", "About", "Contact", "Support"] },
    { title: "User", buttons: ["Profile", "Settings", "Dashboard", "Logout"] },
    { title: "Legal", buttons: ["Privacy", "Terms", "Cookies", "FAQ"] },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className={styles.column}>
            <h3 className={styles.title}>{column.title}</h3>
            {column.buttons.map((label, btnIndex) => (
              <button key={btnIndex} className={styles.button}>
                {label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

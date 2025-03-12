import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "../../styles/Home.module.css";
const FAQSection = () => {
  return (
    <section>
      <h1 style={{ marginTop: 100 }}>Touch Typing FAQ and Tips</h1>
      <Accordion style={{ backgroundColor: "#F0F0F0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How to type correctly?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className={styles.list}>
              <li>
                <strong>1.</strong> Sit up straight, with the screen at eye
                level, 45-70 cm away.
              </li>
              <li>
                <strong>2.</strong> Keep your back straight and elbows at a
                right angle.
              </li>
              <li>
                <strong>3.</strong> Relax your shoulder, arm, and wrist muscles.
              </li>
              <li>
                <strong>4.</strong> Always start typing from the{" "}
                <span className={styles.keyBorder}>F</span>{" "}
                <span className={styles.keyBorder}>A</span>{" "}
                <span className={styles.keyBorder}>S</span>{" "}
                <span className={styles.keyBorder}>D</span> –{" "}
                <span className={styles.keyBorder}>J</span>{" "}
                <span className={styles.keyBorder}>K</span>{" "}
                <span className={styles.keyBorder}>L</span>{" "}
                <span className={styles.keyBorder}>;</span> keys.
              </li>
              <li>
                <strong>5.</strong> Return your fingers to this position after
                each key press.
              </li>
              <li>
                <strong>6.</strong> Press each key only with the finger assigned
                to it.
              </li>
              <li>
                <strong>7.</strong> Our color scheme will help you with this.
              </li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#F0F0F0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How to learn to type fast?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.textLeft}>
            The main thing is to practice a lot and do it regularly. With each
            lesson you take, your muscle memory will improve and all ten of your
            fingers will know where to press.
          </div>
          <div className={styles.textLeft} style={{ marginTop: 50 }}>
            By practicing just 15-30 minutes a day, in just a couple of weeks
            you will know the exact location of each key without even looking at
            the keyboard. But remember, it is important to learn correctly.
            Without mastering the correct positions, you will simply waste your
            time.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#F0F0F0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            How to type with all fingers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.textLeft}>
            The main idea of ​​typing with all fingers is that each finger has
            its own key zone. This allows you to type faster and without looking
            at the keyboard.
          </div>
          <div className={styles.textLeft} style={{ marginTop: 50 }}>
            It is important to press the keys only with the finger that is
            intended for them. The color of the keys on the keyboard will help
            you understand and remember which finger to press which key.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#F0F0F0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            What is the correct printing technique?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.textLeft}>
            On Keyboard you can learn the technique of touch typing with all
            fingers. The main idea of ​​the technique is that each finger has
            its own zone of keys. This allows you to type without looking at the
            keyboard.
          </div>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default FAQSection;

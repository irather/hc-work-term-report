import React from "react";
import styles from "../styles/styles.module.css";

function EmployerInfo() {
  return (
    <div id="employerInfo" className={styles.section}>
      <h2>Employer Information</h2>
      <p>
        The Bureau of Microbial Hazards is a division that is located under
        Health Canada. They work to minimize public health risks from the
        consumption of foods contaminated with bacterial, parasitic, viral, and
        prion-disease agents. They are able to do this by taking in samples from
        certain areas and then using labs to identify and test what bacteria is
        in the food. Their area of expertise include the following: microbial
        pathogens, microbiological risk assessment & management, novel foods,
        microbiological methods, microbial research, and food safety consumer
        education.
      </p>
    </div>
  );
}

export default EmployerInfo;

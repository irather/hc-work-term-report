import React from "react";
import styles from "../styles/styles.module.css";

function JobDesc() {
  return (
    <div id="jobDesc" className={styles.section}>
      <h2>Job Description</h2>
      <p>
        I had one overall project to work on during my time at Health Canada,
        and that was to help build a Labaratory Information Management System
        (LIMS) application. The overall goal with this project was to create new
        workflow pages and create a sample submission table form. I created new
        workflow pages using React by creating a component which showed the user
        what step they were currently on and then having a table to show the
        results of that step. The sample submission was the main task that I
        worked on, for this task I created a UI of a table which would fill with
        a file that the user could select and then the user would be able to
        upload that table to the database. I also implemented visual error
        checks for this table so that the user could see if the table they
        uploaded matched the rule format which was predetermined. For example, I
        created an error check to ensure the date format was always in
        YYYY-MM-DD and if it wasn't, the full row would be highlighted in red.
        Overall, majority of the skills that I used for this job I had to learn
        on the job, as many of the technologies used I was not fully experienced
        in or I hadn't seen it before. These skills included Axios which is
        something that I was not familiar with from before.
      </p>
    </div>
  );
}

export default JobDesc;

import PrimaryCta from "@components/primaryCta";
import Checkbox from "./checkbox";
import Input from "./input";
import styles from "./styles.module.scss";
import SecondaryCta from "@components/secondaryCta";
import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import Textarea from "./textarea";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setShowLoading(true);
    // setIsSubmitting(true);
    // setSubmitStatus("submitting");

    // try {
    //   const submissionData = {
    //     name,
    //     createdAt: serverTimestamp(), // Use serverTimestamp() from firebase/firestore
    //     answers: {
    //       q1: answers[1],
    //       q2: answers[2],
    //       q3: answers[3],
    //       q4: answers[4],
    //       q5: answers[5],
    //     },
    //     results: {
    //       r1: formData.results.r1,
    //       r2: formData.results.r2,
    //     } satisfies ResultsType,
    //   };

    //   // Add to queue collection
    //   // await addDoc(collection(db, "submissions"), submissionData);
    //   await saveSubmissions(submissionData);

    //   // Record attempt in cookie
    //   // await recordAttempt(QUIZ_ID, submissionData.results);

    //   // Also add results to local storage
    //   localStorage.setItem("results", JSON.stringify(submissionData.results));
    //   const cookiesAccepted = localStorage.getItem("cookieAccepted") === "true";
    //   console.log({ cookiesAccepted });

    //   // setStatusMessage("Quiz submitted successfully!");
    //   // setSubmitStatus("success");
    //   window.location.href = "/results";
    // } catch (error) {
    //   console.error("Error submitting quiz:", error);
    //   // setStatusMessage("Error submitting quiz");
    //   // setSubmitStatus("error");
    // } finally {
    //   // setIsSubmitting(false);
    // }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <div>
            <Input
              // placeholder="name"
              label="Name"
              value={name}
              setValue={(e) => setName(e)}
            />
            <Input
              // placeholder="name@email.com"
              label="Email"
              value={email}
              setValue={(e) => setEmail(e)}
            />
            <Input
              // placeholder="phone"
              label="Mobile or home"
              value={phone}
              setValue={(e) => setPhone(e)}
            />
          </div>
          <Textarea
            value={message}
            setValue={(e) => setMessage(e)}
            // placeholder="Message"
            label="Message"
          />
          {/* <div className={styles.formGroupTwo}>
            <div className={styles.checkboxContainer}>
              <p className={styles.label}>What are you after?</p>
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>

            <div>
              <Input
                placeholder="phone"
                label="Mobile or home"
                value={phone}
                setValue={(e) => setPhone(e)}
              />
              <div className={styles.selectContainer}>
                <label className={styles.label}>Approx. Budget</label>
                <select
                  className={styles.select}
                  name="Appox. Budget"
                  defaultValue="3" // This should match an option's value
                >
                  <option className={styles.option} value="1" defaultChecked>
                    Less than $1000
                  </option>
                  <option className={styles.option} value="2">
                    $1000 - $5000
                  </option>

                  <option className={styles.option} value="2">
                    More than $5000
                  </option>
                  <option className={styles.option} value="3">
                    No set budget
                  </option>
                </select>
              </div>
            </div>
          </div> */}
        </fieldset>
        <div>
          <SecondaryCta label="Send enquiry" onClick={() => console.log("")} />
        </div>
      </form>
    </div>
  );
};

export default Form;

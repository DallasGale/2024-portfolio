import PrimaryCta from "@components/primaryCta";
import Checkbox from "./checkbox";
import Input from "./input";
import styles from "./styles.module.scss";

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input placeholder="name" label="Name" />
          <Input placeholder="name@email.com" label="Email" />
          <Input placeholder="phone" label="Mobile or home" />

          <div className={styles.checkboxContainer}>
            <p className={styles.label}>What are you after?</p>
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>

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
        </fieldset>
        <div>
          <PrimaryCta label="Send enquiry" onClick={() => console.log("")} />
        </div>
      </form>
    </div>
  );
};

export default Form;

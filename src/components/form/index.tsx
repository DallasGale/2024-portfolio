import PrimaryCta from "@components/primaryCta";
import Checkbox from "./checkbox";
import Input from "./input";
import styles from "./styles.module.scss";
import SecondaryCta from "@components/secondaryCta";
import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import Textarea from "./textarea";

const key = "27e8dd92-ca7d-4ad3-9e17-12d3c46e19f1";

type SubmitTypes = {
  state: StateTypes;
  message: string;
};

type StateTypes = "initial" | "submitting" | "succeeded" | "error";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<SubmitTypes>({
    state: "initial",
    message: "",
  });
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setStatus({
      state: "submitting",
      message: "",
    });
    const formData = new FormData(event.target);

    formData.append("access_key", key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log({ data });

    if (data.success) {
      setStatus({ state: "succeeded", message: data.success });
      event.target.reset();
    } else {
      console.log("Error", data);
      setStatus({ state: "error", message: data.message });
    }
  };

  return (
    <div className={styles.container}>
      {status.state === "submitting" && (
        <p className="display6">
          Submitting<span className="accent">…</span>
        </p>
      )}
      {status.state === "succeeded" && (
        <p className="display6">
          Thanks for your enquiry, I will be in touch soon
          <span className="accent">.</span>
        </p>
      )}
      {status.state === "initial" && (
        <>
          <h2 className="display6">
            Let's chat about your vision<span className="accent">.</span>
            <br />
            <br />
          </h2>
          <form className={styles.form} onSubmit={onSubmit}>
            <input type="hidden" name="subject" value="New Website Enquiry" />
            <input
              type="hidden"
              name="from_name"
              value="DallasGale.com  Website Enquiry"
            />
            <input type="hidden" name="replyto" value="hello@dallasgale.com" />

            <fieldset className={styles.fieldset}>
              <div>
                <Input
                  label="Name"
                  value={name}
                  id="name"
                  setValue={(e) => setName(e)}
                />
                <Input
                  label="Email"
                  value={email}
                  id="email"
                  setValue={(e) => setEmail(e)}
                />
                <Input
                  label="Mobile or home"
                  value={phone}
                  id="phone"
                  setValue={(e) => setPhone(e)}
                />
              </div>
              <Textarea
                value={message}
                setValue={(e) => setMessage(e)}
                id="message"
                label="Message"
              />
            </fieldset>
            <div>
              <SecondaryCta
                label="Send enquiry"
                onClick={() => console.log("")}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;

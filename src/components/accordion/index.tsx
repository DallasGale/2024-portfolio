import { useState } from "react";
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
type Project = {
  id: number;
  description: string;
  image?: string;
  url?: string;
};

// interface Props {
//   project: Project;
// }

const Accordion = ({ id, description, url }: Project) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div id="accordionGroup" className={styles.accordion}>
      <h3>
        <button
          onClick={() => setToggle(!toggle)}
          type="button"
          aria-expanded={toggle}
          className={styles.accordionTrigger}
          aria-controls={`sect${id}`}
          id={`accordion${id}id`}
        >
          <span className={styles.accordionTitle}>
            More info
            <span className={styles.accordionTitle} />
          </span>
        </button>
      </h3>
      {toggle && (
        <div
          id={`sect${id}`}
          role="region"
          aria-labelledby={`accordion${id}id`}
          className={styles.accordionPanel}
        >
          <ReactMarkdown rehypePlugins={[rehypeRaw]} className={`paragraph2`}>
            {description}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Accordion;

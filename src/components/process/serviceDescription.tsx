// ---
import PrimaryCta from "../primaryCta";
import styles from "./styles.module.scss";
import { forwardRef, type ForwardedRef } from "react";

interface Props {
  title: string;
  description: string;
  active: boolean;
  id: number;
}

const ServiceDescription = forwardRef(
  (
    { title, description, active, id }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        id={`process-${id}`}
        className={` content-bg ${styles.process} ${active ? styles.active : styles.inactive} `}
      >
        <h3 className="display3">
          {title}
          <span className={styles.accent}>.</span>
        </h3>
        <p
          className="paragraph2"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className={styles.ctaWrapper}>
          <PrimaryCta label="Steps involved" onClick={() => null} />
        </div>
      </div>
    );
  },
);

export default ServiceDescription;

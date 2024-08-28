import { useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import DraggableModal from "@components/modal";

export type Employer = {
  name: string;
  logo: string;
  url: string;
  position: string;
  location: string;
  date: string[];
};

interface Props {
  employerList: Employer[];
}
const Employers = ({ employerList }: Props) => {
  const [open, setOpen] = useState(false);
  const [currentEmployer, setCurrentEmployer] = useState<Employer | null>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleButtonClick = (employer: Employer) => {
    showModal();
    setCurrentEmployer(employer);
  };

  return (
    <>
      <ul className={styles.ul}>
        {employerList.map((employer: Employer) => (
          <li className={styles.li} key={employer.name}>
            <button
              onClick={() => handleButtonClick(employer)}
              className={classNames(styles.button, {
                [styles.active]:
                  currentEmployer?.name === employer.name && open,
                [styles.default]: !open,
              })}
            >
              {employer.name}
            </button>
          </li>
        ))}
      </ul>

      <DraggableModal
        open={open}
        setOpen={setOpen}
        title={`${currentEmployer?.name}`}
        logo={`${currentEmployer?.logo}`}
        url={`${currentEmployer?.url}`}
        content={
          <>
            <div className="modal-text-row">
              <h3 className="modal-text-strong">Position</h3>{" "}
              <p className="modal-text">{currentEmployer?.position}</p>
            </div>
            <div className="modal-text-row">
              <h3 className="modal-text-strong">Location</h3>{" "}
              <p className="modal-text">{currentEmployer?.location}</p>
            </div>
            <div className="modal-text-row">
              <h3 className="modal-text-strong">When</h3>{" "}
              <p className="modal-text">{currentEmployer?.date.join(" - ")}</p>
            </div>
          </>
        }
      />
    </>
  );
};
export default Employers;

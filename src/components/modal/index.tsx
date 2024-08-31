import { Modal } from "antd";
import styles from "./styles.module.css";
import Draggable, {
  type DraggableData,
  type DraggableEvent,
} from "react-draggable";
import { useRef, useState } from "react";

interface Props {
  logo: string;
  title: string;
  url?: string;
  projectUrl?: string;
  company: string;
  tech?: string[];
  content: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DraggableModal = ({
  logo,
  title,
  url,
  company,
  tech,
  content,
  open,
  setOpen,
}: Props) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = dragRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  return (
    <Modal
      footer={null}
      classNames={{
        content: styles.modalContent,
        body: styles.modalBody,
        header: styles.modalHeader,
      }}
      title={
        <div
          style={{ width: "100%", cursor: "move" }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          <div className={styles.modalHeaderRow}>
            <h2 className={styles.title}>{title}</h2>
            <img
              src={`${logo}`}
              alt={title}
              style={{
                height: "100%",
                width: "100%",
                maxWidth: 90,
              }}
            />
          </div>
        </div>
      }
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          nodeRef={dragRef}
          onStart={(event, uiData) => onStart(event, uiData)}
          position={{ x: 500, y: 0 }}
        >
          <div ref={dragRef}>{modal}</div>
        </Draggable>
      )}
    >
      <div className={styles.modal}>
        {company && (
          <div className={styles.techWrapper}>
            <p className="modal-text-strong">Company</p>
            <p className={styles.tech}>{company}</p>
          </div>
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={styles.modalLink}
          >
            {url.split("//")[1]}
          </a>
        )}

        <div>{content}</div>
        {tech && (
          <div className={styles.techWrapper}>
            <p className="modal-text-strong">Tech Used</p>
            {tech.map((tech) => (
              <p className={styles.tech}>#{tech}</p>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default DraggableModal;

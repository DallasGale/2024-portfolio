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
  url: string;
  content: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DraggableModal = ({
  logo,
  title,
  url,
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
          <div className={styles.modalTitle}>
            <img src={`${logo}`} alt={title} />
            <h2 className={styles.title}>{title}</h2>
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
        >
          <div ref={dragRef}>{modal}</div>
        </Draggable>
      )}
    >
      <div className={styles.modal}>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={styles.modalLink}
        >
          {url.split("/")[2]}
        </a>
        {content}
      </div>
    </Modal>
  );
};

export default DraggableModal;

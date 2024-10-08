import DraggableModal from "@components/modal";
import Card, { type PopupInfo } from "./card";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export interface CardGroupProps extends PopupInfo {
  image: string;
  imageAltText: string;
  rate: number;
}
interface Props {
  cards: CardGroupProps[];
}
const CardGroup = ({ cards }: Props) => {
  const [activeCard, setActiveCard] = useState<PopupInfo | null>(null);

  console.log({ cards });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setActiveCard(null);
    }
  }, [open]);

  return (
    <>
      {cards.map((card: CardGroupProps, index) => (
        <Card
          {...card}
          key={card.project}
          rate={card.rate}
          onClick={(e) => [setOpen(true), setActiveCard(e satisfies PopupInfo)]}
          isActive={activeCard?.project === card.project}
        />
      ))}
      {activeCard && (
        <DraggableModal
          open={open}
          setOpen={setOpen}
          title={activeCard?.project}
          company={activeCard?.company}
          logo={activeCard?.logo}
          projectUrl={activeCard?.projectUrl}
          tech={activeCard?.tech}
          content={
            <>
              <div>
                <div className="modal-text-row">
                  <p
                    className="modal-text"
                    dangerouslySetInnerHTML={{ __html: `${activeCard?.info}` }}
                  />
                </div>
                <div className="modal-text-row">
                  <h3 className="modal-text-strong">Role</h3>
                  <p className="modal-text">{activeCard.role}</p>
                </div>
                <div className="modal-text-row">
                  <h3 className="modal-text-strong">When</h3>
                  <p className="modal-text">{activeCard.date}</p>
                </div>
                <div className="modal-text-row">
                  <h3 className="modal-text-strong">URL</h3>
                  <a
                    href={activeCard.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`modal-text ${styles.projectLink}`}
                  >
                    {activeCard.projectUrl.split("//")[1]}
                  </a>
                </div>
              </div>
            </>
          }
        />
      )}
    </>
  );
};

export default CardGroup;

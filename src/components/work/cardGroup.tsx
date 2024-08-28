import DraggableModal from "@components/modal";
import Card, { type PopupInfo } from "./card";
import { useEffect, useState } from "react";

export interface CardGroupProps extends PopupInfo {
  image: string;
  imageAltText: string;
}
interface Props {
  cards: CardGroupProps[];
}
const CardGroup = ({ cards }: Props) => {
  console.log({ cards });

  const [activeCard, setActiveCard] = useState<PopupInfo | null>(null);

  console.log({ activeCard });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setActiveCard(null);
    }
  }, [open]);
  return (
    <>
      {cards.map((data: CardGroupProps) => (
        <Card
          {...data}
          onClick={(e) => [setOpen(true), setActiveCard(e satisfies PopupInfo)]}
          isActive={activeCard?.name === data.name}
        />
      ))}
      {activeCard && (
        <DraggableModal
          open={open}
          setOpen={setOpen}
          title={activeCard?.name}
          logo={activeCard?.logo}
          url={activeCard?.url}
          content={
            <>
              <div>
                <div className="modal-text-row">
                  <h3 className="modal-text-strong">When</h3>
                  <p className="modal-text">{activeCard.date}</p>
                </div>
              </div>
              <p className="modal-text">{activeCard.info}</p>
            </>
          }
        />
      )}
    </>
  );
};

export default CardGroup;

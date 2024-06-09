import React from "react";
import Card from "./Card";

interface ModalProps {
  options: string[];
  cont: string;
  cards: string[];
  setCards: React.Dispatch<React.SetStateAction<string[]>>;
}

const ModalButton: React.FC<ModalProps> = ({ options, cont, cards, setCards }) => {
  const toggleOptions = () => {
    setModalVisible((prev) => !prev);
  };

  const handleAddCard = (text: string) => {
    if (!cards.includes(text)) {
      setCards((prevCards) => [...prevCards, text]);
    } else {
      alert("Already added.");
    }
  };

  const [modalVisible, setModalVisible] = React.useState(false);

  let modalSize = "modal";

  if (cont !== "options-container") {
    modalSize = "modal-small";
  }

  return (
    <div>
      <button onClick={toggleOptions}>Show Options</button>
      {modalVisible && (
        <div className={modalSize} onClick={toggleOptions}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={cont}>
              {options.map((option, index) => (
                <button key={index} className="option-item" onClick={() => handleAddCard(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="cards-row">
        {cards.map((card, index) => (
          <Card key={index} text={card} />
        ))}
      </div>
    </div>
  );
};

export default ModalButton;

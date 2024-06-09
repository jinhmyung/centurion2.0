import React, { useState } from "react";
import Card from "./Card";

interface ModalProps {
    options: string[];
    cont: string;
  }

function ModalButton({options,cont}:ModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [cards, setCards] = useState<string[]>([]);
  
  let modalSize = "modal";

  const toggleOptions = () => {
    setModalVisible(!modalVisible);
  };

  const handleAddCard = (text: string) => {
    if (!cards.includes(text)) {
        setCards([...cards, text]);
    } else {
        alert("Already added.");
    }
  };

  if (cont != "options-container") {
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
        {cards.map((card) => (
          <Card text={card} />
        ))}
      </div>
    </div>
  );
}

export default ModalButton;
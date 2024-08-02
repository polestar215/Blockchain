import Image from "next/image";
import { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { FeedSendButton, NewFeedStatusInfo } from "./PostFeedForm.styles";
import returnButton from "@/public/assets/utils/returnButton.svg";
import { FeedbackContext } from "context/FeedbackContext";
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  z-index: 1;
  height: 220px;
  width: 400px;
  background: hsl(213deg 40% 14%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  animation: animate 0.3s;

  @keyframes animate {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  padding: 8px 11px;
  background: crimson;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
`;

const FeedReplyInput = styled.input`
  all: unset;
  flex-grow: 1;
  min-height: 20px;
  box-sizing: border-box;
  background: transparent;
  color: white;
  text-align: center;
  font-size: 0.9rem;
  cursor: text;
  & > ::placeholder {
    color: rgb(107 114 128 / 1);
  }
`;

const InputContainer = styled.div`
  display: flex;
  background-color: hsl(215deg 69% 14% / 69%);
  border-radius: 4px;
  margin: 6px;
  padding: 8px;
  width: 90%;
`;

function ModalResponseFeedback({ setShowModal, id }) {
  // close the modal when clicking outside the modal.
  const { createReply, ownerStatus } = useContext(FeedbackContext);
  const modalRef = useRef();
  const [reply, setReply] = useState("");
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const handleReplyChange = (e) => {
    e.preventDefault();
    setReply(e.target.value);
  };

  const handleSubmitReply = () => {
    createReply(id, reply);
  };

  return (
    <ModalContainer ref={modalRef} onClick={closeModal}>
      <Modal>
        <h3>Reply to Feedback Id {id}</h3>
        <InputContainer>
          <FeedReplyInput
            value={reply}
            onChange={(e) => handleReplyChange(e)}
            name="reply"
            type="text"
            required
            placeholder="Reply to the Feedback"
          />
          <FeedSendButton id="publish" onClick={handleSubmitReply}>
            <Image
              src={returnButton}
              layout="fixed"
              width={20}
              height={20}
              alt="Enter Button"
            />
          </FeedSendButton>
        </InputContainer>
        <NewFeedStatusInfo id="status">{ownerStatus}</NewFeedStatusInfo>
        <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
      </Modal>
    </ModalContainer>
  );
}

export default ModalResponseFeedback;

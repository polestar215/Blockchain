import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AvatarFeed,
  FeedMessage,
  FeedMessageContainer,
  MessageMetaData,
  PostedFeed,
  PostedFeeds,
  ReplyButton,
  UpToDate,
} from "./Feeds.styles";
import avatarSvg from "@/public/assets/utils/avatar.svg";
import ModalResponseFeedback from "./ModalResponseFeedback";

function Feeds({ feeds, isOwnerConnected }) {
  const endOfMessageRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIdFeedback, setCurrentIdFeedback] = useState(false);
  useEffect(() => {
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [feeds]);

  const popupModal = (id) => {
    setCurrentIdFeedback(id);
    setShowModal(true);
  };

  return (
    <PostedFeeds>
      {feeds.map(({ user, message, rate, id, createdAt, response }) => (
        <div key={id}>
          <PostedFeed>
            <AvatarFeed>
              <Image
                src={avatarSvg}
                layout="fixed"
                width={18}
                height={20}
                alt="Enter Button"
              />
            </AvatarFeed>
            <FeedMessageContainer>
              <MessageMetaData>
                <div className="message__user-date">
                  <span className="user">{user}</span>
                  <span className="date">{createdAt}</span>
                </div>

                <div>
                  <span className="rate">Rated : {rate}</span>
                  <span className="star"></span>
                </div>
              </MessageMetaData>

              <FeedMessage>{message}</FeedMessage>
            </FeedMessageContainer>

            {isOwnerConnected && response?.message === "" ? (
              <ReplyButton onClick={() => popupModal(id)}>Reply</ReplyButton>
            ) : (
              <></>
            )}
          </PostedFeed>
          {response?.message !== "" ? (
            <PostedFeed owner>
              <FeedMessageContainer>
                <MessageMetaData>
                  <div className="message__user-date">
                    <span className="user">Owner</span>
                    <span className="date">{response.createdAt}</span>
                  </div>
                </MessageMetaData>

                <FeedMessage>{response.message}</FeedMessage>
              </FeedMessageContainer>
              <AvatarFeed>
                <Image
                  src={avatarSvg}
                  layout="fixed"
                  width={18}
                  height={20}
                  alt="Enter Button"
                />
              </AvatarFeed>
            </PostedFeed>
          ) : null}
        </div>
      ))}
      <UpToDate ref={endOfMessageRef}>
        <p>You{"'"}re up to date 🎉</p>
        {isOwnerConnected ? (
          <p>You can reply to all the feedback</p>
        ) : (
          <p>To reply to the feedback, connect with the owner account</p>
        )}
      </UpToDate>
      {showModal ? (
        <ModalResponseFeedback
          setShowModal={setShowModal}
          id={currentIdFeedback}
        />
      ) : null}
    </PostedFeeds>
  );
}

export default React.memo(Feeds);

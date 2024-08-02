import { FeedbackContext } from "context/FeedbackContext";

import { useContext } from "react";
import PostFeedForm from "./PostFeedForm";
import { FeedbackContainer } from "./FeedbackUI.styles";
import Feeds from "./Feeds";
function FeedbackUI() {
  const { feeds, isLoadingFeeds, isOwnerConnected } =
    useContext(FeedbackContext);

  return (
    <FeedbackContainer>
      {isLoadingFeeds ? (
        <p>Loading...</p>
      ) : (
        <Feeds feeds={feeds} isOwnerConnected={isOwnerConnected} />
      )}

      <PostFeedForm />
    </FeedbackContainer>
  );
}

export default FeedbackUI;

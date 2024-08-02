import {
  BackToPortfolio,
  CustomRight,
  FeedbackUI,
  SEO,
  SocialMedia,
} from "@/components";
import { FeedbackProvider } from "context/FeedbackContext";
import Layout from "Layout/Layout";

function FeedBack() {
  return (
    <FeedbackProvider>
      <Layout noFooter>
        <SEO page="/feedback" />
        <FeedbackUI />
      </Layout>
      <BackToPortfolio />
      <SocialMedia />
      <CustomRight />
    </FeedbackProvider>
  );
}

export default FeedBack;

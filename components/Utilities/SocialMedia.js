import {
  FaFacebookF,
  FaGithub,
  FaStackOverflow,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const getSocialIcon = (name) => {
  switch (name) {
    case "facebook":
      return <FaFacebookF />;
    case "github":
      return <FaGithub />;
    case "linkedIn":
      return <FaLinkedinIn />;
    case "instagram":
      return <FaInstagram />;
    case "stackOverflow":
      return <FaStackOverflow />;
    default:
      return <></>;
  }
};

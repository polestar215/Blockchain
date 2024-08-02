import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalTheme;

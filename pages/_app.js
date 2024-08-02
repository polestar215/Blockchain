import GlobalTheme from "@/styles/GlobalTheme";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalTheme>
        <Component {...pageProps} />
      </GlobalTheme>
    </>
  );
}

export default App;

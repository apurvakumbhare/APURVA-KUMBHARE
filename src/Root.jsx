import { useEffect, useState } from "react";
import App from "./App";
import Preloader from "./components/Preloader";
import TextType from "./components/TextType";

export default function Root() {
  const [loading, setLoading] = useState(
    sessionStorage.getItem("preloaderShown") !== "true"
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("preloaderShown", "true");
        setLoading(false);
      }, 4200);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return (
      <Preloader>
        <TextType
          text={["APURVA KUMBHARE"]}
          typingSpeed={120}
          deletingSpeed={0}
          pauseDuration={1000}
          loop={false}
          showCursor={true}
          cursorCharacter="|"
          className="preloader-text"
        />
      </Preloader>
    );
  }

  return <App />;
}

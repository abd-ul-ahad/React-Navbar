import Navbar from "@/Components/Navbar/Index";
import "@/styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      <LoadingBar
        color="var(--logo-blue)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

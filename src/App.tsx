"use client";

import dynamic from "next/dynamic";

const CharacterModel = dynamic(() => import("./components/Character"), {
  ssr: false,
});
const MainContainer = dynamic(() => import("./components/MainContainer"), {
  ssr: false,
});
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <MainContainer>
          <CharacterModel />
        </MainContainer>
      </LoadingProvider>
    </>
  );
};

export default App;

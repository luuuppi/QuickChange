import { FC } from "react";
import { ConvertForm } from "./modules/ConvertForm";
import ConvertDisplay from "./modules/ConvertDisplay";
import "./App.scss";

const App: FC = () => {
  return (
    <main>
      <ConvertForm />
      <ConvertDisplay />
    </main>
  );
};

export default App;

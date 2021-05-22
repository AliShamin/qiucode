import "./QiuCodeMain.css";
import QuestionWindow from "./QuestionWindow/QuestionWindow.js";
import SolutionWindow from "./SolutionWindow/SolutionWindow.js";
import Header from "./Header/Header.js";
import withAuth from "../../auth/withAuth";
import QiuCodeLoader from "../sub-components/QiuCodeLoader/QiuCodeLoader";
import { useEffect, useState } from "react";
import store from "../../store/index";

function QiuCodeMain() {
  let [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().code_run_reducer.isLoad != undefined)
        setIsLoad(store.getState().code_run_reducer.isLoad);
    });
  });
  return (
    <div>
      <Header></Header>
      <div className="mt-main-content">
        <div id="mt-question-window">
          <QuestionWindow />
        </div>
        <div id="mt-code-editor">
          <SolutionWindow />
          {isLoad && (
            <div id="mt-loader">
              <QiuCodeLoader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withAuth(QiuCodeMain);

import "./SolutionWindow.css";
import { useState, useEffect } from "react";
import Api from "../../../api/index.js";
import {
  CPP_CODE_TEMPLATE,
  JAVA_CODE_TEMPLATE,
  JS_CODE_TEMPLATE,
  PYTHON_CODE_TEMPLATE,
} from "../../../constants/appConstants";
import store from "../../../store/index";
import {
  NEXT_QUESTION,
  PREV_QUESTION,
  RUN_CODE,
} from "../../../actions/actionTypes";
import questionData from "../../../assets/questionare.json";
import LangOptions from "../LangOptions/LangOptions";

/**
 * User window for code run and submittion
 * @returns
 */
function SolutionWindow() {
  const [text, setText] = useState(JAVA_CODE_TEMPLATE);
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("java");
  const [isPrevDisabled, disablePrev] = useState(true);
  const [isNextDisabled, disableNext] = useState(false);

  useEffect(() => {
    store.subscribe(() => {
      let questionId = store.getState().question_id_reducer.questionId;
      if (questionId == 0) {
        disablePrev(true);
        disableNext(false);
      } else if (questionId == questionData.length - 1) {
        disableNext(true);
        disablePrev(false);
      } else if (questionId > 0 && questionId < questionData.length - 1) {
        disablePrev(false);
        disableNext(false);
      }
    });
  }, []);

  let runCode = () => {
    console.log("run code with text :", text);
    store.dispatch({ type: RUN_CODE, isLoad: true });
    Api.executeCode(text, "Java").then((res) => {
      console.log("compile response", res);
      setOutput(res.data);
      store.dispatch({ type: RUN_CODE, isLoad: false });
    });
  };

  let onTextAreaChange = (e) => {
    setText(e.target.value);
  };

  let submitCode = (e) => {
    console.log("Submit code calls!");
  };

  let clearCode = (e) => {
    switch (lang) {
      case "java":
        setText(JAVA_CODE_TEMPLATE);
        break;
      case "python":
        setText(PYTHON_CODE_TEMPLATE);
        break;
      case "javascript":
        setText(JS_CODE_TEMPLATE);
        break;
      case "c++":
        setText(CPP_CODE_TEMPLATE);
        break;
      default:
        throw "Invalid language";
    }
    setOutput("");
  };

  let changeDefaultTemplates = (lang) => {
    setLang(lang);
    switch (lang) {
      case "java":
        setText(JAVA_CODE_TEMPLATE);
        break;
      case "python":
        setText(PYTHON_CODE_TEMPLATE);
        break;
      case "c++":
        setText(CPP_CODE_TEMPLATE);
        break;
      case "javascript":
        setText(JS_CODE_TEMPLATE);
        break;
      default:
        throw "Invalid language";
    }
  };

  let previousQuestion = () => {
    store.dispatch({ type: PREV_QUESTION });
  };
  let nextQuestion = () => {
    store.dispatch({ type: NEXT_QUESTION });
  };

  return (
    <div id="mt-solution-window">
      <div className="mt-display-row-space-between">
        <div className="mt-display-row-space-between">
          <h4>#Enjoy Coding</h4>
          <p>&#128515;</p>
        </div>
        <div className="mt-display-row-space-between">
          <LangOptions changeDefaultTemplates={changeDefaultTemplates} />
        </div>
      </div>
      <textarea
        spellCheck="false"
        id="mt-textarea"
        placeholder="Here goes your code!"
        value={text}
        onChange={onTextAreaChange}
      ></textarea>
      <div id="button-panel">
        <button
          type="submit"
          id="mt-button"
          onClick={previousQuestion}
          disabled={isPrevDisabled}
        >
          Previous
        </button>
        <button
          type="submit"
          id="mt-button"
          onClick={nextQuestion}
          disabled={isNextDisabled}
        >
          Next
        </button>
        <button type="submit" id="mt-button" onClick={clearCode}>
          Clear
        </button>
        <button type="submit" id="mt-button" onClick={runCode}>
          Run
        </button>
        <button type="submit" id="mt-button" onClick={submitCode}>
          Submit
        </button>
      </div>
      <div id="output-section">
        <div>
          <strong>Output :</strong>
        </div>
        <div id="output-result">{output}</div>
      </div>
    </div>
  );
}

export default SolutionWindow;

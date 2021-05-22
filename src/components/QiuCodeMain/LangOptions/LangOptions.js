import "./LangOptions.css";
import { useState } from "react";

function LangOptions(props) {
  let [langOptions, setLanguageOptions] = useState("java");
  let onLangChange = (e) => {
    console.log(e.target.value);
    setLanguageOptions(e.target.value);
    props.changeDefaultTemplates(e.target.value);
  };

  return (
    <div id="mt-lang-box" className="mt-display-row-space-between">
      <div>
        <span id="mt-lang-choose">Choose Language : </span>
      </div>
      <div>
        <select id="mt-lang" onChange={onLangChange}>
          <option value="java" defaultValue>
            Java8
          </option>
          <option value="python">Python</option>
          <option value="javascript">Javascript</option>
          <option value="c++">C++</option>
        </select>
      </div>
    </div>
  );
}

export default LangOptions;

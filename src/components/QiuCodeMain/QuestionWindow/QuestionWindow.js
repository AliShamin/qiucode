import "./QuestionWindow.css";
import questionData from "../../../assets/questionare.json";
import React, { useState, useEffect, useRef } from "react";
import store from "../../../store/index";

function QuestionWindow() {
  let usernameRefs = useRef([]);
  let [items, setItems] = useState([]);
  useEffect(() => {
    store.subscribe(moveQuestion);
    pushQuestion(questionData[0]);
  }, []);

  let moveQuestion = () => {
    let questionId = store.getState().question_id_reducer.questionId;
    pushQuestion(questionData[questionId]);
  };

  let pushQuestion = (value) => {
    let items = [];
    items.push(
      <section key={value.id}>
        <pre id={value.id} key={value.id} className="mt-question">
          Q.{value.id + 1} {value.question}
          <div id="mt-example-section">
            <div>
              <strong>Example1</strong>
            </div>
            <pre id="mt-example">{value.example1}</pre>
            <div>
              <strong>Example2</strong>
            </div>
            <pre id="mt-example">{value.example2}</pre>
          </div>
        </pre>
      </section>
    );
    setItems(items);
  };

  return <div className="q-window">{items}</div>;
}
export default QuestionWindow;

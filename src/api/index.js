import axios from "axios";

const endpoint = "http://localhost:3001";

const Api = {
  executeCode: (code, lang) => {
    return axios.post(`${endpoint}/runCode`, {
      codeString: code,
      lang: lang,
    });
  },
};

export default Api;

import React from "react";
import ReactDom from "react-dom";
import styles from "./index.less";
// import "./test.ts"

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

ReactDom.render(<div>test</div>, document.getElementById("root"));

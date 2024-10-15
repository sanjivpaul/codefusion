import React from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/github";

function CodeEditor({ code, onChange }) {
    // alert("on code editor")
  return (
    <AceEditor
      mode="javascript"
      theme="github"
      value={code}
      onChange={onChange}
      name="code_editor"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="400px"
    />
  );
}

export default CodeEditor;

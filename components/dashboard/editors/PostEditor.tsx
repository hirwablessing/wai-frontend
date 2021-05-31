import dynamic from "next/dynamic";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File to the _app.js
import parser from "html-react-parser";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import {
  align,
  font,
  fontColor,
  fontSize,
  formatBlock,
  hiliteColor,
  horizontalRule,
  lineHeight,
  list,
  paragraphStyle,
  table,
  template,
  textStyle,
  image,
  link
} from "suneditor/src/plugins";

const Suneditor = dynamic(() => import("suneditor-react"), { //besure to import dynamically
  ssr: false,
});

export default function PostEditor(props:any){
    interface IRichTextEditorProps {
        richTextEditorHtml: string;
        onRichTextEditorChange: any;
        displayMode: any;
      }
      interface IRichTextEditorState {
        editorState: any;
        richTextEditor: string;
        hideToolbar: boolean;
      }

  return (
    <div className="editor">
      <SunEditor
            autoFocus={true}
            lang="en"
            setOptions={{
              showPathLabel: false,
              minHeight: "50vh",
              maxHeight: "50vh",
              placeholder: "Enter your text here!!!",
              plugins: [
                align,
                font,
                fontColor,
                fontSize,
                formatBlock,
                hiliteColor,
                horizontalRule,
                lineHeight,
                list,
                paragraphStyle,
                table,
                template,
                textStyle,
                image,
                link
              ],
              buttonList: [
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock"],
                ["paragraphStyle"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript"
                ],
                ["fontColor", "hiliteColor"],
                ["removeFormat"],
                "/", // Line break
                ["outdent", "indent"],
                ["align", "horizontalRule", "list", "lineHeight"],
                ["table", "link", "image"]
              ],
              formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
              font: [
                "rubik",
                "Arial",
                "Calibri",
                "Comic Sans",
                "Courier",
                "Garamond",
                "Georgia",
                "Impact",
                "Lucida Console",
                "Palatino Linotype",
                "Segoe UI",
                "Tahoma",
                "Times New Roman",
                "Trebuchet MS"
              ]
            }}
          />
    </div>
  );
};


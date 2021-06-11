import dynamic from "next/dynamic";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";
// import PostEditor from "../../components/dashboard/PostEditor";

// plugins for the editor

import { EditorState } from "draft-js";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File to the _app.j
// import parser from "html-react-parser";
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
  link,
} from "suneditor/src/plugins";

// import types
import { Article } from "../../types/GeneralTypes";

// import services
import { Posts } from "../../../pages/api/services/Posts";

// use context
import { UserContext } from "../../../pages/api/context/UserContext";
import Alert from "../toasts/Alert";

const Suneditor = dynamic(() => import("suneditor-react"), {
  //besure to import dynamically
  ssr: false,
});

export default function PostEditor(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  //error handling

  const [status, setStatus] = useState<number>(-1);

  const [statusMessage, setStatusMessage] = useState<string>("");

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

  // upload image here

  const [file, setFile] = useState("");
  const [img, setImage] = useState("");
  let tempFile: any;
  const uploadImage = (e: any) => {
    tempFile = e.target.files[0];
    // console.log("img",tempFile)
    const reader: any = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        setFile(reader.result);
        setImage(tempFile);
      },
      false
    );

    if (tempFile) {
      reader.readAsDataURL(tempFile);
    }
    // setFilename(e.target.files.name);
  };

  // use context
  const { user } = useContext(UserContext);

  const [content, setContent] = useState("");

  let editorState: any = EditorState.createEmpty();
  const handleContent = (e: any) => {
    setContent(e);
  };

  const handleForm = async (data: Article) => {
    setLoading(true);

    // e.preventDefault();
    editorState = content;
    // editorState = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log("Post: ", editorState);
    console.log(data.title, editorState);

    try {
      

      let Post = new Posts();
      await Post.createPost({
        title: data.title,
        content: editorState.toString(),
        section: parseInt(props.section) || 0,
        user_id: user?._id,
        category_id: props.category_id,
      });


      setStatusMessage("Post created successfully");
      // console.log("hello ", statusMessage);

      setLoading(false);
      setStatus(1);
    } catch (e) {

      let data = e.response.data.error;
      console.log("Errorrrrrr", data);
      setStatusMessage(data);
      // console.log("hello ", statusMessage);
      
      setLoading(false);
      
      setStatus(0);
      // setErrorLog(data?.data.error?data.data.error:data.data.data?data.data.data:"Check your internet connection.");

      // setLoadingStatus("Publish")
    }
  };

  // articles category id: 60c27e725f21cd00157ce34b

  return (
    <div className="editor">
      <h1 className="font-bold">{props.title}</h1>
      <div className="my-10">
        <form
          onSubmit={handleSubmit((data: Article) => {
            handleForm(data);
          })}
        >
          <div className="form-group">
            <label htmlFor="" className="text-gray-600 block my-3">
              Title{" "}
            </label>
            <input
              type="text"
              id=""
              className="border p-3 w-full"
              {...register("title", {
                required: "* This field is required",
              })}
            />
            <span className="text-red-600 text-xs">
              {errors.title && errors.title.message}
            </span>
          </div>

          {/* <div className="form-group">
                    <label htmlFor="" className="text-gray-600 block my-3">Tags </label>
                    <p className="mb-10">Create tags or choose from created ones <button
                            className="bg-blue-700 text-white px-4 py-2">Add tag</button></p>
                </div> */}

          <div className="form-group">
            <label
              htmlFor="featured_image"
              className="text-gray-600 block my-3"
            >
              <span className="block my-3">Feature image</span>
              <div className="px-12 border-2 border-dashed border-dark-500 py-20 w-full h-1/2 cursor-pointer flex items-center justify-center hover:border-blue-700">
                {!file ? (
                  <CameraOutlined style={{ fontSize: "40px" }} />
                ) : (
                  <img
                    src={file}
                    alt="Featured image"
                    className="create--featured-image"
                  />
                )}
              </div>
            </label>

            <input
              type="file"
              name=""
              id="featured_image"
              className="hidden"
              onChange={uploadImage}
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="text-gray-600 block my-3">
              Content{" "}
            </label>

            {/*
                    <PostEditor /> */}

            <SunEditor
              autoFocus={true}
              lang="en"
              defaultValue={content}
              onChange={(e) => {
                return handleContent(e);
              }}
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
                  link,
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
                    "superscript",
                  ],
                  ["fontColor", "hiliteColor"],
                  ["removeFormat"],
                  "/", // Line break
                  ["outdent", "indent"],
                  ["align", "horizontalRule", "list", "lineHeight"],
                  ["table", "link", "image"],
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
                  "Trebuchet MS",
                ],
              }}
            />

            <span className="text-red-600 text-xs">
              {errors.content && errors.content.message}
            </span>
          </div>

          <div>
            {loading ? (
              <button
                type="submit"
                className="btn bg-blue-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center"
              >
                <LoadingOutlined />
                {props.btnLoadingTitle}
              </button>
            ) : (
              <button
                type="submit"
                className="btn bg-blue-700 px-4 py-3 text-white float-right my-5 focus:outline-none"
              >
              {props.btnTitle}
              </button>
            )}
            {status === 0 ? (
              <Alert type="error" message="Error occured" 
              autoClose={4000}
              {
                ...setTimeout(() => {
                  setStatus(-1)
                }, 4000)
              }
            />
            ) : status === 1 ? (
              <Alert
                type="success"
                message="Post created successfully"
                autoClose={4000}
                {
                  ...setTimeout(() => {
                    setStatus(-1)
                  }, 4000)
                }
              />
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

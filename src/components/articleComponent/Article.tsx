import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux";
import HoverEditor from "../HoverEditor/HoverEditor";

/* 
This component is auto-generated each time a user clicks "Create new blogPost"
Inputs from this component are rendered in a separate component which updates the main blog feed
*/

const generateDivider = () => {
  return (
    <div onClick={() => <hr className="article-divider" />}>
      {" "}
      Create Divider Here!{" "}
    </div>
  );
};

const Article: React.FC = () => {
  const mainRef: any = useRef();
  const [title, setTitle] = useState<string>("");
  const [meta, setMeta] = useState<string>("");
  const [lead, setLead] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();

   


  const closeModal = (e: any) => {
    if (mainRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
      className="ArticleInput"
      ref={mainRef}
      onClick={closeModal}
    >
      {showModal && <HoverEditor />}
      <input
        type="text"
        placeholder="title..."
        value={title}
        onChange={(event: any) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        value={meta}
        onChange={(event: any) => {
          setMeta(event.target.value);
        }}
        onSelect={() => setShowModal(true)}
      />
      <input
        type="text"
        value={lead}
        onChange={(event: any) => {
          setLead(event.target.value);
        }}
      />

      <button
        type="submit"
        onClick={() =>
          dispatch(
            actionCreators.blogAction_CreatePost({
              title: title,
              meta: meta,
              lead: lead,
              id: 0,
            }),
          )
        }
      >
        Publish!
      </button>
    </form>
  );
};

export default Article;

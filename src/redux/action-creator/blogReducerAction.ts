import { ActionType } from "../action-types/index";

export type Element = {
  title: string;
  meta: string;
  lead: string;
  id: number;
};

let nextPostId:number = 0;

export const blogAction_CreatePost = (post: Element) => {
  console.log(post)
  return {
      type: ActionType.CREATE_POST,
      payload: {
        title: post.title,
        meta: post.meta,
        lead: post.lead,
        id: nextPostId++,
      }
    }
};

export const blogAction_DeletePost = (state = [], id: number) => {
  let index = state.findIndex((element: Element) => element.id === id);
  state.splice(index, 1);
  return [...state];
};

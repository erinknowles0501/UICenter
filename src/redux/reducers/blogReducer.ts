import { ActionType } from "../action-types";
import { Element } from "../action-creator/blogReducerAction";

export type ReducerAction = {
  type: string;
  payload: Element;
  id: number;
};

const initialState: Array<Element> = [];

const blogReducer = (state = initialState, action: ReducerAction) => {
  console.log(state)
  switch (action.type) {
    case ActionType.CREATE_POST:
      return state.concat(action.payload);
    case ActionType.DELETE_POST:
      return state.filter((post) => post.id !== action.id);

    default:
      
      return state;
    
  }
};

export default blogReducer;

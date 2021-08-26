import React from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./articleComponent/Article";
import ArticleRender from "./articleComponent/ArticleRender";
import UserDash from "./articleComponent/UserDash";
import BlogFeed from "./articleComponent/BlogFeed";

const Router:React.FC = () => {
  return (
    <Switch>

      <Route exact path="/"> <UserDash/> </Route>
      <Route path="/articleComponent/Article"><Article/></Route>
      <Route path="/articleComponent/BlogFeed" component = {BlogFeed}/>
      <Route path="/articleComponent/ArticleRender" component= {ArticleRender}/>
      
    </Switch>
  );
};

export default Router;

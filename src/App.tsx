import React from "react";
import { Provider } from "react-redux";
import UserDash from "./components/articleComponent/UserDash";
import Router from "./components/Router";
import { store } from "./redux/store";
import HoverEditor from './components/HoverEditor/HoverEditor';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      
        <div className="App">
        <Router/>
        </div>
        
    </Provider>
  );
};

export default App;

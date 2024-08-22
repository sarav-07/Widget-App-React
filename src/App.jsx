import React from "react";
import CategoryList from "./components/CategoryList";
import { Provider } from "react-redux";
import store from "./redux/Store";
import AddWidget from "./components/AddWidgetOverlay";
import SearchWidgets from "./components/SearchWidgets";
import AddWidgetOverlay from "./components/AddWidgetOverlay";
import Header from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <CategoryList />
        <AddWidgetOverlay/>
        {/* <SearchWidgets/> */}
      </div>
    </Provider>
  );
};

export default App;

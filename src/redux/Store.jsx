import { createStore } from "redux";
import content from "../content.json";

console.log(content);
const initialState = {
    categories: content.categories
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) => {
          return category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category;
        }),
      };
    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) => {
          return category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category;
        }),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

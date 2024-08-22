import React, { useState } from "react";
import data from "../content.json";
import Cloud from "../assets/cloud-storage.png";
import Widget2 from "../assets/Widget2.png";
import Promotion from "../assets/promotion.png";
import PriceTag from "../assets/price-tag.png";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import AddWidgetOverlay from "./AddWidgetOverlay";

const widgetImages = {
  "Cloud Accounts": Cloud,
  "Widget-2": Widget2,
  "Promotion": Promotion,
  "Price Tag": PriceTag,
};

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [isOverlayOpen, setOverlayopen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openOverlay = (categoryId) => {
    setSelectedCategory(categoryId);
    setOverlayopen(true);
  };

  const closeOverlay = () => {
    setOverlayopen(false);
    setSelectedCategory(null);
  };
  return (
    <div className="flex flex-wrap p-4 gap-4 flex-col">
      {categories.map((category) => (
        <div
          className="bg-white shadow-lg p-4 rounded-lg w-full"
          key={category.id}
        >
          <h3 className="font-semibold text-2xl mb-3">{category.name}</h3>
          <div className="flex gap-4 flex-wrap justify-between">
            {category.widgets.map((widget) => (
              <div
                className="bg-blue-50 p-2 rounded shadow-sm flex mb-4 border min-h-56 items-center justify-between"
                key={widget.id}
              >
                {widgetImages[widget.name] && (
                  <img
                    className="w-16 h-16 object-cover mr-4"
                    src={widgetImages[widget.name]}
                    alt={widget.name}
                  />
                )}

                <div className=" w-[230px] flex-1 flex flex-col overflow-auto">
                  <span className="font-bold text-sm">{widget.name} </span>
                  <span className="text-sm mt-1 whitespace-normal break-words "> - {widget.text}</span>
                </div >
                <button
                  className="text-red-400 hover:text-red-500 text-2xl ml-8"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_WIDGET",
                      payload: {
                        categoryId: category.id,
                        widgetId: widget.id,
                      },
                    })
                  }
                >
                  <MdCancel />
                </button>
              </div>
            ))}
            <div className="flex justify-center items-center bg-blue-50 mb-4 rounded w-full sm:w-1/2 lg:w-1/3">
              <button
                className="bg-blue-500 text-white font-semibold text-md px-4 py-2 rounded-lg items-center flex gap-2 justify-center"
                onClick={() => openOverlay(category.id)}
              >
                <span className="text-xl">
                  <IoMdAddCircle />
                </span>
                Add Widget
              </button>
            </div>
          </div>
        </div>
      ))}
      {isOverlayOpen && (
        <AddWidgetOverlay
          isOpen={isOverlayOpen}
          onClose={closeOverlay}
          categoryId={selectedCategory}
        />
      )}
    </div>
  );
};

export default CategoryList;

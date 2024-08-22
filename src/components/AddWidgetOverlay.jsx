import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cloud from "../assets/cloud-storage.png";
import Widget2 from "../assets/Widget2.png";
import Promotion from "../assets/promotion.png";
import PriceTag from "../assets/price-tag.png";
import { MdCancel } from "react-icons/md";

const AddWidgetOverlay = ({ isOpen, onClose, categoryId }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  const widgetImages = {
    "Cloud Accounts": Cloud,
    "Widget-2": Widget2,
    Promotion: Promotion,
    "Price Tag": PriceTag,
  };

  const categories = useSelector((state) => state.categories);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
      image: selectedImage,
    };
    dispatch({
      type: "ADD_WIDGET",
      payload: { categoryId: parseInt(categoryId), widget: newWidget },
    });
    setWidgetName("");
    setWidgetText("");
    setSelectedImage("")
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg p-8 z-50">
      <button className="text-gray-500 text-2xl mb-4" onClick={onClose}>
        <MdCancel />
      </button>
      <h2 className="text-2xl font-semibold mb-4">Add Widget</h2>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="block w-full p-2 border border-gray-300 mb-4 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="block w-full  p-2 border border-gray-300 mb-4 rounded"
          required
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="block w-full  p-2 border border-gray-300 mb-4 rounded"
          required
        />
        <select
          onChange={(e) => setSelectedImage(e.target.value)}
          value={selectedImage}
          className="block w-full p-2 border border-gray-300 mb-4 rounded"
        >
          <option value="">Select Image</option>
          {Object.entries(widgetImages).map(([name, src]) => (
            <option key={name} value={src}>
              {name}
            </option>
          ))}
        </select>
        {selectedImage && <img src={selectedImage} className="w-16 h-16 object cover mb-4" />}

        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Widget
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWidgetOverlay;

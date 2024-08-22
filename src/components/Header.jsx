import React, { useState } from "react";
import { IoMdAddCircle, IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import AddWidgetOverlay from "./AddWidgetOverlay";
import SearchWidgets from "./SearchWidgets";

const Header = () => {
  const [isOverlayOpen, setOverlayopen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchField, setSearchField] = useState("");

  const openOverlay = () => {
    setOverlayopen(true);
  };

  const closeOverlay = () => {
    setOverlayopen(false);
    setSelectedCategory(null);
  };
  return (
    <div className="shadow-sm bg-blue-50 p-6 flex justify-between items-center">
      <h1 className="text-3xl font-semibold">CNAPP Dashboard</h1>
      <div className="search field flex items-center justify-center px-4 bg-white rounded-full">
        <IoMdSearch className="text-2xl text-slate-500" />
        <input
          type="text"
          placeholder="Search anything"
          className="py-2 px-3 bg-transparent text-md overflow-x-auto outline-none"
          onChange={(e) => setSearchField(e.target.value)}
          value={searchField}
        />
        {searchField && <SearchWidgets searchTerm={searchField} />}
      </div>
      <div className="flex justify-center items-center gap-8 bg-blue-50  rounded">
        <button
          className="bg-slate-400 text-white font-medium px-2 py-2 rounded-lg items-center flex gap-2 justify-center"
          onClick={openOverlay}
        >
          <span className="text-lg">
            <IoMdAddCircle />
          </span>
          Add Widget
        </button>
        <div className="flex text-2xl text-slate-600 gap-4 items-center justify-center">
          <FaBell />
          <IoSettings />
        </div>
      </div>
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

export default Header;

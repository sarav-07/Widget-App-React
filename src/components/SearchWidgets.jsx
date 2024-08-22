import React from "react";
import { useSelector } from "react-redux";

const SearchWidgets = ({ searchTerm }) => {
  const categories = useSelector((state) => state.categories);

  const filteredWidgets = categories
    .flatMap((category) => category.widgets)
    .filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 rounded-md">
      {filteredWidgets.length > 0 ? (
        <ul>
          {filteredWidgets.map((widget) => (
            <li key={widget.id} className="p-2 border-b last:border-b-0">
              <div className="flex items-center">
                <img
                  src={widget.image}
                  alt={widget.name}
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-semibold">{widget.name}</h3>
                  <p className="text-sm text-gray-600">{widget.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No widgets found matching "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SearchWidgets;

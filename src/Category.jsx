import React from "react";

const Category = ({ categories, filterFunc }) => {
  return (
    <div className="btn-container">
      {categories.map((item) => {
        return (
          <button
            onClick={() => filterFunc(item)}
            type="button"
            key={item}
            className="btn"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Category;

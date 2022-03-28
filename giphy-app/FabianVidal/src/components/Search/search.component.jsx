import { useState } from "react";
import "./search.component.css";

export const SearchComponent = ({ value, setValue }) => {
  return (
    <>
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};

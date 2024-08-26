"use client";

import { manufacturers } from "@/constants";
import { SearchManufacturer } from "./";
import { useState } from "react";
function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="serachbar" onSubmit={handleSearch}>
      <div className="serachbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  );
}

export default SearchBar;

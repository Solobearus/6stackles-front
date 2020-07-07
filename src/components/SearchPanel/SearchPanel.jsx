import React from "react";
import "./SearchPanel.css";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchPanel = () => {
  const [search, setSearch] = useState("");

  const { text } = useSelector((state) => state.language);
  const handleSearchSubmit = () => {
    console.log("im in handleSearchSubmit");
  };

  return (
    <div className="search_panel" data-testid="search">
      <Link className="search_panel_link" to={`/search`}>
        <Input
          className="search_panel_input"
          type="text"
          value={search}
          placeholder={text.default.main.search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Link>
      {/* <Button
        className={"search_panel_submit_btn"}
        value={"Q"}
        onClick={() => handleSearchSubmit()}
      /> */}
    </div>
  );
};

export default SearchPanel;

import React from "react";
import "./SearchPanel.css";
import Input from "../../components/Input/Input";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchPanel = () => {
  const { text } = useSelector((state) => state.language);
  const { textSearchApplied } = useSelector((state) => state.search);

  return (
    <div className="search_panel" data-testid="search">
      <Link className="search_panel_link" to={`/search`}>
        <Input
          className="search_panel_input"
          type="text"
          value={textSearchApplied}
          placeholder={text.default.main.search}
        />
      </Link>
    </div>
  );
};

export default SearchPanel;

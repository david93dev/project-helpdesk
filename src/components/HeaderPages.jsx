import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeaderPages = ({title, nameButton, to}) => {
  return (
    <div className="pb-8 flex justify-between max-w-6xl items-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      <Button asChild>
        <Link to={to}>{nameButton}</Link>
      </Button>
    </div>
  );
};

export default HeaderPages;

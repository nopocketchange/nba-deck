import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "./actions";

const DarkThemeToggle = () => {
  const theme = useSelector((state) => state.preferences.theme);
  const dispatch = useDispatch();
    const [toggle, setToggle] = useState(null);
    
  return (
    {
     toggle? 
    }
  );
};

export default DarkThemeToggle;
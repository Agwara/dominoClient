import React from "react";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 656;
  
	React.useEffect(() => {
	  const handleWindowResize = () => setWidth(window.innerWidth)
	  window.addEventListener("resize", handleWindowResize);
  
	  // Return a function from the effect that removes the event listener
	  return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
  
	return width < breakpoint ? <MobileHeader /> : <DesktopHeader />;
  
};

export default Header;
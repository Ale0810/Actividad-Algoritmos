import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LocationOnIcon from "@mui/icons-material/LocationOn";

const IconosNav = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Youtube"
        value="recents"
        icon={<YouTubeIcon />}
      />
      <BottomNavigationAction
        label="Facebook"
        value="facebook"
        icon={<FacebookSharpIcon/>}
      />
      <BottomNavigationAction
        label="Instagram"
        value="instagram"
        icon={<InstagramIcon/>}
      />
    </BottomNavigation>
  );
}

export default IconosNav;

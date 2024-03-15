import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeMenu } from "../../modules/home/HomeMenu";
import * as S from "./styles";
import React from "react";

const MENU_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/series", label: "Series" },
  { path: "/movies", label: "Movies" },
  { path: "/kids&family", label: "Kids & Family" },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState("/");
  const location = useLocation(); 
  
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <S.Header>
      <Link to="/login">
        <S.Logo src="/max.webp" alt="Ada Max" />
      </Link>
      <S.Menu>
        {MENU_ITEMS.map((item) => (
          <React.Fragment key={item.label}>
            <S.StyledLink to={item.path}>
              <S.MenuItem
                $active={activeItem === item.path}
                onClick={() => setActiveItem(item.path)}
              >
                {item.label}
              </S.MenuItem>
            </S.StyledLink>
            {item.path === "/movies" && (
              <S.MenuItem key="hbo">
                <img src="/hbo.webp" width={32} alt="HBO" />
              </S.MenuItem>
            )}
          </React.Fragment>
        ))}
      </S.Menu>
      <HomeMenu />
    </S.Header>
  );
};

export default Header;

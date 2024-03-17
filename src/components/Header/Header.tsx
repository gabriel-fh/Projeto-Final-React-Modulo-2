import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeMenu } from "../../modules/home/HomeMenu";
import * as S from "./styles";
import React from "react";
import { useTranslation } from "react-i18next";


const Header = () => {
  const [activeItem, setActiveItem] = useState("/");
  const location = useLocation(); 
  const { t } = useTranslation();
  
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const MENU_ITEMS = [
    { path: "/", label: `${t('home.header.nav.home')}` },
    { path: "/series", label: `${t('home.header.nav.series')}` },
    { path: "/movies", label: `${t('home.header.nav.movies')}` },
    { path: "/kids&family", label: `${t('home.header.nav.kidsFamily')}` },
  ];

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

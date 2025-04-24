import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import Logo from '../components/Logo';
import { throttle } from '@/utils/features';
import { isDate } from 'lodash';

const Header = () => {
  const [isOn, setIsOn] = useState(false);
  const location = useLocation();

  const addClassOn = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    setIsOn(false);
  }, [location.pathname]);

  const handleResize = throttle(() => {
    if (window.innerWidth > 1100) {
      setIsOn(false);
    }
  }, 1000);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  //다크모드 토글 구현하기
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeToggle = () => {
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme !== null) {
        const parsedTheme = JSON.parse(savedTheme);
        setIsDarkMode(parsedTheme);
        //toggle클래스는 자바스크립트 기본 문법으로 두번째 매개변수에 따라 true or false 조작
        document.body.classList.toggle('dark-mode', parsedTheme);
      }
    }, []);
    const handleThemeToggle = () => {
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      //localstorage가져올땐 parse, set할땐 stringfy필수 : 문자열만 들어갈수있기때문
      localStorage.setItem('theme', JSON.stringify(newTheme));
    };
  };

  return (
    <header className={css.hd}>
      <div className={css.con}>
        <h1 className={css.logo}>
          <Link to={'/'}>
            <Logo />
          </Link>
        </h1>
        <div className={isOn ? `${css.gnb} ${css.on}` : css.gnb}>
          <nav>
            <CustomNavLink to={'/shop'} label={'shop'} />
            <CustomNavLink to={'/about'} label={'about'} />
            <CustomNavLink to={'/blog'} label={'blog'} />
          </nav>
          <div className={css.icon}>
            <CustomIconLink to={'/search'} icon={'bi-search'} />
            <CustomIconLink to={'/mypage'} icon={'bi-person-circle'} />
            <CustomIconLink to={'/cart'} icon={'bi-basket'} />
            <i
              className={`p-2 bi bi-${isDarkMode ? 'moon' : 'sun'}`}
              style={{ cursor: 'pointer' }}
              onClick={handleThemeToggle}
            ></i>
          </div>
        </div>
        <i className={`${css.ham} bi bi-list`} title="전체메뉴 보기버튼" onClick={addClassOn}></i>
      </div>
    </header>
  );
};

const CustomNavLink = ({ to, label }) => (
  <NavLink className={({ isActive }) => (isActive ? `${css.active}` : '')} to={to}>
    {label}
  </NavLink>
);
const CustomIconLink = ({ to, icon }) => (
  <NavLink className={({ isActive }) => (isActive ? `${css.active}` : '')} to={to}>
    <i className={`bi ${icon}`}></i>
  </NavLink>
);

export default Header;

import { useState, useEffect } from "react";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import * as S from "./styles";
import "./";
import LogoPage from "../../assets/img/logo-coolmate.svg";
import { MenuHeader } from "../MenuHeader";
import { MenuHeaderAbout } from "../MenuHeaderAbout";

function Header({
  isShowMenuHeader,
  setIsShowMenuHeader,
  isShowMenuAbout,
  setIsShowMenuAbout,
}) {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <S.HeaderContainer showHeader={showHeader}>
      <S.HeaderTopBar>
        <S.styleLink>Đăng nhập để nhận nhiều ưu đãi</S.styleLink>
      </S.HeaderTopBar>
      <S.HeaderBar>
        <S.HeaderInner>
          <S.MenuIcon
            style={{
              cursor: "pointer",
            }}
          >
            <MenuOutlined />
          </S.MenuIcon>
          <S.Logo>
            <a href="/">
              <S.LogoImg src={LogoPage}></S.LogoImg>
            </a>
          </S.Logo>
          <S.Menu>
            <S.MenuList>
              <S.MenuItem>
                <S.MenuItemLink>Sản phẩm bền vững</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem
                onMouseOver={() => setIsShowMenuHeader(true)}
                onMouseOut={() => setIsShowMenuHeader(false)}
              >
                <S.MenuItemLink>Sản phẩm</S.MenuItemLink>
              </S.MenuItem>
              <MenuHeader
                setIsShowMenuHeader={setIsShowMenuHeader}
                isShowMenuHeader={isShowMenuHeader}
              />
              <S.MenuItem>
                <S.MenuItemLink>In Áo Công Ty</S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem
                onMouseOver={() => setIsShowMenuAbout(true)}
                onMouseOut={() => setIsShowMenuAbout(false)}
              >
                <S.MenuItemLink>Về Coolmate</S.MenuItemLink>
              </S.MenuItem>
              <MenuHeaderAbout
                isShowMenuAbout={isShowMenuAbout}
                setIsShowMenuAbout={setIsShowMenuAbout}
              />

              <S.MenuItem>
                <S.MenuItemLink>Chọn Size</S.MenuItemLink>
              </S.MenuItem>
            </S.MenuList>
          </S.Menu>
          <S.Icons>
            <a href="/">
              <S.SearchIcon>
                <SearchOutlined />
              </S.SearchIcon>
            </a>
            <a href="/">
              <S.Icon>
                <UserOutlined />
              </S.Icon>
            </a>
            <a href="/">
              <S.Icon style={{ position: "relative" }}>
                <S.CartNumber>0</S.CartNumber>
                <Tooltip
                  placement="bottomRight"
                  title="Giỏ hàng chưa có gì :(, chọn mua đồ bạn nhé"
                >
                  <ShoppingCartOutlined />
                </Tooltip>
              </S.Icon>
            </a>
          </S.Icons>
        </S.HeaderInner>
      </S.HeaderBar>
    </S.HeaderContainer>
  );
}

export default Header;

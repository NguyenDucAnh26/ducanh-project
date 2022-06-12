import { Form, Input } from "antd";
import { useState, useEffect } from "react";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import * as S from "./styles";
import "./";
import LogoPage from "../../assets/img/logo-coolmate.svg";
import { MenuHeader } from "./MenuHeader";
import { MenuHeaderAbout } from "./MenuHeaderAbout";
import { MenuMobile } from "./MenuMobile";

function Header({
  isShowMenuHeader,
  setIsShowMenuHeader,
  isShowMenuAbout,
  setIsShowMenuAbout,
  isShowMenuMobile,
  setIsShowMenuMobile,
}) {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const searchIcon = document.getElementById("searchIcon");

  window.onclick = function (event) {
    const inputHeader = document.getElementById("inputHeader");
    if (event.target === searchIcon) {
      inputHeader.focus();
    }
    if (event.target !== searchIcon && event.target !== inputHeader) {
      setShowSearch(false);
    }
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  if (showSearch)
    return (
      <S.HeaderContainer showHeader={showHeader}>
        <S.HeaderTopBar>
          <S.styleLink>Đăng nhập để nhận nhiều ưu đãi</S.styleLink>
        </S.HeaderTopBar>
        <S.SearchWrapper>
          <S.SearchMobile>
            <S.SearchFlex>
              <Form>
                <Form.Item>
                  <Input
                    id="inputHeader"
                    placeholder="Tìm kiếm sản phẩm..."
                    prefix={<SearchOutlined />}
                    style={{
                      width: "100%",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
              </Form>
            </S.SearchFlex>
          </S.SearchMobile>
        </S.SearchWrapper>
      </S.HeaderContainer>
    );
  return (
    <S.HeaderContainer showHeader={showHeader}>
      <S.HeaderTopBar>
        <S.styleLink>Đăng nhập để nhận nhiều ưu đãi</S.styleLink>
      </S.HeaderTopBar>
      <S.HeaderBar>
        <S.HeaderInner>
          <S.MenuIcon
            onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
            style={{
              cursor: "pointer",
            }}
          >
            {isShowMenuMobile === false ? <MenuOutlined /> : <CloseOutlined />}
          </S.MenuIcon>
          <MenuMobile
            setIsShowMenuMobile={setIsShowMenuMobile}
            isShowMenuMobile={isShowMenuMobile}
          />
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
            <S.SearchIcon
              id="searchIcon"
              onClick={() => {
                setShowSearch(true);
              }}
            >
              <SearchOutlined
                style={{
                  pointerEvents: "none",
                }}
              />
            </S.SearchIcon>
            <S.Icon>
              <UserOutlined />
            </S.Icon>
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

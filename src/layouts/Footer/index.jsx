import * as S from "./styles";

function Footer() {
  return (
    <S.SiteContainer>
      <S.FooterContainer>
        <S.FooterInner>
          <S.FooterMain>
            <S.Menu>
              <S.MenuItem>
                {/* kham pha coolmate */}
                <S.MenuItemHead>Khám phá COOLMATE</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList>
                    <S.Link>Áo Polo</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Áo T-shirt</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Áo sơ mi</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Quần</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Tất (vớ)</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Phụ kiện khác</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Coolsub</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Hộp tạo sẵn</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
              <S.MenuItem>
                {/* dich vu khach hang */}
                <S.MenuItemHead>Dịch vụ khách hàng</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList>
                    <S.Link>Hỏi đáp - FAQs</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Chính sách đổi trả 60 ngày</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Thành viên Coolclub</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Khách hàng hài lòng 100%</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Chính sách khuyến mãi</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Chính sách giao hàng</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Chính sách bảo mật</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Chính sách bảo mật thanh toán</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
                <S.MenuItemHead>Kiến thức mặc đẹp</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList>
                    <S.Link>Hướng dẫn chọn size</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Blog</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Group mặc đẹp sống chất</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
              <S.MenuItem>
                {/* tài liệu tuyen dung */}
                <S.MenuItemHead>Tài liệ tuyển dụng</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList>
                    <S.Link>Đăng ký bản quyền</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Tuyển dụng</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
                <S.MenuItemHead>Về COOLMATE</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList>
                    <S.Link>Câu chuyện về Coolmate</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Gia nhập Coolmate</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link>Care & Share</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <S.Link> Nhà máy</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
              <S.MenuItem>
                {/* dia chi lien he */}
                <S.MenuItemHead>Địa chỉ liên hệ</S.MenuItemHead>
                <S.MenuItemLists style={{ lineHeight: "1.8rem" }}>
                  <S.MenuItemList style={{ marginBottom: "14px" }}>
                    <span
                      style={{
                        textDecoration: "underline",
                        fontWeight: "400",
                        color: "#d9d9d9",
                      }}
                    >
                      HUB Hà Nội:
                    </span>
                    &nbsp; Số 103, Đường Vạn Phúc, Phường Vạn Phúc, Quận Hà
                    Đông, TP. Hà Nội
                  </S.MenuItemList>
                  <S.MenuItemList>
                    <span
                      style={{
                        textDecoration: "underline",
                        fontWeight: "400",
                        color: "#d9d9d9",
                      }}
                    >
                      HUB Tp HCM:
                    </span>
                    &nbsp; Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông,
                    Quận 7, Tp. Hồ Chí Minh
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
            </S.Menu>
          </S.FooterMain>
          <S.FooterSide>
            <S.FooterSideHead>COOLMATE lắng nghe bạn!</S.FooterSideHead>
            <S.FooterSideDesc>
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </S.FooterSideDesc>
            <div>
              <S.sideBtn>Gửi ý kiến</S.sideBtn>
            </div>
            {/* tel */}
            <S.SideInfo>
              <S.SideInfoIcon>
                <img
                  src="https://www.coolmate.me/images/footer/icon-hotline.svg"
                  alt="Hotline"
                ></img>
              </S.SideInfoIcon>
              <S.SideInfoContent>
                <S.ContentHead>Hotline</S.ContentHead>
                <S.ContentDesc>
                  <S.ContentNumber href="tel: 0766616660">
                    0766616660
                  </S.ContentNumber>
                  <S.ContentNumber href="tel: 0703853542">
                    &nbsp; (0703853542)
                  </S.ContentNumber>
                </S.ContentDesc>
              </S.SideInfoContent>
            </S.SideInfo>

            <S.SideInfo>
              <S.SideInfoIcon>
                <img
                  src="https://www.coolmate.me/images/footer/icon-email.svg"
                  alt="Hotline"
                ></img>
              </S.SideInfoIcon>
              <S.SideInfoContent>
                <S.ContentHead>Email</S.ContentHead>
                <S.ContentDesc>
                  <S.ContentMail href="mailto:Cool@coolmate.me">
                    Cool@coolmate.me
                  </S.ContentMail>
                </S.ContentDesc>
              </S.SideInfoContent>
            </S.SideInfo>
            {/* Social icons link */}
            <S.SideSocial>
              <S.SocialLink href="https://www.facebook.com/coolmate.me">
                <S.SocialIcon
                  src="https://www.coolmate.me/images/footer/icon-facebook.svg"
                  alt="Facebook"
                ></S.SocialIcon>
              </S.SocialLink>
              <S.SocialLink href="https://www.instagram.com/coolmate.me/">
                <S.SocialIcon
                  src="https://www.coolmate.me/images/footer/icon-instar.svg"
                  alt="instagram"
                ></S.SocialIcon>
              </S.SocialLink>
              <S.SocialLink href="https://www.youtube.com/channel/UCWw8wLlodKBtEvVt1tTAsMA">
                <S.SocialIcon
                  src="https://www.coolmate.me/images/footer/icon-youtube.svg"
                  alt="youtube"
                ></S.SocialIcon>
              </S.SocialLink>
            </S.SideSocial>
          </S.FooterSide>
        </S.FooterInner>
        {/* footer last */}
        <S.FooterLast>
          <S.CopyRight>
            <S.CopyRightHead>@ CÔNG TY TNHH FASTECH ASIA</S.CopyRightHead>
            <S.CopyRightDesc>
              Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh
              nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày
              20/02/2019
            </S.CopyRightDesc>
          </S.CopyRight>
          <S.LastLogos>
            <a>
              <S.LastLogoImg
                src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/March2022/handle_cert.png"
                alt="ncsc"
              ></S.LastLogoImg>
            </a>
            <a>
              <S.LastLogoImg
                src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/March2022/dmca_protected_15_120.png"
                alt="ncsc"
              ></S.LastLogoImg>
            </a>
            <a>
              <S.LastLogoImg
                src="https://www.coolmate.me/images/footer/Coolmate-info.png"
                alt="ncsc"
              ></S.LastLogoImg>
            </a>
            <a>
              <S.LastLogoImg
                src="https://www.coolmate.me/images/footer/logoSaleNoti.png"
                alt="ncsc"
              ></S.LastLogoImg>
            </a>
          </S.LastLogos>
        </S.FooterLast>
      </S.FooterContainer>
    </S.SiteContainer>
  );
}

export default Footer;

import * as S from "./styles";
import {
  DollarCircleOutlined,
  UsergroupAddOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
} from "@ant-design/icons";
function Dashboard() {
  return (
    <S.DashboardContainer>
      <S.DashboardWrapper>
        {/* data report */}
        <S.DashboardData>
          <S.DashboardDataChart></S.DashboardDataChart>
          <S.DashboardDataReports>
            <S.ReportRow>
              <S.ReportData
                style={{
                  backgroundColor: "#fe5e37",
                  marginBottom: "20px",
                }}
              >
                <S.ReportDataContent>
                  <S.ContentTitle
                    style={{
                      color: "#fff",
                    }}
                  >
                    Sales Today
                  </S.ContentTitle>
                  <S.ContentNumber
                    style={{
                      color: "#fff",
                    }}
                  >
                    $120
                  </S.ContentNumber>
                  <S.ContentSub
                    style={{
                      color: "#fff",
                    }}
                  >
                    Updated every order success
                  </S.ContentSub>
                  <S.ContentIcon>
                    <DollarCircleOutlined
                      style={{
                        color: "#fe5e37",
                      }}
                    />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
              <S.ReportData style={{ marginBottom: "20px" }}>
                <S.ReportDataContent>
                  <S.ContentTitle>Sales Today</S.ContentTitle>
                  <S.ContentNumber>$120</S.ContentNumber>
                  <S.ContentSub>Updated every order success</S.ContentSub>
                  <S.ContentIcon>
                    <UsergroupAddOutlined
                      style={{
                        color: "#8AC389",
                      }}
                    />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
            </S.ReportRow>
            <S.ReportRow>
              <S.ReportData>
                <S.ReportDataContent>
                  <S.ContentTitle>Sales Today</S.ContentTitle>
                  <S.ContentNumber>$120</S.ContentNumber>
                  <S.ContentSub>Updated every order success</S.ContentSub>
                  <S.ContentIcon>
                    <ShoppingCartOutlined />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
              <S.ReportData>
                <S.ReportDataContent>
                  <S.ContentTitle>Sales Today</S.ContentTitle>
                  <S.ContentNumber>$120</S.ContentNumber>
                  <S.ContentSub>Updated every order success</S.ContentSub>
                  <S.ContentIcon>
                    <WalletOutlined
                      style={{
                        color: "#c24222",
                      }}
                    />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
            </S.ReportRow>
          </S.DashboardDataReports>
        </S.DashboardData>
        {/* table */}
        <S.DashboardTable></S.DashboardTable>
      </S.DashboardWrapper>
    </S.DashboardContainer>
  );
}

export default Dashboard;

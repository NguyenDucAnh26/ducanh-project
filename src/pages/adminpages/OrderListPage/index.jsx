import * as S from "./styles";
import {
  Space,
  Table,
  Button,
  Pagination,
  Input,
  Select,
  Popconfirm,
  Tag,
  message,
} from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { getOrderListAction, deleteOrderAction } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useEffect, useState } from "react";
function OrderListPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();
  const { orderList } = useSelector((state) => state.order);
  const [deleteId, setDeleteId] = useState();
  const confirm = () => {
    dispatch(deleteOrderAction({ id: deleteId }));
    message.success("Deleted complete");
  };

  const cancel = () => {
    message.info("Not Delete");
  };
  const orderListDataTable = orderList.data.map((item, index) => {
    return {
      ...item,
      key: item.id,
    };
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address, record) => {
        return <p>{address}</p>;
      },
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total) => {
        return total.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        });
      },
    },
    {
      title: "Date",
      dataIndex: "creatAt",
      key: "creatAt",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (payment) => (
        <Tag
          style={{ margin: "2px" }}
          color={payment === "cash" ? "red" : "green"}
        >
          {payment}
        </Tag>
      ),
    },
    {
      title: "Status",
      key: "",
      dataIndex: "",
      render: (item, record) => {
        return (
          <span>
            <Tag
              style={{ margin: "2px" }}
              color={
                record.progress === "new"
                  ? "#faad14"
                  : record.progress === "prepare"
                  ? "blue"
                  : "green"
              }
              key="1"
            >
              {record.progress}
            </Tag>
            <Tag
              style={{ margin: "2px" }}
              color={
                record.payStatus === "check"
                  ? "#ad2102"
                  : record.payStatus === "paid"
                  ? "cyan"
                  : "red"
              }
              key="2"
            >
              {record.payStatus}
            </Tag>
          </span>
        );
      },
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, record) => {
        return (
          <>
            <Space size="middle">
              <Button
                onClick={() =>
                  navigate(
                    generatePath(ROUTES.ADMIN.ORDER_DETAIL, { id: record.id })
                  )
                }
                size="small"
                style={{
                  borderRadius: "5px",
                }}
              >
                <EyeOutlined
                  style={{
                    fontWeight: "600",
                    color: "black",
                  }}
                />
              </Button>

              <Popconfirm
                onConfirm={confirm}
                onCancel={cancel}
                title="Are you sure to delete this product"
                okText="Yes"
                cancelText="No"
              >
                <Button
                  onClick={() => {
                    setDeleteId(record.id);
                  }}
                  size="small"
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <DeleteOutlined
                    style={{
                      fontWeight: "600",
                      color: "black",
                    }}
                  />
                </Button>
              </Popconfirm>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <S.OrderContainer>
      <S.OrderWrapper>
        <S.OrderHead>
          <S.HeadTitle>Orders</S.HeadTitle>
        </S.OrderHead>
        <Table
          pagination={false}
          columns={columns}
          dataSource={orderListDataTable}
        />
      </S.OrderWrapper>
    </S.OrderContainer>
  );
}

export default OrderListPage;

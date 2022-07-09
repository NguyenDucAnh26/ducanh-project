import React from "react";

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
import { getUserListAction } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useEffect, useState } from "react";
function UserListPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();
  const { userList } = useSelector((state) => state.user);

  const [deleteId, setDeleteId] = useState();
  const confirm = () => {
    // dispatch(deleteOrderAction({ id: deleteId }));
    message.success("Deleted complete");
  };
  const cancel = () => {
    message.info("Not Delete");
  };
  const userListDataTable = userList.data.map((item, index) => {
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
      title: "Fullname",
      dataIndex: "fullName",
      key: "fullname",
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
      title: "Date",
      dataIndex: "creatAt",
      key: "creatAt",
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
          <S.HeadTitle>Users</S.HeadTitle>
        </S.OrderHead>
        <Table
          pagination={false}
          columns={columns}
          dataSource={userListDataTable}
        />
      </S.OrderWrapper>
    </S.OrderContainer>
  );
}

export default UserListPage;

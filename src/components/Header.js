import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

const HeaderCalendar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: normal;
`;

const AddEvent = styled.button`
  background: none;
  color: red;
  border: none;
  font-size: 24px;
  color: #ff3131;
  cursor: pointer;
`;

const Header = ({ addEvent }) => {
  return (
    <HeaderCalendar>
      <Title>Календарь событий</Title>
      <AddEvent onClick={() => addEvent()}>
        <PlusOutlined />
      </AddEvent>
    </HeaderCalendar>
  );
};

export default Header;

import styled from "styled-components";

const FooterContiner = styled.div`
  min-height: 80px;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Today = styled.div`
  color: red;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Delete = styled.div`
  color: red;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Footer = ({ removeEvent, nowDate, deleteEvent, setData }) => {
  return (
    <FooterContiner>
      <Today onClick={() => setData(nowDate)}>Сегодня</Today>
      {removeEvent ? (
        <Delete onClick={() => deleteEvent(removeEvent)}>Удалить</Delete>
      ) : (
        ""
      )}
    </FooterContiner>
  );
};

export default Footer;

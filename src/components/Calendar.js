import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 5px;
  width: 100%;
  background: #f6f6f6;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const Week = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  width: 100%;
`;

const Day = styled.div`
  margin-bottom: 5px;
  text-align: center;
`;

const Number = styled.div`
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;

  & span {
    padding: 4px 7px;
    background: #ff3131;
    color: #fff;
    border-radius: 50%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MonthHandlerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MonthHandler = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Month = styled.div`
  font-size: 24px;
  text-align: center;
  width: 100%;
`;

const ArrowRight = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #ff3131;
  padding: 0 30px 0 0;

  @media (min-width: 740px) {
    padding: 0 30px 0 0;
  }
`;
const ArrowLeft = styled.div`
  background: none;
  border: none;
  font-size: 20px;
  color: #ff3131;
  padding: 0 0 0 100px;

  @media (min-width: 740px) {
    padding: 0 0 0 120px;
  }
`;

const Calendar = ({ daysOfWeek, week, month, year, activeDay, setData }) => {
  return (
    <Body>
      <Week>
        <Item>
          <Day></Day>
          <Number></Number>
        </Item>
        {daysOfWeek.map((day, index) => {
          return (
            <Item key={index}>
              <Day>{week[index]}</Day>
              <Number onClick={() => setData(day)}>
                {day === activeDay ? (
                  <span>{day.split(".")[0]}</span>
                ) : (
                  day.split(".")[0]
                )}
              </Number>
            </Item>
          );
        })}
      </Week>
      <MonthHandlerContainer>
        <MonthHandler>
          <ArrowLeft>
            <LeftOutlined />
          </ArrowLeft>
          <Month>
            {month} {year}
          </Month>
          <ArrowRight>
            <RightOutlined />
          </ArrowRight>
        </MonthHandler>
      </MonthHandlerContainer>
    </Body>
  );
};

export default Calendar;

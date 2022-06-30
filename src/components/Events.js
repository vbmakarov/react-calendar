import styled, { css } from "styled-components";

const EventsWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #ebecff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #ebecff;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

const EventCell = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:first-child {
    border-left: 0;
    border-right: 0;
    border-top: 0;
  }
`;

const Event = styled.div`
  width: 100%;
  height: 100%;
  background: #ebecff;
  cursor: pointer;

  ${(props) =>
    props.isDelete &&
    css`
      background: #b3b7ff;
    `}
`;

const Time = styled.div`
  position: absolute;
  color: #e6e6e6;
  top: -12px;
`;

const Events = ({ daysOfWeek, events, setRemove, removeEvent }) => {
  const startTime = 8;
  const endTime = 22;
  const diff = endTime - startTime;

  return (
    <EventsWrapper>
      {Array(diff)
        .fill("")
        .map((_, indexRow) => {
          return (
            <Row key={indexRow}>
              <EventCell>
                <Time>{!indexRow ? "" : startTime + indexRow + ":00"}</Time>
              </EventCell>
              {daysOfWeek.map((date, index) => {
                const currentEvent =
                  events[startTime + indexRow + 1][date] &&
                  JSON.stringify({
                    time: startTime + indexRow + 1,
                    date,
                  });
                return (
                  <EventCell key={index}>
                    {currentEvent && (
                      <Event
                        onClick={() =>
                          setRemove((prev) => {
                            if (currentEvent === prev) {
                              return null;
                            }
                            return currentEvent;
                          })
                        }
                        isDelete={currentEvent === removeEvent ? true : false}
                      ></Event>
                    )}
                  </EventCell>
                );
              })}
            </Row>
          );
        })}
    </EventsWrapper>
  );
};

export default Events;

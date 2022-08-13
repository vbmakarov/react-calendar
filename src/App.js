import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Events from "./components/Events";
import Footer from "./components/Footer";
import {
  getDateArray,
  getMonth,
  getYear,
  getNowDate,
  checkDate,
} from "./utils";
import React, { useState } from "react";
import store from "./store";

const Wrapper = styled.div`
  height: 100vh;
  max-width: 740px;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const App = () => {
  const week = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  const month = getMonth();
  const year = getYear();
  const nowDate = getNowDate();
  const daysOfWeek = getDateArray();
  const [removeEvent, setRemove] = useState(null);
  const [activeDay, setActive] = useState(nowDate);

  const setData = (day) => {
    setActive((prev) => {
      if (prev === day) {
        return null;
      }
      return day;
    });
  };

  const deleteEvent = (removeEvent) => {
    const result = window.confirm("Вы точно хотите удалить эту запись?");
    if (result) {
      store.deleteEvent(removeEvent);
    }
  };
  const addEvent = () => {
    const data = window.prompt(
      "Добавьте дату события в формате:\n ГГГГ-ММ-ДД ЧЧ:00:00"
    );

    const result = checkDate(data, daysOfWeek);
    if (result) {
      const event = window.prompt("Добавьте событие:");
      if (event) {
        store.addEvent(result, event);
        alert("Событие добавлено!");
      }
    }
  };
  return (
    <Wrapper>
      <Container>
        <Header addEvent={addEvent} />
        <Calendar
          daysOfWeek={daysOfWeek}
          week={week}
          month={month}
          year={year}
          nowDate={nowDate}
          setData={setData}
          activeDay={activeDay}
        />
        <Events
          daysOfWeek={daysOfWeek}
          events={store.fetchEvents()}
          setRemove={setRemove}
          removeEvent={removeEvent}
        />
        <Footer
          removeEvent={removeEvent}
          deleteEvent={deleteEvent}
          nowDate={nowDate}
          setData={setData}
        />
      </Container>
    </Wrapper>
  );
};

export default App;

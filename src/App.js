import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Events from "./components/Events";
import Footer from "./components/Footer";
import { getDateArray, getMonth, getYear, getNowDate } from "./utils";
import React, { useState } from "react";

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

function App() {
  const week = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  //Переделать на динамическое получение и хранение данных с помощью Redux или Mobx
  const events = {
    8: {},
    9: {
      "02.07.2022": "Поездка в театр!",
    },
    10: {},
    11: {},
    12: {},
    13: {
      "27.06.2022": "Сходить в магазин!",
      "28.06.2022": "Встреча в ресторане!",
      "29.06.2022": "Поездка в соседний город!",
      "30.06.2022": "Выход на работу!",
      "01.07.2022": "Обед!",
      "02.07.2022": "Купить автомобиль!",
      "03.07.2022": "Навестить родителей!",
    },
    14: {},
    15: {},
    16: {
      "30.06.2022": "Сходить в спортзал!",
    },
    17: {},
    18: {
      "01.07.2022": "Погулять с собакой!",
    },
    19: {},
    20: {},
    21: {
      "27.06.2022": "Поход в кино!",
    },
    22: {},
  };
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

  //Реализовать логику удаления событий
  const deleteEvent = (removeEvent) => {
    const result = window.confirm("Вы точно хотите удалить эту запись?");
    result && console.log(removeEvent);
  };
  return (
    <Wrapper>
      <Container>
        <Header />
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
          events={events}
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
}

export default App;

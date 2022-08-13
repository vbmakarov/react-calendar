export function getDateArray() {
  const week = Array(7).fill("");
  const now = new Date();
  const nowDay = now.getDay();
  const nowDate = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();

  let i = 0;
  while (i < 7) {
    if (i === nowDay) {
      week[nowDay - 1] = now.toLocaleDateString();
    }
    if (i === 0) {
      const diff = week.length - nowDay;
      const date = new Date(nowYear, nowMonth, nowDate + diff);
      week[week.length - 1] = date.toLocaleDateString();
    }
    if (i > nowDay) {
      const diff = i - nowDay;
      const date = new Date(nowYear, nowMonth, nowDate + diff);
      week[i - 1] = date.toLocaleDateString();
    }
    if (i < nowDay && i !== 0) {
      const diff = nowDay - i;
      const date = new Date(nowYear, nowMonth, nowDate - diff);
      week[i - 1] = date.toLocaleDateString();
    }
    i++;
  }
  return week;
}

export function getMonth() {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const now = new Date();
  const nowMonth = now.getMonth();
  return months[nowMonth];
}

export function getYear() {
  const now = new Date();
  const nowYear = now.getFullYear();
  return nowYear;
}

export function getNowDate() {
  return new Date().toLocaleDateString();
}

export function checkDate(data, daysOfWeek) {
  const checkDate =
    /^((((19|[2-9]\d)\d{2})[\/\.-](0[13578]|1[02])[\/\.-](0[1-9]|[12]\d|3[01])\s(0[9-9]|1[0-9]|2[0-2]):([0-5][0-9]):([0-5][0-9]))|(((19|[2-9]\d)\d{2})[\/\.-](0[13456789]|1[012])[\/\.-](0[1-9]|[12]\d|30)\s(0[8-9]|1[0-9]|2[0-2]):([0-5][0-9]):([0-5][0-9]))|(((19|[2-9]\d)\d{2})[\/\.-](02)[\/\.-](0[1-9]|1\d|2[0-8])\s(0[8-9]|1[0-9]|2[0-2]):([0-5][0-9]):([0-5][0-9]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))[\/\.-](02)[\/\.-](29)\s(0[8-9]|1[0-9]|2[0-2]):([0-5][0-9]):([0-5][0-9])))$/g;
  const result = checkDate.test(data);
  if (result) {
    const date = data.split(" ")[0];
    const time = data.split(" ")[1];
    const hour = time.split(":")[0];
    const normalizeDate = date.split("-").reverse().join(".");
    console.log(normalizeDate);
    if (daysOfWeek.indexOf(normalizeDate) !== -1) {
      return {
        hour: removeZeroInHour(hour),
        date: normalizeDate,
      };
    } else {
      alert("события можно добавлять только в пределах текущей недели");
      return false;
    }
  } else {
    alert("дата введена неверно");
    return false;
  }
}

function removeZeroInHour(hour) {
  const data = hour.split("");
  if (data[0] == 0) {
    return data[1];
  }
  return hour;
}

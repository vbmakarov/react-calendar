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

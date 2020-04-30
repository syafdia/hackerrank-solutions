
function timeConversion(s) {
  const HH = s.slice(0, 2);
  const mmss = s.slice(2, 8);
  const T = s.slice(8, 10);
  const hour = Number(HH);

  let newHour;
  if (T == 'PM') {
    newHour = hour + (hour < 12 ? 12 : 0);
  } else {
    newHour = hour == 12 ? 0 : hour;
  }

  return `${newHour.toString().padStart(2, '0')}${mmss}`;
}


(function () {
  console.log(timeConversion('12:40:22AM')); // 12:40:22
  console.log(timeConversion('12:45:54PM')); // 12:45:54
})();
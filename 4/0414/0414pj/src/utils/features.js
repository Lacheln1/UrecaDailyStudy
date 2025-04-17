export const formatCurrency = (number) => {
  return number.toLocaleString() + "원";
};

export const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(new Date(date));
};

//디바운스 : 연속된 호출 이벤트 실행 지연시켜 한번만 실행시키게함
export const debounce = (func, delay = 300) => {
  let timerId;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
//쓰로틀 : 일정시간동안 한 번만 실행
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function (...args) {
    // 일반 함수로 변경
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

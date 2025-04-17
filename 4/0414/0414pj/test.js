function a() {
  for (let i = 0; i < 1000; i++) return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log("시작");
const result = c();
console.log("결과", result);

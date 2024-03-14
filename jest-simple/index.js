// function calculator(a, b, op) {
//     const onMap = {
//         add: () => a + b,
//         mul: () => a * b,
//         div: () => a / b,    }
// };
// if (onMap.has)

function calculator(a, b, op) {
  if (op === "add") {
    return a + b;
  } else if (op === "mul") {
    return a * b;
  } else if (op === "div") {
    return a / b;
  } else return "Nu am gasit operatia";
}
module.exports = calculator;

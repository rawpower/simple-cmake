import WasmBridge from "./WasmBridge";


document.addEventListener('DOMContentLoaded', async (event) => {
  const bridge = new WasmBridge();

  await bridge.ready;

  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += bridge.calc(i);
  }
  console.log("sum: ", sum);

  const clicked = () => {
    console.log(bridge.calc(19))
  }
  document.getElementById("button").addEventListener("click", clicked);
});


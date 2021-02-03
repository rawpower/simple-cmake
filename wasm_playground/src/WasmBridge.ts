import main from "../../build/bin/main.js";


export default class WasmBridge {
  module: any;
  ready: Promise<void>;

  constructor() {
    this.ready = new Promise(async (resolve, reject) => {
      await this.init();
      resolve();
    });
  }

  async init() {
    this.module = await main();
    this.module.onRuntimeInitialized = console.log("module: ", this.module);
  }

  calc(num: number): number {
    return this.module._myFunction(num);
  } 

}
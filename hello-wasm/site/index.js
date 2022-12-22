const js = import("./node_modules/@jirepos/jirepos-hello-wasm/jirepos_hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
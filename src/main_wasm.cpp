#include <emscripten/emscripten.h>
#include <stdio.h>
#include <lib.h>

int main() {
  int myNumber = lib_function(17);
  printf("WASM | Output from my library: %d \n", myNumber);
  return myNumber;
}

extern "C" {
  EMSCRIPTEN_KEEPALIVE int myFunction(int number) {
    return lib_function(number);
  }
}

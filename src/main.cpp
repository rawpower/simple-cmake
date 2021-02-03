#include <stdio.h>
#include <lib.h>

int main() {
  int myNumber = lib_function(17);
  printf("Standalone | Output from my library: %d \n", myNumber);
  return myNumber;
}
#include <iostream>
#include <stdio.h>
#include <lib.h>

int main() {
  int myNumber = lib_function(17);
  printf("Output from my library: %d \n", myNumber);
  return myNumber;
}
cmake_minimum_required(VERSION 3.9.4)


if(wasm) # WASM FLAGS
  set (CMAKE_CXX_FLAGS "-s WASM=1")
  set (CMAKE_CXX_FLAGS "-s MODULARIZE=1")
endif()



# set the project name
project(main)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/build/bin)

# specify the C++ standard
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)




add_subdirectory(lib)
add_subdirectory(src)


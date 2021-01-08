cmake_minimum_required(VERSION 3.9.4)

# set the project name
project(main)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/build/bin)

add_subdirectory(lib)
add_subdirectory(src)


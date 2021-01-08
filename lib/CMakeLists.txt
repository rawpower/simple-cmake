file(GLOB SRC_FILES *.cpp)

add_library(lib ${SRC_FILES})

target_include_directories(lib PUBLIC "${CMAKE_CURRENT_SOURCE}")
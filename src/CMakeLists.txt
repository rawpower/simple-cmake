file(GLOB SRC_FILES *.cpp)

add_executable(main ${SRC_FILES})

target_link_libraries(main PRIVATE lib)
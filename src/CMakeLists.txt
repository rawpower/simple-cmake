
if(wasm) # Wasm entry point
  file(GLOB SRC_FILES main_wasm.cpp)
else() # Standalone entry point
  file(GLOB SRC_FILES main.cpp)
endif()

add_executable(main ${SRC_FILES})

target_link_libraries(main PRIVATE lib)
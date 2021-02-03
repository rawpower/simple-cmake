rm -rf build

mkdir build
cd build

# use emcmake and pass the wasm flag
emcmake cmake -Dwasm=true ..

make
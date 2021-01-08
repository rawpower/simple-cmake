

# run from build folder and set -B to a new
# folder to make it easier to clean up
cd build
cmake ../ -Bcmake

cd cmake
make

cd ..
rm -rf cmake
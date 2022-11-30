#! /bin/bash

for i in {0..27}; do
   echo ""
   echo "Run script for file ${i}"
   yarn text2speech <API-KEY> <location> $i
   # sleep 90s

done
echo "All audiofiles has been exported"
exit
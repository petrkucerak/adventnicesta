#! /bin/bash

for i in {0..20}; do
   echo ""
   echo "Run script for file ${i}"
   yarn text2speech "36b70f5eb9ab4ebfa67f92cbf0b2c23c" "westus" $i
   sleep 90s

done
echo "All audiofiles has been exported"
exit
#!/bin/bash
displayDir=$(tree /home/ahmadali)
echo "$displayDir"
ProcessFind=$(find /home/ahmadali -type f -name '*.java');
if [ $ProcessFind ];
then
  getDir=${ProcessFind#*.}
  echo "Ada file Java pada direktori: {$ProcessFind}"
else
  echo 'Tidak ada file Java pada direktori.'
fi

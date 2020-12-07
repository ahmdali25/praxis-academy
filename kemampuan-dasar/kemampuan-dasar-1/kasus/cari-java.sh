ls -l
Process_Find=$(find /home/ahmadali -type f -name '*.java');
if [ $Process_Find ];
then
  echo 'Ada file Java pada direktori'
else
  echo 'Tidak ada file Java pada direktori.'
fi

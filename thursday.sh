#!/bin/sh
cd /home/pi/svn/dotnet/;
trentemin=1800000
for cpt in 1 2 3 4 5 6 7 8 9 10 11
  do
    maintenant=$(($RANDOM % 1900))
    while [ 1807 -gt $maintenant ]
      do
       maintenant=$(($RANDOM % 1900))
    done
    sleep $maintenant
    svn update
done


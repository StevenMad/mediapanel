#!/bin/sh
cd /home/pi/svn/dotnet/;
trentemin=1800000
for cpt in 1 2 3
  do
    maintenant=$(($RANDOM % 1900))
    while [ 1807 -gt $maintenant ]
      do
       maintenant=$(($RANDOM % 1900))
    done
    sleep $maintenant
    svn update
done


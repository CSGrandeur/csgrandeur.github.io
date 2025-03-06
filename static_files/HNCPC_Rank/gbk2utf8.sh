#!/bin/bash
function gbk2utf8(){
    file="$1"
    echo "converting '$file' ..."
    iconv -f gb2312 -t UTF-8 -c "$file" > tmp 
    mv -f tmp "$file"
}
 
function getdir(){
    for element in `ls $1`
    do  
        dir_or_file=$1"/"$element
        echo $dir_or_file
        if [ -d $dir_or_file ]
        then
            getdir $dir_or_file
        else
            gbk2utf8 $dir_or_file
        fi  
    done
}
getdir $1

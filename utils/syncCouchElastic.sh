#!/bin/bash

: ${ELASTIC:="http://projects.cceh.uni-koeln.de:9200"}
INDEXNAME="couchdata3"
: ${COUCH:="//dev.cceh.uni-koeln.de:5984"}
DATABASE="preisausschreiben"

# sourcing enviroment variables
. /var/local/playground/node/enable

# checking for old couch2elastic4sync config file
if [ -e ./.couch2elastic4sync ]; then
  read -p "An older .couch2elastic was found. Delete? [Y/n]:" delfile
  if [ $delfile == 'Y' ] ; then
    rm ./.couch2elastic4sync
    echo "old .couch2elastic4sync has been deleted. new one will be written now"
  else
    echo "closing now"
    exit 1
  fi 
fi

# creating an elasticsearch index
curl -XPUT "$ELASTIC/$INDEXNAME"

# importing all data for series of musical competitions 

INDEXTYPE="series"
MAPPERFUNCTION="./mapfuncSeries.js"

#defining mapping in elasticsearch for current index type
#...

echo "database=http:$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync

couch2elastic4sync --config=./.couch2elastic4sync load

INDEXTYPE="person"
MAPPERFUNCTION="./mapfuncPerson.js"

rm ./.couch2elastic4sync

echo "database=http:$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync

couch2elastic4sync --config=./.couch2elastic4sync load

INDEXTYPE="corporation"
MAPPERFUNCTION="./mapfuncCorp.js"

rm ./.couch2elastic4sync

echo "database=http:$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync

couch2elastic4sync --config=./.couch2elastic4sync load

INDEXTYPE="contest"
#mapperfunction1 is experimental; default is mapperfunction
MAPPERFUNCTION="./mapperfunction2.js"

# defining ElasticSearch mapping for contests 
#the script works as intended but I should check if multiplication of subobject docs is correct
MAPPINGJSON=`cat ./mappingContest6.json| tr "\r" " "`

curl -XPUT "$ELASTIC/$INDEXNAME/_mapping/$INDEXTYPE" -d"$MAPPINGJSON"

rm ./.couch2elastic4sync

echo "database=http:$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync

couch2elastic4sync --config=./.couch2elastic4sync load

rm ./.couch2elastic4sync




#!/bin/bash

: ${ELASTIC:="http://projects.cceh.uni-koeln.de:9200"}
INDEXNAME="couchdata3"

: ${COUCH:="http://dev.cceh.uni-koeln.de:5984"}
DATABASE="preisausschreiben"

# sourcing enviroment variables
if [ -e /var/local/playground/node/enable ]; then
  . /var/local/playground/node/enable
fi

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

# creating an elasticsearch entry mapping
MAPPINGJSON=`cat ./mappingContest6.json| tr "\r" " "`
curl -XPUT "$ELASTIC/$INDEXNAME/_mapping/$INDEXTYPE" -d"$MAPPINGJSON"

# importing all data for series of musical competitions
INDEXTYPE="series"
MAPPERFUNCTION="./mapfuncSeries.js"
echo "database=$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync
couch2elastic4sync --config=./.couch2elastic4sync load
rm ./.couch2elastic4sync

# importing all data for persons of musical competitions
INDEXTYPE="person"
MAPPERFUNCTION="./mapfuncPerson.js"
echo "database=$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync
couch2elastic4sync --config=./.couch2elastic4sync load
rm ./.couch2elastic4sync

# importing all data for corporations of musical competitions
INDEXTYPE="corporation"
MAPPERFUNCTION="./mapfuncCorp.js"
echo "database=$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync
couch2elastic4sync --config=./.couch2elastic4sync load
rm ./.couch2elastic4sync

# importing all data for contests of musical competitions
INDEXTYPE="contest"
MAPPERFUNCTION="./mapperfunction2.js"
echo "database=$COUCH/$DATABASE" >> ./.couch2elastic4sync
echo "elasticsearch=$ELASTIC/$INDEXNAME/$INDEXTYPE" >> ./.couch2elastic4sync
echo "mapper=$MAPPERFUNCTION" >> ./.couch2elastic4sync
couch2elastic4sync --config=./.couch2elastic4sync load
rm ./.couch2elastic4sync

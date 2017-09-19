#!/bin/bash

echo "Trigger the Selenium tests for rebrand branch: ux-test-platform repo...."

#Step 1: API to trigger the ux-test-platform build with the below config
body="{
\"request\": {
\"message\": \"feat(elements-sdk): Run CI tests for $TRAVIS_BRANCH\",
\"branch\":\"rebrand\",
\"config\": {
\"script\": [
\"export component=elements_sdk\",
\"export feature_branch=$TRAVIS_BRANCH\",
\"chmod 777 ./src/main/shell_scripts/components.sh\",
\"./src/main/shell_scripts/components.sh\",
\"mvn -Dtest_suite_xml=elements_sdk.xml test\"
]
}
}}"

curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Travis-API-Version: 3" \
  -H "Authorization: token $AUTH_TOKEN" \
  -d "$body" \
  https://api.travis-ci.org/repo/Pearson-Higher-Ed%2Fux-test-platform/requests

echo ""
echo "Waiting for approximately 5s for the Selenium tests to trigger..."
echo ""

REPO_URI="https://api.travis-ci.org/repos/Pearson-Higher-Ed/ux-test-platform/builds"
i=1
max=20
while [ $i -lt $max ]
do
  curl -i $REPO_URI > test.json #Push the json response to a temp file 'test.json'

  LATEST_STATE=$(grep -o '"state":.[a-z\"]*' test.json | head -1 ) #Fetch the state of the last build
  LATEST_ID=$(grep -o '"id":.[0-9]*' test.json | head -1  | grep ':.[0-9]*') #Fetch the id of the last build
  BRANCH=$(grep -o '"branch":.[a-z\"]*' test.json | head -1 ) #Fetch the branch name of the last build

  get_state_value=${BRANCH#*:}
  BRANCH="${get_state_value//\"}"

  if [ $BRANCH == "rebrand" ] #If condition to check if the last triggered build is rebrand
    sleep 5
    curl -i $REPO_URI > test.json
  then LATEST_ID=$(grep -o '"id":.[0-9]*' test.json | head -1  | grep ':.[0-9]*') #
  echo "LATEST_ID of rebrand branch.............................. $LATEST_ID"
  export LATEST_ID
    break
  else
    true $(( i++ ))
    sleep 1
  fi
done

#Step 2 : Fetch the build status of the 'rebrand' branch
get_buildId_value=${LATEST_ID#*:}
BUILD_ID="${get_buildId_value//\"}"

REPO_URI_WITH_BUILDID="$REPO_URI/$BUILD_ID"
echo $REPO_URI_WITH_BUILDID

i=1
max=900 #Max time for the tests to run.
while [ $i -lt $max ]
do

curl -i $REPO_URI_WITH_BUILDID > test.json

STATE=$(grep -o '"state":.[a-z\"]*' test.json | head -1 ) #Fetch the state of rebrand build
#RESULT=$(grep -o '"result":.[0-9]*' test.json | head -1  | grep ':.[0-9]*') #For debug
STATUS=$(grep -o '"status":.[0-9]*' test.json | head -1  | grep ':.[0-9]*') #Fetch the status of rebrand build

echo "--------------------------------------------"
echo "Polling for the tests run build status..."
echo "ux-test-platform build run in progress: https://travis-ci.org/Pearson-Higher-Ed/ux-test-platform/builds/$BUILD_ID"

get_state_value=${STATE#*:}
STATE="${get_state_value//\"}"

get_status_value=${STATUS#*:}
STATUS="${get_status_value//\"}"

if [ $STATUS == "0" ] #Success condition
then
  echo "counter-> $i"
  echo "TESTS RUN... PASSED :-) "
  break #As soon as the tests run pass, we break and return back to the elements build run
elif [ $STATUS == "1" ] #Failure condition
then
 echo "TESTS RUN... FAILED :-("
 exit 1 #As soon as the tests run fail, we stop building elements
elif [[ $STATE == "finished" && $STATUS == "n" ]] #Unexpected failure due to Travis environment issues
then
 echo "TESTS RUN... NULL :-("
 exit 1 #For some reason, if the ux-test-platform build breaks or halts
elif [ $i == "900" ] #Maxed out condition
  then
  echo "ux-test-platform run time has maxed out..."
  exit 1 #Selenium tests run for more than the max time.
fi

true $(( i++ ))
sleep 1 #This 1s is required to poll the build status for every second
echo "counter-> $i"
done

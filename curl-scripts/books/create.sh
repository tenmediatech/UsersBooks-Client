#!/bin/bash

curl --include --request POST 'http://localhost:4741/books' \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'"
    }
  }'

echo

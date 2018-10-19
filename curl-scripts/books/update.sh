#!/bin/bash

curl --include --request PATCH "http://localhost:4741/books/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'"
    }
  }'

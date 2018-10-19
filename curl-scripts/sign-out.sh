# ID=2 sh curl-scripts/sign-out.sh

curl "https://usersbooksapi.herokuapp.com/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE

echo

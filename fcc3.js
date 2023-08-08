let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj = JSON.parse(userStr, (key, value) => {
  if (value == "Sammy") {
    return value.toUpperCase();
  }
  return value;
});

console.log(userObj);

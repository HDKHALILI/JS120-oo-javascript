function objectsEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);

  for (let index = 0; index < obj1Keys.length; index += 1) {
    let key = obj1Keys[index];
    if (!obj2.hasOwnProperty(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false

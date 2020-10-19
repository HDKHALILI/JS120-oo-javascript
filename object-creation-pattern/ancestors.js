let foo = {
  name: "foo",
  ancestors() {
    const ancestors = [];
    let ancestor = Object.getPrototypeOf(this);

    while (ancestor) {
      let ancestorName = ancestor.hasOwnProperty("name")
        ? ancestor.name
        : "Object.prototype";

      ancestors.push(ancestorName);
      ancestor = Object.getPrototypeOf(ancestor);
    }

    return ancestors;
  },
};

let bar = Object.create(foo);
bar.name = "bar";
let baz = Object.create(bar);
baz.name = "baz";
let qux = Object.create(baz);
qux.name = "qux";

console.log(qux.ancestors()); // ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors()); // ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors()); // ['foo', 'Object.prototype']
console.log(foo.ancestors()); // ['Object.prototype']

console.log("Hello World");
let a = 12;
console.log("a =", a);

if (a > 10) {
  let a = 30;
  console.log(a);
}

console.log(a);

const hello = () => {
  console.log("hello");
};
hello();

const select = (language) => {
  if (language === 'C') {
    return () => "C";
  } else if (language === 'Java') {
    return () => "Java";
  } else {
    return () => "Unknown Language";
  }
};

const cCompiler = select('C');
const javaCompiler = select('Java');

console.log(cCompiler()); 
console.log(javaCompiler()); 

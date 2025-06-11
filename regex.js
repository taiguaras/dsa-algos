/hello/.test("hello world"); // true
"Price: $100".match(/\$\d+/); // ["$100"]
"Hello 123".replace(/\d+/, "***"); // "Hello ***"
"a,b;c".split(/[,;]/); // ["a", "b", "c"]

const  leters = /[A-Z][a-b]/;
const emailCheck = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/;


console.log("1) ",emailCheck.test("taiguaras@gmail.com")); 


"hello".length               // 5
"hello".charAt(1)           // "e"
"A".charCodeAt(0)           // 65
"hello".slice(1, 4)         // "ell"
"hello".substring(1, 4)     // "ell"
"a,b,c".split(",")          // ["a", "b", "c"]
"  hello  ".trim()          // "hello"
"hello".toUpperCase()       // "HELLO"
"hello".includes("ell")     // true
"hello".indexOf("l")        // 2
"hello".replace("l", "x")   // "hexlo"
"ho".repeat(3)              // "hohoho"
"5".padStart(3, "0")        // "005"
"abc123".match(/\d+/)       // ["123"]
/\d+/.test("abc123")        // true
Array.from("hello")         // ["h","e","l","l","o"]
new Set("aabbbc")           // Set { "a", "b", "c" }
let m = new Map(); m.set("a", 1); // Map { "a" => 1 }
export type Step = { title: string; text: string; code: string };
export type Lesson = {
  name: string;
  color: string;
  desc: string;
  type: "js" | "python" | "web" | "api";
  pistonLang?: string;
  steps: Step[];
};

export const lessons: Record<string, Lesson> = {
  "html": {
  "name": "HTML",
  "color": "#ff7a3d",
  "desc": "Build the structure of web pages.",
  "type": "web",
  "steps": [
    {
      "title": "1. Your first heading",
      "text": "HTML is made of tags. <h1> is the biggest heading. Change the text and press Run.",
      "code": "<h1>Hello, World!</h1>"
    },
    {
      "title": "2. Headings",
      "text": "There are six heading sizes, <h1> (biggest) to <h6> (smallest).",
      "code": "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h6>Heading 6</h6>"
    },
    {
      "title": "3. Paragraphs",
      "text": "Use <p> for normal text and <br> for a line break.",
      "code": "<h1>About me</h1>\n<p>My name is Ali.<br>I am learning HTML.</p>\n<p>This is a second paragraph.</p>"
    },
    {
      "title": "4. Bold, italic, underline",
      "text": "<b> bold, <i> italic, <u> underline. Add your own words.",
      "code": "<p>This is <b>bold</b>, this is <i>italic</i> and this is <u>underlined</u>.</p>"
    },
    {
      "title": "5. Links",
      "text": "The <a> tag makes a link. href is the address.",
      "code": "<a href=\"https://example.com\">Click me</a>"
    },
    {
      "title": "6. Images",
      "text": "<img> shows a picture. src is the image address and alt describes it.",
      "code": "<img src=\"https://placehold.co/200x100\" alt=\"A placeholder image\">"
    },
    {
      "title": "7. Lists",
      "text": "<ul> is a bullet list, <ol> is a numbered list, <li> is one item.",
      "code": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n<ol>\n  <li>Learn</li>\n  <li>Practice</li>\n  <li>Build</li>\n</ol>"
    },
    {
      "title": "8. Tables",
      "text": "A table has rows (<tr>), headings (<th>) and cells (<td>).",
      "code": "<table border=\"1\">\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ali</td><td>20</td></tr>\n  <tr><td>Sara</td><td>22</td></tr>\n</table>"
    },
    {
      "title": "9. Forms",
      "text": "Forms collect input from the user.",
      "code": "<form>\n  <label>Name: <input type=\"text\" placeholder=\"Your name\"></label><br><br>\n  <label>Email: <input type=\"email\"></label><br><br>\n  <input type=\"checkbox\"> I agree<br><br>\n  <button>Submit</button>\n</form>"
    },
    {
      "title": "10. Div and span",
      "text": "<div> groups blocks together. <span> groups small pieces of text.",
      "code": "<div style=\"border:2px solid green; padding:10px;\">\n  <p>This is inside a div.</p>\n  <p>Some <span style=\"color:red\">red text</span> here.</p>\n</div>"
    },
    {
      "title": "11. Mini project: profile card",
      "text": "Put it all together into a simple profile card.",
      "code": "<div style=\"max-width:260px; border:2px solid #333; padding:16px; text-align:center;\">\n  <img src=\"https://placehold.co/100\" alt=\"Profile\">\n  <h2>Ali Khan</h2>\n  <p>Web developer</p>\n  <a href=\"https://example.com\">My website</a>\n</div>"
    }
  ]
},
  "css": {
  "name": "CSS",
  "color": "#3d9bff",
  "desc": "Style and design your websites.",
  "type": "web",
  "steps": [
    {
      "title": "1. Change text color",
      "text": "CSS goes inside <style>. Change red to blue or green.",
      "code": "<style>\n  h1 { color: red; }\n</style>\n<h1>Hello CSS</h1>"
    },
    {
      "title": "2. Background and size",
      "text": "background sets the background color, font-size the text size.",
      "code": "<style>\n  body { background: black; }\n  h1 { color: lime; font-size: 48px; }\n</style>\n<h1>Styled!</h1>"
    },
    {
      "title": "3. Selectors: class and id",
      "text": "A class (.name) styles many elements. An id (#name) styles one.",
      "code": "<style>\n  .big { font-size: 32px; color: orange; }\n  #special { color: hotpink; }\n</style>\n<p class=\"big\">Big orange text</p>\n<p class=\"big\">Another big one</p>\n<p id=\"special\">Only me is pink</p>"
    },
    {
      "title": "4. Fonts and text",
      "text": "Control the font, weight, alignment and spacing.",
      "code": "<style>\n  p { font-family: Georgia, serif; font-weight: bold; text-align: center; letter-spacing: 3px; }\n</style>\n<p>Nice looking text</p>"
    },
    {
      "title": "5. Box model",
      "text": "Every element is a box: content, padding, border, margin.",
      "code": "<style>\n  .box { padding: 20px; border: 3px solid dodgerblue; margin: 30px; background: #eef; }\n</style>\n<div class=\"box\">I am a box</div>"
    },
    {
      "title": "6. Rounded corners and shadows",
      "text": "border-radius rounds corners, box-shadow adds a shadow.",
      "code": "<style>\n  .card { width: 200px; padding: 20px; border-radius: 16px; box-shadow: 0 6px 16px rgba(0,0,0,0.3); }\n</style>\n<div class=\"card\">Soft card</div>"
    },
    {
      "title": "7. Hover effects",
      "text": ":hover changes style when the mouse is over it. transition makes it smooth.",
      "code": "<style>\n  button { padding: 12px 24px; border: none; border-radius: 8px; background: green; color: white; transition: 0.3s; }\n  button:hover { background: darkred; transform: scale(1.1); }\n</style>\n<button>Hover me</button>"
    },
    {
      "title": "8. Flexbox",
      "text": "display: flex puts items in a row. justify-content spreads them.",
      "code": "<style>\n  .row { display: flex; justify-content: space-between; gap: 10px; }\n  .row div { background: tomato; color: white; padding: 20px; }\n</style>\n<div class=\"row\">\n  <div>1</div><div>2</div><div>3</div>\n</div>"
    },
    {
      "title": "9. Grid",
      "text": "display: grid makes rows and columns.",
      "code": "<style>\n  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n  .grid div { background: seagreen; color: white; padding: 20px; text-align: center; }\n</style>\n<div class=\"grid\">\n  <div>A</div><div>B</div><div>C</div><div>D</div><div>E</div><div>F</div>\n</div>"
    },
    {
      "title": "10. Position",
      "text": "position: absolute places an element exactly inside a relative parent.",
      "code": "<style>\n  .parent { position: relative; height: 150px; background: #ddd; }\n  .badge { position: absolute; top: 10px; right: 10px; background: red; color: white; padding: 6px 10px; }\n</style>\n<div class=\"parent\"><span class=\"badge\">NEW</span></div>"
    },
    {
      "title": "11. Animation",
      "text": "@keyframes describes the steps, animation runs them.",
      "code": "<style>\n  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n  .loader { width: 60px; height: 60px; border: 8px solid #ccc; border-top-color: purple; border-radius: 50%; animation: spin 1s linear infinite; }\n</style>\n<div class=\"loader\"></div>"
    },
    {
      "title": "12. Mini project: pricing card",
      "text": "A nice card using everything you learned.",
      "code": "<style>\n  body { font-family: Arial; display: flex; justify-content: center; padding: 30px; background: #111; }\n  .plan { width: 220px; padding: 24px; border-radius: 16px; background: #1e1e1e; color: white; text-align: center; box-shadow: 0 8px 24px rgba(0,255,100,0.3); }\n  .plan h2 { color: #22ff55; }\n  .price { font-size: 40px; font-weight: bold; }\n  .plan button { margin-top: 16px; padding: 10px 24px; border: none; border-radius: 999px; background: #22ff55; font-weight: bold; }\n</style>\n<div class=\"plan\"><h2>Pro</h2><div class=\"price\">$9</div><p>Unlimited lessons</p><button>Buy</button></div>"
    }
  ]
},
  "javascript": {
  "name": "JavaScript",
  "color": "#ffe03d",
  "desc": "Make websites interactive.",
  "type": "js",
  "steps": [
    {
      "title": "1. Print something",
      "text": "console.log() shows text in the terminal. Change the message and press Run.",
      "code": "console.log(\"Hello, World!\");"
    },
    {
      "title": "2. Variables",
      "text": "let stores a value that can change. const stays the same.",
      "code": "let name = \"Ali\";\nconst country = \"Pakistan\";\nname = \"Ahmed\";\nconsole.log(name, \"lives in\", country);"
    },
    {
      "title": "3. Data types",
      "text": "Values have types: string, number, boolean. typeof tells you the type.",
      "code": "console.log(typeof \"hello\");\nconsole.log(typeof 42);\nconsole.log(typeof true);"
    },
    {
      "title": "4. Math",
      "text": "Use + - * / and % (remainder). Try changing the numbers.",
      "code": "let a = 10;\nlet b = 3;\nconsole.log(a + b);\nconsole.log(a - b);\nconsole.log(a * b);\nconsole.log(a / b);\nconsole.log(a % b);"
    },
    {
      "title": "5. Strings",
      "text": "Strings have helpful methods like toUpperCase() and length.",
      "code": "let word = \"javascript\";\nconsole.log(word.toUpperCase());\nconsole.log(word.length);\nconsole.log(\"I love \" + word);"
    },
    {
      "title": "6. If / else",
      "text": "if runs code only when a condition is true.",
      "code": "let age = 18;\nif (age >= 18) {\n  console.log(\"You are an adult\");\n} else {\n  console.log(\"You are a minor\");\n}"
    },
    {
      "title": "7. Comparison and logic",
      "text": "=== checks equal. && is AND, || is OR, ! is NOT.",
      "code": "let x = 7;\nconsole.log(x === 7);\nconsole.log(x > 5 && x < 10);\nconsole.log(x < 5 || x === 7);\nconsole.log(!(x > 5));"
    },
    {
      "title": "8. For loop",
      "text": "A for loop repeats code. Change 5 to 10.",
      "code": "for (let i = 1; i <= 5; i++) {\n  console.log(\"Number:\", i);\n}"
    },
    {
      "title": "9. While loop",
      "text": "A while loop repeats as long as the condition is true.",
      "code": "let count = 3;\nwhile (count > 0) {\n  console.log(\"Countdown:\", count);\n  count--;\n}\nconsole.log(\"Go!\");"
    },
    {
      "title": "10. Arrays",
      "text": "An array stores many values. Counting starts at 0.",
      "code": "let fruits = [\"apple\", \"banana\", \"mango\"];\nconsole.log(fruits[0]);\nfruits.push(\"orange\");\nconsole.log(fruits.length);\nfor (let f of fruits) {\n  console.log(f);\n}"
    },
    {
      "title": "11. Objects",
      "text": "An object stores key: value pairs.",
      "code": "let person = { name: \"Sara\", age: 22, city: \"Lahore\" };\nconsole.log(person.name);\nperson.age = 23;\nconsole.log(person);"
    },
    {
      "title": "12. Functions",
      "text": "A function is reusable code with inputs and a return value.",
      "code": "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));\nconsole.log(add(10, 20));"
    },
    {
      "title": "13. Arrow functions, map and filter",
      "text": "map changes every item, filter keeps some.",
      "code": "const nums = [1, 2, 3, 4, 5, 6];\nconsole.log(nums.map(n => n * 2));\nconsole.log(nums.filter(n => n % 2 === 0));"
    },
    {
      "title": "14. Mini project: FizzBuzz",
      "text": "Print 1 to 15. Multiples of 3 print Fizz, of 5 print Buzz, of both FizzBuzz.",
      "code": "for (let i = 1; i <= 15; i++) {\n  if (i % 15 === 0) console.log(\"FizzBuzz\");\n  else if (i % 3 === 0) console.log(\"Fizz\");\n  else if (i % 5 === 0) console.log(\"Buzz\");\n  else console.log(i);\n}"
    }
  ]
},
  "typescript": {
  "name": "TypeScript",
  "color": "#3178c6",
  "desc": "JavaScript with types, safer for big projects.",
  "type": "api",
  "pistonLang": "typescript",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "TypeScript is JavaScript plus types. console.log prints text.",
      "code": "console.log(\"Hello, World!\");"
    },
    {
      "title": "2. Typed variables",
      "text": "Add : type after the name. TypeScript catches mistakes for you.",
      "code": "let name: string = \"Ali\";\nlet age: number = 20;\nlet isStudent: boolean = true;\nconsole.log(name, age, isStudent);"
    },
    {
      "title": "3. Math",
      "text": "Same operators as JavaScript.",
      "code": "let a: number = 10;\nlet b: number = 3;\nconsole.log(a + b, a - b, a * b, a / b, a % b);"
    },
    {
      "title": "4. Strings",
      "text": "Template strings use backticks and ${ }.",
      "code": "let city: string = \"Lahore\";\nconsole.log(`I live in ${city}`);\nconsole.log(city.toUpperCase(), city.length);"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "let score: number = 75;\nif (score >= 80) console.log(\"A\");\nelse if (score >= 60) console.log(\"B\");\nelse console.log(\"C\");"
    },
    {
      "title": "6. Loops",
      "text": "for and while loops.",
      "code": "for (let i: number = 1; i <= 5; i++) {\n  console.log(\"Number:\", i);\n}\nlet n: number = 3;\nwhile (n > 0) { console.log(n); n--; }"
    },
    {
      "title": "7. Arrays",
      "text": "Type an array as number[] or string[].",
      "code": "let fruits: string[] = [\"apple\", \"banana\"];\nfruits.push(\"mango\");\nconsole.log(fruits, fruits.length);"
    },
    {
      "title": "8. Functions with types",
      "text": "Type the inputs and the return value.",
      "code": "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(2, 3));"
    },
    {
      "title": "9. Interfaces",
      "text": "An interface describes the shape of an object.",
      "code": "interface Person {\n  name: string;\n  age: number;\n}\nconst p: Person = { name: \"Sara\", age: 22 };\nconsole.log(p.name, p.age);"
    },
    {
      "title": "10. Union types",
      "text": "A value can be one of several types.",
      "code": "let id: number | string = 101;\nconsole.log(id);\nid = \"A-101\";\nconsole.log(id);"
    },
    {
      "title": "11. Classes",
      "text": "Classes are blueprints for objects.",
      "code": "class Dog {\n  constructor(public name: string) {}\n  bark(): void { console.log(this.name + \" says Woof!\"); }\n}\nnew Dog(\"Rex\").bark();"
    },
    {
      "title": "12. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "for (let i: number = 1; i <= 15; i++) {\n  if (i % 15 === 0) console.log(\"FizzBuzz\");\n  else if (i % 3 === 0) console.log(\"Fizz\");\n  else if (i % 5 === 0) console.log(\"Buzz\");\n  else console.log(i);\n}"
    }
  ]
},
  "python": {
  "name": "Python",
  "color": "#22ff55",
  "desc": "Easy, powerful, and beginner friendly.",
  "type": "python",
  "steps": [
    {
      "title": "1. Print something",
      "text": "print() shows text in the terminal. Change the message and press Run.",
      "code": "print(\"Hello, World!\")"
    },
    {
      "title": "2. Variables",
      "text": "Just write name = value. No keyword needed.",
      "code": "name = \"Ali\"\ncountry = \"Pakistan\"\nname = \"Ahmed\"\nprint(name, \"lives in\", country)"
    },
    {
      "title": "3. Data types",
      "text": "str (text), int, float, bool. type() tells you the type.",
      "code": "print(type(\"hello\"))\nprint(type(42))\nprint(type(3.14))\nprint(type(True))"
    },
    {
      "title": "4. Math",
      "text": "** is power, // is whole-number division, % is remainder.",
      "code": "a = 10\nb = 3\nprint(a + b)\nprint(a / b)\nprint(a // b)\nprint(a % b)\nprint(a ** b)"
    },
    {
      "title": "5. Strings",
      "text": "Strings have methods like upper() and len().",
      "code": "word = \"python\"\nprint(word.upper())\nprint(len(word))\nprint(f\"{word} has {len(word)} letters\")"
    },
    {
      "title": "6. If / elif / else",
      "text": "Python uses indentation (4 spaces) instead of braces.",
      "code": "age = 18\nif age >= 18:\n    print(\"You are an adult\")\nelif age >= 13:\n    print(\"You are a teenager\")\nelse:\n    print(\"You are a child\")"
    },
    {
      "title": "7. Comparison and logic",
      "text": "Use and, or, not.",
      "code": "x = 7\nprint(x == 7)\nprint(x > 5 and x < 10)\nprint(x < 5 or x == 7)\nprint(not (x > 5))"
    },
    {
      "title": "8. For loop",
      "text": "range(1, 6) gives 1 to 5.",
      "code": "for i in range(1, 6):\n    print(\"Number:\", i)"
    },
    {
      "title": "9. While loop",
      "text": "Repeats while the condition is true.",
      "code": "count = 3\nwhile count > 0:\n    print(\"Countdown:\", count)\n    count -= 1\nprint(\"Go!\")"
    },
    {
      "title": "10. Lists",
      "text": "A list stores many values. Counting starts at 0.",
      "code": "fruits = [\"apple\", \"banana\", \"mango\"]\nprint(fruits[0])\nfruits.append(\"orange\")\nprint(len(fruits))\nfor f in fruits:\n    print(f)"
    },
    {
      "title": "11. Dictionaries",
      "text": "A dictionary stores key: value pairs.",
      "code": "person = {\"name\": \"Sara\", \"age\": 22, \"city\": \"Lahore\"}\nprint(person[\"name\"])\nperson[\"age\"] = 23\nprint(person)"
    },
    {
      "title": "12. Functions",
      "text": "def makes a function.",
      "code": "def add(a, b):\n    return a + b\n\nprint(add(2, 3))\nprint(add(10, 20))"
    },
    {
      "title": "13. List comprehension",
      "text": "A short way to build a new list.",
      "code": "nums = [1, 2, 3, 4, 5, 6]\nprint([n * 2 for n in nums])\nprint([n for n in nums if n % 2 == 0])"
    },
    {
      "title": "14. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "for i in range(1, 16):\n    if i % 15 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)"
    }
  ]
},
  "c": {
  "name": "C",
  "color": "#5c9dff",
  "desc": "The classic language behind operating systems.",
  "type": "api",
  "pistonLang": "c",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "Every C program starts at main(). printf() prints text. \\n means new line.",
      "code": "#include <stdio.h>\n\nint main() {\n  printf(\"Hello, World!\\n\");\n  return 0;\n}"
    },
    {
      "title": "2. Variables",
      "text": "C needs a type: int (whole number), float (decimal), char (one letter).",
      "code": "#include <stdio.h>\n\nint main() {\n  int age = 20;\n  float price = 9.5;\n  char grade = 'A';\n  printf(\"Age: %d, Price: %.1f, Grade: %c\\n\", age, price, grade);\n  return 0;\n}"
    },
    {
      "title": "3. Math",
      "text": "Use + - * / and % (remainder). Dividing two ints gives an int.",
      "code": "#include <stdio.h>\n\nint main() {\n  int a = 10, b = 3;\n  printf(\"%d %d %d %d %d\\n\", a + b, a - b, a * b, a / b, a % b);\n  return 0;\n}"
    },
    {
      "title": "4. If / else",
      "text": "Run code only when a condition is true.",
      "code": "#include <stdio.h>\n\nint main() {\n  int age = 18;\n  if (age >= 18) {\n    printf(\"Adult\\n\");\n  } else {\n    printf(\"Minor\\n\");\n  }\n  return 0;\n}"
    },
    {
      "title": "5. For loop",
      "text": "Repeats code a set number of times.",
      "code": "#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 5; i++) {\n    printf(\"Number: %d\\n\", i);\n  }\n  return 0;\n}"
    },
    {
      "title": "6. While loop",
      "text": "Repeats while the condition is true.",
      "code": "#include <stdio.h>\n\nint main() {\n  int n = 3;\n  while (n > 0) {\n    printf(\"Countdown: %d\\n\", n);\n    n--;\n  }\n  printf(\"Go!\\n\");\n  return 0;\n}"
    },
    {
      "title": "7. Arrays",
      "text": "An array holds many values of the same type. Counting starts at 0.",
      "code": "#include <stdio.h>\n\nint main() {\n  int nums[5] = {10, 20, 30, 40, 50};\n  int sum = 0;\n  for (int i = 0; i < 5; i++) {\n    sum += nums[i];\n  }\n  printf(\"First: %d, Sum: %d\\n\", nums[0], sum);\n  return 0;\n}"
    },
    {
      "title": "8. Strings",
      "text": "A string is an array of characters.",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n  char name[] = \"Ali\";\n  printf(\"Hello %s, length %d\\n\", name, (int)strlen(name));\n  return 0;\n}"
    },
    {
      "title": "9. Functions",
      "text": "A function is reusable code. Declare the return type first.",
      "code": "#include <stdio.h>\n\nint add(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  printf(\"%d\\n\", add(2, 3));\n  printf(\"%d\\n\", add(10, 20));\n  return 0;\n}"
    },
    {
      "title": "10. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 15; i++) {\n    if (i % 15 == 0) printf(\"FizzBuzz\\n\");\n    else if (i % 3 == 0) printf(\"Fizz\\n\");\n    else if (i % 5 == 0) printf(\"Buzz\\n\");\n    else printf(\"%d\\n\", i);\n  }\n  return 0;\n}"
    }
  ]
},
  "cpp": {
  "name": "C++",
  "color": "#00d2ff",
  "desc": "Fast and powerful, used in games and systems.",
  "type": "api",
  "pistonLang": "c++",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "cout prints text in C++. endl makes a new line.",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello, World!\" << endl;\n  return 0;\n}"
    },
    {
      "title": "2. Variables",
      "text": "int, double, string, bool store different kinds of data.",
      "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string name = \"Ali\";\n  int age = 20;\n  double height = 5.9;\n  bool student = true;\n  cout << name << \" \" << age << \" \" << height << \" \" << student << endl;\n  return 0;\n}"
    },
    {
      "title": "3. Math",
      "text": "+ - * / and % work like in C.",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 10, b = 3;\n  cout << a + b << \" \" << a - b << \" \" << a * b << \" \" << a / b << \" \" << a % b << endl;\n  return 0;\n}"
    },
    {
      "title": "4. Strings",
      "text": "The string type has helpful functions.",
      "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string s = \"hello\";\n  cout << s.length() << endl;\n  cout << s + \" world\" << endl;\n  cout << s[0] << endl;\n  return 0;\n}"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int score = 75;\n  if (score >= 80) cout << \"A\" << endl;\n  else if (score >= 60) cout << \"B\" << endl;\n  else cout << \"C\" << endl;\n  return 0;\n}"
    },
    {
      "title": "6. For loop",
      "text": "Repeat code a set number of times.",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 1; i <= 5; i++) {\n    cout << \"Number: \" << i << endl;\n  }\n  return 0;\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int n = 3;\n  while (n > 0) {\n    cout << n << endl;\n    n--;\n  }\n  cout << \"Go!\" << endl;\n  return 0;\n}"
    },
    {
      "title": "8. Vectors",
      "text": "A vector is a list that can grow.",
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n  vector<int> nums = {1, 2, 3};\n  nums.push_back(4);\n  for (int n : nums) cout << n << \" \";\n  cout << endl << \"Size: \" << nums.size() << endl;\n  return 0;\n}"
    },
    {
      "title": "9. Functions",
      "text": "Reusable code with inputs and a return value.",
      "code": "#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  cout << add(2, 3) << endl;\n  cout << add(10, 20) << endl;\n  return 0;\n}"
    },
    {
      "title": "10. Classes",
      "text": "A class bundles data and functions together.",
      "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Dog {\npublic:\n  string name;\n  void bark() { cout << name << \" says Woof!\" << endl; }\n};\n\nint main() {\n  Dog d;\n  d.name = \"Rex\";\n  d.bark();\n  return 0;\n}"
    },
    {
      "title": "11. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 1; i <= 15; i++) {\n    if (i % 15 == 0) cout << \"FizzBuzz\" << endl;\n    else if (i % 3 == 0) cout << \"Fizz\" << endl;\n    else if (i % 5 == 0) cout << \"Buzz\" << endl;\n    else cout << i << endl;\n  }\n  return 0;\n}"
    }
  ]
},
  "java": {
  "name": "Java",
  "color": "#ff6b6b",
  "desc": "Write once, run anywhere. Used in apps and servers.",
  "type": "api",
  "pistonLang": "java",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "Java code lives inside a class called Main. System.out.println prints a line.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}"
    },
    {
      "title": "2. Variables",
      "text": "Java needs a type: int, double, String, boolean.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    String name = \"Ali\";\n    int age = 20;\n    double height = 5.9;\n    boolean student = true;\n    System.out.println(name + \" \" + age + \" \" + height + \" \" + student);\n  }\n}"
    },
    {
      "title": "3. Math",
      "text": "+ - * / and % (remainder).",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int a = 10, b = 3;\n    System.out.println(a + b);\n    System.out.println(a / b);\n    System.out.println(a % b);\n    System.out.println(Math.pow(2, 8));\n  }\n}"
    },
    {
      "title": "4. Strings",
      "text": "String has many methods.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    String s = \"hello\";\n    System.out.println(s.length());\n    System.out.println(s.toUpperCase());\n    System.out.println(s + \" world\");\n    System.out.println(s.charAt(0));\n  }\n}"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int score = 75;\n    if (score >= 80) System.out.println(\"A\");\n    else if (score >= 60) System.out.println(\"B\");\n    else System.out.println(\"C\");\n  }\n}"
    },
    {
      "title": "6. For loop",
      "text": "Repeat code a set number of times.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(\"Number: \" + i);\n    }\n  }\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int n = 3;\n    while (n > 0) {\n      System.out.println(\"Countdown: \" + n);\n      n--;\n    }\n    System.out.println(\"Go!\");\n  }\n}"
    },
    {
      "title": "8. Arrays",
      "text": "An array holds many values of one type.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30, 40};\n    int sum = 0;\n    for (int n : nums) sum += n;\n    System.out.println(\"Length: \" + nums.length + \", Sum: \" + sum);\n  }\n}"
    },
    {
      "title": "9. Methods",
      "text": "A method is reusable code inside a class.",
      "code": "public class Main {\n  static int add(int a, int b) {\n    return a + b;\n  }\n\n  public static void main(String[] args) {\n    System.out.println(add(2, 3));\n    System.out.println(add(10, 20));\n  }\n}"
    },
    {
      "title": "10. Classes and objects",
      "text": "A class is a blueprint. An object is made from it.",
      "code": "public class Main {\n  static class Dog {\n    String name;\n    Dog(String name) { this.name = name; }\n    void bark() { System.out.println(name + \" says Woof!\"); }\n  }\n\n  public static void main(String[] args) {\n    Dog d = new Dog(\"Rex\");\n    d.bark();\n  }\n}"
    },
    {
      "title": "11. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 15; i++) {\n      if (i % 15 == 0) System.out.println(\"FizzBuzz\");\n      else if (i % 3 == 0) System.out.println(\"Fizz\");\n      else if (i % 5 == 0) System.out.println(\"Buzz\");\n      else System.out.println(i);\n    }\n  }\n}"
    }
  ]
},
  "csharp": {
  "name": "C#",
  "color": "#b07dff",
  "desc": "Microsoft's language for apps, games (Unity) and web.",
  "type": "api",
  "pistonLang": "csharp",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "Console.WriteLine prints a line in C#.",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello, World!\");\n  }\n}"
    },
    {
      "title": "2. Variables",
      "text": "int, double, string, bool.",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    string name = \"Ali\";\n    int age = 20;\n    double height = 5.9;\n    bool student = true;\n    Console.WriteLine(name + \" \" + age + \" \" + height + \" \" + student);\n  }\n}"
    },
    {
      "title": "3. Math",
      "text": "+ - * / and % (remainder).",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    int a = 10, b = 3;\n    Console.WriteLine(a + b);\n    Console.WriteLine(a / b);\n    Console.WriteLine(a % b);\n    Console.WriteLine(Math.Pow(2, 8));\n  }\n}"
    },
    {
      "title": "4. Strings",
      "text": "String interpolation uses $\"...\" and { }.",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    string city = \"Lahore\";\n    Console.WriteLine($\"I live in {city}\");\n    Console.WriteLine(city.ToUpper());\n    Console.WriteLine(city.Length);\n  }\n}"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    int score = 75;\n    if (score >= 80) Console.WriteLine(\"A\");\n    else if (score >= 60) Console.WriteLine(\"B\");\n    else Console.WriteLine(\"C\");\n  }\n}"
    },
    {
      "title": "6. For loop",
      "text": "Repeat code a set number of times.",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    for (int i = 1; i <= 5; i++) {\n      Console.WriteLine(\"Number: \" + i);\n    }\n  }\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    int n = 3;\n    while (n > 0) {\n      Console.WriteLine(\"Countdown: \" + n);\n      n--;\n    }\n    Console.WriteLine(\"Go!\");\n  }\n}"
    },
    {
      "title": "8. Arrays and lists",
      "text": "An array has a fixed size. A List can grow.",
      "code": "using System;\nusing System.Collections.Generic;\n\nclass Program {\n  static void Main() {\n    int[] nums = {1, 2, 3};\n    var list = new List<string> { \"apple\", \"banana\" };\n    list.Add(\"mango\");\n    Console.WriteLine(nums.Length);\n    foreach (var f in list) Console.WriteLine(f);\n  }\n}"
    },
    {
      "title": "9. Methods",
      "text": "Reusable code with inputs and a return value.",
      "code": "using System;\n\nclass Program {\n  static int Add(int a, int b) {\n    return a + b;\n  }\n\n  static void Main() {\n    Console.WriteLine(Add(2, 3));\n    Console.WriteLine(Add(10, 20));\n  }\n}"
    },
    {
      "title": "10. Classes",
      "text": "A class bundles data and methods.",
      "code": "using System;\n\nclass Dog {\n  public string Name;\n  public void Bark() { Console.WriteLine(Name + \" says Woof!\"); }\n}\n\nclass Program {\n  static void Main() {\n    var d = new Dog { Name = \"Rex\" };\n    d.Bark();\n  }\n}"
    },
    {
      "title": "11. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "using System;\n\nclass Program {\n  static void Main() {\n    for (int i = 1; i <= 15; i++) {\n      if (i % 15 == 0) Console.WriteLine(\"FizzBuzz\");\n      else if (i % 3 == 0) Console.WriteLine(\"Fizz\");\n      else if (i % 5 == 0) Console.WriteLine(\"Buzz\");\n      else Console.WriteLine(i);\n    }\n  }\n}"
    }
  ]
},
  "php": {
  "name": "PHP",
  "color": "#8892bf",
  "desc": "Powers a huge part of the web (WordPress).",
  "type": "api",
  "pistonLang": "php",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "PHP code starts with <?php. echo prints text.",
      "code": "<?php\necho \"Hello, World!\\n\";"
    },
    {
      "title": "2. Variables",
      "text": "PHP variables start with $.",
      "code": "<?php\n$name = \"Ali\";\n$age = 20;\necho \"$name is $age years old\\n\";"
    },
    {
      "title": "3. Math",
      "text": "+ - * / % and ** (power).",
      "code": "<?php\n$a = 10;\n$b = 3;\necho $a + $b, \"\\n\";\necho $a / $b, \"\\n\";\necho $a % $b, \"\\n\";\necho $a ** $b, \"\\n\";"
    },
    {
      "title": "4. Strings",
      "text": "Strings have functions like strtoupper and strlen.",
      "code": "<?php\n$s = \"hello\";\necho strtoupper($s), \"\\n\";\necho strlen($s), \"\\n\";\necho $s . \" world\\n\";"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "<?php\n$score = 75;\nif ($score >= 80) {\n  echo \"A\\n\";\n} elseif ($score >= 60) {\n  echo \"B\\n\";\n} else {\n  echo \"C\\n\";\n}"
    },
    {
      "title": "6. For loop",
      "text": "Repeat code a set number of times.",
      "code": "<?php\nfor ($i = 1; $i <= 5; $i++) {\n  echo \"Number: $i\\n\";\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "<?php\n$n = 3;\nwhile ($n > 0) {\n  echo \"Countdown: $n\\n\";\n  $n--;\n}\necho \"Go!\\n\";"
    },
    {
      "title": "8. Arrays",
      "text": "An array holds many values.",
      "code": "<?php\n$fruits = [\"apple\", \"banana\", \"mango\"];\n$fruits[] = \"orange\";\necho count($fruits), \"\\n\";\nforeach ($fruits as $f) {\n  echo $f, \"\\n\";\n}"
    },
    {
      "title": "9. Associative arrays",
      "text": "key => value pairs.",
      "code": "<?php\n$person = [\"name\" => \"Sara\", \"age\" => 22];\necho $person[\"name\"], \"\\n\";\nforeach ($person as $key => $value) {\n  echo \"$key: $value\\n\";\n}"
    },
    {
      "title": "10. Functions",
      "text": "Reusable code.",
      "code": "<?php\nfunction add($a, $b) {\n  return $a + $b;\n}\necho add(2, 3), \"\\n\";\necho add(10, 20), \"\\n\";"
    },
    {
      "title": "11. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "<?php\nfor ($i = 1; $i <= 15; $i++) {\n  if ($i % 15 == 0) echo \"FizzBuzz\\n\";\n  elseif ($i % 3 == 0) echo \"Fizz\\n\";\n  elseif ($i % 5 == 0) echo \"Buzz\\n\";\n  else echo $i, \"\\n\";\n}"
    }
  ]
},
  "go": {
  "name": "Go",
  "color": "#00add8",
  "desc": "Simple and fast, made by Google.",
  "type": "api",
  "pistonLang": "go",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "Go programs start in package main. fmt.Println prints a line.",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, World!\")\n}"
    },
    {
      "title": "2. Variables",
      "text": ":= creates a variable and guesses its type.",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  name := \"Ali\"\n  age := 20\n  var height float64 = 5.9\n  fmt.Println(name, age, height)\n}"
    },
    {
      "title": "3. Math",
      "text": "+ - * / and % (remainder).",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  a, b := 10, 3\n  fmt.Println(a+b, a-b, a*b, a/b, a%b)\n}"
    },
    {
      "title": "4. Strings",
      "text": "The strings package has helpers.",
      "code": "package main\n\nimport (\n  \"fmt\"\n  \"strings\"\n)\n\nfunc main() {\n  s := \"hello\"\n  fmt.Println(strings.ToUpper(s), len(s))\n  fmt.Println(s + \" world\")\n}"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions (no brackets around the condition).",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  score := 75\n  if score >= 80 {\n    fmt.Println(\"A\")\n  } else if score >= 60 {\n    fmt.Println(\"B\")\n  } else {\n    fmt.Println(\"C\")\n  }\n}"
    },
    {
      "title": "6. For loop",
      "text": "Go has only one loop keyword: for.",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 1; i <= 5; i++ {\n    fmt.Println(\"Number:\", i)\n  }\n}"
    },
    {
      "title": "7. For as a while loop",
      "text": "for with only a condition works like while.",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  n := 3\n  for n > 0 {\n    fmt.Println(\"Countdown:\", n)\n    n--\n  }\n  fmt.Println(\"Go!\")\n}"
    },
    {
      "title": "8. Slices",
      "text": "A slice is a list that can grow.",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fruits := []string{\"apple\", \"banana\"}\n  fruits = append(fruits, \"mango\")\n  fmt.Println(len(fruits))\n  for _, f := range fruits {\n    fmt.Println(f)\n  }\n}"
    },
    {
      "title": "9. Functions",
      "text": "Reusable code. Types come after names.",
      "code": "package main\n\nimport \"fmt\"\n\nfunc add(a int, b int) int {\n  return a + b\n}\n\nfunc main() {\n  fmt.Println(add(2, 3))\n  fmt.Println(add(10, 20))\n}"
    },
    {
      "title": "10. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 1; i <= 15; i++ {\n    if i%15 == 0 {\n      fmt.Println(\"FizzBuzz\")\n    } else if i%3 == 0 {\n      fmt.Println(\"Fizz\")\n    } else if i%5 == 0 {\n      fmt.Println(\"Buzz\")\n    } else {\n      fmt.Println(i)\n    }\n  }\n}"
    }
  ]
},
  "rust": {
  "name": "Rust",
  "color": "#ff8a50",
  "desc": "Safe and very fast systems language.",
  "type": "api",
  "pistonLang": "rust",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "println! prints text in Rust (the ! means it is a macro).",
      "code": "fn main() {\n    println!(\"Hello, World!\");\n}"
    },
    {
      "title": "2. Variables",
      "text": "let makes a variable. Add mut to let it change.",
      "code": "fn main() {\n    let name = \"Ali\";\n    let mut age = 20;\n    age = 21;\n    println!(\"{} is {} years old\", name, age);\n}"
    },
    {
      "title": "3. Math",
      "text": "+ - * / and % work on numbers.",
      "code": "fn main() {\n    let a = 10;\n    let b = 3;\n    println!(\"{} {} {} {} {}\", a + b, a - b, a * b, a / b, a % b);\n}"
    },
    {
      "title": "4. Strings",
      "text": "String is text that can grow. &str is a text slice.",
      "code": "fn main() {\n    let mut s = String::from(\"hello\");\n    s.push_str(\" world\");\n    println!(\"{}\", s);\n    println!(\"{}\", s.to_uppercase());\n    println!(\"{}\", s.len());\n}"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "fn main() {\n    let score = 75;\n    if score >= 80 {\n        println!(\"A\");\n    } else if score >= 60 {\n        println!(\"B\");\n    } else {\n        println!(\"C\");\n    }\n}"
    },
    {
      "title": "6. For loop",
      "text": "1..=5 means 1 to 5 including 5.",
      "code": "fn main() {\n    for i in 1..=5 {\n        println!(\"Number: {}\", i);\n    }\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "fn main() {\n    let mut n = 3;\n    while n > 0 {\n        println!(\"Countdown: {}\", n);\n        n -= 1;\n    }\n    println!(\"Go!\");\n}"
    },
    {
      "title": "8. Vectors",
      "text": "A Vec is a list that can grow.",
      "code": "fn main() {\n    let mut nums = vec![1, 2, 3];\n    nums.push(4);\n    for n in &nums {\n        println!(\"{}\", n);\n    }\n    println!(\"Length: {}\", nums.len());\n}"
    },
    {
      "title": "9. Functions",
      "text": "fn makes a function. -> sets the return type.",
      "code": "fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!(\"{}\", add(2, 3));\n    println!(\"{}\", add(10, 20));\n}"
    },
    {
      "title": "10. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "fn main() {\n    for i in 1..=15 {\n        if i % 15 == 0 {\n            println!(\"FizzBuzz\");\n        } else if i % 3 == 0 {\n            println!(\"Fizz\");\n        } else if i % 5 == 0 {\n            println!(\"Buzz\");\n        } else {\n            println!(\"{}\", i);\n        }\n    }\n}"
    }
  ]
},
  "kotlin": {
  "name": "Kotlin",
  "color": "#a97bff",
  "desc": "Modern language for Android apps.",
  "type": "api",
  "pistonLang": "kotlin",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "Every Kotlin program starts at main(). println prints a line.",
      "code": "fun main() {\n    println(\"Hello, World!\")\n}"
    },
    {
      "title": "2. Variables",
      "text": "val is fixed, var can change.",
      "code": "fun main() {\n    val name = \"Ali\"\n    var age = 20\n    age = 21\n    println(\"$name is $age years old\")\n}"
    },
    {
      "title": "3. Math",
      "text": "+ - * / and % (remainder).",
      "code": "fun main() {\n    val a = 10\n    val b = 3\n    println(a + b)\n    println(a / b)\n    println(a % b)\n    println(a.toDouble() / b)\n}"
    },
    {
      "title": "4. Strings",
      "text": "Use $name inside text to insert values.",
      "code": "fun main() {\n    val s = \"hello\"\n    println(s.uppercase())\n    println(s.length)\n    println(\"${s} world\")\n}"
    },
    {
      "title": "5. If / else",
      "text": "if is also an expression that returns a value.",
      "code": "fun main() {\n    val score = 75\n    val grade = if (score >= 80) \"A\" else if (score >= 60) \"B\" else \"C\"\n    println(grade)\n}"
    },
    {
      "title": "6. For loop",
      "text": "1..5 is a range from 1 to 5.",
      "code": "fun main() {\n    for (i in 1..5) {\n        println(\"Number: $i\")\n    }\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "fun main() {\n    var n = 3\n    while (n > 0) {\n        println(\"Countdown: $n\")\n        n--\n    }\n    println(\"Go!\")\n}"
    },
    {
      "title": "8. Lists",
      "text": "listOf is fixed, mutableListOf can grow.",
      "code": "fun main() {\n    val fruits = mutableListOf(\"apple\", \"banana\")\n    fruits.add(\"mango\")\n    println(fruits.size)\n    for (f in fruits) println(f)\n}"
    },
    {
      "title": "9. Functions",
      "text": "fun makes a function.",
      "code": "fun add(a: Int, b: Int): Int {\n    return a + b\n}\n\nfun main() {\n    println(add(2, 3))\n    println(add(10, 20))\n}"
    },
    {
      "title": "10. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "fun main() {\n    for (i in 1..15) {\n        when {\n            i % 15 == 0 -> println(\"FizzBuzz\")\n            i % 3 == 0 -> println(\"Fizz\")\n            i % 5 == 0 -> println(\"Buzz\")\n            else -> println(i)\n        }\n    }\n}"
    }
  ]
},
  "swift": {
  "name": "Swift",
  "color": "#ff7a59",
  "desc": "Apple's language for iPhone and Mac apps.",
  "type": "api",
  "pistonLang": "swift",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "print() shows text in Swift.",
      "code": "print(\"Hello, World!\")"
    },
    {
      "title": "2. Variables",
      "text": "let is fixed, var can change.",
      "code": "let name = \"Ali\"\nvar age = 20\nage = 21\nprint(\"\\(name) is \\(age) years old\")"
    },
    {
      "title": "3. Math",
      "text": "+ - * / and % (remainder).",
      "code": "let a = 10\nlet b = 3\nprint(a + b)\nprint(a / b)\nprint(a % b)\nprint(Double(a) / Double(b))"
    },
    {
      "title": "4. Strings",
      "text": "Strings have properties like count.",
      "code": "let s = \"hello\"\nprint(s.uppercased())\nprint(s.count)\nprint(s + \" world\")"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "let score = 75\nif score >= 80 {\n    print(\"A\")\n} else if score >= 60 {\n    print(\"B\")\n} else {\n    print(\"C\")\n}"
    },
    {
      "title": "6. For loop",
      "text": "1...5 is a range from 1 to 5.",
      "code": "for i in 1...5 {\n    print(\"Number: \\(i)\")\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "var n = 3\nwhile n > 0 {\n    print(\"Countdown: \\(n)\")\n    n -= 1\n}\nprint(\"Go!\")"
    },
    {
      "title": "8. Arrays",
      "text": "An array holds many values.",
      "code": "var fruits = [\"apple\", \"banana\"]\nfruits.append(\"mango\")\nprint(fruits.count)\nfor f in fruits {\n    print(f)\n}"
    },
    {
      "title": "9. Functions",
      "text": "func makes a function.",
      "code": "func add(_ a: Int, _ b: Int) -> Int {\n    return a + b\n}\nprint(add(2, 3))\nprint(add(10, 20))"
    },
    {
      "title": "10. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "for i in 1...15 {\n    if i % 15 == 0 {\n        print(\"FizzBuzz\")\n    } else if i % 3 == 0 {\n        print(\"Fizz\")\n    } else if i % 5 == 0 {\n        print(\"Buzz\")\n    } else {\n        print(i)\n    }\n}"
    }
  ]
},
  "ruby": {
  "name": "Ruby",
  "color": "#ff4d6d",
  "desc": "Friendly and readable, loved by beginners.",
  "type": "api",
  "pistonLang": "ruby",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "puts prints a line of text in Ruby.",
      "code": "puts \"Hello, World!\""
    },
    {
      "title": "2. Variables",
      "text": "Just write name = value.",
      "code": "name = \"Ali\"\nage = 20\nputs \"#{name} is #{age} years old\""
    },
    {
      "title": "3. Math",
      "text": "+ - * / % and ** (power).",
      "code": "a = 10\nb = 3\nputs a + b\nputs a / b\nputs a % b\nputs a ** b"
    },
    {
      "title": "4. Strings",
      "text": "Strings have many methods.",
      "code": "s = \"hello\"\nputs s.upcase\nputs s.length\nputs s.reverse\nputs s + \" world\""
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions. Blocks end with end.",
      "code": "score = 75\nif score >= 80\n  puts \"A\"\nelsif score >= 60\n  puts \"B\"\nelse\n  puts \"C\"\nend"
    },
    {
      "title": "6. Loops",
      "text": "(1..5) is a range from 1 to 5.",
      "code": "(1..5).each do |i|\n  puts \"Number: #{i}\"\nend"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "n = 3\nwhile n > 0\n  puts \"Countdown: #{n}\"\n  n -= 1\nend\nputs \"Go!\""
    },
    {
      "title": "8. Arrays",
      "text": "An array holds many values.",
      "code": "fruits = [\"apple\", \"banana\"]\nfruits << \"mango\"\nputs fruits.length\nfruits.each { |f| puts f }"
    },
    {
      "title": "9. Hashes",
      "text": "key => value pairs.",
      "code": "person = { name: \"Sara\", age: 22 }\nputs person[:name]\nperson.each { |k, v| puts \"#{k}: #{v}\" }"
    },
    {
      "title": "10. Methods",
      "text": "def makes a method.",
      "code": "def add(a, b)\n  a + b\nend\n\nputs add(2, 3)\nputs add(10, 20)"
    },
    {
      "title": "11. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "(1..15).each do |i|\n  if i % 15 == 0\n    puts \"FizzBuzz\"\n  elsif i % 3 == 0\n    puts \"Fizz\"\n  elsif i % 5 == 0\n    puts \"Buzz\"\n  else\n    puts i\n  end\nend"
    }
  ]
},
  "dart": {
  "name": "Dart",
  "color": "#4dd0e1",
  "desc": "Used with Flutter to build mobile apps.",
  "type": "api",
  "pistonLang": "dart",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "Every Dart program starts at main().",
      "code": "void main() {\n  print('Hello, World!');\n}"
    },
    {
      "title": "2. Variables",
      "text": "Use a type or var.",
      "code": "void main() {\n  String name = 'Ali';\n  int age = 20;\n  double height = 5.9;\n  var city = 'Lahore';\n  print('$name is $age, $height, $city');\n}"
    },
    {
      "title": "3. Math",
      "text": "+ - * / % and ~/ (whole-number division).",
      "code": "void main() {\n  int a = 10, b = 3;\n  print(a + b);\n  print(a / b);\n  print(a ~/ b);\n  print(a % b);\n}"
    },
    {
      "title": "4. Strings",
      "text": "Use $name or ${expression} inside text.",
      "code": "void main() {\n  String s = 'hello';\n  print(s.toUpperCase());\n  print(s.length);\n  print('${s} world');\n}"
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions.",
      "code": "void main() {\n  int score = 75;\n  if (score >= 80) {\n    print('A');\n  } else if (score >= 60) {\n    print('B');\n  } else {\n    print('C');\n  }\n}"
    },
    {
      "title": "6. For loop",
      "text": "Repeat code a set number of times.",
      "code": "void main() {\n  for (var i = 1; i <= 5; i++) {\n    print('Number: $i');\n  }\n}"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "void main() {\n  var n = 3;\n  while (n > 0) {\n    print('Countdown: $n');\n    n--;\n  }\n  print('Go!');\n}"
    },
    {
      "title": "8. Lists",
      "text": "A List holds many values.",
      "code": "void main() {\n  var fruits = ['apple', 'banana'];\n  fruits.add('mango');\n  print(fruits.length);\n  for (var f in fruits) {\n    print(f);\n  }\n}"
    },
    {
      "title": "9. Functions",
      "text": "Reusable code.",
      "code": "int add(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  print(add(2, 3));\n  print(add(10, 20));\n}"
    },
    {
      "title": "10. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "void main() {\n  for (var i = 1; i <= 15; i++) {\n    if (i % 15 == 0) print('FizzBuzz');\n    else if (i % 3 == 0) print('Fizz');\n    else if (i % 5 == 0) print('Buzz');\n    else print(i);\n  }\n}"
    }
  ]
},
  "r": {
  "name": "R",
  "color": "#6c8ebf",
  "desc": "Popular for data analysis and statistics.",
  "type": "api",
  "pistonLang": "r",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "print() shows a value in R.",
      "code": "print(\"Hello, World!\")"
    },
    {
      "title": "2. Variables",
      "text": "The arrow <- stores a value. cat() prints text.",
      "code": "name <- \"Ali\"\nage <- 20\ncat(name, \"is\", age, \"years old\\n\")"
    },
    {
      "title": "3. Math",
      "text": "+ - * / %% (remainder) and ^ (power).",
      "code": "a <- 10\nb <- 3\nprint(a + b)\nprint(a / b)\nprint(a %% b)\nprint(a ^ b)"
    },
    {
      "title": "4. Vectors",
      "text": "A vector holds many values of one type.",
      "code": "nums <- c(10, 20, 30, 40)\nprint(nums)\nprint(sum(nums))\nprint(mean(nums))\nprint(nums[1])"
    },
    {
      "title": "5. Strings",
      "text": "toupper, nchar, paste.",
      "code": "s <- \"hello\"\nprint(toupper(s))\nprint(nchar(s))\nprint(paste(s, \"world\"))"
    },
    {
      "title": "6. If / else",
      "text": "Decide with conditions.",
      "code": "score <- 75\nif (score >= 80) {\n  print(\"A\")\n} else if (score >= 60) {\n  print(\"B\")\n} else {\n  print(\"C\")\n}"
    },
    {
      "title": "7. For loop",
      "text": "1:5 is a range from 1 to 5.",
      "code": "for (i in 1:5) {\n  cat(\"Number:\", i, \"\\n\")\n}"
    },
    {
      "title": "8. While loop",
      "text": "Repeat while a condition is true.",
      "code": "n <- 3\nwhile (n > 0) {\n  cat(\"Countdown:\", n, \"\\n\")\n  n <- n - 1\n}\ncat(\"Go!\\n\")"
    },
    {
      "title": "9. Functions",
      "text": "function() makes a function.",
      "code": "add <- function(a, b) {\n  return(a + b)\n}\nprint(add(2, 3))\nprint(add(10, 20))"
    },
    {
      "title": "10. Data frames",
      "text": "A data frame is a table.",
      "code": "df <- data.frame(name = c(\"Ali\", \"Sara\"), age = c(20, 22))\nprint(df)\nprint(mean(df$age))"
    },
    {
      "title": "11. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "for (i in 1:15) {\n  if (i %% 15 == 0) print(\"FizzBuzz\")\n  else if (i %% 3 == 0) print(\"Fizz\")\n  else if (i %% 5 == 0) print(\"Buzz\")\n  else print(i)\n}"
    }
  ]
},
  "bash": {
  "name": "Bash",
  "color": "#9be564",
  "desc": "Command line scripting for Linux and servers.",
  "type": "api",
  "pistonLang": "bash",
  "steps": [
    {
      "title": "1. Hello, World!",
      "text": "echo prints text in the terminal.",
      "code": "echo \"Hello, World!\""
    },
    {
      "title": "2. Variables",
      "text": "No spaces around =. Use $ to read a variable.",
      "code": "name=\"Ali\"\nage=20\necho \"$name is $age years old\""
    },
    {
      "title": "3. Math",
      "text": "Use $(( )) for math.",
      "code": "a=10\nb=3\necho $((a + b))\necho $((a / b))\necho $((a % b))\necho $((a * b))"
    },
    {
      "title": "4. Strings",
      "text": "${#var} gives the length.",
      "code": "s=\"hello\"\necho ${#s}\necho \"${s^^}\"\necho \"$s world\""
    },
    {
      "title": "5. If / else",
      "text": "Decide with conditions. -ge means greater or equal.",
      "code": "score=75\nif [ $score -ge 80 ]; then\n  echo \"A\"\nelif [ $score -ge 60 ]; then\n  echo \"B\"\nelse\n  echo \"C\"\nfi"
    },
    {
      "title": "6. For loop",
      "text": "Loop through a list of values.",
      "code": "for i in 1 2 3 4 5; do\n  echo \"Number: $i\"\ndone"
    },
    {
      "title": "7. While loop",
      "text": "Repeat while a condition is true.",
      "code": "n=3\nwhile [ $n -gt 0 ]; do\n  echo \"Countdown: $n\"\n  n=$((n - 1))\ndone\necho \"Go!\""
    },
    {
      "title": "8. Arrays",
      "text": "An array holds many values.",
      "code": "fruits=(\"apple\" \"banana\" \"mango\")\nfruits+=(\"orange\")\necho ${#fruits[@]}\nfor f in \"${fruits[@]}\"; do\n  echo $f\ndone"
    },
    {
      "title": "9. Functions",
      "text": "Reusable code.",
      "code": "add() {\n  echo $(($1 + $2))\n}\nadd 2 3\nadd 10 20"
    },
    {
      "title": "10. Mini project: FizzBuzz",
      "text": "Print 1 to 15 with Fizz, Buzz, FizzBuzz.",
      "code": "for i in $(seq 1 15); do\n  if [ $((i % 15)) -eq 0 ]; then echo \"FizzBuzz\"\n  elif [ $((i % 3)) -eq 0 ]; then echo \"Fizz\"\n  elif [ $((i % 5)) -eq 0 ]; then echo \"Buzz\"\n  else echo $i\n  fi\ndone"
    }
  ]
},
};
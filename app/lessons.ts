export type Step = { title: string; text: string; code: string };
export type Lesson = {
  name: string;
  color: string;
  type: "js" | "python" | "web";
  steps: Step[];
};

export const lessons: Record<string, Lesson> = {
  html: {
    name: "HTML",
    color: "#ff7a3d",
    type: "web",
    steps: [
      {
        title: "Your first heading",
        text: "HTML uses tags. A heading uses <h1>. Change the text between the tags and press Run.",
        code: "<h1>Hello, World!</h1>",
      },
      {
        title: "Paragraphs",
        text: "Use <p> for normal text. Add your own paragraph below the heading.",
        code: "<h1>My Page</h1>\n<p>This is my first paragraph.</p>",
      },
      {
        title: "Lists",
        text: "Use <ul> for a list and <li> for each item. Add one more item.",
        code: "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
      },
    ],
  },
  css: {
    name: "CSS",
    color: "#3d9bff",
    type: "web",
    steps: [
      {
        title: "Change text color",
        text: "CSS goes inside <style>. Change 'red' to another color like blue or green.",
        code: "<style>\n  h1 { color: red; }\n</style>\n<h1>Hello CSS</h1>",
      },
      {
        title: "Background and size",
        text: "Use background and font-size to change how things look. Try your own values.",
        code: "<style>\n  body { background: black; }\n  h1 { color: lime; font-size: 48px; }\n</style>\n<h1>Styled!</h1>",
      },
      {
        title: "Boxes and borders",
        text: "Use padding, border and border-radius to make a nice box.",
        code: "<style>\n  .box {\n    padding: 20px;\n    border: 3px solid dodgerblue;\n    border-radius: 16px;\n    color: white;\n    background: #111;\n  }\n</style>\n<div class=\"box\">I am a box</div>",
      },
    ],
  },
  javascript: {
    name: "JavaScript",
    color: "#ffe03d",
    type: "js",
    steps: [
      {
        title: "Print something",
        text: "console.log() shows text in the terminal. Change the message and press Run.",
        code: 'console.log("Hello, World!");',
      },
      {
        title: "Variables",
        text: "A variable stores a value. Use let for values that can change.",
        code: 'let name = "Ali";\nlet age = 20;\nconsole.log(name, "is", age, "years old");',
      },
      {
        title: "Loops",
        text: "A for loop repeats code. This prints numbers 1 to 5. Change 5 to 10.",
        code: "for (let i = 1; i <= 5; i++) {\n  console.log(\"Number:\", i);\n}",
      },
      {
        title: "Functions",
        text: "A function is reusable code. Call it with different names.",
        code: 'function greet(name) {\n  return "Hello, " + name + "!";\n}\nconsole.log(greet("Sara"));\nconsole.log(greet("Ahmed"));',
      },
    ],
  },
  python: {
    name: "Python",
    color: "#22ff55",
    type: "python",
    steps: [
      {
        title: "Print something",
        text: "print() shows text in the terminal. Change the message and press Run.",
        code: 'print("Hello, World!")',
      },
      {
        title: "Variables",
        text: "Python variables need no keyword. Just write name = value.",
        code: 'name = "Ali"\nage = 20\nprint(name, "is", age, "years old")',
      },
      {
        title: "Loops",
        text: "A for loop repeats code. Indentation (spaces) is important in Python.",
        code: "for i in range(1, 6):\n    print(\"Number:\", i)",
      },
      {
        title: "Functions",
        text: "Use def to create a function. Call it with different names.",
        code: 'def greet(name):\n    return "Hello, " + name + "!"\n\nprint(greet("Sara"))\nprint(greet("Ahmed"))',
      },
    ],
  },
};
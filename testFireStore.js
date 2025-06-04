import admin from 'firebase-admin';
import serviceAccount from './firebase-key.json' assert { type: 'json' };
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();



//Azure direct line config
const DIRECT_LINE_SECRET = process.env.DIRECT_LINE_SECRET;
const DIRECT_LINE_URL = process.env.DIRECT_LINE_URL;
// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
const learnt=[]
const learning=learnt.concat([
    {
        "id": 2,
        "name": "Variables and Data Types",
        "lesson_description": "Learn how to store and use different types of data in Python.",
        "content": "Variables allow you to store values in Python programs. Python is dynamically typed, so the type of a variable is inferred from its value. Common data types include integers, floats, strings, and booleans.\n\nExample 1:\nx = 42\n# Stores the integer 42 in variable x\n\nExample 2:\nname = \"Alice\"\nprint(\"Hello, \" + name)\n# Outputs: Hello, Alice\n# Demonstrates string assignment and concatenation",
        "exercise_type": "multiple_choice",
        "exercise": "Which of the following is a valid way to assign a variable in Python?",
        "lesson_answers": ["x = 5", "int x = 5", "x := 5", "let x = 5"],
        "points": 10,
        "language": "python"
      },
      {
    "id": 3,
    "name": "Basic Arithmetic Operators",
    "lesson_description": "Introduction to arithmetic operations like addition and division in Python.",
    "content": "Python supports several basic arithmetic operators that allow you to perform common mathematical operations:\n\n1. **Addition (+)**: Adds two numbers.\nExample:\na = 10\nb = 5\nprint(a + b)\n# Outputs: 15\n\n2. **Subtraction (-)**: Subtracts the second number from the first.\nExample:\na = 10\nb = 5\nprint(a - b)\n# Outputs: 5\n\n3. **Multiplication (*)**: Multiplies two numbers.\nExample:\na = 4\nb = 3\nprint(a * b)\n# Outputs: 12\n\n4. **Division (/)**: Divides the first number by the second and always returns a float in Python 3.\nExample:\na = 10\nb = 2\nprint(a / b)\n# Outputs: 5.0\n\n5. **Modulus (%)**: Returns the remainder after division.\nExample:\na = 9\nb = 4\nprint(a % b)\n# Outputs: 1",
    "exercise_type": "multiple_choice",
    "exercise": "What does the expression '10 / 2' evaluate to in Python?",
    "lesson_answers": ["5.0", "5", "5.00", "0.5"],
    "points": 10,
    "language": "python"
  },
  {
    "id": 4,
    "name": "String Concatenation",
    "lesson_description": "Learn how to combine strings together using the + operator.",
    "content": "String concatenation means joining strings using the `+` operator. You can combine string literals or variables that store strings.\n\nExample 1:\nfirst = \"Hello\"\nsecond = \"World\"\nprint(first + second)\n# Outputs: HelloWorld\n\nExample 2:\nname = \"Sara\"\nprint(\"Hi \" + name + \"!\")\n# Outputs: Hi Sara!",
    "exercise_type": "multiple_choice",
    "exercise": "What will be the result of 'Hello' + 'World'?",
    "lesson_answers": ["HelloWorld", "Hello World", "Hello+World", "SyntaxError"],
    "points": 10,
    "language": "python"
  },
  {
    "id": 5,
    "name": "List Basics",
    "lesson_description": "Introduction to creating and accessing Python lists.",
    "content": "Lists are used to store multiple values in a single variable. They are ordered, mutable, and allow duplicates. You can access list elements using zero-based indexing.\n\nExample 1:\nnumbers = [10, 20, 30]\nprint(numbers[1])\n# Outputs: 20 (second element)\n\nExample 2:\nfruits = [\"apple\", \"banana\", \"cherry\"]\nprint(fruits[0])\n# Outputs: apple (first element)",
    "exercise_type": "multiple_choice",
    "exercise": "What does my_list[1] return if my_list = [10, 20, 30]?",
    "lesson_answers": ["20", "10", "30", "None"],
    "points": 10,
    "language": "python"
  },
  {
    "id": 6,
    "name": "If Statements",
    "lesson_description": "Understand how to use if-else statements to control program flow.",
    "content": "Conditional statements let you run code only when a certain condition is true. Use `if` for conditions, and `else` for alternative logic.\n\nExample 1:\nx = 5\nif x > 3:\n\tprint(\"x is greater than 3\")\n# Outputs: x is greater than 3\n\nExample 2:\nage = 15\nif age >= 18:\n\tprint(\"Adult\")\nelse:\n\tprint(\"Minor\")\n# Outputs: Minor",
    "exercise_type": "multiple_choice",
    "exercise": "Which keyword starts a conditional block in Python?",
    "lesson_answers": ["if", "then", "case", "switch"],
    "points": 10,
    "language": "python"
  },
  {
    "id": 7,
    "name": "Loops: for Loop",
    "lesson_description": "Understand how to iterate using for loops.",
    "content": "The `for` loop in Python is used to iterate over a sequence like a list, tuple, or string.\n\nExample 1:\nfruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n\tprint(fruit)\n# Outputs each fruit in the list\n\nExample 2:\nfor i in range(3):\n\tprint(i)\n# Outputs: 0, 1, 2",
    "exercise_type": "drag_and_drop",
    "exercise": "for i in range(??):\n\tprint(??)\n\nfruits = [\"apple\", \"banana\"]\nfor fruit in ??:\n\tprint(??)",
    "lesson_answers": ["5", "i", "fruits", "fruit"],
    "points": 10,
    "language": "python"
  },
  {
    "id": 8,
    "name": "While Loops",
    "lesson_description": "Learn how to repeat actions while a condition remains true in Python.",
    "content": "While loops allow you to execute a block of code repeatedly as long as a condition is true.\n\nExample 1:\ncount = 0\nwhile count < 3:\n\tprint(count)\n\tcount += 1\n# Outputs: 0 1 2\n\nExample 2:\npassword = \"\"\nwhile password != \"secret\":\n\tpassword = input(\"Enter password: \")\n# Keeps asking until correct password is entered",
    "exercise_type": "drag_and_drop",
    "exercise": "count = 0\nwhile count ?? 5:\n\tprint(??)\n\tcount ?? 1\n\npassword = \"\"\nwhile password ?? \"secret\":\n\tpassword = input(\"Enter password: \")",
    "lesson_answers": ["<", "count", "+=", "!="],
    "points": 10,
    "language": "python"
  },
  {
    "id": 9,
    "name": "Functions",
    "lesson_description": "Discover how to define and call reusable blocks of code called functions.",
    "content": "Functions let you encapsulate code into reusable blocks with inputs and outputs.\n\nExample 1:\ndef greet(name):\n\tprint(\"Hello, \" + name)\ngreet(\"Alice\")\n# Outputs: Hello, Alice\n\nExample 2:\ndef add(a, b):\n\treturn a + b\nresult = add(3, 4)\nprint(result)\n# Outputs: 7",
    "exercise_type": "drag_and_drop",
    "exercise": "def greet(??):\n\tprint(\"Hello, \" + ??)\ngreet(\"Alice\")\n\ndef add(a, ??):\n\treturn a ?? b\nresult = add(3, 4)\nprint(result)",
    "lesson_answers": ["name", "name", "b", "+"],
    "points": 10,
    "language": "python"
  },
  {
    "id": 10,
    "name": "Dictionaries",
    "lesson_description": "Learn about dictionaries for storing key-value pairs in Python.",
    "content": "Dictionaries store data in key-value pairs. You can access values by their keys.\n\nExample 1:\nstudent = {\"name\": \"Alice\", \"age\": 20}\nprint(student[\"name\"])\n# Outputs: Alice\n\nExample 2:\nstudent[\"grade\"] = \"A\"\nprint(student)\n# Outputs: {'name': 'Alice', 'age': 20, 'grade': 'A'}",
    "exercise_type": "drag_and_drop",
    "exercise": "student = {\"name\": \"Alice\", \"age\": ??}\nprint(student[??])\nstudent[\"grade\"] = ??\nprint(student)",
    "lesson_answers": ["20", "\"name\"", "\"A\""],
    "points": 10,
    "language": "python"
  },
  {
    "id": 11,
    "name": "Classes and Objects",
    "lesson_description": "Introduction to object-oriented programming with classes and objects in Python.",
    "content": "Classes define blueprints for objects, which can have attributes and methods.\n\nExample 1:\nclass Dog:\n\tdef __init__(self, name):\n\t\tself.name = name\n\tdef bark(self):\n\t\tprint(\"Woof!\")\n\nmy_dog = Dog(\"Rex\")\nmy_dog.bark()\n# Outputs: Woof!\n\nExample 2:\nprint(my_dog.name)\n# Outputs: Rex",
    "exercise_type": "drag_and_drop",
    "exercise": "class Dog:\n\tdef __init__(self, ??):\n\t\tself.name = ??\n\tdef bark(self):\n\t\tprint(??)\n\nmy_dog = Dog(\"Rex\")\nmy_dog.??()",
    "lesson_answers": ["name", "name", "\"Woof!\"", "bark"],
    "points": 10,
    "language": "python"
  }
])
async function store(value,spot){
    const newspot=spot+2
    const content = await admin.firestore().collection('lessons').doc("Lesson"+newspot.toString()).set(
        value
)
console.log(content)}
for (const [index, element] of learning.entries()) {
    await store(element, index);
  }


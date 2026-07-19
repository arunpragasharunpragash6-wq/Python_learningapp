const lessons = [
  {
    module: "Getting Started",
    tag: "Basics",
    title: "Print Statements",
    summary: "Start by making Python show text on the screen.",
    why: "Printing is the first feedback loop in coding. It helps beginners see what the computer is doing.",
    before: "No coding experience needed",
    after: "You can display text and simple values",
    concept: "print() tells Python to display a message or value.",
    analogy: "It is like asking the computer to speak one line.",
    syntaxTip: 'Text must go inside quotes, like print("Hello").',
    commonMistake: "Using smart quotes or forgetting the closing quote causes errors.",
    code: 'print("My name is Arun")\nprint("I want to become a data analyst")',
    explanation: "Each print() runs one line. Python reads the first line, then the next line.",
    practice: "Write two print() statements. Show your name and your dream job.",
    hint: 'Try: print("My name is Arun")',
    quiz: { question: "What does print() do?", options: ["Shows output", "Stores a value", "Repeats a loop"], answer: 0 },
    videos: [
      { label: "Watch print() lesson", url: "https://www.youtube.com/watch?v=-aaxDwPWNLQ" },
      { label: "Backup print() lesson", url: "https://www.youtube.com/watch?v=Ow2cLWa7jto" }
    ]
  },
  {
    module: "Getting Started",
    tag: "Variables",
    title: "Variables",
    summary: "Variables save data so you can use it again later.",
    why: "Almost every Python program stores values, so variables are one of the most important foundations.",
    before: "You can print text",
    after: "You can store and reuse data",
    concept: "A variable is a name that points to a value.",
    analogy: "Think of it like a labeled box storing one piece of information.",
    syntaxTip: 'Use = to assign a value. Example: name = "Arun"',
    commonMistake: "Putting quotes around the variable name itself changes it into plain text.",
    code: 'name = "Arun"\ngoal = "Data Analyst"\nprint(name)\nprint(goal)',
    explanation: "The value is stored once and reused many times.",
    practice: "Create variables for your city and your favorite subject. Print both.",
    hint: 'Example: city = "Chennai"',
    quiz: { question: "Why do we use variables?", options: ["To store data", "To create errors", "To close Python"], answer: 0 },
    videos: [
      { label: "Watch variables lesson", url: "https://www.youtube.com/watch?v=Rtmgt2Qfqr4" },
      { label: "Backup variables lesson", url: "https://www.youtube.com/watch?v=PdnYlSKVpSw" }
    ]
  },
  {
    module: "Getting Started",
    tag: "Data Types",
    title: "Strings and Numbers",
    summary: "Python handles text and numbers differently.",
    why: "Understanding types prevents confusion when your code behaves differently than you expect.",
    before: "You can store simple values",
    after: "You can tell text apart from numbers",
    concept: "Strings are text. Integers and floats are numeric values.",
    analogy: "Text is like a note. Numbers are like quantities you can calculate.",
    syntaxTip: "Strings use quotes. Numbers do not.",
    commonMistake: "Trying to add a string and a number directly causes a type error.",
    code: 'name = "Arun"\nage = 22\nprint(name)\nprint(age + 5)',
    explanation: "Python can do math with numbers, but text behaves differently.",
    practice: "Create one string variable and one number variable, then print both.",
    hint: "Example: age = 21",
    quiz: { question: "Which one is a string?", options: ['"Python"', "10", "3.14"], answer: 0 },
    videos: [
      { label: "Watch data types lesson", url: "https://www.youtube.com/watch?v=_Z-gxEAhQgg" },
      { label: "Backup data types lesson", url: "https://www.youtube.com/watch?v=Rtmgt2Qfqr4" }
    ]
  },
  {
    module: "Getting Started",
    tag: "Operators",
    title: "Math and Operators",
    summary: "Operators help Python do calculations and comparisons.",
    why: "Programs often need to calculate and compare values before making decisions.",
    before: "You know numbers and variables",
    after: "You can do math and comparisons",
    concept: "Operators like +, -, *, /, ==, and > help you work with values.",
    analogy: "They are the action symbols in your instructions.",
    syntaxTip: "Use == to compare values. Use = only for assignment.",
    commonMistake: "Using = instead of == inside conditions changes code meaning.",
    code: "a = 10\nb = 3\nprint(a + b)\nprint(a * b)\nprint(a > b)",
    explanation: "You can use operators both for arithmetic and for true or false checks.",
    practice: "Create two numbers and print their sum, product, and comparison result.",
    hint: "Try using +, *, and >.",
    quiz: { question: "Which operator checks equality?", options: ["==", "=", "+"], answer: 0 },
    videos: [
      { label: "Watch operators lesson", url: "https://www.youtube.com/watch?v=pw1VmMUAgrA" },
      { label: "Backup operators lesson", url: "https://www.youtube.com/watch?v=qMlmKLxRuIU" }
    ]
  },
  {
    module: "Control Flow",
    tag: "Input",
    title: "User Input",
    summary: "Your programs can ask users for information.",
    why: "Input makes programs interactive and closer to real applications.",
    before: "You can print values",
    after: "You can receive user responses",
    concept: "input() waits for the user to type something and press Enter.",
    analogy: "It is like your program asking a question and listening for the answer.",
    syntaxTip: "Use input() and store the result in a variable.",
    commonMistake: "input() returns text, so numbers must be converted when needed.",
    code: 'name = input("Enter your name: ")\nprint("Welcome, " + name)',
    explanation: "This makes your program interactive instead of fixed.",
    practice: "Ask the user for their favorite food and print a sentence with it.",
    hint: 'Try: food = input("Favorite food: ")',
    defaultInput: "Arun",
    quiz: { question: "What does input() return?", options: ["Text from the user", "A loop", "A Python file"], answer: 0 },
    videos: [
      { label: "Watch input() lesson", url: "https://www.youtube.com/watch?v=cKUX6gwCa9c" },
      { label: "Backup input() lesson", url: "https://www.youtube.com/watch?v=QlmMRsJo-Eo" }
    ]
  },
  {
    module: "Control Flow",
    tag: "Conditions",
    title: "If Statements",
    summary: "Python can make decisions based on conditions.",
    why: "Decision-making is essential for writing code that reacts to different situations.",
    before: "You can compare values",
    after: "You can run code only when a condition is true",
    concept: "if checks whether something is true and runs code only if it is true.",
    analogy: "If it rains, take an umbrella. Otherwise, do something else.",
    syntaxTip: "Put a colon after the condition and indent the next line.",
    commonMistake: "Missing indentation is one of the most common beginner errors.",
    code: 'age = 18\nif age >= 18:\n    print("You can vote")',
    explanation: "The indented line belongs to the if block.",
    practice: "Create a mark variable and print a message if it is greater than 50.",
    hint: "Remember the colon after the condition.",
    quiz: { question: "What does if do?", options: ["Checks a condition", "Stores text", "Creates a list"], answer: 0 },
    videos: [
      { label: "Watch if lesson", url: "https://www.youtube.com/watch?v=Xa0IXpmRD0s" },
      { label: "Backup if lesson", url: "https://www.youtube.com/watch?v=eYtf9a8LoIg" }
    ]
  },
  {
    module: "Control Flow",
    tag: "Conditions",
    title: "If Else",
    summary: "Programs can choose between two actions.",
    why: "Most real programs need to handle both success and fallback paths.",
    before: "You know basic if statements",
    after: "You can branch between two outcomes",
    concept: "if handles the true case. else handles the other case.",
    analogy: "If you pass, celebrate. Else, practice more.",
    syntaxTip: "else has no condition. It runs when the if condition is false.",
    commonMistake: "Writing else with a condition is invalid syntax.",
    code: 'mark = 35\nif mark >= 35:\n    print("Pass")\nelse:\n    print("Fail")',
    explanation: "This lets your program branch in two directions.",
    practice: "Write an if else program that checks if a number is even or odd.",
    hint: "Use % 2 to check remainder.",
    quiz: { question: "When does else run?", options: ["When if is false", "When if is true", "Always"], answer: 0 },
    videos: [
      { label: "Watch if else lesson", url: "https://www.youtube.com/watch?v=Xa0IXpmRD0s" },
      { label: "Backup if else lesson", url: "https://www.youtube.com/watch?v=eYtf9a8LoIg" }
    ]
  },
  {
    module: "Control Flow",
    tag: "Loops",
    title: "For Loops",
    summary: "Loops repeat code without rewriting it again and again.",
    why: "Repetition is one of programming's biggest powers, and loops save a lot of manual work.",
    before: "You understand indentation",
    after: "You can repeat actions a fixed number of times",
    concept: "A for loop repeats a block for each item in a sequence.",
    analogy: "It is like saying clap 5 times instead of writing clap five times.",
    syntaxTip: "range(5) gives 0, 1, 2, 3, 4.",
    commonMistake: "Forgetting indentation makes the loop body invalid.",
    code: 'for number in range(5):\n    print("Practice", number)',
    explanation: "The loop runs the indented block once for every number.",
    practice: "Write a loop that prints your favorite word 3 times.",
    hint: "Use for item in range(3):",
    quiz: { question: "Why do we use loops?", options: ["To repeat actions", "To end the program", "To rename variables"], answer: 0 },
    videos: [
      { label: "Watch for loop lesson", url: "https://www.youtube.com/watch?v=zwM_9R37pyo" },
      { label: "Backup for loop lesson", url: "https://www.youtube.com/watch?v=KqcoSw937iM" }
    ]
  },
  {
    module: "Control Flow",
    tag: "Loops",
    title: "While Loops",
    summary: "A while loop runs as long as a condition stays true.",
    why: "While loops help when repetition depends on a changing condition rather than a fixed count.",
    before: "You know conditions",
    after: "You can build condition-based repetition",
    concept: "while is useful when you do not know in advance how many repeats you need.",
    analogy: "Keep walking while the road is open.",
    syntaxTip: "Make sure the condition can eventually become false.",
    commonMistake: "If the condition never changes, the loop can run forever.",
    code: 'count = 1\nwhile count <= 3:\n    print(count)\n    count += 1',
    explanation: "The variable changes each time, so the loop stops correctly.",
    practice: "Write a while loop that prints numbers from 1 to 5.",
    hint: "Start with count = 1 and increase it.",
    quiz: { question: "What is the biggest risk with while?", options: ["Infinite loops", "No variables", "No output"], answer: 0 },
    videos: [
      { label: "Watch while loop lesson", url: "https://www.youtube.com/watch?v=Np3fzqoaYQw" },
      { label: "Backup while loop lesson", url: "https://www.youtube.com/watch?v=KqcoSw937iM" }
    ]
  },
  {
    module: "Functions and Reuse",
    tag: "Functions",
    title: "Functions",
    summary: "Functions help you organize reusable blocks of code.",
    why: "As programs grow, reusable code blocks make your work cleaner and easier to maintain.",
    before: "You can write repeated code",
    after: "You can group reusable logic in named blocks",
    concept: "A function is a named block you can call whenever needed.",
    analogy: "It is like saving a repeated task as one button.",
    syntaxTip: "Use def to create a function and parentheses when you call it.",
    commonMistake: "Defining a function does nothing until you call it.",
    code: 'def greet(name):\n    print("Hello", name)\n\ngreet("Arun")',
    explanation: "You create the function once and call it with different values.",
    practice: "Create a function that prints a welcome message with a name.",
    hint: "Try: def welcome(name):",
    quiz: { question: "Why are functions useful?", options: ["Reuse code", "Delete lists", "Replace loops"], answer: 0 },
    videos: [
      { label: "Watch functions lesson", url: "https://www.youtube.com/watch?v=kuHFSp4iCPM" },
      { label: "Backup functions lesson", url: "https://www.youtube.com/watch?v=LUsutUdSmw8" }
    ]
  },
  {
    module: "Functions and Reuse",
    tag: "Functions",
    title: "Parameters and Return",
    summary: "Functions can receive values and send results back.",
    why: "Parameters and return values make functions flexible and useful in bigger programs.",
    before: "You can define and call a function",
    after: "You can build useful functions that produce results",
    concept: "Parameters let a function accept input. return sends a value back.",
    analogy: "It is like giving ingredients to a cook and getting a finished dish back.",
    syntaxTip: "Use return when you want to use the result later.",
    commonMistake: "Printing inside a function is not the same as returning a value.",
    code: 'def add(a, b):\n    return a + b\n\nresult = add(3, 4)\nprint(result)',
    explanation: "The function calculates a result and gives it back to the caller.",
    practice: "Write a function that returns the square of a number.",
    hint: "Try: def square(n): return n * n",
    quiz: { question: "What does return do?", options: ["Sends a value back", "Starts a loop", "Creates input"], answer: 0 },
    videos: [
      { label: "Watch return lesson", url: "https://www.youtube.com/watch?v=LUsutUdSmw8" },
      { label: "Backup parameters lesson", url: "https://www.youtube.com/watch?v=kuHFSp4iCPM" }
    ]
  },
  {
    module: "Collections",
    tag: "Collections",
    title: "Lists",
    summary: "Lists store multiple values in one place.",
    why: "Most real programs work with groups of items, and lists are the first major collection type.",
    before: "You know variables and values",
    after: "You can store and access many items together",
    concept: "A list is an ordered collection of items.",
    analogy: "Think of it like a school attendance list.",
    syntaxTip: "Lists use square brackets: [ ]",
    commonMistake: "Using parentheses creates a tuple, not a list.",
    code: 'fruits = ["apple", "banana", "mango"]\nprint(fruits[0])\nprint(len(fruits))',
    explanation: "You can access items by index and count items with len().",
    practice: "Create a list of three colors and print the second color.",
    hint: 'Example: colors = ["red", "green", "blue"]',
    quiz: { question: "Which brackets do lists use?", options: ["[ ]", "( )", "{ }"], answer: 0 },
    videos: [
      { label: "Watch lists lesson", url: "https://www.youtube.com/watch?v=jZda5xVaRFA" },
      { label: "Backup lists lesson", url: "https://www.youtube.com/watch?v=vckwTogwT-Y" }
    ]
  },
  {
    module: "Collections",
    tag: "Collections",
    title: "List Methods",
    summary: "Lists can grow, shrink, and change using built-in methods.",
    why: "Once learners know lists exist, they need practical ways to add, remove, and inspect items.",
    before: "You know basic lists",
    after: "You can modify lists confidently",
    concept: "Methods like append(), pop(), and remove() help manage list data.",
    analogy: "It is like editing a shopping list by adding or crossing out items.",
    syntaxTip: "Use list_name.append(value) to add an item.",
    commonMistake: "append() adds one item, while extend() adds multiple items.",
    code: 'items = ["pen", "book"]\nitems.append("bag")\nitems.pop()\nprint(items)',
    explanation: "Methods are actions attached to an object, such as a list.",
    practice: "Create a list, append one item, then print the result.",
    hint: 'Example: names.append("Arun")',
    quiz: { question: "Which method adds one item to a list?", options: ["append()", "print()", "range()"], answer: 0 },
    videos: [
      { label: "Watch list methods lesson", url: "https://www.youtube.com/watch?v=vckwTogwT-Y" },
      { label: "Backup list methods lesson", url: "https://www.youtube.com/watch?v=jZda5xVaRFA" }
    ]
  },
  {
    module: "Collections",
    tag: "Collections",
    title: "Tuples and Sets",
    summary: "Python has more collection types than lists.",
    why: "Different collection types solve different problems, and this is where learners start to choose wisely.",
    before: "You know lists",
    after: "You can distinguish fixed and unique collections",
    concept: "Tuples are ordered and usually unchanged. Sets store unique values.",
    analogy: "A tuple is a locked record. A set is a bag with no duplicates.",
    syntaxTip: "Tuples often use parentheses, sets use curly braces with unique items.",
    commonMistake: "An empty set is created with set(), not {}.",
    code: 'point = (10, 20)\ncolors = {"red", "blue", "red"}\nprint(point)\nprint(colors)',
    explanation: "The set removes duplicates automatically.",
    practice: "Create one tuple and one set, then print both.",
    hint: "Try: nums = {1, 2, 2, 3}",
    quiz: { question: "Which collection removes duplicates?", options: ["set", "tuple", "string"], answer: 0 },
    videos: [
      { label: "Watch tuple and set lesson", url: "https://www.youtube.com/watch?v=InkrJ8J3RTg" },
      { label: "Backup tuple and set lesson", url: "https://www.youtube.com/watch?v=ryCTiTNM3nY" }
    ]
  },
  {
    module: "Collections",
    tag: "Collections",
    title: "Dictionaries",
    summary: "Dictionaries store data as key and value pairs.",
    why: "Dictionaries are essential for structured information like users, products, and configurations.",
    before: "You know variables and collections",
    after: "You can model labeled data",
    concept: "A dictionary links one value to another, like a label and its meaning.",
    analogy: "It is like a contact card with name, phone, and city fields.",
    syntaxTip: "Dictionaries use curly braces and key:value pairs.",
    commonMistake: "Keys must be spelled exactly when you access them.",
    code: 'student = {"name": "Arun", "age": 22, "city": "Madurai"}\nprint(student["name"])\nprint(student["city"])',
    explanation: "Dictionaries are useful when values have clear labels.",
    practice: "Create a dictionary with your name and favorite language, then print one value.",
    hint: 'Example: info = {"name": "Arun"}',
    quiz: { question: "What does a dictionary store?", options: ["Key-value pairs", "Only numbers", "Only loops"], answer: 0 },
    videos: [
      { label: "Watch dictionary lesson", url: "https://www.youtube.com/watch?v=1GbPDbHIOv4" },
      { label: "Backup dictionary lesson", url: "https://www.youtube.com/watch?v=Y3l6mk0oK88" }
    ]
  },
  {
    module: "Working With Data",
    tag: "Strings",
    title: "String Methods",
    summary: "Strings have built-in tools for cleaning and changing text.",
    why: "Text handling appears everywhere, from names and messages to user input and file data.",
    before: "You know strings",
    after: "You can transform text values",
    concept: "Methods like upper(), lower(), strip(), and replace() help edit text.",
    analogy: "It is like cleaning and formatting a sentence before using it.",
    syntaxTip: "Methods are called with dots, like name.upper().",
    commonMistake: "String methods return a new string; they do not usually change the original one in place.",
    code: 'name = "  arun  "\nprint(name.strip())\nprint(name.upper())',
    explanation: "You can remove spaces and format text more clearly.",
    practice: "Create a string with extra spaces and print the cleaned version.",
    hint: 'Try: text = "  python  "',
    quiz: { question: "Which method removes spaces at the ends?", options: ["strip()", "append()", "sort()"], answer: 0 },
    videos: [
      { label: "Watch string methods lesson", url: "https://www.youtube.com/watch?v=8ext9G7xspg" },
      { label: "Backup string lesson", url: "https://www.youtube.com/watch?v=k9TUPpGqYTo" }
    ]
  },
  {
    module: "Working With Data",
    tag: "Loops",
    title: "Looping Through Lists",
    summary: "Python can process each list item one by one.",
    why: "This is the bridge between data collections and useful automation.",
    before: "You know lists and loops",
    after: "You can repeat work across many values",
    concept: "A for loop can visit each item in a list.",
    analogy: "It is like reading names one by one from an attendance sheet.",
    syntaxTip: "Use for item in items: and indent the next line.",
    commonMistake: "Trying to print the whole list inside the loop instead of the current item is common.",
    code: 'fruits = ["apple", "banana", "mango"]\nfor fruit in fruits:\n    print(fruit)',
    explanation: "Each loop cycle stores the next item in fruit.",
    practice: "Create a list of 3 skills and print each one using a loop.",
    hint: 'Example: for skill in skills:',
    quiz: { question: "What does the loop variable contain?", options: ["One item at a time", "The whole file", "A new function"], answer: 0 },
    videos: [
      { label: "Watch list loop lesson", url: "https://www.youtube.com/watch?v=zwM_9R37pyo" },
      { label: "Backup loop lesson", url: "https://www.youtube.com/watch?v=vckwTogwT-Y" }
    ]
  },
  {
    module: "Working With Data",
    tag: "Logic",
    title: "Boolean Values",
    summary: "Booleans represent true or false.",
    why: "Conditions in Python depend on boolean thinking.",
    before: "You know comparisons",
    after: "You can reason about true and false states",
    concept: "A boolean is either True or False.",
    analogy: "It is like a switch that is either on or off.",
    syntaxTip: "Python uses capitalized True and False.",
    commonMistake: "Using quotes turns booleans into strings instead of real boolean values.",
    code: "is_ready = True\nprint(is_ready)\nprint(5 > 2)",
    explanation: "Comparisons often create boolean results.",
    practice: "Create one boolean variable and print it.",
    hint: "Try: passed = True",
    quiz: { question: "What are the two boolean values?", options: ["True and False", "Yes and No", "1 and 0 only"], answer: 0 },
    videos: [
      { label: "Watch boolean lesson", url: "https://www.youtube.com/watch?v=Y3l6mk0oK88" },
      { label: "Backup boolean lesson", url: "https://www.youtube.com/watch?v=eYtf9a8LoIg" }
    ]
  },
  {
    module: "Files and Errors",
    tag: "Files",
    title: "Reading Files",
    summary: "Python can open files and read their contents.",
    why: "Real programs often work with saved information, not only values typed in code.",
    before: "You know strings and variables",
    after: "You can read from a file safely",
    concept: "open() gives access to a file, and read() pulls out the text inside it.",
    analogy: "It is like opening a notebook and reading every line.",
    syntaxTip: "Use with open(...) as file: to close files safely.",
    commonMistake: "Forgetting the file path or file mode can cause errors.",
    code: 'with open("sample.txt", "w") as file:\n    file.write("Hello file")\n\nwith open("sample.txt", "r") as file:\n    print(file.read())',
    explanation: "The with block handles opening and closing for you.",
    practice: "Write text to a file, then read it and print it.",
    hint: 'Use with open("notes.txt", "w") as file:',
    quiz: { question: "Why use with open()?", options: ["It closes files safely", "It creates loops", "It prints automatically"], answer: 0 },
    videos: [
      { label: "Watch file handling lesson", url: "https://www.youtube.com/watch?v=m2xIFRXHnJY" },
      { label: "Backup file handling lesson", url: "https://www.youtube.com/watch?v=X6DPUR-P300" }
    ]
  },
  {
    module: "Files and Errors",
    tag: "Errors",
    title: "Exceptions",
    summary: "Errors happen, and Python gives you ways to handle them.",
    why: "Beginners need to learn that errors are normal and manageable, not a sign to stop coding.",
    before: "You can run simple programs",
    after: "You can catch and respond to some runtime errors",
    concept: "try and except let your code handle errors without crashing immediately.",
    analogy: "It is like having a backup plan when something goes wrong.",
    syntaxTip: "Put risky code in try and the fallback in except.",
    commonMistake: "Catching every error too broadly can hide useful debugging information.",
    code: 'try:\n    number = int(input("Enter a number: "))\n    print(number)\nexcept ValueError:\n    print("Please enter a valid number")',
    explanation: "If conversion fails, the except block runs instead.",
    practice: "Write a try except block around int(input()).",
    hint: "Use except ValueError:",
    defaultInput: "abc",
    quiz: { question: "What is try/except used for?", options: ["Handling errors", "Creating files", "Making lists"], answer: 0 },
    videos: [
      { label: "Watch exception handling lesson", url: "https://www.youtube.com/watch?v=Z09I_OHuflw" },
      { label: "Backup exception handling lesson", url: "https://www.youtube.com/watch?v=S3tpgJTnxZ0" }
    ]
  },
  {
    module: "Bigger Programs",
    tag: "Modules",
    title: "Modules and Imports",
    summary: "Python can reuse code from other files and built-in libraries.",
    why: "Imports help learners understand that Python is larger than one file and full of ready-made tools.",
    before: "You know functions",
    after: "You can use built-in modules like math",
    concept: "import brings code from another module into your program.",
    analogy: "It is like borrowing a tool from a toolbox instead of building it from scratch.",
    syntaxTip: "Use import math, then call math.sqrt(16).",
    commonMistake: "Forgetting the module name prefix after import can cause NameError.",
    code: "import math\nprint(math.sqrt(16))\nprint(math.ceil(3.2))",
    explanation: "The math module gives you useful numeric tools.",
    practice: "Import math and print the square root of 25.",
    hint: "Try: import math",
    quiz: { question: "What does import do?", options: ["Brings in code from a module", "Deletes variables", "Starts a loop"], answer: 0 },
    videos: [
      { label: "Watch modules and import lesson", url: "https://www.youtube.com/watch?v=_svsU0cS9dI" }
    ]
  },
  {
    module: "Bigger Programs",
    tag: "OOP",
    title: "Classes and Objects",
    summary: "Classes help you model real-world things with data and behavior.",
    why: "Object-oriented thinking becomes important when learners move toward larger applications.",
    before: "You know functions and dictionaries",
    after: "You can create simple objects",
    concept: "A class is a blueprint. An object is one created thing from that blueprint.",
    analogy: "A class is like a house plan. An object is one built house.",
    syntaxTip: "Use class to define structure and __init__ to set starting values.",
    commonMistake: "Forgetting self in method definitions is a common beginner issue.",
    code: 'class Student:\n    def __init__(self, name):\n        self.name = name\n\nstudent = Student("Arun")\nprint(student.name)',
    explanation: "The object stores its own data through attributes like name.",
    practice: "Create a simple class with one attribute and print it.",
    hint: "Try: class Car:",
    quiz: { question: "What is a class?", options: ["A blueprint for objects", "A loop type", "A file mode"], answer: 0 },
    videos: [
      { label: "Watch classes and objects lesson", url: "https://www.youtube.com/watch?v=rltSHY2Y7-c" },
      { label: "Backup classes and objects lesson", url: "https://www.youtube.com/watch?v=jfkGVfBaNDU" }
    ]
  },
  {
    module: "Bigger Programs",
    tag: "Projects",
    title: "Mini Project Thinking",
    summary: "A good beginner course should show how concepts combine into small real projects.",
    why: "Projects help learners connect separate concepts into practical confidence.",
    before: "You know the core Python building blocks",
    after: "You can plan and start small apps on your own",
    concept: "Projects combine input, conditions, loops, functions, and collections.",
    analogy: "It is like using many tools together to build one small machine.",
    syntaxTip: "Break bigger problems into smaller steps before writing code.",
    commonMistake: "Trying to write the whole project at once makes beginners feel stuck.",
    code: 'tasks = []\nwhile True:\n    task = input("Add task or quit: ")\n    if task == "quit":\n        break\n    tasks.append(task)\nprint(tasks)',
    explanation: "Even a tiny to-do app can combine multiple Python concepts.",
    practice: "Modify this project idea into a list of your own study tasks.",
    hint: 'Try adding items like "practice loops"',
    defaultInput: "practice variables\npractice loops\nquit",
    quiz: { question: "What makes a mini project useful?", options: ["It combines concepts", "It removes syntax", "It avoids practice"], answer: 0 },
    videos: [
      { label: "Watch Python mini projects lesson", url: "https://www.youtube.com/watch?v=1v0qtjUKAU8" },
      { label: "Backup Python mini projects lesson", url: "https://www.youtube.com/watch?v=sDNMYB3ZBtk" }
    ]
  }
];

const authStorageKey = "python-zero-auth-token";

const moduleDescriptions = {
  "Getting Started": "First steps: output, variables, data types, and operators",
  "Control Flow": "Input, conditions, and loops",
  "Functions and Reuse": "Reusable logic and return values",
  Collections: "Lists, tuples, sets, and dictionaries",
  "Working With Data": "Strings and iterating through collections",
  "Files and Errors": "Files, input safety, and exceptions",
  "Bigger Programs": "Imports, objects, and mini projects"
};

const defaultState = {
  lessonIndex: 0,
  challengePassed: [],
  quizPassed: [],
  completedLessons: [],
  startedLessons: [],
  lessonDrafts: {},
  quizHistory: {},
  challengeProgress: {},
  activityDates: [],
  timeSpentSeconds: 0,
  lastActiveAt: null
};

const lessonExtras = {
  "Print Statements": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a student ID card generator for his college fest. Print your name on one line and your dream job on the next line.",
        "successText": "Show two output lines.",
        "tip": "Use one print() for each line.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a welcome screen for a mobile app. Print three separate lines: your city, your hobby, and your favorite food.",
        "successText": "Show three output lines.",
        "tip": "Call print() three separate times.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a name tag printer for an office event. Print a short sentence, then print a blank line, then print another sentence.",
        "successText": "Show two visible text lines.",
        "tip": "An empty print() adds a blank line between text.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal intro card for his coding portfolio. Print your name and age together in one line using a comma inside print().",
        "successText": "Show one line containing a number.",
        "tip": "print(\"Name\", 22) joins values with a space automatically.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a greeting screen for a canteen kiosk. Print a sentence that includes a number, like which day of learning this is.",
        "successText": "Show one line with a digit in it.",
        "tip": "Combine text and a number inside the same print() using a comma.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a simple profile card generator. Print a sentence that contains an apostrophe, like I'm learning Python.",
        "successText": "Show one output line.",
        "tip": "Use double quotes so the apostrophe does not break the string.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What does print() do?",
        "options": [
          "Shows output on the screen",
          "Stores a value",
          "Repeats a loop"
        ],
        "answer": 0
      },
      {
        "question": "Which symbol wraps text so Python treats it as a string?",
        "options": [
          "Quotes",
          "Brackets",
          "Parentheses only"
        ],
        "answer": 0
      },
      {
        "question": "How many output lines do two separate print() calls produce?",
        "options": [
          "Two lines",
          "One line",
          "Zero lines"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you forget the closing quote in print(\"hello)?",
        "options": [
          "Python raises a syntax error",
          "Python prints nothing silently",
          "Python guesses the missing quote"
        ],
        "answer": 0
      },
      {
        "question": "Which of these correctly prints text?",
        "options": [
          "print(\"Hi\")",
          "print(Hi)",
          "printf(\"Hi\")"
        ],
        "answer": 0
      },
      {
        "question": "What does print() with no arguments do?",
        "options": [
          "Prints an empty line",
          "Causes an error",
          "Does nothing at all"
        ],
        "answer": 0
      },
      {
        "question": "Can print() show numbers without quotes?",
        "options": [
          "Yes, numbers do not need quotes",
          "No, numbers must be quoted",
          "Only if imported"
        ],
        "answer": 0
      },
      {
        "question": "What is displayed by print(\"2\" + \"3\")?",
        "options": [
          "\"23\" as text",
          "5",
          "An error"
        ],
        "answer": 0
      },
      {
        "question": "Which statement is true about print()?",
        "options": [
          "It is a built-in Python function",
          "It must be imported from a module",
          "It only works inside loops"
        ],
        "answer": 0
      },
      {
        "question": "What does the comma do inside print(\"Age:\", 20)?",
        "options": [
          "Adds a space and joins values in one line",
          "Starts a new line",
          "Causes an error"
        ],
        "answer": 0
      }
    ]
  },
  "Variables": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a student ID card generator for his college fest. Create two variables and print both values.",
        "successText": "Show two output lines.",
        "tip": "Store the value first, then print the variable name without quotes.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a welcome screen for a mobile app. Create variables for your city and favorite subject, then print both.",
        "successText": "Show two output lines.",
        "tip": "Use = to assign a value to each variable.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a name tag printer for an office event. Create a variable, print it, then change its value and print it again.",
        "successText": "Show two different output lines.",
        "tip": "Reassigning a variable replaces its old value.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal intro card for his coding portfolio. Store your age in a variable and print a sentence containing that number.",
        "successText": "Show one line with a digit.",
        "tip": "Combine text and the variable using a comma inside print().",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a greeting screen for a canteen kiosk. Create three variables (name, age, city) and print all three.",
        "successText": "Show three output lines.",
        "tip": "One print() per variable keeps things simple.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a simple profile card generator. Swap the values of two variables using a third helper variable, then print both.",
        "successText": "Show two output lines with swapped values.",
        "tip": "temp = a, then a = b, then b = temp.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a student ID card generator for his college fest. Create a variable and print its data type using type().",
        "successText": "Show one output line.",
        "tip": "type(my_variable) tells you what kind of value it holds.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a welcome screen for a mobile app. Create a variable that stores a sentence, then print its length using len().",
        "successText": "Show one line with a number.",
        "tip": "len() counts the characters in a string.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a name tag printer for an office event. Create two number variables and store their sum in a third variable, then print it.",
        "successText": "Show one line with a number.",
        "tip": "total = a + b, then print(total).",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Why do we use variables?",
        "options": [
          "To store data for reuse",
          "To create errors",
          "To close Python"
        ],
        "answer": 0
      },
      {
        "question": "Which symbol assigns a value to a variable?",
        "options": [
          "=",
          "==",
          "+"
        ],
        "answer": 0
      },
      {
        "question": "What happens when you assign a new value to an existing variable?",
        "options": [
          "The old value is replaced",
          "Python keeps both values",
          "Python throws an error"
        ],
        "answer": 0
      },
      {
        "question": "Which variable name is valid in Python?",
        "options": [
          "my_name",
          "2name",
          "my-name"
        ],
        "answer": 0
      },
      {
        "question": "What does city = \"Chennai\" store in city?",
        "options": [
          "The text \"Chennai\"",
          "The number 0",
          "Nothing"
        ],
        "answer": 0
      },
      {
        "question": "Which of these correctly prints a variable's value?",
        "options": [
          "print(name)",
          "print(\"name\")",
          "print name"
        ],
        "answer": 0
      },
      {
        "question": "What does type(x) tell you?",
        "options": [
          "The data type of the value",
          "The length of the value",
          "The variable's name"
        ],
        "answer": 0
      },
      {
        "question": "If x = 5 and then x = x + 1, what is x now?",
        "options": [
          "6",
          "5",
          "Error"
        ],
        "answer": 0
      },
      {
        "question": "Are variable names case-sensitive in Python?",
        "options": [
          "Yes, name and Name are different",
          "No, they are treated the same",
          "Only for numbers"
        ],
        "answer": 0
      },
      {
        "question": "What is a good reason to use clearly named variables?",
        "options": [
          "Makes code easier to understand",
          "Makes code run faster",
          "Required by Python syntax"
        ],
        "answer": 0
      }
    ]
  },
  "Strings and Numbers": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a student ID card generator for his college fest. Create one string variable and one number variable, then print both.",
        "successText": "Show two output lines.",
        "tip": "Numbers do not need quotes; text does.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a welcome screen for a mobile app. Print one text value and one numeric result of an addition.",
        "successText": "Show two lines, one with a number.",
        "tip": "Do the math first, then print the result.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a name tag printer for an office event. Combine a string and a number in one print statement using a comma.",
        "successText": "Show one line with a digit.",
        "tip": "print(\"Age:\", age) joins them with a space.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal intro card for his coding portfolio. Create a float variable (a number with a decimal point) and print it.",
        "successText": "Show one line with a digit.",
        "tip": "Example: price = 49.99",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a greeting screen for a canteen kiosk. Convert a number to text using str() and join it with a sentence using +.",
        "successText": "Show one output line.",
        "tip": "str(25) turns a number into text so + can join it with another string.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a simple profile card generator. Convert a text number like \"10\" to a real number using int(), add 5, then print the result.",
        "successText": "Show one line with a digit.",
        "tip": "int(\"10\") turns text into a usable number.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a student ID card generator for his college fest. Print the result of dividing two numbers, then print the result of floor-dividing them with //.",
        "successText": "Show two output lines.",
        "tip": "// removes the decimal part of the division result.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      }
    ],
    "quiz": [
      {
        "question": "Which one is a string?",
        "options": [
          "\"Python\"",
          "10",
          "3.14"
        ],
        "answer": 0
      },
      {
        "question": "Which one is an integer?",
        "options": [
          "10",
          "\"10\"",
          "3.14"
        ],
        "answer": 0
      },
      {
        "question": "Which one is a float?",
        "options": [
          "3.14",
          "10",
          "\"3.14\""
        ],
        "answer": 0
      },
      {
        "question": "What does str(25) do?",
        "options": [
          "Converts the number to text",
          "Converts text to a number",
          "Deletes the number"
        ],
        "answer": 0
      },
      {
        "question": "What does int(\"10\") return?",
        "options": [
          "The number 10",
          "The text \"10\"",
          "An error always"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you try \"5\" + 5 without converting?",
        "options": [
          "Python raises a TypeError",
          "Python prints 55",
          "Python prints 10"
        ],
        "answer": 0
      },
      {
        "question": "What is the result of 7 // 2?",
        "options": [
          "3",
          "3.5",
          "4"
        ],
        "answer": 0
      },
      {
        "question": "What symbol is required around string values?",
        "options": [
          "Quotes",
          "Brackets",
          "Nothing"
        ],
        "answer": 0
      },
      {
        "question": "Which function checks a value's data type?",
        "options": [
          "type()",
          "str()",
          "print()"
        ],
        "answer": 0
      },
      {
        "question": "What is 10 / 3 in Python (regular division)?",
        "options": [
          "A decimal result like 3.333",
          "Always a whole number",
          "An error"
        ],
        "answer": 0
      }
    ]
  },
  "Math and Operators": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a student ID card generator for his college fest. Create two numbers and print their sum, product, and comparison result.",
        "successText": "Show three output lines including True or False.",
        "tip": "Use +, * and a comparison like > or ==.",
        "rule": {
          "type": "includesAny",
          "count": 3,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a welcome screen for a mobile app. Print the result of subtracting two numbers and the result of dividing them.",
        "successText": "Show two output lines.",
        "tip": "Use - and / between two number variables.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a name tag printer for an office event. Print the remainder of dividing two numbers using %.",
        "successText": "Show one line with a digit.",
        "tip": "% gives the leftover after division.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal intro card for his coding portfolio. Print the result of raising a number to a power using **.",
        "successText": "Show one line with a digit.",
        "tip": "a ** b means a raised to the power of b.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a greeting screen for a canteen kiosk. Compare two numbers using >= and print the True/False result.",
        "successText": "Show True or False in the output.",
        "tip": "a >= b checks greater than or equal to.",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a simple profile card generator. Create a number, add 10 to it using +=, then print the new value.",
        "successText": "Show one line with a digit.",
        "tip": "x += 10 is the same as x = x + 10.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a student ID card generator for his college fest. Print the result of combining two comparisons with and, like age > 18 and age < 60.",
        "successText": "Show True or False in the output.",
        "tip": "Both sides of and must be True for the result to be True.",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a welcome screen for a mobile app. Calculate the average of three numbers and print it.",
        "successText": "Show one line with a digit.",
        "tip": "Add the numbers, then divide by 3.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Which operator checks equality?",
        "options": [
          "==",
          "=",
          "+"
        ],
        "answer": 0
      },
      {
        "question": "What does % return?",
        "options": [
          "The remainder of division",
          "The result of multiplication",
          "A random number"
        ],
        "answer": 0
      },
      {
        "question": "What does ** do?",
        "options": [
          "Raises a number to a power",
          "Divides two numbers",
          "Compares two numbers"
        ],
        "answer": 0
      },
      {
        "question": "What does x += 1 do?",
        "options": [
          "Adds 1 to x and stores the result in x",
          "Subtracts 1 from x",
          "Compares x to 1"
        ],
        "answer": 0
      },
      {
        "question": "What does a > b return?",
        "options": [
          "True or False",
          "A number",
          "Nothing"
        ],
        "answer": 0
      },
      {
        "question": "What is 5 == 5?",
        "options": [
          "True",
          "False",
          "Error"
        ],
        "answer": 0
      },
      {
        "question": "What is 2 ** 3?",
        "options": [
          "8",
          "6",
          "9"
        ],
        "answer": 0
      },
      {
        "question": "Which operator requires both conditions to be true?",
        "options": [
          "and",
          "or",
          "not"
        ],
        "answer": 0
      },
      {
        "question": "What is 10 % 3?",
        "options": [
          "1",
          "3",
          "0"
        ],
        "answer": 0
      },
      {
        "question": "What is the result of 9 / 2 in Python 3?",
        "options": [
          "4.5",
          "4",
          "5"
        ],
        "answer": 0
      }
    ]
  },
  "User Input": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Ask the user for their favorite food and print a sentence with it.",
        "successText": "Show one output line.",
        "tip": "input() waits for typed text and returns it.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Ask the user for their name and age with two input() calls, and print both.",
        "successText": "Show two output lines.",
        "tip": "Use two separate input() calls and store each result.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building an exam pass or fail checker. Ask for a number, convert it using int(), then print that number plus 10.",
        "successText": "Show one line with a digit.",
        "tip": "input() always returns text, so use int() to do math.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a bus fare calculator. Ask the user for two numbers and print their sum.",
        "successText": "Show one line with a digit.",
        "tip": "Convert both inputs with int() before adding them.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a login gate for a college portal. Ask for the user's city and print a welcome sentence containing it.",
        "successText": "Show one output line.",
        "tip": "Combine the input with text using a comma or +.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount counter for a store app. Ask for a number and print double that number using *2.",
        "successText": "Show one line with a digit.",
        "tip": "Convert the input to int() before multiplying.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Ask for the user's name and print it in uppercase using .upper().",
        "successText": "Show one output line.",
        "tip": ".upper() works on the text returned by input().",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What does input() return?",
        "options": [
          "Text typed by the user",
          "A loop",
          "A Python file"
        ],
        "answer": 0
      },
      {
        "question": "Why must you use int(input()) for math?",
        "options": [
          "input() always returns text",
          "input() only works with numbers",
          "int() is required by Python syntax"
        ],
        "answer": 0
      },
      {
        "question": "What happens when input() runs?",
        "options": [
          "Python pauses and waits for the user to type",
          "Python skips the line",
          "Python prints an error"
        ],
        "answer": 0
      },
      {
        "question": "Which line correctly stores typed text?",
        "options": [
          "name = input(\"Enter name: \")",
          "name == input()",
          "print(input) = name"
        ],
        "answer": 0
      },
      {
        "question": "Can you show a message inside input()?",
        "options": [
          "Yes, the text inside input() shows as a prompt",
          "No, input() cannot show messages",
          "Only with print() first"
        ],
        "answer": 0
      },
      {
        "question": "What type is returned by input() before conversion?",
        "options": [
          "A string",
          "An integer",
          "A boolean"
        ],
        "answer": 0
      },
      {
        "question": "What does input() do if the user presses Enter without typing?",
        "options": [
          "Returns an empty string",
          "Crashes the program",
          "Returns None"
        ],
        "answer": 0
      },
      {
        "question": "Which function turns typed text into a whole number?",
        "options": [
          "int()",
          "str()",
          "input()"
        ],
        "answer": 0
      },
      {
        "question": "Which function turns typed text into a decimal number?",
        "options": [
          "float()",
          "int()",
          "str()"
        ],
        "answer": 0
      },
      {
        "question": "What can go wrong if the user types letters where int() expects digits?",
        "options": [
          "A ValueError occurs",
          "Python ignores the letters",
          "Nothing, it always works"
        ],
        "answer": 0
      }
    ]
  },
  "If Statements": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Create a mark variable and print a message if it is greater than 50.",
        "successText": "Show one output line when true.",
        "tip": "Use if mark > 50: then an indented print().",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Check if a number variable is positive and print a message if true.",
        "successText": "Show one output line when true.",
        "tip": "Use if number > 0:",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an exam pass or fail checker. Check if your age variable is 18 or older and print a message.",
        "successText": "Show one output line when true.",
        "tip": "Use if age >= 18:",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a bus fare calculator. Create two number variables and print a message only if the first is bigger than the second.",
        "successText": "Show one output line when true.",
        "tip": "Use if a > b:",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a login gate for a college portal. Check if a string variable equals a specific word and print a message if it matches.",
        "successText": "Show one output line when true.",
        "tip": "Use if word == \"python\":",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount counter for a store app. Combine two conditions with and inside one if statement and print a message.",
        "successText": "Show one output line when true.",
        "tip": "Both conditions must be True for the message to print.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Check if a number is inside a range using two comparisons joined with and.",
        "successText": "Show one output line when true.",
        "tip": "Example: if 10 <= score <= 100:",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Use if with the in keyword to check if a value exists inside a list, then print a message.",
        "successText": "Show one output line when true.",
        "tip": "Example: if \"pen\" in items:",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an exam pass or fail checker. Nest one if statement inside another and print a message only when both are true.",
        "successText": "Show one output line when both are true.",
        "tip": "Indent the inner if one extra level.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What does if do?",
        "options": [
          "Checks a condition and runs code if true",
          "Stores text",
          "Creates a list"
        ],
        "answer": 0
      },
      {
        "question": "What happens if the if condition is False?",
        "options": [
          "The indented block is skipped",
          "Python crashes",
          "The block always runs"
        ],
        "answer": 0
      },
      {
        "question": "Which symbol ends an if line in Python?",
        "options": [
          "A colon",
          "A semicolon",
          "A period"
        ],
        "answer": 0
      },
      {
        "question": "How does Python know what belongs inside an if block?",
        "options": [
          "Indentation",
          "Curly braces",
          "Parentheses"
        ],
        "answer": 0
      },
      {
        "question": "What does age >= 18 check?",
        "options": [
          "Age is 18 or greater",
          "Age is exactly 18",
          "Age is less than 18"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword checks if a value exists in a list?",
        "options": [
          "in",
          "has",
          "contains"
        ],
        "answer": 0
      },
      {
        "question": "Can an if statement run without any condition?",
        "options": [
          "No, a condition is required",
          "Yes, it runs by default",
          "Only inside loops"
        ],
        "answer": 0
      },
      {
        "question": "What does and require for the whole condition to be True?",
        "options": [
          "Both sides must be True",
          "Only one side needs to be True",
          "Neither side matters"
        ],
        "answer": 0
      },
      {
        "question": "Which is a valid condition?",
        "options": [
          "score > 50",
          "score >> 50",
          "score =50"
        ],
        "answer": 0
      },
      {
        "question": "What is checked in if name == \"Arun\":?",
        "options": [
          "Whether name equals \"Arun\"",
          "Whether name is empty",
          "Whether name is a number"
        ],
        "answer": 0
      }
    ]
  },
  "If Else": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Write an if else program that checks if a number is even or odd.",
        "successText": "Show one output line.",
        "tip": "Use % 2 == 0 to test for even.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Check pass or fail based on a mark variable using if/else.",
        "successText": "Show one output line.",
        "tip": "if mark >= 35: pass, else: fail.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an exam pass or fail checker. Check if a number is positive, negative, or zero using if elif else.",
        "successText": "Show one output line.",
        "tip": "Three-way checks need if, elif, and else.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a bus fare calculator. Compare two numbers and print the bigger one using if else.",
        "successText": "Show one output line.",
        "tip": "if a > b: print a, else: print b.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a login gate for a college portal. Check if a string is empty using if else.",
        "successText": "Show one output line.",
        "tip": "Compare the string to \"\" or check its length.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount counter for a store app. Use if elif else to give a different message for three age ranges.",
        "successText": "Show one output line.",
        "tip": "Chain conditions from youngest to oldest.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Check if a number is divisible by 3 using if else and %.",
        "successText": "Show one output line.",
        "tip": "number % 3 == 0 means it divides evenly.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Write an if elif else chain with at least three branches for grading letters (A/B/C).",
        "successText": "Show one output line.",
        "tip": "Order your conditions from highest score to lowest.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Why do we use else?",
        "options": [
          "To handle the case when if is false",
          "To handle the case when if is true",
          "Always"
        ],
        "answer": 0
      },
      {
        "question": "What does elif let you do?",
        "options": [
          "Check another condition when the first is false",
          "Repeat the if block",
          "Skip the whole program"
        ],
        "answer": 0
      },
      {
        "question": "How many else blocks can one if statement have?",
        "options": [
          "Only one",
          "As many as needed",
          "None"
        ],
        "answer": 0
      },
      {
        "question": "Can you have if without else?",
        "options": [
          "Yes, else is optional",
          "No, else is required",
          "Only in loops"
        ],
        "answer": 0
      },
      {
        "question": "In an if elif else chain, how many branches run?",
        "options": [
          "Exactly one matching branch",
          "All matching branches",
          "None, unless forced"
        ],
        "answer": 0
      },
      {
        "question": "If no elif matches and there is no else block, what happens?",
        "options": [
          "Nothing runs, and no error occurs",
          "Python throws an error",
          "The first elif always runs anyway"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword goes between if and else for extra conditions?",
        "options": [
          "elif",
          "elseif",
          "elsif"
        ],
        "answer": 0
      },
      {
        "question": "What determines which branch of if/elif/else runs?",
        "options": [
          "The first condition that evaluates to True",
          "The last condition written",
          "Random choice"
        ],
        "answer": 0
      },
      {
        "question": "Is elif required when using if/else?",
        "options": [
          "No, elif is optional",
          "Yes, always required",
          "Only for numbers"
        ],
        "answer": 0
      },
      {
        "question": "What is the correct order of keywords?",
        "options": [
          "if, elif, else",
          "else, elif, if",
          "elif, if, else"
        ],
        "answer": 0
      }
    ]
  },
  "For Loops": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Write a loop that prints your favorite word 3 times.",
        "successText": "Show three output lines.",
        "tip": "for i in range(3): print(word)",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Use range(5) to print numbers 0 through 4.",
        "successText": "Show five output lines.",
        "tip": "range(5) starts at 0 and stops before 5.",
        "rule": {
          "type": "minLines",
          "count": 5
        }
      },
      {
        "prompt": "Scenario: Arun is building an exam pass or fail checker. Use range(1, 6) to print numbers 1 through 5.",
        "successText": "Show five output lines.",
        "tip": "The second number in range() is not included.",
        "rule": {
          "type": "minLines",
          "count": 5
        }
      },
      {
        "prompt": "Scenario: Arun is building a bus fare calculator. Use range with a step value to print every second number from 0 to 10.",
        "successText": "Show at least three output lines.",
        "tip": "range(0, 11, 2) skips by 2 each time.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a login gate for a college portal. Loop through a string and print each character on its own line.",
        "successText": "Show at least three output lines.",
        "tip": "for letter in word: print(letter)",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount counter for a store app. Use a for loop to add up numbers 1 to 5 and print the total after the loop.",
        "successText": "Show one line with a digit.",
        "tip": "Keep a running total variable and update it each pass.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Use a for loop with range() to print a multiplication table for the number 5 (5x1 to 5x5).",
        "successText": "Show five output lines.",
        "tip": "Multiply 5 by the loop variable each time.",
        "rule": {
          "type": "minLines",
          "count": 5
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Combine a for loop with an if statement to print only even numbers from 0 to 10.",
        "successText": "Show at least three output lines.",
        "tip": "Check number % 2 == 0 inside the loop.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building an exam pass or fail checker. Use a nested for loop to print a small grid of stars (3 rows).",
        "successText": "Show three output lines.",
        "tip": "An outer loop controls rows, an inner loop controls each row's content.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a bus fare calculator. Use a for loop to count how many letters are in a word and print the count after the loop.",
        "successText": "Show one line with a digit.",
        "tip": "Increase a counter variable by 1 on each pass.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Why do we use loops?",
        "options": [
          "To repeat actions",
          "To end the program",
          "To rename variables"
        ],
        "answer": 0
      },
      {
        "question": "What does range(5) generate?",
        "options": [
          "Numbers 0 to 4",
          "Numbers 1 to 5",
          "Numbers 0 to 5"
        ],
        "answer": 0
      },
      {
        "question": "What does range(1, 6) generate?",
        "options": [
          "Numbers 1 to 5",
          "Numbers 1 to 6",
          "Numbers 0 to 6"
        ],
        "answer": 0
      },
      {
        "question": "Can a for loop iterate over a string?",
        "options": [
          "Yes, one character at a time",
          "No, only over numbers",
          "Only with range()"
        ],
        "answer": 0
      },
      {
        "question": "What ends each pass through a for loop?",
        "options": [
          "Reaching the end of the indented block",
          "A return statement",
          "A break statement always"
        ],
        "answer": 0
      },
      {
        "question": "What does range(0, 10, 2) produce?",
        "options": [
          "Every second number from 0 to 8",
          "Numbers 0 to 10 including 10",
          "Only the number 2"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword starts a for loop?",
        "options": [
          "for",
          "while",
          "loop"
        ],
        "answer": 0
      },
      {
        "question": "What happens to the loop variable after each pass?",
        "options": [
          "It updates to the next item in the sequence",
          "It stays the same",
          "It resets to zero"
        ],
        "answer": 0
      },
      {
        "question": "Can you nest a for loop inside another for loop?",
        "options": [
          "Yes, this is called a nested loop",
          "No, Python does not allow it",
          "Only inside functions"
        ],
        "answer": 0
      },
      {
        "question": "What does break do inside a for loop?",
        "options": [
          "Stops the loop immediately",
          "Skips to the next iteration",
          "Restarts the loop"
        ],
        "answer": 0
      }
    ]
  },
  "While Loops": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Write a while loop that prints numbers from 1 to 5.",
        "successText": "Show five output lines.",
        "tip": "Update the counter variable inside the loop.",
        "rule": {
          "type": "minLines",
          "count": 5
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Write a while loop that counts down from 5 to 1.",
        "successText": "Show five output lines.",
        "tip": "Subtract 1 from the counter each pass.",
        "rule": {
          "type": "minLines",
          "count": 5
        }
      },
      {
        "prompt": "Scenario: Arun is building an exam pass or fail checker. Write a while loop that keeps adding to a total until it reaches at least 20, then print the total.",
        "successText": "Show one line with a digit.",
        "tip": "Check the condition against the running total.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a bus fare calculator. Write a while loop with a break statement that stops early when a condition is met.",
        "successText": "Show at least one output line.",
        "tip": "break exits the loop immediately.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a login gate for a college portal. Write a while True loop that stops when a counter reaches 3, using break.",
        "successText": "Show three output lines.",
        "tip": "Always update the counter before checking again.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount counter for a store app. Write a while loop that prints only even numbers between 1 and 10.",
        "successText": "Show at least three output lines.",
        "tip": "Check number % 2 == 0 before printing.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a canteen billing counter. Write a while loop that prints a fixed number of lines based on a count variable you set.",
        "successText": "Show at least one output line.",
        "tip": "Decide the count first, then loop until it reaches zero.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie ticket eligibility checker. Write a while loop that doubles a number each time until it passes 50, printing each step.",
        "successText": "Show one line with a digit.",
        "tip": "Multiply the number by 2 inside the loop.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What is the biggest risk with while?",
        "options": [
          "Infinite loops",
          "No variables",
          "No output"
        ],
        "answer": 0
      },
      {
        "question": "What must a while loop have to eventually stop?",
        "options": [
          "A condition that eventually becomes False",
          "A return statement",
          "A print statement"
        ],
        "answer": 0
      },
      {
        "question": "What does break do in a while loop?",
        "options": [
          "Stops the loop immediately",
          "Skips one line",
          "Restarts the loop"
        ],
        "answer": 0
      },
      {
        "question": "When is a for loop usually preferred over while?",
        "options": [
          "When you know how many times to repeat",
          "When you never want repeats",
          "When there is no condition"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you forget to update the loop variable inside while?",
        "options": [
          "The loop may never stop",
          "The loop stops immediately",
          "Python fixes it automatically"
        ],
        "answer": 0
      },
      {
        "question": "What does while True: create?",
        "options": [
          "A loop that repeats until something breaks it",
          "A loop that never starts",
          "A single print statement"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword skips the rest of the current loop pass?",
        "options": [
          "continue",
          "break",
          "skip"
        ],
        "answer": 0
      },
      {
        "question": "Can a while loop run zero times?",
        "options": [
          "Yes, if the condition is False from the start",
          "No, it always runs once",
          "Only for loops can do this"
        ],
        "answer": 0
      },
      {
        "question": "What type of value must a while condition evaluate to?",
        "options": [
          "True or False",
          "A number only",
          "A string only"
        ],
        "answer": 0
      },
      {
        "question": "Where do you usually update the loop variable in a while loop?",
        "options": [
          "Inside the loop body",
          "Before the while line",
          "It updates automatically"
        ],
        "answer": 0
      }
    ]
  },
  "Functions": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a reusable calculator tool for a shop. Create a function that prints a welcome message with a name.",
        "successText": "Show one output line.",
        "tip": "def greet(name): then an indented print().",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a grading helper for a teacher friend. Create a function with no parameters that prints three lines when called.",
        "successText": "Show three output lines.",
        "tip": "Put three print() calls inside the function body.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a currency converter widget. Create a function that takes one parameter and prints it twice.",
        "successText": "Show two output lines.",
        "tip": "Call print(value) twice inside the function.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount calculator for an online store. Call the same function three separate times with different arguments.",
        "successText": "Show three output lines.",
        "tip": "Each call can use a different value.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a reusable greeting tool for a chatbot. Create a function that prints a greeting, then call it inside a for loop three times.",
        "successText": "Show three output lines.",
        "tip": "for i in range(3): greet()",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a tip calculator for a restaurant app. Create two different functions and call both of them.",
        "successText": "Show two output lines.",
        "tip": "Define both with def before calling either.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a reusable calculator tool for a shop. Create a function with a default parameter value and call it without passing an argument.",
        "successText": "Show one output line.",
        "tip": "def greet(name='friend'): uses 'friend' if nothing is passed.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a grading helper for a teacher friend. Create a function that takes two parameters and prints their sum.",
        "successText": "Show one line with a digit.",
        "tip": "print(a + b) inside the function body.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a currency converter widget. Create a function that prints a multiplication table row for a given number parameter.",
        "successText": "Show one output line.",
        "tip": "Multiply the parameter by a fixed number inside the function.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount calculator for an online store. Create a function that calls another function inside it.",
        "successText": "Show at least one output line.",
        "tip": "One function can call another by name, just like you call it from your main code.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Why are functions useful?",
        "options": [
          "To reuse code without repeating it",
          "To delete lists",
          "To replace loops"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword defines a function?",
        "options": [
          "def",
          "function",
          "func"
        ],
        "answer": 0
      },
      {
        "question": "How do you run the code inside a function?",
        "options": [
          "Call it using its name and parentheses",
          "Just define it",
          "Use the run keyword"
        ],
        "answer": 0
      },
      {
        "question": "What does a colon at the end of a def line indicate?",
        "options": [
          "The indented block that follows is the function body",
          "The function has ended",
          "A syntax error"
        ],
        "answer": 0
      },
      {
        "question": "Can a function be called more than once?",
        "options": [
          "Yes, as many times as you like",
          "No, only once",
          "Only inside a loop"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you define a function but never call it?",
        "options": [
          "Nothing inside it runs",
          "Python runs it automatically",
          "Python raises an error"
        ],
        "answer": 0
      },
      {
        "question": "What is inside the parentheses of a function definition?",
        "options": [
          "Parameters the function accepts",
          "The function's return value",
          "Comments only"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you define two functions with the same name?",
        "options": [
          "The second definition replaces the first",
          "Python keeps both",
          "Python raises an error immediately"
        ],
        "answer": 0
      },
      {
        "question": "What does a function return by default if it has no return statement?",
        "options": [
          "None",
          "An error",
          "Zero"
        ],
        "answer": 0
      },
      {
        "question": "Why break a big program into functions?",
        "options": [
          "It makes code more organized and reusable",
          "It makes Python run in a browser",
          "It is required for print() to work"
        ],
        "answer": 0
      }
    ]
  },
  "Parameters and Return": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a reusable calculator tool for a shop. Write a function that returns the square of a number, then print the result of calling it.",
        "successText": "Show one line with a digit.",
        "tip": "return number * number, then print(function_name(value)).",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a grading helper for a teacher friend. Write a function with two parameters that returns their product, then print the result.",
        "successText": "Show one line with a digit.",
        "tip": "return a * b",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a currency converter widget. Write a function that returns True or False depending on whether a number is even, then print the result.",
        "successText": "Show True or False in the output.",
        "tip": "return number % 2 == 0",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a discount calculator for an online store. Write a function that takes a name and returns a greeting string, then print it.",
        "successText": "Show one output line.",
        "tip": "return \"Hello \" + name",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a reusable greeting tool for a chatbot. Write a function with three parameters that returns their total, then print it.",
        "successText": "Show one line with a digit.",
        "tip": "return a + b + c",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a tip calculator for a restaurant app. Store a function's returned value in a variable, then use that variable in another calculation and print it.",
        "successText": "Show one line with a digit.",
        "tip": "result = my_function(x), then use result later.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a reusable calculator tool for a shop. Write a function that returns two different results depending on an if/else inside it, then call it twice with different inputs and print both.",
        "successText": "Show two output lines.",
        "tip": "Use if/else before the return statement.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a grading helper for a teacher friend. Write a function that takes a list and returns whether it has more than 3 items, then print the result.",
        "successText": "Show True or False in the output.",
        "tip": "return len(my_list) > 3",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "What does return do?",
        "options": [
          "Sends a value back to the caller",
          "Starts a loop",
          "Creates input"
        ],
        "answer": 0
      },
      {
        "question": "What is the difference between print() and return inside a function?",
        "options": [
          "return sends a value back to use later, print only shows text",
          "They always do the same thing",
          "print sends data back, return only shows text"
        ],
        "answer": 0
      },
      {
        "question": "Can a function have more than one parameter?",
        "options": [
          "Yes, separated by commas",
          "No, only one is allowed",
          "Only if using return"
        ],
        "answer": 0
      },
      {
        "question": "What happens if a function has no return statement?",
        "options": [
          "It returns None by default",
          "It causes an error",
          "It returns 0"
        ],
        "answer": 0
      },
      {
        "question": "Where do you use the value returned by a function?",
        "options": [
          "Store it in a variable or use it right away",
          "It disappears immediately",
          "It always gets printed automatically"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword sends a value out of a function?",
        "options": [
          "return",
          "print",
          "output"
        ],
        "answer": 0
      },
      {
        "question": "What are parameters?",
        "options": [
          "The inputs a function accepts",
          "The result a function produces",
          "Comments inside a function"
        ],
        "answer": 0
      },
      {
        "question": "Can a function return the result of a condition (True/False)?",
        "options": [
          "Yes, a function can return True or False",
          "No, only numbers can be returned",
          "Only if printed first"
        ],
        "answer": 0
      },
      {
        "question": "What happens after a return statement runs inside a function?",
        "options": [
          "The function stops immediately",
          "The function keeps running",
          "Python restarts the function"
        ],
        "answer": 0
      },
      {
        "question": "If result = add(3, 4), what does result hold afterward?",
        "options": [
          "The value that add() returned",
          "The text \"add(3, 4)\"",
          "Nothing, it stays empty"
        ],
        "answer": 0
      }
    ]
  },
  "Lists": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a class attendance tracker. Create a list of three colors and print the second color.",
        "successText": "Show one output line.",
        "tip": "Lists start counting from index 0.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a grocery shopping list app. Create a list and print its length using len().",
        "successText": "Show one line with a digit.",
        "tip": "len(my_list) counts the items.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a cricket team roster manager. Create a list and print the first and last item using indexes.",
        "successText": "Show two output lines.",
        "tip": "Use list[0] and list[-1].",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie watchlist app. Create a list and print a slice of the first two items.",
        "successText": "Show one output line.",
        "tip": "list[0:2] gives the first two items.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a contact list manager. Create a list and use negative indexing to print the last item.",
        "successText": "Show one output line.",
        "tip": "list[-1] always refers to the last item.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an inventory tracker for a small store. Create a list, change one item by index, then print the updated list.",
        "successText": "Show one output line.",
        "tip": "list[0] = new_value replaces that item.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a class attendance tracker. Create a list of numbers and print the sum using sum().",
        "successText": "Show one line with a digit.",
        "tip": "sum(my_list) adds every number together.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a grocery shopping list app. Create a list of numbers and print the largest value using max().",
        "successText": "Show one line with a digit.",
        "tip": "max(my_list) finds the biggest value.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a cricket team roster manager. Create a nested list (a list inside a list) and print one inner value.",
        "successText": "Show one output line.",
        "tip": "Use two indexes, like outer[0][1].",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie watchlist app. Check if a value exists in a list using in, and print the True/False result.",
        "successText": "Show True or False in the output.",
        "tip": "Example: print(\"pen\" in items)",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "Which brackets do lists use?",
        "options": [
          "[ ]",
          "( )",
          "{ }"
        ],
        "answer": 0
      },
      {
        "question": "How do you access the first item in a list?",
        "options": [
          "list[0]",
          "list[1]",
          "list(0)"
        ],
        "answer": 0
      },
      {
        "question": "What does len(my_list) return?",
        "options": [
          "The number of items in the list",
          "The first item",
          "The last item"
        ],
        "answer": 0
      },
      {
        "question": "Are Python lists ordered?",
        "options": [
          "Yes, items keep their position",
          "No, order is random",
          "Only if sorted"
        ],
        "answer": 0
      },
      {
        "question": "What does a negative index like list[-1] mean?",
        "options": [
          "The last item in the list",
          "The first item",
          "An error always"
        ],
        "answer": 0
      },
      {
        "question": "Can a list contain items of different types?",
        "options": [
          "Yes, lists can mix types",
          "No, all items must match",
          "Only strings are allowed"
        ],
        "answer": 0
      },
      {
        "question": "What does list[1:3] return?",
        "options": [
          "Items from index 1 up to but not including 3",
          "Only the item at index 1",
          "The whole list"
        ],
        "answer": 0
      },
      {
        "question": "Can lists be changed after creation?",
        "options": [
          "Yes, lists are mutable",
          "No, lists are fixed forever",
          "Only if using a loop"
        ],
        "answer": 0
      },
      {
        "question": "What does max(my_list) return?",
        "options": [
          "The largest value in the list",
          "The smallest value",
          "The list length"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword checks if a value exists inside a list?",
        "options": [
          "in",
          "has",
          "exists"
        ],
        "answer": 0
      }
    ]
  },
  "List Methods": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a class attendance tracker. Create a list, append one item, then print the result.",
        "successText": "Show one output line.",
        "tip": "append() adds an item to the end of the list.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a grocery shopping list app. Create a list, remove one item using remove(), then print the result.",
        "successText": "Show one output line.",
        "tip": "remove(value) deletes the first match it finds.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a cricket team roster manager. Create a list, pop the last item using pop(), then print both the popped item and the remaining list.",
        "successText": "Show two output lines.",
        "tip": "pop() removes and returns the last item.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie watchlist app. Create a list and sort it using sort(), then print it.",
        "successText": "Show one output line.",
        "tip": "sort() arranges items in order in place.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a contact list manager. Create a list and reverse it using reverse(), then print it.",
        "successText": "Show one output line.",
        "tip": "reverse() flips the item order in place.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an inventory tracker for a small store. Create a list and count how many times a value appears using count(), then print the count.",
        "successText": "Show one line with a digit.",
        "tip": "count(value) returns how many matches were found.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a class attendance tracker. Create a list and find the index of a value using index(), then print it.",
        "successText": "Show one line with a digit.",
        "tip": "index(value) returns the position of the first match.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Which method adds one item to a list?",
        "options": [
          "append()",
          "print()",
          "range()"
        ],
        "answer": 0
      },
      {
        "question": "Which method removes the last item from a list?",
        "options": [
          "pop()",
          "remove()",
          "delete()"
        ],
        "answer": 0
      },
      {
        "question": "Which method removes a specific value from a list?",
        "options": [
          "remove()",
          "pop(0)",
          "erase()"
        ],
        "answer": 0
      },
      {
        "question": "What does sort() do to a list?",
        "options": [
          "Arranges the items in order",
          "Reverses the list",
          "Removes duplicates"
        ],
        "answer": 0
      },
      {
        "question": "What does reverse() do?",
        "options": [
          "Flips the order of the items",
          "Sorts the list",
          "Empties the list"
        ],
        "answer": 0
      },
      {
        "question": "What does count() return?",
        "options": [
          "How many times a value appears in the list",
          "The list length",
          "The last item"
        ],
        "answer": 0
      },
      {
        "question": "What does index() return?",
        "options": [
          "The position of the first matching item",
          "The value itself",
          "True or False"
        ],
        "answer": 0
      },
      {
        "question": "Does append() add an item at the end or the start?",
        "options": [
          "The end of the list",
          "The start of the list",
          "A random position"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you call remove() with a value not in the list?",
        "options": [
          "Python raises a ValueError",
          "Python ignores it silently",
          "Python adds the value instead"
        ],
        "answer": 0
      },
      {
        "question": "Which method would you use to add several items at once?",
        "options": [
          "extend()",
          "append()",
          "pop()"
        ],
        "answer": 0
      }
    ]
  },
  "Tuples and Sets": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a class attendance tracker. Create one tuple and one set, then print both.",
        "successText": "Show two output lines.",
        "tip": "Tuples use ( ), sets use { }.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a grocery shopping list app. Create a set from a list with duplicate values and print it to see duplicates removed.",
        "successText": "Show one output line.",
        "tip": "set([1, 1, 2]) automatically removes repeats.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a cricket team roster manager. Access a tuple item by index and print it.",
        "successText": "Show one output line.",
        "tip": "Tuples support indexing just like lists.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie watchlist app. Create two sets and print their union using the | operator or union().",
        "successText": "Show one output line.",
        "tip": "set_a | set_b combines both sets.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a contact list manager. Create a tuple with three values and unpack it into three variables, then print all three.",
        "successText": "Show one output line.",
        "tip": "a, b, c = my_tuple unpacks it in one line.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Which collection removes duplicates?",
        "options": [
          "set",
          "tuple",
          "string"
        ],
        "answer": 0
      },
      {
        "question": "Are tuples changeable after creation?",
        "options": [
          "No, tuples are immutable",
          "Yes, freely",
          "Only the first item can change"
        ],
        "answer": 0
      },
      {
        "question": "Which brackets create a tuple?",
        "options": [
          "( )",
          "[ ]",
          "{ }"
        ],
        "answer": 0
      },
      {
        "question": "Which brackets create a set?",
        "options": [
          "{ }",
          "[ ]",
          "( )"
        ],
        "answer": 0
      },
      {
        "question": "Does a set keep items in a specific order?",
        "options": [
          "No, sets are unordered",
          "Yes, always sorted",
          "Yes, insertion order"
        ],
        "answer": 0
      },
      {
        "question": "Can a set contain duplicate values?",
        "options": [
          "No, duplicates are automatically removed",
          "Yes, freely",
          "Only for numbers"
        ],
        "answer": 0
      },
      {
        "question": "Why use a tuple instead of a list?",
        "options": [
          "When the data should not change",
          "When you need duplicates",
          "When you need to sort often"
        ],
        "answer": 0
      },
      {
        "question": "What does tuple unpacking allow?",
        "options": [
          "Assigning tuple values to separate variables in one line",
          "Deleting a tuple",
          "Converting a tuple to a string"
        ],
        "answer": 0
      },
      {
        "question": "Can you access tuple items by index like a list?",
        "options": [
          "Yes, using square brackets",
          "No, tuples have no order",
          "Only with a loop"
        ],
        "answer": 0
      },
      {
        "question": "What operator combines two sets?",
        "options": [
          "The | operator or union()",
          "The + operator",
          "The * operator"
        ],
        "answer": 0
      }
    ]
  },
  "Dictionaries": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a class attendance tracker. Create a dictionary with your name and favorite language, then print one value.",
        "successText": "Show one output line.",
        "tip": "Access a value using dict['key'].",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a grocery shopping list app. Create a dictionary and print all its keys using .keys().",
        "successText": "Show one output line.",
        "tip": ".keys() returns all the keys.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a cricket team roster manager. Create a dictionary and print all its values using .values().",
        "successText": "Show one output line.",
        "tip": ".values() returns all the values.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a movie watchlist app. Create a dictionary, add a new key-value pair, then print the updated dictionary.",
        "successText": "Show one output line.",
        "tip": "dict['new_key'] = value adds a new entry.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a contact list manager. Create a dictionary, update an existing value, then print the dictionary.",
        "successText": "Show one output line.",
        "tip": "Assigning to an existing key replaces its value.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an inventory tracker for a small store. Create a dictionary and safely check if a key exists using in, then print True/False.",
        "successText": "Show True or False in the output.",
        "tip": "Example: print(\"name\" in student)",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a class attendance tracker. Create a dictionary and loop through its keys and values using .items(), printing each pair.",
        "successText": "Show at least two output lines.",
        "tip": "for key, value in my_dict.items():",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a grocery shopping list app. Create a dictionary and remove one key using pop() or del, then print the result.",
        "successText": "Show one output line.",
        "tip": "dict.pop('key') removes and returns that entry.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a cricket team roster manager. Create a nested dictionary (a dictionary inside a dictionary) and print one inner value.",
        "successText": "Show one output line.",
        "tip": "Use two keys in a row, like outer['inner']['value'].",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What does a dictionary store?",
        "options": [
          "Key-value pairs",
          "Only numbers",
          "Only loops"
        ],
        "answer": 0
      },
      {
        "question": "Which brackets create a dictionary?",
        "options": [
          "{ }",
          "[ ]",
          "( )"
        ],
        "answer": 0
      },
      {
        "question": "How do you access a dictionary's value?",
        "options": [
          "Using the key in square brackets",
          "Using its position number",
          "Using a loop only"
        ],
        "answer": 0
      },
      {
        "question": "What does .keys() return?",
        "options": [
          "All the keys in the dictionary",
          "All the values",
          "The first key only"
        ],
        "answer": 0
      },
      {
        "question": "What does .values() return?",
        "options": [
          "All the values in the dictionary",
          "All the keys",
          "Nothing"
        ],
        "answer": 0
      },
      {
        "question": "Can dictionary keys be duplicated?",
        "options": [
          "No, each key must be unique",
          "Yes, freely",
          "Only string keys can repeat"
        ],
        "answer": 0
      },
      {
        "question": "What does .items() give you in a loop?",
        "options": [
          "Each key-value pair together",
          "Only the keys",
          "Only the values"
        ],
        "answer": 0
      },
      {
        "question": "How do you add a new key-value pair?",
        "options": [
          "dict[new_key] = value",
          "dict.add(value)",
          "dict + key"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you access a key that does not exist?",
        "options": [
          "Python raises a KeyError",
          "Python returns None silently",
          "Python creates the key automatically"
        ],
        "answer": 0
      },
      {
        "question": "Which method can check for a key without causing an error if it's missing?",
        "options": [
          ".get()",
          "[] indexing",
          ".items()"
        ],
        "answer": 0
      }
    ]
  },
  "String Methods": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a customer feedback analyzer. Create a string with extra spaces and print the cleaned version using strip().",
        "successText": "Show one output line.",
        "tip": "strip() removes spaces from both ends.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a marks sheet cleaner. Print a string converted to uppercase and the same string converted to lowercase.",
        "successText": "Show two output lines.",
        "tip": ".upper() and .lower() return new strings.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a product catalog search tool. Replace one word in a string with another using replace(), then print the result.",
        "successText": "Show one output line.",
        "tip": "text.replace(\"old\", \"new\")",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a chat message filter. Split a sentence into words using split(), then print the resulting list.",
        "successText": "Show one output line.",
        "tip": "split() breaks text apart at spaces by default.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a survey response summarizer. Join a list of words into one sentence using join(), then print it.",
        "successText": "Show one output line.",
        "tip": "\" \".join(word_list) glues the words together.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a name list formatter. Check if a string starts with a specific word using startswith(), then print True/False.",
        "successText": "Show True or False in the output.",
        "tip": "text.startswith(\"Hello\")",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a customer feedback analyzer. Count how many times a letter appears in a string using count(), then print the number.",
        "successText": "Show one line with a digit.",
        "tip": "text.count(\"a\") counts every match.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Which method removes spaces at the ends?",
        "options": [
          "strip()",
          "append()",
          "sort()"
        ],
        "answer": 0
      },
      {
        "question": "Which method converts text to uppercase?",
        "options": [
          "upper()",
          "capitalize()",
          "big()"
        ],
        "answer": 0
      },
      {
        "question": "Which method converts text to lowercase?",
        "options": [
          "lower()",
          "small()",
          "minimize()"
        ],
        "answer": 0
      },
      {
        "question": "What does replace() do?",
        "options": [
          "Replaces one substring with another",
          "Deletes the string",
          "Reverses the string"
        ],
        "answer": 0
      },
      {
        "question": "What does split() return?",
        "options": [
          "A list of words split by a separator",
          "A single combined string",
          "A number"
        ],
        "answer": 0
      },
      {
        "question": "What does join() do?",
        "options": [
          "Combines a list of strings into one string",
          "Splits a string apart",
          "Removes spaces"
        ],
        "answer": 0
      },
      {
        "question": "Does strip() change the original variable unless you reassign it?",
        "options": [
          "No, you must reassign the result since strings are immutable",
          "Yes, it changes automatically",
          "Only with +="
        ],
        "answer": 0
      },
      {
        "question": "What does startswith() return?",
        "options": [
          "True or False",
          "The matching substring",
          "An index number"
        ],
        "answer": 0
      },
      {
        "question": "Which method finds how many times a substring appears?",
        "options": [
          "count()",
          "find()",
          "len()"
        ],
        "answer": 0
      },
      {
        "question": "Are strings mutable in Python?",
        "options": [
          "No, strings are immutable",
          "Yes, freely",
          "Only single characters can change"
        ],
        "answer": 0
      }
    ]
  },
  "Looping Through Lists": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a customer feedback analyzer. Create a list of 3 skills and print each one using a loop.",
        "successText": "Show three output lines.",
        "tip": "for skill in skills: print(skill)",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a marks sheet cleaner. Loop through a list of numbers and print each one doubled.",
        "successText": "Show at least three output lines.",
        "tip": "Multiply each item by 2 inside the loop.",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a product catalog search tool. Loop through a list and print each item along with its index using enumerate().",
        "successText": "Show at least three output lines.",
        "tip": "for index, item in enumerate(my_list):",
        "rule": {
          "type": "minLines",
          "count": 3
        }
      },
      {
        "prompt": "Scenario: Arun is building a chat message filter. Loop through a list of numbers and print only the numbers greater than 10.",
        "successText": "Show at least one output line.",
        "tip": "Combine the loop with an if check.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a survey response summarizer. Loop through a list and build a running total, printing the total after the loop finishes.",
        "successText": "Show one line with a digit.",
        "tip": "Add each item to a total variable inside the loop.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a name list formatter. Loop through two lists at the same time using zip() and print pairs of items.",
        "successText": "Show at least one output line.",
        "tip": "for a, b in zip(list1, list2):",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a customer feedback analyzer. Loop through a list of words and print only the words longer than 4 letters.",
        "successText": "Show at least one output line.",
        "tip": "Check len(word) > 4 inside the loop.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a marks sheet cleaner. Loop through a list and print each item in uppercase using .upper() inside the loop.",
        "successText": "Show at least one output line.",
        "tip": "print(item.upper()) inside the for loop.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What does the loop variable contain?",
        "options": [
          "One item from the list at a time",
          "The whole file",
          "A new function"
        ],
        "answer": 0
      },
      {
        "question": "What does enumerate() add to a loop?",
        "options": [
          "The index alongside each item",
          "A random number",
          "Nothing extra"
        ],
        "answer": 0
      },
      {
        "question": "Can you loop through a list without knowing its length in advance?",
        "options": [
          "Yes, the for loop handles it automatically",
          "No, you must count items first",
          "Only with while loops"
        ],
        "answer": 0
      },
      {
        "question": "What does zip() do with two lists?",
        "options": [
          "Pairs items from both lists together",
          "Merges them into one list",
          "Deletes duplicates"
        ],
        "answer": 0
      },
      {
        "question": "Can you combine a for loop and an if statement to filter list items?",
        "options": [
          "Yes, this is a common pattern",
          "No, filtering needs a separate function",
          "Only with while loops"
        ],
        "answer": 0
      },
      {
        "question": "What happens if the list is empty when looping?",
        "options": [
          "The loop body never runs",
          "Python raises an error",
          "The loop runs once anyway"
        ],
        "answer": 0
      },
      {
        "question": "In for item in my_list:, what does item represent?",
        "options": [
          "Each individual value, one at a time",
          "The whole list",
          "The list's length"
        ],
        "answer": 0
      },
      {
        "question": "Which loop type is most natural for visiting every item in a list?",
        "options": [
          "for loop",
          "while loop",
          "if statement"
        ],
        "answer": 0
      },
      {
        "question": "Can you modify the current item directly through the loop variable?",
        "options": [
          "No, you must change it through the list's index",
          "Yes, it always updates the list",
          "Only for numbers"
        ],
        "answer": 0
      },
      {
        "question": "What is a common use of looping through a list?",
        "options": [
          "Processing or displaying each item",
          "Deleting the whole list",
          "Creating a new function each time"
        ],
        "answer": 0
      }
    ]
  },
  "Boolean Values": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a customer feedback analyzer. Create one boolean variable and print it.",
        "successText": "Show True or False in the output.",
        "tip": "is_ready = True",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a marks sheet cleaner. Print the result of comparing two numbers, like 5 > 2.",
        "successText": "Show True or False in the output.",
        "tip": "Comparisons always produce a boolean.",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a product catalog search tool. Combine two boolean conditions with and, then print the result.",
        "successText": "Show True or False in the output.",
        "tip": "Both sides must be True for and to be True.",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a chat message filter. Combine two boolean conditions with or, then print the result.",
        "successText": "Show True or False in the output.",
        "tip": "Only one side needs to be True for or to be True.",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      },
      {
        "prompt": "Scenario: Arun is building a survey response summarizer. Use not to flip a boolean value, then print the result.",
        "successText": "Show True or False in the output.",
        "tip": "not True becomes False, and the reverse.",
        "rule": {
          "type": "includesAny",
          "count": 1,
          "values": [
            "True",
            "False"
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "What are the two boolean values?",
        "options": [
          "True and False",
          "Yes and No",
          "1 and 0 only"
        ],
        "answer": 0
      },
      {
        "question": "What type of value does a comparison like 5 > 2 produce?",
        "options": [
          "A boolean (True or False)",
          "A number",
          "A string"
        ],
        "answer": 0
      },
      {
        "question": "What does the not keyword do?",
        "options": [
          "Flips a boolean value to its opposite",
          "Combines two conditions",
          "Deletes a variable"
        ],
        "answer": 0
      },
      {
        "question": "What does or require for the result to be True?",
        "options": [
          "At least one side must be True",
          "Both sides must be True",
          "Neither side matters"
        ],
        "answer": 0
      },
      {
        "question": "Are True and False case-sensitive keywords in Python?",
        "options": [
          "Yes, they must start with a capital letter",
          "No, true also works",
          "Only False needs a capital"
        ],
        "answer": 0
      },
      {
        "question": "What does bool(0) return?",
        "options": [
          "False",
          "True",
          "Error"
        ],
        "answer": 0
      },
      {
        "question": "What does bool(\"hello\") return?",
        "options": [
          "True",
          "False",
          "Error"
        ],
        "answer": 0
      },
      {
        "question": "Can booleans be used inside if statements?",
        "options": [
          "Yes, if statements check boolean values",
          "No, only numbers work in if",
          "Only inside loops"
        ],
        "answer": 0
      },
      {
        "question": "What does 5 == 5 evaluate to?",
        "options": [
          "True",
          "False",
          "5"
        ],
        "answer": 0
      },
      {
        "question": "What does an empty string evaluate to in a boolean context?",
        "options": [
          "False",
          "True",
          "Error"
        ],
        "answer": 0
      }
    ]
  },
  "Reading Files": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a report saving tool for a small business. Write text to a file, then read it and print it.",
        "successText": "Show one output line.",
        "tip": "Open with mode \"w\" to write, then \"r\" to read.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a student data importer. Write two lines to a file using \\n, then read and print the whole file.",
        "successText": "Show one output line.",
        "tip": "\\n inside a string starts a new line.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an expense log reader. Append additional text to an existing file using mode \"a\", then read and print the full file.",
        "successText": "Show one output line.",
        "tip": "Mode \"a\" adds text without erasing what is already there.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a backup file checker. Read a file and print its content using readlines() to get a list of lines.",
        "successText": "Show one output line.",
        "tip": "readlines() returns each line as a list item.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a settings file loader. Write a list of items to a file, one per line using a loop, then read and print them back.",
        "successText": "Show one output line.",
        "tip": "Loop through the list and call file.write() each time.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a safe data entry tool. Read a file's content and print how many characters it contains using len().",
        "successText": "Show one line with a digit.",
        "tip": "len(file.read()) counts every character.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "Why do we use with open()?",
        "options": [
          "It automatically closes the file safely",
          "It creates loops",
          "It prints automatically"
        ],
        "answer": 0
      },
      {
        "question": "Which mode opens a file for writing (overwriting existing content)?",
        "options": [
          "\"w\"",
          "\"r\"",
          "\"a\""
        ],
        "answer": 0
      },
      {
        "question": "Which mode opens a file for reading?",
        "options": [
          "\"r\"",
          "\"w\"",
          "\"a\""
        ],
        "answer": 0
      },
      {
        "question": "Which mode appends text to the end of a file?",
        "options": [
          "\"a\"",
          "\"r\"",
          "\"w\""
        ],
        "answer": 0
      },
      {
        "question": "What does file.read() return?",
        "options": [
          "The full text content of the file",
          "The file's name",
          "The number of lines"
        ],
        "answer": 0
      },
      {
        "question": "What does file.readlines() return?",
        "options": [
          "A list of individual lines",
          "One combined string",
          "The file size"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you open a file that does not exist in read mode?",
        "options": [
          "Python raises a FileNotFoundError",
          "Python creates it automatically",
          "Python returns an empty string"
        ],
        "answer": 0
      },
      {
        "question": "Why is with open() safer than open() alone?",
        "options": [
          "It automatically closes the file, even if an error occurs",
          "It reads faster",
          "It prevents typos in the filename"
        ],
        "answer": 0
      },
      {
        "question": "What character is commonly used to create a new line inside a file?",
        "options": [
          "\\n",
          "\\t",
          "\\s"
        ],
        "answer": 0
      },
      {
        "question": "Can you both read and write using mode \"r+\"?",
        "options": [
          "Yes, \"r+\" allows both reading and writing",
          "No, only one mode works at a time",
          "Only \"w\" allows this"
        ],
        "answer": 0
      }
    ]
  },
  "Exceptions": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a report saving tool for a small business. Write a try except block around int(input()).",
        "successText": "Show one output line.",
        "tip": "except ValueError: catches invalid number input.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a student data importer. Write a try except that catches a ZeroDivisionError when dividing by zero.",
        "successText": "Show one output line.",
        "tip": "except ZeroDivisionError:",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building an expense log reader. Write a try except with a specific error message printed inside except.",
        "successText": "Show one output line.",
        "tip": "Print a friendly message instead of crashing.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a backup file checker. Write a try except else block, where else runs only if no error occurred.",
        "successText": "Show one output line.",
        "tip": "else goes after all except blocks.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a settings file loader. Write a try except finally block, where finally always prints a closing message.",
        "successText": "Show one output line.",
        "tip": "finally always runs, error or not.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a safe data entry tool. Write a try block that catches two different error types using two except blocks.",
        "successText": "Show one output line.",
        "tip": "Stack multiple except lines after one try.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What is try/except used for?",
        "options": [
          "Handling errors without crashing",
          "Creating files",
          "Making lists"
        ],
        "answer": 0
      },
      {
        "question": "What happens if code inside try raises no error?",
        "options": [
          "The except block is skipped",
          "The except block runs anyway",
          "Python crashes"
        ],
        "answer": 0
      },
      {
        "question": "What does except ValueError specifically catch?",
        "options": [
          "Errors like invalid number conversion",
          "Every possible error",
          "Only file errors"
        ],
        "answer": 0
      },
      {
        "question": "What does the finally block do?",
        "options": [
          "Always runs, whether or not an error occurred",
          "Only runs if there is no error",
          "Only runs if there is an error"
        ],
        "answer": 0
      },
      {
        "question": "Can you catch multiple error types with separate except blocks?",
        "options": [
          "Yes, using multiple except blocks",
          "No, only one except is allowed",
          "Only with finally"
        ],
        "answer": 0
      },
      {
        "question": "What is raised when dividing a number by zero?",
        "options": [
          "ZeroDivisionError",
          "ValueError",
          "TypeError"
        ],
        "answer": 0
      },
      {
        "question": "What does the else block after try/except run?",
        "options": [
          "Code that runs only when no error occurred",
          "Code that always runs",
          "Code that runs only on error"
        ],
        "answer": 0
      },
      {
        "question": "Why use try/except instead of letting the program crash?",
        "options": [
          "To handle problems gracefully and keep the program running",
          "To make code run faster",
          "To skip writing conditions"
        ],
        "answer": 0
      },
      {
        "question": "What type of error does int(\"abc\") raise?",
        "options": [
          "ValueError",
          "TypeError",
          "NameError"
        ],
        "answer": 0
      },
      {
        "question": "Can you write try with only a finally block and no except?",
        "options": [
          "Yes, try can pair with just finally",
          "No, except is always required",
          "Only inside functions"
        ],
        "answer": 0
      }
    ]
  },
  "Modules and Imports": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a mini library management system. Import math and print the square root of 25.",
        "successText": "Show one line with a digit.",
        "tip": "math.sqrt(25) returns the square root.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal finance tracker. Import math and print a rounded-up decimal using math.ceil().",
        "successText": "Show one line with a digit.",
        "tip": "math.ceil(3.2) rounds up to 4.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a to-do list app built with classes. Import random and print a random number using random.randint().",
        "successText": "Show one line with a digit.",
        "tip": "random.randint(1, 10) picks a number in that range.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a simple quiz game project. Import a module using \"import module as alias\" and use the alias to call a function.",
        "successText": "Show one output line.",
        "tip": "import math as m lets you write m.sqrt() instead.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a student record system. Import only one function from a module using \"from module import function\", then use it.",
        "successText": "Show one output line.",
        "tip": "from math import sqrt lets you call sqrt() directly.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a small inventory app. Import the datetime module and print today's date.",
        "successText": "Show one output line.",
        "tip": "datetime.date.today() gives the current date.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What does import do?",
        "options": [
          "Brings in code from another module",
          "Deletes variables",
          "Starts a loop"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword lets you rename an imported module?",
        "options": [
          "as",
          "rename",
          "alias"
        ],
        "answer": 0
      },
      {
        "question": "What does math.sqrt() calculate?",
        "options": [
          "The square root of a number",
          "The square of a number",
          "A random number"
        ],
        "answer": 0
      },
      {
        "question": "Which built-in module gives you random numbers?",
        "options": [
          "random",
          "math",
          "os"
        ],
        "answer": 0
      },
      {
        "question": "What does \"from module import function\" let you do?",
        "options": [
          "Call the function directly without the module name in front",
          "Import the whole module secretly",
          "Delete unused functions"
        ],
        "answer": 0
      },
      {
        "question": "Do you need to import math before using math.sqrt()?",
        "options": [
          "Yes, the module must be imported first",
          "No, it works automatically",
          "Only in some files"
        ],
        "answer": 0
      },
      {
        "question": "What does math.ceil(3.2) return?",
        "options": [
          "4",
          "3",
          "3.2"
        ],
        "answer": 0
      },
      {
        "question": "Which module helps work with dates and times?",
        "options": [
          "datetime",
          "math",
          "random"
        ],
        "answer": 0
      },
      {
        "question": "Can you import multiple modules in one program?",
        "options": [
          "Yes, using separate import lines",
          "No, only one import is allowed",
          "Only with aliases"
        ],
        "answer": 0
      },
      {
        "question": "What happens if you use a module function without importing the module first?",
        "options": [
          "Python raises a NameError",
          "Python imports it automatically",
          "Nothing happens"
        ],
        "answer": 0
      }
    ]
  },
  "Classes and Objects": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a mini library management system. Create a simple class with one attribute and print it.",
        "successText": "Show one output line.",
        "tip": "Set the attribute inside __init__ using self.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal finance tracker. Create a class with two attributes and create two different objects from it, then print both.",
        "successText": "Show two output lines.",
        "tip": "Each object keeps its own attribute values.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a to-do list app built with classes. Add a method to a class that prints a message using self, then call that method.",
        "successText": "Show one output line.",
        "tip": "def greet(self): print(...) inside the class.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a simple quiz game project. Create a class with __init__ that takes two parameters, then create an object and print both attributes.",
        "successText": "Show two output lines.",
        "tip": "self.attribute = parameter inside __init__.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a student record system. Create a class with a method that returns a calculated value based on attributes, then print the result.",
        "successText": "Show one line with a digit.",
        "tip": "return self.a + self.b inside the method.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a small inventory app. Create two objects from the same class with different attribute values, then print a comparison.",
        "successText": "Show two output lines.",
        "tip": "Compare their attributes with a print statement.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      },
      {
        "prompt": "Scenario: Arun is building a mini library management system. Add a default attribute value inside __init__ and create an object without passing that argument.",
        "successText": "Show one output line.",
        "tip": "def __init__(self, name, level=1):",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal finance tracker. Create a class with a method that changes one of its own attributes, then print the attribute before and after.",
        "successText": "Show two output lines.",
        "tip": "self.attribute = new_value inside a method changes it.",
        "rule": {
          "type": "minLines",
          "count": 2
        }
      }
    ],
    "quiz": [
      {
        "question": "What is a class?",
        "options": [
          "A blueprint for creating objects",
          "A loop type",
          "A file mode"
        ],
        "answer": 0
      },
      {
        "question": "What is an object?",
        "options": [
          "One specific instance created from a class",
          "The class itself",
          "A built-in function"
        ],
        "answer": 0
      },
      {
        "question": "What does __init__ do?",
        "options": [
          "Sets up the object's attributes when it is created",
          "Deletes the object",
          "Prints the object automatically"
        ],
        "answer": 0
      },
      {
        "question": "What does self refer to inside a class?",
        "options": [
          "The current object itself",
          "The class name",
          "A global variable"
        ],
        "answer": 0
      },
      {
        "question": "How do you access an object's attribute?",
        "options": [
          "object.attribute",
          "object[attribute]",
          "object->attribute"
        ],
        "answer": 0
      },
      {
        "question": "Can you create more than one object from the same class?",
        "options": [
          "Yes, each with its own attribute values",
          "No, only one object per class",
          "Only with return"
        ],
        "answer": 0
      },
      {
        "question": "Is self passed automatically when you call a method?",
        "options": [
          "Yes, Python passes it automatically",
          "No, you must pass it manually",
          "Only for __init__"
        ],
        "answer": 0
      },
      {
        "question": "What is stored inside self.name = name?",
        "options": [
          "The value assigned to that object's attribute",
          "A brand-new class",
          "A temporary loop variable"
        ],
        "answer": 0
      },
      {
        "question": "Do two different objects from the same class share the same attribute values?",
        "options": [
          "No, each object keeps its own values",
          "Yes, they always match",
          "Only if not using self"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword defines a class in Python?",
        "options": [
          "class",
          "def",
          "object"
        ],
        "answer": 0
      }
    ]
  },
  "Mini Project Thinking": {
    "challenges": [
      {
        "prompt": "Scenario: Arun is building a mini library management system. Modify the task list project idea into a list of your own study tasks.",
        "successText": "Show one output line.",
        "tip": "Reuse the while True and break pattern from the lesson.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a personal finance tracker. Extend the task collector to also print how many tasks were added using len().",
        "successText": "Show one line with a digit.",
        "tip": "len(tasks) after the loop tells you the count.",
        "rule": {
          "type": "minLinesAndDigit",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a to-do list app built with classes. Add a condition to the project so it prints a special message if no tasks were added.",
        "successText": "Show one output line.",
        "tip": "Check if the list is empty with if not tasks:",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a simple quiz game project. Combine a function with the task list idea: write a function that adds a task to a list and call it a few times.",
        "successText": "Show one output line.",
        "tip": "Pass the list and the new task as parameters.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      },
      {
        "prompt": "Scenario: Arun is building a student record system. Build a tiny program that combines input, a loop, a condition, and a final print statement showing a result.",
        "successText": "Show one output line.",
        "tip": "Plan the input, the steps, and the final output before coding.",
        "rule": {
          "type": "minLines",
          "count": 1
        }
      }
    ],
    "quiz": [
      {
        "question": "What makes a mini project useful?",
        "options": [
          "It combines concepts like loops, conditions and functions",
          "It removes syntax",
          "It avoids practice"
        ],
        "answer": 0
      },
      {
        "question": "Which concepts commonly appear together in a small project?",
        "options": [
          "Input, loops, conditions, and functions",
          "Only print statements",
          "Only comments"
        ],
        "answer": 0
      },
      {
        "question": "Why break a project into small steps?",
        "options": [
          "It makes the project easier to build and debug",
          "Python requires it",
          "It runs faster automatically"
        ],
        "answer": 0
      },
      {
        "question": "What is a good first step when planning a small program?",
        "options": [
          "Deciding what input and output are needed",
          "Writing the whole program at once",
          "Skipping variables"
        ],
        "answer": 0
      },
      {
        "question": "Can a mini project reuse a function you wrote earlier?",
        "options": [
          "Yes, functions can be reused anywhere in the program",
          "No, each project needs new functions",
          "Only inside classes"
        ],
        "answer": 0
      },
      {
        "question": "Why use a loop like while True with break in a small project?",
        "options": [
          "To keep collecting input until the user decides to stop",
          "To make the program crash safely",
          "To avoid using functions"
        ],
        "answer": 0
      },
      {
        "question": "What is one benefit of using a list to store collected data?",
        "options": [
          "You can easily add, loop through, and count items",
          "It automatically sorts data",
          "It prevents all errors"
        ],
        "answer": 0
      },
      {
        "question": "Why test small pieces of a project separately?",
        "options": [
          "It is easier to catch mistakes early",
          "Python requires separate testing files",
          "It makes the code run faster"
        ],
        "answer": 0
      },
      {
        "question": "What is a reasonable final step in building a small project?",
        "options": [
          "Testing it with a few different inputs",
          "Deleting the print statements",
          "Removing all comments"
        ],
        "answer": 0
      },
      {
        "question": "Why is combining loops, conditions, and functions a valuable skill?",
        "options": [
          "It reflects how real-world programs are built",
          "It is only useful for beginners",
          "It replaces the need for practice"
        ],
        "answer": 0
      }
    ]
  }
};

function createLessonMeta(lesson, index) {
  const extras = lessonExtras[lesson.title] || { challenges: [], quiz: [] };

  return {
    ...lesson,
    introduction: `${lesson.summary} In this lesson you will connect the idea to a series of hands-on tasks.`,
    explanationDetail: lesson.explanation || lesson.concept,
    challenges: extras.challenges,
    quiz: extras.quiz,
    summaryPoints: [
      lesson.concept,
      lesson.syntaxTip,
      lesson.commonMistake
    ]
  };
}

lessons.forEach((lesson, index) => {
  Object.assign(lesson, createLessonMeta(lesson, index));
});

const state = { ...defaultState };
let activeChallengeIndex = 0;
let lastRenderedLessonIndex = -1;
let authMode = "login";
let authToken = localStorage.getItem(authStorageKey) || "";
let currentUser = null;
let learningTimer = null;
let lastTimerTick = Date.now();

const authOverlay = document.getElementById("auth-overlay");
const appShell = document.getElementById("app-shell");
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const authForm = document.getElementById("auth-form");
const authName = document.getElementById("auth-name");
const authPassword = document.getElementById("auth-password");
const authSubmit = document.getElementById("auth-submit");
const authFeedback = document.getElementById("auth-feedback");
const authHelper = document.getElementById("auth-helper");
const userName = document.getElementById("user-name");
const logoutButton = document.getElementById("logout-button");

const currentPathTitle = document.getElementById("current-path-title");
const currentPathSummary = document.getElementById("current-path-summary");
const continueLearningButton = document.getElementById("continue-learning");
const learnPill = document.getElementById("learn-pill");
const practicePill = document.getElementById("practice-pill");
const moduleList = document.getElementById("module-list");
const lessonTitle = document.getElementById("lesson-title");
const lessonTag = document.getElementById("lesson-tag");
const lessonStatus = document.getElementById("lesson-status");
const lessonNumber = document.getElementById("lesson-number");
const lessonSummary = document.getElementById("lesson-summary");
const lessonIntroduction = document.getElementById("lesson-introduction");
const lessonWhy = document.getElementById("lesson-why");
const lessonBefore = document.getElementById("lesson-before");
const lessonAfter = document.getElementById("lesson-after");
const lessonConcept = document.getElementById("lesson-concept");
const lessonExplanationDetail = document.getElementById("lesson-explanation-detail");
const lessonAnalogy = document.getElementById("lesson-analogy");
const lessonCode = document.getElementById("lesson-code");
const lessonExplanation = document.getElementById("lesson-explanation");
const syntaxTip = document.getElementById("syntax-tip");
const commonMistake = document.getElementById("common-mistake");
const practicePrompt = document.getElementById("practice-prompt");
const practiceArea = document.getElementById("practice-area");
const practiceHint = document.getElementById("practice-hint");
const practiceFeedback = document.getElementById("practice-feedback");
const challengeState = document.getElementById("challenge-state");
const quizState = document.getElementById("quiz-state");
const programInput = document.getElementById("program-input");
const outputConsole = document.getElementById("output-console");
const videoLinks = document.getElementById("video-links");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const completionCount = document.getElementById("completion-count");
const completionPercent = document.getElementById("completion-percent");
const dashboardCompleted = document.getElementById("dashboard-completed");
const dashboardCurrent = document.getElementById("dashboard-current");
const dashboardTime = document.getElementById("dashboard-time");
const dashboardStreak = document.getElementById("dashboard-streak");
const badgeList = document.getElementById("badge-list");
const moduleChart = document.getElementById("module-chart");
const challengeRules = document.getElementById("challenge-rules");
const challengeTip = document.getElementById("challenge-tip");
const challengeScore = document.getElementById("challenge-score");
const challengeCounter = document.getElementById("challenge-counter");
const prevChallengeButton = document.getElementById("prev-challenge");
const nextChallengeButton = document.getElementById("next-challenge");
const quizRequirement = document.getElementById("quiz-requirement");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizExplanation = document.getElementById("quiz-explanation");
const quizNextButton = document.getElementById("quiz-next");
const quizRetakeButton = document.getElementById("quiz-retake");
const lessonSummaryPoints = document.getElementById("lesson-summary-points");
const finishFeedback = document.getElementById("finish-feedback");
const aiReviewButton = document.getElementById("ai-review-button");
const aiReviewStatus = document.getElementById("ai-review-status");
const aiReviewOutput = document.getElementById("ai-review-output");
const runCodeButton = document.getElementById("run-code");
const prevButton = document.getElementById("prev-lesson");
const nextButton = document.getElementById("next-lesson");
const learnSection = document.getElementById("learn-section");
const practiceSection = document.getElementById("practice-section");
const learnModeSections = document.querySelectorAll(".mode-learn");
const practiceModeSections = document.querySelectorAll(".mode-practice");

const lessonIcons = {
  "Print Statements": "🖥️",
  Variables: "🧮",
  "Strings and Numbers": "🔤",
  "Math and Operators": "➗",
  "User Input": "⌨️",
  "If Statements": "🔀",
  "If Else": "↔️",
  "For Loops": "🔁",
  "While Loops": "⏱️",
  Functions: "📦",
  "Parameters and Return": "↩️",
  Lists: "📋",
  "List Methods": "🧰",
  "Tuples and Sets": "🧩",
  Dictionaries: "🗂️",
  "String Methods": "🔠",
  "Looping Through Lists": "📚",
  "Boolean Values": "⚖️",
  "Reading Files": "📄",
  Exceptions: "🛟",
  "Modules and Imports": "📘",
  "Classes and Objects": "🏗️",
  "Mini Project Thinking": "🚀"
};

function uniqueLessonIndexes(values) {
  return [...new Set((Array.isArray(values) ? values : [])
    .map((value) => Number(value))
    .filter((value) => Number.isInteger(value) && value >= 0 && value < lessons.length))].sort((a, b) => a - b);
}

function sanitizeRecord(record) {
  return record && typeof record === "object" && !Array.isArray(record) ? { ...record } : {};
}

function normalizeState(data = {}) {
  const challengePassed = uniqueLessonIndexes(data.challengePassed || data.codePassed);
  const quizPassed = uniqueLessonIndexes(data.quizPassed || data.quizCorrect);
  let completedLessons = uniqueLessonIndexes(data.completedLessons);

  completedLessons = uniqueLessonIndexes(completedLessons.filter(
    (index) => challengePassed.includes(index) && quizPassed.includes(index)
  ));

  const normalized = {
    lessonIndex: Number.isInteger(data.lessonIndex) ? data.lessonIndex : 0,
    challengePassed,
    quizPassed,
    completedLessons,
    startedLessons: uniqueLessonIndexes(data.startedLessons || []),
    lessonDrafts: sanitizeRecord(data.lessonDrafts),
    quizHistory: sanitizeRecord(data.quizHistory),
    challengeProgress: sanitizeRecord(data.challengeProgress),
    activityDates: Array.isArray(data.activityDates) ? [...new Set(data.activityDates.filter((value) => typeof value === "string" && value))] : [],
    timeSpentSeconds: Number.isFinite(data.timeSpentSeconds) ? Math.max(0, Math.floor(data.timeSpentSeconds)) : 0,
    lastActiveAt: Number.isFinite(data.lastActiveAt) ? data.lastActiveAt : null
  };

  normalized.lessonIndex = Math.min(Math.max(normalized.lessonIndex, 0), lessons.length - 1);

  if (!isLessonUnlockedWithState(normalized, normalized.lessonIndex)) {
    normalized.lessonIndex = getContinueLessonIndex(normalized);
  }

  return normalized;
}

function setState(nextState) {
  const normalized = normalizeState(nextState);
  Object.assign(state, normalized);
}

function getAuthHeaders() {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
}

async function apiFetch(path, options = {}) {
  const headers = {
    ...(options.headers || {}),
    ...getAuthHeaders()
  };

  const response = await fetch(path, { ...options, headers });
  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (response.status === 401) {
    authToken = "";
    currentUser = null;
    localStorage.removeItem(authStorageKey);
    setState(defaultState);
    showAuth();
  }

  if (!response.ok) {
    throw new Error(data.error || data.output || "Request failed.");
  }

  return data;
}

function setAuthMode(mode) {
  authMode = mode;
  const isLogin = mode === "login";
  loginTab.classList.toggle("active", isLogin);
  registerTab.classList.toggle("active", !isLogin);
  loginTab.setAttribute("aria-selected", String(isLogin));
  registerTab.setAttribute("aria-selected", String(!isLogin));
  authSubmit.textContent = isLogin ? "Login" : "Create Account";
  authHelper.textContent = isLogin
    ? "Use your existing account to continue from where you stopped."
    : "Create an account once and we will keep your Python progress saved.";
  authPassword.autocomplete = isLogin ? "current-password" : "new-password";
  authFeedback.textContent = "";
}

function showAuth() {
  authOverlay.hidden = false;
  appShell.hidden = true;
  stopLearningTimer();
}

function showApp() {
  authOverlay.hidden = true;
  appShell.hidden = false;
  startLearningTimer();
}

function normalizeInput(code) {
  return code
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\u00A0/g, " ");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function recordActivity() {
  const today = todayKey();
  if (!state.activityDates.includes(today)) {
    state.activityDates = [...state.activityDates, today].sort();
  }
}

function getStreak() {
  if (!state.activityDates.length) {
    return 1;
  }

  const sorted = [...state.activityDates].sort();
  let streak = 0;
  let cursor = new Date();

  cursor.setHours(0, 0, 0, 0);

  for (let index = sorted.length - 1; index >= 0; index -= 1) {
    const key = cursor.toISOString().slice(0, 10);
    if (sorted[index] === key) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
      continue;
    }

    if (streak === 0) {
      cursor.setDate(cursor.getDate() - 1);
      if (sorted[index] === cursor.toISOString().slice(0, 10)) {
        streak += 1;
        cursor.setDate(cursor.getDate() - 1);
      }
    }
    break;
  }

  return Math.max(streak, 1);
}

function startLearningTimer() {
  if (learningTimer) {
    return;
  }

  lastTimerTick = Date.now();
  learningTimer = window.setInterval(() => {
    if (document.hidden) {
      lastTimerTick = Date.now();
      return;
    }

    const now = Date.now();
    const seconds = Math.floor((now - lastTimerTick) / 1000);
    if (seconds > 0) {
      state.timeSpentSeconds += Math.min(seconds, 30);
      state.lastActiveAt = now;
      lastTimerTick = now;
      recordActivity();
      updateDashboard();
      persistProgress();
    }
  }, 15000);
}

function stopLearningTimer() {
  if (!learningTimer) {
    return;
  }

  window.clearInterval(learningTimer);
  learningTimer = null;
}

function isLessonUnlockedWithState(checkState, index) {
  if (index === 0) {
    return true;
  }

  return checkState.completedLessons.includes(index - 1);
}

function isLessonUnlocked(index) {
  return isLessonUnlockedWithState(state, index);
}

function isChallengePassed(index) {
  return state.challengePassed.includes(index);
}

function isQuizPassed(index) {
  return state.quizPassed.includes(index);
}

function isLessonComplete(index) {
  return state.completedLessons.includes(index);
}

function isLessonInProgress(index) {
  return !isLessonComplete(index) && (state.startedLessons.includes(index) || isChallengePassed(index) || isQuizPassed(index));
}

function markStarted(index) {
  if (!state.startedLessons.includes(index)) {
    state.startedLessons = uniqueLessonIndexes([...state.startedLessons, index]);
  }
  recordActivity();
}

function markChallengePassed(index) {
  if (!state.challengePassed.includes(index)) {
    state.challengePassed = uniqueLessonIndexes([...state.challengePassed, index]);
  }
  markStarted(index);
}

function markQuizPassed(index) {
  if (!state.quizPassed.includes(index)) {
    state.quizPassed = uniqueLessonIndexes([...state.quizPassed, index]);
  }
  markStarted(index);
}

function markLessonCompleted(index) {
  if (!state.completedLessons.includes(index)) {
    state.completedLessons = uniqueLessonIndexes([...state.completedLessons, index]);
  }
  markStarted(index);
}

function getCompletedCount() {
  return state.completedLessons.length;
}

function maybeAutoCompleteLesson(lessonIndex) {
  if (isLessonComplete(lessonIndex)) {
    return false;
  }

  if (isChallengePassed(lessonIndex) && isQuizPassed(lessonIndex)) {
    markLessonCompleted(lessonIndex);
    const isLast = lessonIndex + 1 >= lessons.length;
    finishFeedback.textContent = isLast
      ? "Lesson completed. You've finished every lesson in the course!"
      : "Lesson completed. The next lesson is now unlocked.";
    finishFeedback.classList.add("success");
    return true;
  }

  return false;
}

function getContinueLessonIndex(checkState = state) {
  const firstIncompleteUnlocked = lessons.findIndex((_, index) => isLessonUnlockedWithState(checkState, index) && !checkState.completedLessons.includes(index));
  return firstIncompleteUnlocked === -1 ? Math.max(lessons.length - 1, 0) : firstIncompleteUnlocked;
}

function getCompletionPercent() {
  return Math.round((getCompletedCount() / lessons.length) * 100);
}

function formatTimeSpent(seconds) {
  if (seconds >= 3600) {
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  }

  return `${Math.max(1, Math.floor(seconds / 60) || 0)}m`;
}

function getQuizAverageScore() {
  const scored = Object.values(state.quizHistory).filter((entry) => entry && entry.completed);
  if (!scored.length) {
    return null;
  }
  const total = scored.reduce((sum, entry) => sum + (entry.score || 0), 0);
  return Math.round(total / scored.length);
}

function getFlawlessQuizCount() {
  return Object.values(state.quizHistory).filter((entry) => entry && entry.completed && entry.score === 100).length;
}

function getCompletedModuleCount() {
  const moduleMap = buildModuleMap();
  let count = 0;
  for (const moduleLessons of moduleMap.values()) {
    if (moduleLessons.every((lesson) => isLessonComplete(lesson.index))) {
      count += 1;
    }
  }
  return count;
}

function deriveBadges() {
  const completed = getCompletedCount();
  const streak = getStreak();
  const percent = getCompletionPercent();
  const quizAverage = getQuizAverageScore();
  const flawlessQuizzes = getFlawlessQuizCount();
  const completedModules = getCompletedModuleCount();

  const badges = [
    { icon: "🌱", label: "First Steps", earned: state.startedLessons.length >= 1 || completed >= 1 },
    { icon: "🧩", label: "First Lesson Done", earned: completed >= 1 },
    { icon: "🚀", label: "Momentum Builder", earned: completed >= 5 },
    { icon: "🧭", label: "Python Explorer", earned: completed >= 10 },
    { icon: "🏔️", label: "Halfway There", earned: percent >= 50 },
    { icon: "🏆", label: "Course Finisher", earned: completed === lessons.length && lessons.length > 0 },
    { icon: "📦", label: "Module Master", earned: completedModules >= 1, detail: completedModules >= 1 ? `${completedModules} module${completedModules === 1 ? "" : "s"} cleared` : "" },
    { icon: "🎯", label: "Quiz Ace", earned: flawlessQuizzes >= 1, detail: flawlessQuizzes >= 1 ? `${flawlessQuizzes} perfect quiz${flawlessQuizzes === 1 ? "" : "zes"}` : "" },
    { icon: "📊", label: "Strong Average", earned: quizAverage !== null && quizAverage >= 80 },
    { icon: "🔥", label: "3 Day Streak", earned: streak >= 3 },
    { icon: "⚡", label: "7 Day Streak", earned: streak >= 7 },
    { icon: "⏱️", label: "1 Hour Focus", earned: state.timeSpentSeconds >= 3600 }
  ];

  const earned = badges.filter((badge) => badge.earned);
  if (earned.length) {
    return earned;
  }

  return [{ icon: "🕒", label: "Ready to Start", earned: false, detail: "Finish your first challenge and quiz to earn a badge" }];
}

async function persistProgress() {
  if (!authToken) {
    return;
  }

  try {
    await apiFetch("/api/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ progress: state })
    });
  } catch (error) {
    finishFeedback.textContent = error.message;
  }
}

function buildModuleMap() {
  const moduleMap = new Map();

  lessons.forEach((lesson, index) => {
    if (!moduleMap.has(lesson.module)) {
      moduleMap.set(lesson.module, []);
    }
    moduleMap.get(lesson.module).push({ ...lesson, index });
  });

  return moduleMap;
}

function shuffleArray(values) {
  const array = [...values];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}

const QUIZ_PASS_PERCENT = 70;

function getQuizPayload(index) {
  const lesson = lessons[index];
  const existing = state.quizHistory[index];

  if (
    existing &&
    typeof existing === "object" &&
    existing.optionOrder &&
    typeof existing.optionOrder === "object" &&
    !Array.isArray(existing.optionOrder) &&
    typeof existing.qIndex === "number" &&
    existing.answers &&
    typeof existing.answers === "object"
  ) {
    return existing;
  }

  const payload = {
    qIndex: 0,
    optionOrder: {},
    answers: {},
    completed: false,
    correctCount: 0,
    score: 0
  };

  state.quizHistory[index] = payload;
  return payload;
}

function getQuizOptionOrder(payload, lesson, qIndex) {
  const key = String(qIndex);
  if (Array.isArray(payload.optionOrder[key]) && payload.optionOrder[key].length === lesson.quiz[qIndex].options.length) {
    return payload.optionOrder[key];
  }
  const order = shuffleArray(lesson.quiz[qIndex].options.map((option, optionIndex) => optionIndex));
  payload.optionOrder[key] = order;
  return order;
}

function renderModuleList() {
  const moduleMap = buildModuleMap();
  moduleList.innerHTML = "";
  let activeWrapper = null;

  for (const [moduleName, moduleLessons] of moduleMap.entries()) {
    const completed = moduleLessons.filter((lesson) => isLessonComplete(lesson.index)).length;
    const wrapper = document.createElement("details");
    wrapper.className = "module-item module-dropdown";
    if (moduleLessons.some((lesson) => lesson.index === state.lessonIndex)) {
      wrapper.open = true;
      activeWrapper = wrapper;
    }

    const summary = document.createElement("summary");
    summary.className = "module-summary";
    summary.innerHTML = `
      <h4>${moduleName} (${completed}/${moduleLessons.length})</h4>
      <p>${moduleDescriptions[moduleName] || "Python learning module"}</p>
    `;
    wrapper.appendChild(summary);

    const lessonButtons = document.createElement("div");
    lessonButtons.className = "module-lessons";

    moduleLessons.forEach((lesson) => {
      const unlocked = isLessonUnlocked(lesson.index);
      const completedLesson = isLessonComplete(lesson.index);
      const inProgress = isLessonInProgress(lesson.index);
      const statusText = completedLesson ? "Completed" : unlocked ? (inProgress ? "In Progress" : "Ready") : "Locked";
      const lessonIcon = lessonIcons[lesson.title] || "📘";
      const button = document.createElement("button");
      button.type = "button";
      button.className = [
        "lesson-item",
        lesson.index === state.lessonIndex ? "active" : "",
        completedLesson ? "completed" : "",
        inProgress ? "in-progress" : "",
        unlocked ? "" : "locked"
      ].join(" ").trim();
      button.innerHTML = `
        <div class="lesson-item-head">
          <span class="lesson-item-icon" aria-hidden="true">${lessonIcon}</span>
          <strong>${lesson.index + 1}. ${lesson.title}</strong>
        </div>
        <span>${lesson.summary}</span>
        <small>${statusText}</small>
      `;
      button.disabled = !unlocked;
      button.addEventListener("click", () => {
        if (!unlocked) {
          return;
        }
        state.lessonIndex = lesson.index;
        markStarted(lesson.index);
        renderApp();
        persistProgress();
      });
      lessonButtons.appendChild(button);
    });

    wrapper.addEventListener("toggle", () => {
      if (!wrapper.open) {
        return;
      }

      moduleList.querySelectorAll(".module-dropdown").forEach((item) => {
        if (item !== wrapper) {
          item.open = false;
        }
      });
    });

    wrapper.appendChild(lessonButtons);
    moduleList.appendChild(wrapper);
  }

  if (activeWrapper) {
    moduleList.querySelectorAll(".module-dropdown").forEach((item) => {
      if (item !== activeWrapper) {
        item.open = false;
      }
    });
  }
}

function updateProgress() {
  const completedCount = getCompletedCount();
  const percent = getCompletionPercent();
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${completedCount} / ${lessons.length} Lessons Completed`;
  completionCount.textContent = `${completedCount}/${lessons.length}`;
  completionPercent.textContent = `${percent}%`;
}

function updateDashboard() {
  dashboardCompleted.textContent = String(getCompletedCount());
  dashboardCurrent.textContent = `Lesson ${state.lessonIndex + 1}`;
  dashboardTime.textContent = formatTimeSpent(state.timeSpentSeconds);
  dashboardStreak.textContent = `${getStreak()} day${getStreak() === 1 ? "" : "s"}`;
  badgeList.innerHTML = "";
  deriveBadges().forEach((badge) => {
    const item = document.createElement("span");
    item.className = `badge-pill${badge.earned ? "" : " badge-pending"}`;
    item.title = badge.detail || "";
    item.innerHTML = `<span class="badge-icon" aria-hidden="true">${badge.icon}</span>${badge.label}`;
    badgeList.appendChild(item);
  });
  renderModuleChart();
}

function renderModuleChart() {
  if (!moduleChart) {
    return;
  }

  const moduleMap = buildModuleMap();
  const rows = [...moduleMap.entries()].map(([name, moduleLessons]) => ({
    name,
    completed: moduleLessons.filter((lesson) => isLessonComplete(lesson.index)).length,
    total: moduleLessons.length
  }));

  const width = 320;
  const rowHeight = Math.max(24, Math.floor(190 / Math.max(rows.length, 1)));
  const height = rowHeight * rows.length + 10;
  const labelWidth = 108;
  const trackWidth = width - labelWidth - 44;

  moduleChart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  moduleChart.innerHTML = rows.map((row, index) => {
    const y = index * rowHeight;
    const percent = row.total ? row.completed / row.total : 0;
    const barWidth = Math.max(percent * trackWidth, row.completed > 0 ? 4 : 0);
    const shortName = row.name.length > 16 ? `${row.name.slice(0, 15)}…` : row.name;
    const barY = y + rowHeight / 2 - 6;
    return `
      <text x="0" y="${y + rowHeight / 2 + 4}" class="chart-label">${shortName}</text>
      <rect x="${labelWidth}" y="${barY}" width="${trackWidth}" height="12" rx="6" class="chart-track"></rect>
      <rect x="${labelWidth}" y="${barY}" width="${barWidth}" height="12" rx="6" class="chart-bar"></rect>
      <text x="${labelWidth + trackWidth + 8}" y="${y + rowHeight / 2 + 4}" class="chart-count">${row.completed}/${row.total}</text>
    `;
  }).join("");
}

function updateLessonStatus() {
  const lessonIndex = state.lessonIndex;
  const complete = isLessonComplete(lessonIndex);
  const challengePassed = isChallengePassed(lessonIndex);
  const quizPassed = isQuizPassed(lessonIndex);

  lessonStatus.className = "lesson-status";

  if (complete) {
    lessonStatus.textContent = "Completed";
    lessonStatus.classList.add("completed");
  } else if (challengePassed || quizPassed || isLessonInProgress(lessonIndex)) {
    lessonStatus.textContent = "In Progress";
    lessonStatus.classList.add("in-progress");
  } else {
    lessonStatus.textContent = "Locked";
  }

  challengeState.textContent = challengePassed ? "Challenge Solved" : "Challenge Pending";
  challengeState.className = `checkpoint-badge ${challengePassed ? "success" : ""}`.trim();
  quizState.textContent = quizPassed ? "Quiz Passed" : "Quiz Pending";
  quizState.className = `checkpoint-badge ${quizPassed ? "success" : ""}`.trim();
}

function updateNavigationButtons() {
  prevButton.disabled = state.lessonIndex === 0;
  nextButton.disabled = state.lessonIndex + 1 >= lessons.length || !isLessonComplete(state.lessonIndex);
}

function renderVideoLinks(lesson) {
  videoLinks.innerHTML = "";

  lesson.videos.forEach((video) => {
    const link = document.createElement("a");
    link.className = "video-link";
    link.href = video.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = video.label;
    videoLinks.appendChild(link);
  });
}

function renderSummary(lesson) {
  lessonSummaryPoints.innerHTML = "";
  lesson.summaryPoints.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    lessonSummaryPoints.appendChild(item);
  });
}

function getChallengeProgress(lessonIndex) {
  const lesson = lessons[lessonIndex];
  const existing = state.challengeProgress[lessonIndex];
  if (!Array.isArray(existing) || existing.length !== lesson.challenges.length) {
    state.challengeProgress[lessonIndex] = lesson.challenges.map(() => false);
  }
  return state.challengeProgress[lessonIndex];
}

function getFirstUnsolvedChallengeIndex(lessonIndex) {
  const progress = getChallengeProgress(lessonIndex);
  const firstUnsolved = progress.findIndex((solved) => !solved);
  return firstUnsolved === -1 ? Math.max(progress.length - 1, 0) : firstUnsolved;
}

function refreshChallengeCompletion(lessonIndex) {
  const progress = getChallengeProgress(lessonIndex);
  const allSolved = progress.length > 0 && progress.every(Boolean);
  if (allSolved) {
    markChallengePassed(lessonIndex);
  } else {
    state.challengePassed = state.challengePassed.filter((index) => index !== lessonIndex);
  }
  return allSolved;
}

function renderChallengeMeta(lesson) {
  const progress = getChallengeProgress(state.lessonIndex);
  const solvedCount = progress.filter(Boolean).length;
  const challenge = lesson.challenges[activeChallengeIndex];

  challengeCounter.textContent = `Challenge ${activeChallengeIndex + 1} of ${lesson.challenges.length}`;
  challengeScore.textContent = `Solved ${solvedCount}/${lesson.challenges.length}`;
  challengeScore.className = `lesson-status ${progress[activeChallengeIndex] ? "completed" : ""}`.trim();
  challengeRules.textContent = challenge.successText;
  challengeTip.textContent = challenge.tip;

  prevChallengeButton.disabled = activeChallengeIndex === 0;
  nextChallengeButton.disabled = activeChallengeIndex >= lesson.challenges.length - 1;
}

function loadChallengeIntoEditor(lesson) {
  const challenge = lesson.challenges[activeChallengeIndex];
  const draftKey = `${state.lessonIndex}:${activeChallengeIndex}`;
  const savedDraft = state.lessonDrafts[draftKey];

  practicePrompt.textContent = challenge.prompt;
  practiceHint.textContent = challenge.tip;
  practiceHint.hidden = true;
  practiceArea.value = typeof savedDraft === "string" ? savedDraft : "";
  programInput.value = lesson.defaultInput || "";
  practiceFeedback.textContent = "";
  outputConsole.textContent = "Your output will appear here.";
  resetAiReviewPanel();
}

function renderChallenge(lesson) {
  renderChallengeMeta(lesson);
  loadChallengeIntoEditor(lesson);
}

function renderQuiz(lesson) {
  const payload = getQuizPayload(state.lessonIndex);
  const totalQuestions = lesson.quiz.length;

  quizNextButton.hidden = true;
  quizRetakeButton.hidden = true;

  if (payload.completed) {
    const passed = payload.score >= QUIZ_PASS_PERCENT;
    quizRequirement.textContent = `Quiz finished · Passing score required: ${QUIZ_PASS_PERCENT}%`;
    quizQuestion.textContent = "";
    quizOptions.innerHTML = "";
    quizFeedback.textContent = `You scored ${payload.score}% (${payload.correctCount}/${totalQuestions} correct). ${passed ? "You passed this quiz." : "Try again to reach the passing score."}`;
    quizExplanation.textContent = "";
    quizRetakeButton.hidden = false;
    return;
  }

  const qIndex = Math.min(payload.qIndex, totalQuestions - 1);
  const question = lesson.quiz[qIndex];
  const order = getQuizOptionOrder(payload, lesson, qIndex);
  const answered = payload.answers[String(qIndex)];

  quizRequirement.textContent = `Question ${qIndex + 1} of ${totalQuestions} · Passing score required: ${QUIZ_PASS_PERCENT}%`;
  quizQuestion.textContent = question.question;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";
  quizExplanation.textContent = "";

  order.forEach((optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = question.options[optionIndex];

    if (answered) {
      button.disabled = true;
      if (optionIndex === question.answer) {
        button.classList.add("correct");
      } else if (optionIndex === answered.selectedIndex) {
        button.classList.add("wrong");
      }
    }

    button.addEventListener("click", async () => {
      const correct = optionIndex === question.answer;
      payload.answers[String(qIndex)] = { selectedIndex: optionIndex, correct };

      markStarted(state.lessonIndex);
      renderQuiz(lesson);
      await persistProgress();
    });

    quizOptions.appendChild(button);
  });

  if (answered) {
    quizFeedback.textContent = answered.correct ? "Correct!" : "Not quite.";
    quizExplanation.textContent = `The correct answer is "${question.options[question.answer]}".`;
    quizNextButton.hidden = false;
    quizNextButton.textContent = qIndex + 1 >= totalQuestions ? "See Results" : "Next Question ›";
  }
}

function advanceQuiz(lesson) {
  const payload = getQuizPayload(state.lessonIndex);
  const totalQuestions = lesson.quiz.length;

  if (payload.qIndex + 1 >= totalQuestions) {
    const answeredCount = Object.keys(payload.answers).length;
    const correctCount = Object.values(payload.answers).filter((entry) => entry.correct).length;
    const score = answeredCount > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    payload.completed = true;
    payload.correctCount = correctCount;
    payload.score = score;

    if (score >= QUIZ_PASS_PERCENT) {
      markQuizPassed(state.lessonIndex);
    } else {
      state.quizPassed = state.quizPassed.filter((index) => index !== state.lessonIndex);
    }
  } else {
    payload.qIndex += 1;
  }

  maybeAutoCompleteLesson(state.lessonIndex);
  updateLessonStatus();
  updateNavigationButtons();
  renderModuleList();
  updateProgress();
  updateDashboard();
  renderQuiz(lesson);
  persistProgress();
}

function retakeQuiz(lesson) {
  state.quizHistory[state.lessonIndex] = {
    qIndex: 0,
    optionOrder: {},
    answers: {},
    completed: false,
    correctCount: 0,
    score: 0
  };
  state.quizPassed = state.quizPassed.filter((index) => index !== state.lessonIndex);
  updateLessonStatus();
  updateNavigationButtons();
  renderModuleList();
  renderQuiz(lesson);
  persistProgress();
}

function updateHero(lesson) {
  currentPathTitle.textContent = `${lesson.module} · ${lesson.title}`;
  currentPathSummary.textContent = lesson.summary;
}

function setHeroMode(mode) {
  const learnActive = mode === "learn";
  learnPill.classList.toggle("active", learnActive);
  practicePill.classList.toggle("active", !learnActive);
  learnModeSections.forEach((section) => {
    section.hidden = !learnActive;
  });
  practiceModeSections.forEach((section) => {
    section.hidden = learnActive;
  });
}

function renderApp() {
  const lesson = lessons[state.lessonIndex];

  if (state.lessonIndex !== lastRenderedLessonIndex) {
    activeChallengeIndex = getFirstUnsolvedChallengeIndex(state.lessonIndex);
    lastRenderedLessonIndex = state.lessonIndex;
  }

  lessonNumber.textContent = `Lesson ${state.lessonIndex + 1} of ${lessons.length}`;
  lessonTitle.textContent = lesson.title;
  lessonTag.textContent = lesson.tag;
  lessonSummary.textContent = lesson.summary;
  lessonIntroduction.textContent = lesson.introduction;
  lessonWhy.textContent = lesson.why;
  lessonBefore.textContent = lesson.before;
  lessonAfter.textContent = lesson.after;
  lessonConcept.textContent = lesson.concept;
  lessonExplanationDetail.textContent = lesson.explanationDetail;
  lessonAnalogy.textContent = lesson.analogy;
  syntaxTip.textContent = lesson.syntaxTip;
  commonMistake.textContent = lesson.commonMistake;
  lessonCode.textContent = lesson.code;
  lessonExplanation.textContent = lesson.explanation;
  finishFeedback.textContent = "";
  finishFeedback.classList.remove("success");
  resetAiReviewPanel();

  setHeroMode("learn");
  updateHero(lesson);
  renderVideoLinks(lesson);
  renderSummary(lesson);
  renderChallenge(lesson);
  renderQuiz(lesson);
  renderModuleList();
  updateProgress();
  updateDashboard();
  updateLessonStatus();
  updateNavigationButtons();
}

function getNonEmptyLines(output) {
  return output.split("\n").map((line) => line.trim()).filter(Boolean);
}

function validateChallengeOutput(challenge, output) {
  const lines = getNonEmptyLines(output);
  const rule = challenge.rule;

  if (rule.type === "minLines") {
    return lines.length >= rule.count;
  }

  if (rule.type === "minLinesAndDigit") {
    return lines.length >= rule.count && /\d/.test(output);
  }

  if (rule.type === "includesAny") {
    return lines.length >= rule.count && rule.values.some((value) => output.includes(value));
  }

  return lines.length > 0;
}

async function runCode() {
  const code = normalizeInput(practiceArea.value.trim());
  const stdin = programInput.value.replace(/\r\n/g, "\n");
  const lesson = lessons[state.lessonIndex];
  const challenge = lesson.challenges[activeChallengeIndex];
  const draftKey = `${state.lessonIndex}:${activeChallengeIndex}`;

  if (!code) {
    practiceFeedback.textContent = "Write some code first.";
    outputConsole.textContent = "Nothing to run yet.";
    return;
  }

  state.lessonDrafts[draftKey] = practiceArea.value;
  markStarted(state.lessonIndex);
  runCodeButton.disabled = true;
  runCodeButton.textContent = "Running...";
  practiceFeedback.textContent = "";
  outputConsole.textContent = "Running...";

  try {
    const result = await apiFetch("/api/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code, stdin })
    });

    outputConsole.textContent = result.output || "Code finished with no output.";
    const progress = getChallengeProgress(state.lessonIndex);

    if (result.ok) {
      const solved = validateChallengeOutput(challenge, result.output || "");
      progress[activeChallengeIndex] = solved;
      if (solved) {
        practiceFeedback.textContent = `Nice work. Challenge ${activeChallengeIndex + 1} solved.`;
      } else {
        practiceFeedback.textContent = "Your code ran, but this challenge's checkpoint is not complete yet. Compare your output with the success check and try again.";
      }
    } else {
      progress[activeChallengeIndex] = false;
      practiceFeedback.textContent = "Python found an error. Read the output, fix the code, and try again.";
    }

    refreshChallengeCompletion(state.lessonIndex);
    renderChallengeMeta(lesson);
    maybeAutoCompleteLesson(state.lessonIndex);
    updateLessonStatus();
    updateNavigationButtons();
    renderModuleList();
    updateProgress();
    updateDashboard();
    await persistProgress();
  } catch (error) {
    outputConsole.textContent = "Could not reach the local Python runner. Start the app server and refresh the page.";
    practiceFeedback.textContent = error.message || "The app server is not connected.";
  } finally {
    runCodeButton.disabled = false;
    runCodeButton.textContent = "Run Code";
  }
}

function resetAiReviewPanel() {
  aiReviewStatus.hidden = false;
  aiReviewStatus.textContent = "Run your code, then ask for a review to get feedback on style, correctness, and how to improve it.";
  aiReviewOutput.hidden = true;
  aiReviewOutput.textContent = "";
}

async function requestAiReview() {
  const lesson = lessons[state.lessonIndex];
  const challenge = lesson.challenges[activeChallengeIndex];
  const code = normalizeInput(practiceArea.value.trim());

  if (!code) {
    aiReviewStatus.hidden = false;
    aiReviewOutput.hidden = true;
    aiReviewStatus.textContent = "Write and run some code first, then ask for a review.";
    return;
  }

  aiReviewButton.disabled = true;
  aiReviewButton.textContent = "Reviewing...";
  aiReviewStatus.hidden = false;
  aiReviewOutput.hidden = true;
  aiReviewStatus.textContent = "Asking the AI reviewer to look at your code...";

  try {
    const result = await apiFetch("/api/ai-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code,
        output: outputConsole.textContent || "",
        lessonTitle: lesson.title,
        concept: lesson.concept,
        challengePrompt: challenge.prompt
      })
    });

    aiReviewStatus.hidden = true;
    aiReviewOutput.hidden = false;
    aiReviewOutput.textContent = result.review;
  } catch (error) {
    aiReviewStatus.hidden = false;
    aiReviewOutput.hidden = true;
    aiReviewStatus.textContent = error.message || "AI review failed. Try again.";
  } finally {
    aiReviewButton.disabled = false;
    aiReviewButton.textContent = "🤖 Review My Code";
  }
}

async function loadProgress() {
  const result = await apiFetch("/api/progress");
  setState(result.progress || defaultState);
}

async function applyAuthenticatedSession(session) {
  currentUser = session.username;
  userName.textContent = session.username;
  showApp();
  await loadProgress();
  renderApp();
}

async function restoreSession() {
  if (!authToken) {
    showAuth();
    return;
  }

  try {
    const session = await apiFetch("/api/session");
    await applyAuthenticatedSession(session);
  } catch {
    localStorage.removeItem(authStorageKey);
    authToken = "";
    showAuth();
  }
}

loginTab.addEventListener("click", () => {
  setAuthMode("login");
});

registerTab.addEventListener("click", () => {
  setAuthMode("register");
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authFeedback.textContent = "";
  authSubmit.disabled = true;

  try {
    const endpoint = authMode === "login" ? "/api/login" : "/api/register";
    const result = await apiFetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: authName.value.trim(),
        password: authPassword.value
      })
    });

    authToken = result.token;
    currentUser = result.username;
    localStorage.setItem(authStorageKey, authToken);
    authForm.reset();
    await applyAuthenticatedSession(result);
  } catch (error) {
    authFeedback.textContent = error.message;
  } finally {
    authSubmit.disabled = false;
  }
});

logoutButton.addEventListener("click", async () => {
  logoutButton.disabled = true;

  try {
    if (authToken) {
      await apiFetch("/api/logout", { method: "POST" });
    }
  } catch {
    // Ignore logout API failures and clear client state anyway.
  } finally {
    authToken = "";
    currentUser = null;
    localStorage.removeItem(authStorageKey);
    setState(defaultState);
    showAuth();
    logoutButton.disabled = false;
  }
});

continueLearningButton.addEventListener("click", () => {
  state.lessonIndex = getContinueLessonIndex();
  renderApp();
  persistProgress();
});

learnPill.addEventListener("click", () => {
  setHeroMode("learn");
  learnSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

practicePill.addEventListener("click", () => {
  setHeroMode("practice");
  practiceSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("run-code").addEventListener("click", runCode);
aiReviewButton.addEventListener("click", requestAiReview);
document.getElementById("show-hint").addEventListener("click", () => {
  practiceHint.hidden = false;
});
document.getElementById("use-example").addEventListener("click", () => {
  practiceArea.value = lessons[state.lessonIndex].code;
  state.lessonDrafts[`${state.lessonIndex}:${activeChallengeIndex}`] = practiceArea.value;
});
document.getElementById("mark-review").addEventListener("click", () => {
  const lesson = lessons[state.lessonIndex];
  practiceArea.value = "";
  delete state.lessonDrafts[`${state.lessonIndex}:${activeChallengeIndex}`];
  programInput.value = lesson.defaultInput || "";
  practiceHint.hidden = true;
  practiceFeedback.textContent = "Lesson editor reset. Start the challenge from a clean slate.";
  outputConsole.textContent = "Your output will appear here.";
});
practiceArea.addEventListener("input", () => {
  state.lessonDrafts[`${state.lessonIndex}:${activeChallengeIndex}`] = practiceArea.value;
});
prevChallengeButton.addEventListener("click", () => {
  if (activeChallengeIndex === 0) {
    return;
  }
  activeChallengeIndex -= 1;
  renderChallenge(lessons[state.lessonIndex]);
});
nextChallengeButton.addEventListener("click", () => {
  const lesson = lessons[state.lessonIndex];
  if (activeChallengeIndex >= lesson.challenges.length - 1) {
    return;
  }
  activeChallengeIndex += 1;
  renderChallenge(lesson);
});
quizNextButton.addEventListener("click", () => {
  advanceQuiz(lessons[state.lessonIndex]);
});
quizRetakeButton.addEventListener("click", () => {
  retakeQuiz(lessons[state.lessonIndex]);
});
prevButton.addEventListener("click", () => {
  if (state.lessonIndex === 0) {
    return;
  }

  state.lessonIndex -= 1;
  renderApp();
  persistProgress();
});
nextButton.addEventListener("click", () => {
  if (state.lessonIndex + 1 >= lessons.length) {
    return;
  }

  if (!isLessonComplete(state.lessonIndex)) {
    finishFeedback.textContent = "Solve the challenge and pass the quiz to unlock the next lesson.";
    finishFeedback.classList.remove("success");
    updateNavigationButtons();
    return;
  }

  state.lessonIndex += 1;
  renderApp();
  persistProgress();
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    lastTimerTick = Date.now();
  }
});

setAuthMode("login");
restoreSession();

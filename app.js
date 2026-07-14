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
    explanation: "You can remove spaces and change the letter style easily.",
    practice: "Create a string with spaces and print a cleaned-up version using strip().",
    hint: 'Example: text = " hello "',
    quiz: { question: "Which method removes extra spaces around text?", options: ["strip()", "append()", "pop()"], answer: 0 },
    videos: [
      { label: "Watch string methods lesson", url: "https://www.youtube.com/watch?v=Oe_Hlo8woes" },
      { label: "Backup string methods lesson", url: "https://www.youtube.com/watch?v=QyM6bq5JzmU" }
    ]
  },
  {
    module: "Working With Data",
    tag: "Loops",
    title: "Looping Through Collections",
    summary: "Loops become more useful when you combine them with lists and dictionaries.",
    why: "Processing many items is one of the main reasons people write programs.",
    before: "You know loops and lists",
    after: "You can process a whole collection efficiently",
    concept: "A loop can visit each item in a list or each key in a dictionary.",
    analogy: "It is like checking each student in an attendance list one by one.",
    syntaxTip: "Use for item in items: to visit each element.",
    commonMistake: "Trying to access list items by wrong index when direct iteration is easier.",
    code: 'fruits = ["apple", "banana", "mango"]\nfor fruit in fruits:\n    print(fruit)',
    explanation: "Each loop cycle gives one item to the variable fruit.",
    practice: "Create a list of three subjects and print each subject in a loop.",
    hint: "Use for subject in subjects:",
    quiz: { question: "What does for item in items do?", options: ["Visits each item", "Deletes the list", "Sorts automatically"], answer: 0 },
    videos: [
      { label: "Watch looping through lists lesson", url: "https://www.youtube.com/watch?v=xnBitEG8Izo" },
      { label: "Backup looping through lists lesson", url: "https://www.youtube.com/watch?v=RUPSoOlt8Es" }
    ]
  },
  {
    module: "Files and Errors",
    tag: "Files",
    title: "Reading and Writing Files",
    summary: "Programs can save data to files and read it back later.",
    why: "Persistent storage is a big step from toy programs to useful tools.",
    before: "You can work with strings",
    after: "You can read and write simple text files",
    concept: "open() lets Python work with files in read or write mode.",
    analogy: "It is like opening a notebook to read or write notes.",
    syntaxTip: "Use with open(...) as file: for safer file handling.",
    commonMistake: "Forgetting the mode, like 'r' or 'w', can cause confusion.",
    code: 'with open("notes.txt", "w") as file:\n    file.write("Learn Python step by step")\n\nwith open("notes.txt", "r") as file:\n    print(file.read())',
    explanation: "The with block closes the file automatically after use.",
    practice: "Write one short line to a file and print it back.",
    hint: 'Try: with open("test.txt", "w") as file:',
    quiz: { question: "Why do we use with open(...) ?", options: ["It closes files safely", "It creates loops", "It prints automatically"], answer: 0 },
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
    code: 'import math\nprint(math.sqrt(16))\nprint(math.ceil(3.2))',
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

const storageKey = "python-zero-to-confident-progress";
const defaultState = {
  lessonIndex: 0,
  codePassed: [],
  completedLessons: [],
  quizCorrect: []
};

const moduleDescriptions = {
  "Getting Started": "First steps: output, variables, data types, and operators",
  "Control Flow": "Input, conditions, and loops",
  "Functions and Reuse": "Reusable logic and return values",
  "Collections": "Lists, tuples, sets, and dictionaries",
  "Working With Data": "Strings and iterating through collections",
  "Files and Errors": "Files, input safety, and exceptions",
  "Bigger Programs": "Imports, objects, and mini projects"
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (!stored) {
      return { ...defaultState };
    }

    return {
      lessonIndex: Number.isInteger(stored.lessonIndex) ? stored.lessonIndex : 0,
      codePassed: Array.isArray(stored.codePassed) ? stored.codePassed : [],
      completedLessons: Array.isArray(stored.completedLessons) ? stored.completedLessons : [],
      quizCorrect: Array.isArray(stored.quizCorrect) ? stored.quizCorrect : []
    };
  } catch {
    return { ...defaultState };
  }
}

const state = loadState();

const moduleList = document.getElementById("module-list");
const lessonTitle = document.getElementById("lesson-title");
const lessonTag = document.getElementById("lesson-tag");
const lessonStatus = document.getElementById("lesson-status");
const lessonNumber = document.getElementById("lesson-number");
const lessonSummary = document.getElementById("lesson-summary");
const lessonWhy = document.getElementById("lesson-why");
const lessonBefore = document.getElementById("lesson-before");
const lessonAfter = document.getElementById("lesson-after");
const lessonConcept = document.getElementById("lesson-concept");
const lessonAnalogy = document.getElementById("lesson-analogy");
const lessonCode = document.getElementById("lesson-code");
const lessonExplanation = document.getElementById("lesson-explanation");
const syntaxTip = document.getElementById("syntax-tip");
const commonMistake = document.getElementById("common-mistake");
const practicePrompt = document.getElementById("practice-prompt");
const practiceArea = document.getElementById("practice-area");
const practiceHint = document.getElementById("practice-hint");
const practiceFeedback = document.getElementById("practice-feedback");
const programInput = document.getElementById("program-input");
const outputConsole = document.getElementById("output-console");
const videoLinks = document.getElementById("video-links");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const completionCount = document.getElementById("completion-count");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const runCodeButton = document.getElementById("run-code");

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function normalizeInput(code) {
  return code
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\u00A0/g, " ");
}

function markCompleted(index) {
  if (!state.completedLessons.includes(index)) {
    state.completedLessons.push(index);
    saveState();
  }
}

function markCodePassed(index) {
  if (!state.codePassed.includes(index)) {
    state.codePassed.push(index);
    saveState();
  }
}

function markQuizCorrect(index) {
  if (!state.quizCorrect.includes(index)) {
    state.quizCorrect.push(index);
    saveState();
  }
}

function isLessonComplete(index) {
  return state.codePassed.includes(index) && state.quizCorrect.includes(index);
}

function syncLessonCompletion(index) {
  if (isLessonComplete(index)) {
    markCompleted(index);
    return true;
  }

  return false;
}

function isLessonUnlocked(index) {
  if (index === 0) {
    return true;
  }

  return isLessonComplete(index - 1);
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

function renderModuleList() {
  const moduleMap = buildModuleMap();
  moduleList.innerHTML = "";

  for (const [moduleName, moduleLessons] of moduleMap.entries()) {
    const completed = moduleLessons.filter((lesson) => state.completedLessons.includes(lesson.index)).length;
    const wrapper = document.createElement("details");
    wrapper.className = "module-item module-dropdown";

    const hasActiveLesson = moduleLessons.some((lesson) => lesson.index === state.lessonIndex);
    if (hasActiveLesson) {
      wrapper.open = true;
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
      const button = document.createElement("button");
      const isCompleted = isLessonComplete(lesson.index);
      const unlocked = isLessonUnlocked(lesson.index);
      button.type = "button";
      button.className = `lesson-item ${lesson.index === state.lessonIndex ? "active" : ""} ${unlocked ? "" : "locked"}`.trim();
      button.innerHTML = `
        <strong>${lesson.index + 1}. ${lesson.title}</strong>
        <span>${lesson.summary}</span>
        <small>${isCompleted ? "Completed" : unlocked ? lesson.tag : "Locked"}</small>
      `;
      button.addEventListener("click", () => {
        if (!unlocked) {
          return;
        }
        state.lessonIndex = lesson.index;
        saveState();
        renderApp();
      });
      button.disabled = !unlocked;
      lessonButtons.appendChild(button);
    });

    wrapper.appendChild(lessonButtons);
    moduleList.appendChild(wrapper);
  }
}

function updateProgress() {
  const completedCount = state.completedLessons.length;
  const total = lessons.length;
  const percent = (completedCount / total) * 100;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${completedCount} / ${total} Lessons Completed`;
  completionCount.textContent = `${completedCount}/${total}`;
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

function renderQuiz(lesson) {
  quizQuestion.textContent = lesson.quiz.question;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";
  const alreadyCorrect = state.quizCorrect.includes(state.lessonIndex);

  lesson.quiz.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;

    if (alreadyCorrect) {
      button.disabled = true;
      if (optionIndex === lesson.quiz.answer) {
        button.classList.add("correct");
      }
    }

    button.addEventListener("click", () => {
      const buttons = quizOptions.querySelectorAll(".quiz-option");
      buttons.forEach((item) => {
        item.disabled = true;
      });

      if (optionIndex === lesson.quiz.answer) {
        button.classList.add("correct");
        quizFeedback.textContent = "Correct. Nice progress.";
        markQuizCorrect(state.lessonIndex);
        const completedNow = syncLessonCompletion(state.lessonIndex);
        if (completedNow) {
          practiceFeedback.textContent = "Great work. You completed this lesson by passing both code and quiz.";
        }
      } else {
        button.classList.add("wrong");
        buttons[lesson.quiz.answer].classList.add("correct");
        quizFeedback.textContent = "Not quite. Re-read the concept and try the next one.";
      }

      renderModuleList();
      updateProgress();
      updateLessonStatus();
    }, { once: true });

    quizOptions.appendChild(button);
  });

  if (alreadyCorrect) {
    quizFeedback.textContent = "Quiz completed.";
  }
}

function updateLessonStatus() {
  const lessonIndex = state.lessonIndex;
  const hasCode = state.codePassed.includes(lessonIndex);
  const hasQuiz = state.quizCorrect.includes(lessonIndex);
  const isComplete = isLessonComplete(lessonIndex);

  lessonStatus.className = "lesson-status";

  if (isComplete) {
    lessonStatus.textContent = "Lesson Completed";
    lessonStatus.classList.add("completed");
    return;
  }

  if (hasCode || hasQuiz) {
    lessonStatus.textContent = hasCode ? "Quiz Required" : "Code Run Required";
    lessonStatus.classList.add("in-progress");
    return;
  }

  lessonStatus.textContent = "Not Completed";
}

function renderApp() {
  const lesson = lessons[state.lessonIndex];
  const nextLessonIndex = state.lessonIndex + 1;
  const nextButton = document.getElementById("next-lesson");
  const prevButton = document.getElementById("prev-lesson");

  lessonNumber.textContent = `Lesson ${state.lessonIndex + 1} of ${lessons.length}`;
  lessonTitle.textContent = lesson.title;
  lessonTag.textContent = lesson.tag;
  lessonSummary.textContent = lesson.summary;
  lessonWhy.textContent = lesson.why;
  lessonBefore.textContent = lesson.before;
  lessonAfter.textContent = lesson.after;
  lessonConcept.textContent = lesson.concept;
  lessonAnalogy.textContent = lesson.analogy;
  syntaxTip.textContent = lesson.syntaxTip;
  commonMistake.textContent = lesson.commonMistake;
  lessonCode.textContent = lesson.code;
  lessonExplanation.textContent = lesson.explanation;
  practicePrompt.textContent = lesson.practice;
  practiceHint.textContent = lesson.hint;
  practiceHint.hidden = true;
  practiceFeedback.textContent = "";
  outputConsole.textContent = "Your output will appear here.";
  practiceArea.value = lesson.code;
  programInput.value = lesson.defaultInput || "";

  renderModuleList();
  renderVideoLinks(lesson);
  renderQuiz(lesson);
  updateProgress();
  updateLessonStatus();

  prevButton.disabled = state.lessonIndex === 0;
  nextButton.disabled = nextLessonIndex >= lessons.length || !isLessonComplete(state.lessonIndex);
}

async function runCode() {
  const code = normalizeInput(practiceArea.value.trim());
  const stdin = programInput.value.replace(/\r\n/g, "\n");

  if (!code) {
    practiceFeedback.textContent = "Write some code first.";
    outputConsole.textContent = "Nothing to run yet.";
    return;
  }

  runCodeButton.disabled = true;
  runCodeButton.textContent = "Running...";
  practiceFeedback.textContent = "";
  outputConsole.textContent = "Running...";

  try {
    const response = await fetch("/api/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code, stdin })
    });

    const result = await response.json();
    outputConsole.textContent = result.output || "Code finished with no output.";

    if (result.ok) {
      markCodePassed(state.lessonIndex);
      const completedNow = syncLessonCompletion(state.lessonIndex);
      practiceFeedback.textContent = completedNow
        ? "Code ran successfully. You completed this lesson by passing both code and quiz."
        : "Code ran successfully. Now complete the quiz to unlock the next lesson.";
      renderModuleList();
      updateProgress();
      updateLessonStatus();
    } else {
      practiceFeedback.textContent = "Python found an error. Check the output above.";
    }
  } catch (error) {
    outputConsole.textContent = "Could not reach the local Python runner. Start the app server and refresh the page.";
    practiceFeedback.textContent = "The app server is not connected.";
  } finally {
    runCodeButton.disabled = false;
    runCodeButton.textContent = "Run Code";
  }
}

document.getElementById("run-code").addEventListener("click", runCode);
document.getElementById("show-hint").addEventListener("click", () => {
  practiceHint.hidden = false;
});
document.getElementById("use-example").addEventListener("click", () => {
  practiceArea.value = lessons[state.lessonIndex].code;
});
document.getElementById("mark-review").addEventListener("click", () => {
  const lesson = lessons[state.lessonIndex];
  practiceArea.value = lesson.code;
  programInput.value = lesson.defaultInput || "";
  practiceHint.hidden = true;
  practiceFeedback.textContent = "Lesson editor reset to the example code.";
  outputConsole.textContent = "Your output will appear here.";
});
document.getElementById("prev-lesson").addEventListener("click", () => {
  if (state.lessonIndex === 0) {
    return;
  }
  state.lessonIndex = (state.lessonIndex - 1 + lessons.length) % lessons.length;
  saveState();
  renderApp();
});
document.getElementById("next-lesson").addEventListener("click", () => {
  if (state.lessonIndex + 1 >= lessons.length) {
    return;
  }

  if (!state.completedLessons.includes(state.lessonIndex)) {
    practiceFeedback.textContent = "Complete this lesson first by passing both the code run and the quiz.";
    return;
  }

  state.lessonIndex = (state.lessonIndex + 1) % lessons.length;
  saveState();
  renderApp();
});

renderApp();

# Project Instructions

1. Use npx to create-react-app

1. git init and push it to a new repo in GitHub

   - git init

   - git remote add origin "https://github.com/your_github_username/$repo_name.git"

1. Yank out all the unnecessary code and begin building a todo app

   - Create state for your app.js with isClicked: false in it

   - Create a button and add an onClick handler that changes the value of isClicked

   - Create an input field and then a function that changes the state of text: '' to the e.target.value onChange of the input field

   - Change your onClickHandler function to push the value of text into todos: []

   - Now clear text in the same function

   - Once you have state being changed properly create an element for each of the items in todos: []

   - Now .map() over todos and show each item in the DOM. REMEMBER to give the callback function in .map() an index and provide that to each of the elements as index={index}

1. Create a button on each of the elements that uses this and when clicked removes/deletes the item from todos: []

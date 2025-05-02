export const quizQuestions = [
    {
        
        question: "What is React?",
        options: [
          "Library",
          "Framework",
          "Language",
          "Tool"
        ],
        answer: "Library"
      },
      {
       
        question: "What is useState?",
        options: [
          "Hook",
          "Component",
          "Class",
          "Function"
        ],
        answer: "Hook"
      },
      {
          
          question: "Which of the following is used to declare a constant in JavaScript?",
          options: ["var", "let", "const", "static"],
          answer: "const"  
      },
      {
         
          question: "Which hook is used for managing side effects in React?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          answer: "useEffect" 
      },
      {
          
          question: "What will `typeof null` return in JavaScript?",
          options: ["null", "object", "undefined", "boolean"],
          answer: "object"  
      },
      {
          
          question: "What is the default port for a React development server?",
          options: ["3000", "8000", "5000", "8080"],
          answer: "3000" 
  
      },
      {
          
          question:"Which operator is used to spread an array or object in JavaScript?",
          options: ["...", "*", "#", "%"],
          answer: "..."
      },
      
      {
          
          question: "Which of the following is not a valid React lifecycle method?",
          options: ["componentDidMount", "componentWillUpdate", "componentShouldRender", "componentDidUpdate"],
          answer: "componentShouldRender" 
      },
      {
          
          question: "Which function is used to create a virtual DOM in React?", 
          options: ["React.createElement", "ReactDOM.render", "createDOM", "renderDOM"],
          answer: "React.createElement" 
      }
    ];
    export const getUsers = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        return users;
      };
      
      export const addUser = (email, password) => {
        const users = getUsers();
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
      };
      
      export const checkUserCredentials = (email, password) => {
        const users = getUsers();
        return users.find(user => user.email === email && user.password === password);
      };
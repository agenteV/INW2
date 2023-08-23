const firebaseConfig = {
    apiKey: "AIzaSyDCc_-C16oinT5nEe-bq_LOvC7QFURx31Y",
    authDomain: "projeto2mibteste-3de59.firebaseapp.com",
    projectId: "projeto2mibteste-3de59",
    storageBucket: "projeto2mibteste-3de59.appspot.com",
    messagingSenderId: "249683256091",
    appId: "1:249683256091:web:5ed7e405772956c9d9a9be"
  };

firebase.initializeApp(firebaseConfig);

////

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click',()=>{
    const email = emailField.value;
    const password = passwordField.value;

firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })

.catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});


   


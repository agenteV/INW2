var currentUser;
//NAO TA DANDO CERTo :>
function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserwithEmailAndPassword(email, password).then(user=>{
        console.log("usuario", user);
        alert("O usúario criado e feito login");
    }).catch(err =>{
        console.log('erro', err)
    });
}
//TA DANDO CERTO
function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        alert("Usúario Logado!!");
    }).catch(err =>{
        console.error('Error',err)
    });
}

currentUser = firebase.auth().currentUser;
//NÃO TA DANDO CERTO
function deletaUsuario(){
  if(currentUser){
    currentUser.delete().then(()=>{
        alert('Usúario excluido');
    })
  }  
}
//NÃO TA DANDO CERTO    
function logOut(){
    firebase.auth().signOut().then (()=>{
        alert("Usuario deslogado")
    })
}

//nada ta dando certo!!!!!!!
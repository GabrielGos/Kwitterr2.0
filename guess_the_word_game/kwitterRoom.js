
//ADICIONE SEUS LINKS FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyCNgOgwfQIUMbB05EjKbkeUFxHk2BoCfNc",
  authDomain: "vamosconversar-39e61.firebaseapp.com",
  databaseURL: "https://vamosconversar-39e61-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-39e61",
  storageBucket: "vamosconversar-39e61.appspot.com",
  messagingSenderId: "525426695939",
  appId: "1:525426695939:web:ec56af919b85eab5fa9336"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

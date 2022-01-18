var firebaseConfig = {
    apiKey: "AIzaSyBB7Lg-A7H_Krg3D5nVplxAhf7a6fbKMbc",
    authDomain: "lets-chat-4c921.firebaseapp.com",
    databaseURL: "https://lets-chat-4c921-default-rtdb.firebaseio.com",
    projectId: "lets-chat-4c921",
    storageBucket: "lets-chat-4c921.appspot.com",
    messagingSenderId: "722074032417",
    appId: "1:722074032417:web:12c207913c3f5fe63a4660"
  };

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

    function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name" , room_name);
        window.location = "chat_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code......
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room name" , name);
      window.location = "chat_page.html";
}
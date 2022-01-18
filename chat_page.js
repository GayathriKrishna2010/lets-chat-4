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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage .getItem("room_name");

  function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name ,
              message:msg ,
              like : 0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

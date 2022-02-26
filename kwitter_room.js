var firebaseConfig = {
  apiKey: "AIzaSyDHBecjjsx7N4GJvJzc66ie8ecDc3okUXw",
  authDomain: "kwitter-8742d.firebaseapp.com",
  databaseURL: "https://kwitter-8742d-default-rtdb.firebaseio.com",
  projectId: "kwitter-8742d",
  storageBucket: "kwitter-8742d.appspot.com",
  messagingSenderId: "635222786777",
  appId: "1:635222786777:web:e06c23bdc28cb72126b4c8",
  measurementId: "G-YG495NGL2X"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name is" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
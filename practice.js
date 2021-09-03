var firebaseConfig = {
    apiKey: "AIzaSyDcRNoHGglKrLVw3RkpfvmBwr_8c27rYBk",
    authDomain: "kwitter-b392c.firebaseapp.com",
    databaseURL: "https://kwitter-b392c-default-rtdb.firebaseio.com",
    projectId: "kwitter-b392c",
    storageBucket: "kwitter-b392c.appspot.com",
    messagingSenderId: "837043921936",
    appId: "1:837043921936:web:8626b398fc352d05f71695",
    measurementId: "G-NNLJSYYRX3"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
    });
  }
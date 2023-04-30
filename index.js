// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCDmFmLOXljGlG_5GIek3fCgHfXstnNXqo",
    authDomain: "cruddy-3e5a7.firebaseapp.com",
    projectId: "cruddy-3e5a7",
    storageBucket: "cruddy-3e5a7.appspot.com",
    messagingSenderId: "492376042459",
    appId: "1:492376042459:web:321df0e8bde516a7b9d5fe"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var do_you_enjoy_coding = document.getElementById('do_you_enjoy_coding').value
    var do_you_enjoy_calculus = document.getElementById('do_you_enjoy_calculus').value
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      do_you_enjoy_coding : do_you_enjoy_coding,
      do_you_enjoy_calculus : do_you_enjoy_calculus
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.email)
  
    })
  
  }

  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var do_you_enjoy_coding = document.getElementById('do_you_enjoy_coding').value
    var do_you_enjoy_calculus = document.getElementById('do_you_enjoy_calculus').value
  
    var updates = {
      email : email,
      password : password,
      username : username,
      do_you_enjoy_coding : do_you_enjoy_coding,
      do_you_enjoy_calculus : do_you_enjoy_calculus

    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }

  // Get a reference to the table
  var table = document.getElementById('table');
    
  // Function to fetch all data from Firebase and display it in the table
  function fetchData() {
    var ref = database.ref('users');
    ref.on('value', function(snapshot) {
      // Clear the table first
      table.innerHTML = '<thead><tr><th>Email</th><th>Password</th><th>Username</th><th>do_you_enjoy_coding</th><th>do_you_enjoy_calculus</th></tr></thead><tbody>';
  
      // Loop through the data and add each row to the table
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        table.innerHTML += '<tr><td>' + childData.email + '</td><td>' + childData.password + '</td><td>' + childData.username + '</td><td>' + childData.do_you_enjoy_coding + '</td><td>' + childData.do_you_enjoy_calculus + '</td></tr>';
      });
  
      // Close the table body
      table.innerHTML += '</tbody>';
    });
  }
  
  // Call the fetchData function to display the data when the page loads
  fetchData();
  
  function displayTable() {
    window.location.href = "app.html";
  }
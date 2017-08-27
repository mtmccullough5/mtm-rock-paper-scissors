var ro = document.getElementById("ro");
var sham = document.getElementById("sham");
var bo = document.getElementById("bo");

ro.addEventListener('click', function() {
  var firstname = document.getElementById('first_name');
  var lastname = document.getElementById('last_name');
  var list = document.getElementById('people'); 
  var li = document.createElement('li');
  li.innerHTML = lastname.value + ', ' + firstname.value;
  list.appendChild(li);
  firstname.value = "";
  lastname.value = "";
});
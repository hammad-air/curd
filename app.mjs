function my_Fun() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;

  axios
    .post("https://crud-applicat.herokuapp.com/user", {
      name: name,
      email: email,
      address: address,
    })
    .then(function (response) {
      console.log(response);
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error());
    });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
}

function my_Details() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  axios
    .get("https://crud-applicat.herokuapp.com/users", {
      name: name,
      email: email,
      address: address,
    })
    .then(function (response) {
      $html = " ";
      var i = 0;
      response.data.forEach(function (data) {
        $html += "<tr>";
        $html += '<td id="name_' + i + '">' + data.name + '</td>';
        $html += '<td id="email_' + i + '">' + data.email + '</td>';
        $html += '<td id="address_' + i + '">' + data.address  + '</td>';
        $html += '<td><a href="javascript:void(0)" onclick="get_record(this)" id='+i+'>View</a></td>';
        $html += "</tr>";
        i++;
      });
      document.getElementById("getValue").innerHTML = $html;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
}

function get_record($obj) {
  var id = $obj.getAttribute('id')
  id = parseInt(id)

  let names = document.getElementById("name_"+id).innerHTML;
  let emails = document.getElementById("email_"+id).innerHTML;
  let addresss = document.getElementById("address_"+id).innerHTML;
  
  document.getElementById("name").value = names;
document.getElementById("email").value = emails;
  document.getElementById("address").value = addresss;


}
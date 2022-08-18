 const fullname = document.getElementById("fullname");

const url = "https://randomuser.me/api/"
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const btn = document.getElementsByTagName("button")

let img = document.getElementById("profile_picture")

let fullnames = document.getElementById("fullname")

let email = document.getElementById("email")

let street = document.getElementById("street")

let city = document.getElementById("city")

let state = document.getElementById("state")

let phone = document.getElementById("phone")

let cell = document.getElementById("cell")

let date_of_birth = document.getElementById("postcode")


function fetchData(){
  
  console.log("start")
  fetch('https://randomuser.me/api/')
  .then(res => res.json()
  ).then(function(dt){
    console.log("someth")
    console.log(dt)

    let results = dt.results[0]

    date_of_birth.innerHTML = results.dob.date

    phone.innerHTML =   results.phone

    fullnames.innerHTML = results.name.first + " " + results.name.last

    email.innerHTML = results.email 

    street.innerHTML = results.location.street.name 

    city.innerHTML = results.location.city 

    cell.innerHTML = results.cell

    state.innerHTML = results.location.state







    // let dob = dt.results[0].dob.date 

    // console.log(dob)

    //img.setAttribute("src") = ""




  }
    
  )

}



btn[0].addEventListener("click", fetchData )
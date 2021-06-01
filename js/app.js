'use strict'

let userForm = document.getElementById('form');
let showTable = document.getElementById('tablelist')
let photoArray = ['img/HAWAII.jpg', 'img/ITALY.png', 'img/LONDON.png', 'img/MALAYSIA.jpg', 'img/PARIS.jpg', 'img/SLOVAKIA.jpg']
let tripArray = [];

function Trip(photo, placeName, tripPlace, transport){
    this.photo = photo;
    this.name = placeName;
    this.trip = tripPlace;
    this.transport = transport;
    tripArray.push(this);
}

userForm.addEventListener('submit', userSubmit);
function userSubmit(event){
    event.preventDefault();
    // alert('hi');
    let place = event.target.name.value;
    let trip = event.target.place.value;
    let transport = event.target.type.value;

    let newPlace = new Trip(place , trip , transport);

    newPlace.renderItems();
    setItem()

    
}

Trip.prototype.renderItems = function(){
    let tableRow1 = document.createElement('tr');
    let tableRow2 = document.createElement('tr');
    let tableRow3 = document.createElement('tr');
    let tableRow4 = document.createElement('tr');

    
    showTable.appendChild(tableRow1);
    showTable.appendChild(tableRow2);
    showTable.appendChild(tableRow3);
    showTable.appendChild(tableRow4);

    tableRow1.textContent = '';
    tableRow2.textContent = `Place Name: ${this.name}`;
    tableRow3.textContent = `Trip place: ${this.trip}`;
    tableRow4.textContent = `Type of transport: ${this.transport}`;


}

function setItem(){
    localStorage.setItem('Trips', JSON.stringify(tripArray));
}

function getItem(){
    if(localStorage.getItem('Trips')){
        tripArray = JSON.parse(localStorage.getItem('Trips'));
        keepRenderTrip()
    }
}


function keepRenderTrip(){
    for (let i = 0; i < tripArray.length; i++) {
    let tableRow1 = document.createElement('tr');
    let tableRow2 = document.createElement('tr');
    let tableRow3 = document.createElement('tr');
    let tableRow4 = document.createElement('tr');

    
    showTable.appendChild(tableRow1);
    showTable.appendChild(tableRow2);
    showTable.appendChild(tableRow3);
    showTable.appendChild(tableRow4);

    // tableRow1.textContent = '';
    tableRow2.textContent = `Place Name: ${tripArray[i].name}`;
    tableRow3.textContent = `Trip place: ${tripArray[i].trip}`;
    tableRow4.textContent = `Type of transport: ${tripArray[i].transport}`;
    }

}
getItem()

let clear = document.getElementById('X');
clear.addEventListener('click', clicker)
function clicker(){
    localStorage.clear();
    location.reload();

}
'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//MAKE COLUMN HEADER AS GLOBAL
let columnHeader = ['Sales/h', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

// //MAIN FUNCTION
function generateRandomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

//MAIN CONSTRUCTORS
function City( name, min, max, avarage ) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avarage = avarage;
  this.numOfCookiesArr = [];
  this.total = 0;
  this.totalPerHour = 0;
  City.allCity.push( this );
}

City.allCity = [];

//PROTOTYPE FOR GET NUM OF COOKIES
City.prototype.getNumOfCookies = function () {
  for ( let i = 0; i < hours.length; i++ ) {
    let cookiesNum = Math.floor( generateRandomNumber( this.min, this.max ) * this.avarage );
    this.numOfCookiesArr.push( cookiesNum );

    //3rd step calculate total number of cookies :
    this.total += cookiesNum;


  }
};

//HEADER FUNCTION
const header = function () {
  const parentElement = document.getElementById( 'SALAMON' );
  const table = document.createElement( 'table' );
  parentElement.appendChild( table );
  table.setAttribute( 'id', 'myTable' );
  const tr1 = document.createElement( 'tr' );
  table.appendChild( tr1 );
  for ( let i = 0; i < columnHeader.length; i++ ) {
    const th1 = document.createElement( 'th' );
    tr1.appendChild( th1 );
    th1.textContent = columnHeader[i];
  }
};
//CALLING HEADER FUNCTION
header();

//PROTOTYPE FOR RENDER
City.prototype.render = function () {
  const tableElement = document.getElementById( 'myTable' );
  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );
  const td1 = document.createElement( 'td' );
  tr.appendChild( td1 );
  td1.textContent = this.name;

  for ( let i = 0; i < hours.length; i++ ) {
    const td2 = document.createElement( 'td' );
    tr.appendChild( td2 );
    td2.textContent = this.numOfCookiesArr[i];
  }
  const td3 = document.createElement( 'td' );
  tr.appendChild( td3 );
  td3.textContent = this.total;
};





//SEATTLE CITY
const seattle = new City( 'Seattle', 23, 65, 6.3, [] );
seattle.getNumOfCookies();
seattle.render();
//TOKYO CITY
const tokyo = new City( 'Tokyo', 3, 24, 1.2, [] );
tokyo.getNumOfCookies();
tokyo.render();
//DUBAI CITY
const dubai = new City( 'Dubai', 11, 38, 3.7, [] );
dubai.getNumOfCookies();
dubai.render();
//PARIS CITY
const paris = new City( 'Paris', 20, 38, 2.3, [] );
paris.getNumOfCookies();
paris.render();
//LIMA CITY
const lima = new City( 'Lima', 2, 16, 4.6, [] );
lima.getNumOfCookies();
lima.render();

console.log( City.allCity );



// Lab: 09 - Add a form to the cookie stand project

// //NEW CITY RAW FUNCTION
// const cityRaw = function () {
//   const tableElement = document.getElementById('myTable');
//   const tr = document.createElement('tr');
//   tableElement.appendChild(tr);
//   const th1 = document.createElement('th');
//   tr.appendChild(th1);
//   th1.textContent = 'Total of total';
//   for (let i = 0; i < hours.length; i++) {
//     const th2 = document.createElement('th');
//     tr.appendChild(th2);
//     th2.textContent = seattle.numOfCookiesArr[i] + tokyo.numOfCookiesArr[i] + dubai.numOfCookiesArr[i] + paris.numOfCookiesArr[i] + lima.numOfCookiesArr[i];
//   }
//   const th3 = document.createElement('th');
//   tr.appendChild(th3);
//   th3.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
// };

// //FOOTER FUNCTION
const footer = function () {
  const tableElement = document.getElementById( 'myTable' );
  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );
  const th1 = document.createElement( 'th' );
  tr.appendChild( th1 );
  th1.textContent = 'Total of total';
  for ( let i = 0; i < hours.length; i++ ) {
    const th2 = document.createElement( 'th' );
    tr.appendChild( th2 );

    // FOR LAB 09 1ST STEP TO MAKE THE TOTAL SUM OTHER NEW CITIES
    let totalCookies = 0;
    for ( let j = 0; j < City.allCity.length; j++ ) {
      totalCookies += parseInt( City.allCity[j].numOfCookiesArr[i] );
    }
    th2.textContent = totalCookies;

    //   th2.textContent = seattle.numOfCookiesArr[i] + tokyo.numOfCookiesArr[i] + dubai.numOfCookiesArr[i] + paris.numOfCookiesArr[i] + lima.numOfCookiesArr[i];
  }

  const th3 = document.createElement( 'th' );
  tr.appendChild( th3 );
  th3.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
};

//CALLING FOOTER FUNCTION
footer();

// STEP 2 FOR LAB 09
const formElement = document.getElementById( 'ADD-NEW-LOCATION' );
formElement.addEventListener( 'submit', function ( event ) {
  event.preventDefault();

  const cityName = event.target.name.value;
  const minNumOfCustomers = event.target.min.value;
  const maxNumOfCustomers = event.target.max.value;
  const avarage = event.target.avarage.value;

  document.getElementById( 'myTable' ).removeChild( document.getElementById( 'myTable' ).lastChild );
  const city = new City( cityName, minNumOfCustomers, maxNumOfCustomers, avarage );

  formElement.reset();

  city.getNumOfCookies();
  city.render();
  console.log( City.allCity );

  // tableElement.removeLastChild
  footer();

} );

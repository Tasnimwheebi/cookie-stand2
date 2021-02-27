'use strict' ;
let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function City( min, max, name, average ) {
  this.min = min;
  this.max = max;
  this.name = name;
  this.average = average;
  this.customerNumber = [];
  this.cookieNumber = [];
  this.totalCookieNumber = 0;
  City.allCity.push( this );

}

function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

City.prototype.getCookieNumber = function () {
  for ( let i = 0; i < hour.length; i++ ) {
    let cookie = Math.ceil( generateRandomNumber( this.min, this.max ) * this.average );
    this.cookieNumber.push( cookie );
    this.totalCookieNumber += cookie;
  }
};

// const header = function(){

//     const table = document.createElement('table');
//     parentElement.appendChild(table);
//     table.setAttribute('Id','')
// }

const tablHeader = function () {
  const parentElement = document.getElementById( 'SalmonCookieShop' );
  const table = document.createElement( 'table' );
  parentElement.appendChild( table );
  table.setAttribute( 'id', 'myTable' );
  const tr1 = document.createElement( 'tr' );
  table.appendChild( tr1 );
  const th1 = document.createElement( 'th' );
  tr1.appendChild( th1 );
  th1.textContent = 'Name of City';
  for ( let i = 0; i < hour.length; i++ ) {
    const th2 = document.createElement( 'th' );
    tr1.appendChild( th2 );
    th2.textContent = hour[i];
  }
  const th3 = document.createElement( 'th' );
  tr1.appendChild( th3 );
  th3.textContent = 'Daily of location';

};
tablHeader();




const newCity = function () {
  const formElement = document.getElementById( 'addNewCityForm' );
  formElement.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    // const tr2 = document.createElement('tr');
    // table.appendChild(tr2);
    const cityName = event.target.cityName.value;
    const minCustomer = event.target.minCustomer.value;
    const maxCustomer = event.target.maxCustomer.value;
    const averageCookieSales = event.target.averageCookieSales.value;
    const city = new City( minCustomer, maxCustomer, cityName, [], [], averageCookieSales );
    formElement.requestFullscreen();
    city.getCookieNumber();
    city.render();
    console.log( city.allCity );
    // shift.tableFooter();
    //
    tableFooter();
    document.getElementById( 'myTable' ).deleteRaw( 6 );
  } );
  City.allCity = [];
};
//
newCity();



City.prototype.render = function () {

  const tableElement = document.getElementById( 'myTable' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const td1 = document.createElement( 'td' );
  tr.appendChild( td1 );
  td1.textContent = this.name;



  for ( let i = 0; i < hour.length; i++ ) {
    const td2 = document.createElement( 'td' );
    tr.appendChild( td2 );
    td2.textContent = this.cookieNumber[i];
  }
  const td3 = document.createElement( 'td' );
  tr.appendChild( td3 );
  td3.textContent = this.totalCookieNumber;



};


const seattle = new City( 23, 65, 'Seattle', 6.3 );
seattle.getCookieNumber();
seattle.render();
console.log( seattle );


const tokoy = new City( 3, 24, 'tokyo', 1.2 );
tokoy.getCookieNumber();
tokoy.render();
console.log( tokoy );

const dubai = new City( 11, 38, 'dubai', 3.7 );
dubai.getCookieNumber();
dubai.render();
console.log( dubai );

const paris = new City( 20, 38, 'paris',2.3 );
paris.getCookieNumber();
paris.render();
console.log( paris );

const lima = new City( 2, 16, 'lima', 4.6 );
lima.getCookieNumber();
lima.render();
console.log( lima );

console.log( City.allCity );



const tableFooter = function () {
  const tableElement = document.getElementById( 'myTable' );
  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );
  const th1 = document.createElement( 'th' );
  tr.appendChild( th1 );
  th1.textContent = 'total';
  for ( let i = 0; i < hour.length; i++ ) {
    const th2 = document.createElement( 'th' );
    tr.appendChild( th2 );
    th2.textContent = seattle.cookieNumber[i] + paris.cookieNumber[i] + dubai.cookieNumber[i] + tokoy.cookieNumber[i] + lima.cookieNumber[i];
  }

  const th3 = document.createElement( 'th' );
  tr.appendChild( th3 );
  th3.textContent = seattle.totalCookieNumber + dubai.totalCookieNumber + tokoy.totalCookieNumber + lima.totalCookieNumber + paris.totalCookieNumber ;

};

tableFooter();

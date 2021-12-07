// what is the path to the JSON file?
const apiURL = "\hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
  let myImageTag = document.createElement('img');
  myImageTag.src = myList[0].photo;
    
  let myCaptionTag = document.createElement('figcaption');
  myCaptionTag.textContent = myList[0].name;

  let myFigureTag = document.createElement('figure');
  myFigureTag.appendChild(myImageTag);
  myFigureTag.appendChild(myCaptionTag);

    
    
    
  document.getElementById('myCards').appendChild(myFigureTag);
}); //end of "then" fat arrow function







// Create Child Elements
let theImageTag = document.createElement("img");
theImageTag.src = myList[i].photo;
console.log(myList[i].photo);

let theHotelTag = document.createElement("figcaption");
theHotelTag.textContent = myList[i].name;
console.log(myList[i].name);

let theIconLeftTag = document.createElement("i");
theIconLeftTag.name = "icon ion-md-car";

let theAddress1Tag = document.createElement("p");
theAddress1Tag.textContent = myList[i].address[0];
console.log(myList[i].address[0]);

let theAddress2Tag = document.createElement("p");
theAddress2Tag.textContent = myList[i].address[1];
console.log(myList[i].address[1]);

let theIconRightTag = document.createElement("i");
theIconRightTag.name = "icon ion-md-call";

let thePhoneTag = document.createElement("p");
thePhoneTag.textContent = myList[i].phone;
console.log(myList[i].phone);

// Create the Span Elements
let theSpanLeftTag = document.createElement("span");
theSpanLeftTag.appendChild(theIconLeftTag);
theSpanLeftTag.appendChild(theAddress1Tag);
theSpanLeftTag.appendChild(theAddress2Tag);

let theSpanRightTag = document.createElement("span");
theSpanRightTag.appendChild(theIconRightTag);
theSpanRightTag.appendChild(thePhoneTag);





let theCardDiv = document.createElement("div");
theCardDiv.appendChild(theSpanLeftTag);
theCardDiv.appendChild(theSpanRightTag);

let theCardSection = document.createElement("section");
theCardSection.appendChild(myFigureTag);
theCardSection.appendChild(theCardDiv);

document.getElementById('myCards').appendChild(theCardSection);

let myFigureTag = document.createElement("figure");
myFigureTag.appendChild(myImageTag);
myFigureTag.appendChild(myCaptionTag);


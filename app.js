const mainUrl = 'https://jsonplaceholder.typicode.com/photos';

async function getData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const res = await response.json();
    console.log(res);
    
    return res
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


// getData(mainUrl).then(data => {
//   if (data) {
//     console.log('Fetched Data:', data);
//   }
// });

function createCard(item) {
  // Create card container div
  let cardDiv = document.createElement('div');
  cardDiv.className = 'col-md-4';

  // Create card
  let card = document.createElement('div');
  card.className = 'card mb-4';

  // Create card image
  let cardImg = document.createElement('img');
  cardImg.className = 'card-img-top';
  cardImg.src = item.url;
  cardImg.alt = item.title;

  cardImg.onerror = function () {
    this.src = 'https://media.istockphoto.com/id/1344252867/photo/portrait-of-modern-female-librarian-of-asian-ethnicity.webp?a=1&b=1&s=612x612&w=0&k=20&c=FojIOpadhEN080HSKCE50cLIfAaPPQrOGOJNJV122so=';
  };

  // Create card body
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  // Create card title
  let cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = item.title;

  // Create card text
  let cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = item.id;

  // Append title and text to card body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  // Append image and body to card
  card.appendChild(cardImg);
  card.appendChild(cardBody);

  // Append card to card container div
  cardDiv.appendChild(card);

  return cardDiv;
}

// Function to inject cards into the DOM
async function injectCards(url) {
  let data = await getData(url);
  if (data && Array.isArray(data)) {
    let cardContainer = document.getElementById('card-container');
    data.forEach(item => {
      let cardElement = createCard(item);
      cardContainer.appendChild(cardElement);
    });
  }
}

injectCards(mainUrl)
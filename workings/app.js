async function getData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    let data = await response.json();
    console.log(data);
    const container = document.getElementsByTagName('body')[0];

    const table = document.createElement('table');
    const header = document.createElement('tr');
    const headerCell1 = document.createElement('th');
    headerCell1.textContent = 'Title';
    header.appendChild(headerCell1);
    
    const tbody = document.createElement('tbody');
    
    for (const d of data) {
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      cell1.textContent = d.title;
      row.appendChild(cell1);
      tbody.appendChild(row);
    }
    table.appendChild(header);
    table.appendChild(tbody);


    container.appendChild(table);


    console.log(container);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

getData("https://jsonplaceholder.typicode.com/photos")
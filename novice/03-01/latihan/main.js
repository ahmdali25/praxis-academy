const mountains = [
    {Name: "Kilimanjaro", Height: 5895, Place: "Tanzania"},
    {Name: "Everest", Height: 8848, Place: "Nepal"},
    {Name: "Mount Fuji", Height: 3776, Place: "Japan"},
    {Name: "Vaalserberg", Height: 323, Place: "Netherlands"},
    {Name: "Denali", Height: 6168, Place: "United States"},
    {Name: "Popocatepetl", Height: 5465, Place: "Mexico"},
    {Name: "Mont Blanc", Height: 4808, Place: "Italy/France"}
];

function createTable(data) {
    let table = document.createElement('table');
    table.setAttribute('border', '1');

    let fields = Object.keys(data[0]);
    let row = document.createElement('tr');
    fields.forEach(field => {
        let tableHead = document.createElement('th');
        tableHead.appendChild(document.createTextNode(field));
        row.appendChild(tableHead);
    });
    table.appendChild(row);

    data.forEach(object => {
        let row = document.createElement('tr');
        fields.forEach(function(field) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(object[field]));
            if (typeof object[field] == 'number') {
                cell.style.textAlign = 'right';
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    return table;
}

document.querySelector('#mountains')
 .appendChild(createTable(mountains));

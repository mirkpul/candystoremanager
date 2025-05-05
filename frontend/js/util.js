const form = document.getElementById('addCandyForm');
const inventoryTable = document.getElementById('inventoryTable');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const candyName = document.getElementById('candyName').value;
    const candyQuantity = document.getElementById('candyQuantity').value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${candyName}</td>
        <td>${candyQuantity}</td>
        <td><button class="btn btn-delete">Elimina</button></td>
    `;

    const deleteButton = row.querySelector('.btn-delete');
    deleteButton.addEventListener('click', function() {
        row.remove();
    });

    inventoryTable.appendChild(row);

    form.reset();
});
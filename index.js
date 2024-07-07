document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.addEventListener('click', () => {
            const symbol = element.getAttribute('data-symbol');
            fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    const elementData = data[symbol];
                    if (elementData) {
                        displayInfo(elementData);
                    }
                });
        });
    });
});

function displayInfo(elementData) {
    const infoDiv = document.getElementById('element-info');
    const symbol = document.getElementById('element-symbol');
    const properties = document.getElementById('element-properties');

    symbol.textContent = elementData.symbol;
    properties.innerHTML = '';

    for (let key in elementData) {
        if (key !== 'symbol') {
            const li = document.createElement('li');
            li.textContent = `${key}: ${elementData[key]}`;
            properties.appendChild(li);
        }
    }

    infoDiv.classList.remove('hidden');
}

function closeInfo() {
    const infoDiv = document.getElementById('element-info');
    infoDiv.classList.add('hidden');
}

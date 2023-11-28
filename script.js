class ExternalDataComponent extends HTMLElement {
    connectedCallback() {
        this.getDataFromAPI();
    }

    getDataFromAPI() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => this.displayData(data))
            .catch(error => console.error(error));
    }

    displayData(data) {
        const listContainer = document.createElement('ul');

        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.title; // Asegúrate de ajustar esto según la estructura de tus datos
            listContainer.appendChild(listItem);
        });

        this.appendChild(listContainer);
    }
}

customElements.define('external-data-component', ExternalDataComponent);

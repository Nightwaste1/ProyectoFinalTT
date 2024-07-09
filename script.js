document.addEventListener('DOMContentLoaded', function () {
    let commodityCount = 1;

    // Manejo del botón "Add Another Commodity"
    document.getElementById('add-commodity').addEventListener('click', function () {
        const shipmentInfo = document.getElementById('shipment-info');
        const newCommodity = document.querySelector('.shipment-item').cloneNode(true);
        
        // Limpiar los valores de los campos del nuevo commodity
        newCommodity.querySelectorAll('input').forEach(input => input.value = '');
        newCommodity.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
        
        // Incrementar el contador de commodities
        commodityCount++;
        
        // Agregar un título al nuevo commodity
        const newCommodityLabel = document.createElement('h3');
        newCommodityLabel.textContent = `Commodity ${commodityCount}`;
        newCommodity.insertBefore(newCommodityLabel, newCommodity.firstChild);
        
        shipmentInfo.appendChild(newCommodity);
    });

    // Manejo del formulario de pick up request
    const form = document.getElementById('pickup-request-form');
    const billCompany = document.getElementById('bill-company');
    const billContactName = document.getElementById('bill-contact-name');
    const billAddress = document.getElementById('bill-address');
    const billCountry = document.getElementById('bill-country');
    const billZipCode = document.getElementById('bill-zip-code');
    const billCity = document.getElementById('bill-city');
    const billState = document.getElementById('bill-state');
    const billPhone = document.getElementById('bill-phone');
    const billEmail = document.getElementById('bill-email');
    const billRequesterName = document.getElementById('bill-requester-name');
    const billRequesterCompany = document.getElementById('bill-requester-company');
    const billRequesterPhone = document.getElementById('bill-requester-phone');
    const billRequesterEmail = document.getElementById('bill-requester-email');
    const billPieces = document.getElementById('bill-pieces');
    const billPackageType = document.getElementById('bill-package-type');
    const billWeight = document.getElementById('bill-weight');
    const billDescription = document.getElementById('bill-description');
    const billShipmentZipCode = document.getElementById('bill-shipment-zip-code');
    const billAdditionalComments = document.getElementById('bill-additional-comments');
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Asignar valores del formulario al Bill of Lading
        billCompany.textContent = document.getElementById('company').value;
        billContactName.textContent = document.getElementById('contact-name').value;
        billAddress.textContent = document.getElementById('address').value;
        billCountry.textContent = document.getElementById('country').options[document.getElementById('country').selectedIndex].text;
        billZipCode.textContent = document.getElementById('zip-code').value;
        billCity.textContent = document.getElementById('city').value;
        billState.textContent = document.getElementById('state').options[document.getElementById('state').selectedIndex].text;
        billPhone.textContent = document.getElementById('phone').value;
        billEmail.textContent = document.getElementById('email').value;
        billRequesterName.textContent = document.getElementById('requester-name').value;
        billRequesterCompany.textContent = document.getElementById('requester-company').value;
        billRequesterPhone.textContent = document.getElementById('requester-phone').value;
        billRequesterEmail.textContent = document.getElementById('requester-email').value;
        billPieces.textContent = document.getElementById('pieces').value;
        billPackageType.textContent = document.getElementById('package-type').options[document.getElementById('package-type').selectedIndex].text;
        billWeight.textContent = document.getElementById('weight').value;
        billDescription.textContent = document.getElementById('description').value;
        billShipmentZipCode.textContent = document.getElementById('shipment-zip-code').value;
        billAdditionalComments.textContent = document.getElementById('additional-comments').value;
    
        // Navegar a la página del Bill of Lading
        window.location.href = 'billoflading.html';
    });

    // Rotación de imágenes de camiones
    fetch('js/trucks.json')
        .then(response => response.json())
        .then(data => {
            const truckImage = document.getElementById('truck-image');
            let currentIndex = 0;

            const rotateImages = () => {
                currentIndex = (currentIndex + 1) % data.length;
                truckImage.src = data[currentIndex].src;
            };

            setInterval(rotateImages, 3000); // Cambia la imagen cada 3 segundos
        })
        .catch(error => console.error('Error loading truck images:', error));
});

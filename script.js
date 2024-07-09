document.addEventListener('DOMContentLoaded', function () {
    let commodityCount = 1;

    document.getElementById('add-commodity').addEventListener('click', function () {
        var shipmentInfo = document.getElementById('shipment-info');
        var newCommodity = document.querySelector('.shipment-item').cloneNode(true);
        
        // Clear the values of the new commodity fields
        newCommodity.querySelectorAll('input').forEach(input => input.value = '');
        newCommodity.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
        
        // Increment the commodity count
        commodityCount++;
        
        // Add a label to the new commodity
        var newCommodityLabel = document.createElement('h3');
        newCommodityLabel.textContent = `Commodity ${commodityCount}`;
        newCommodity.insertBefore(newCommodityLabel, newCommodity.firstChild);
        
        shipmentInfo.appendChild(newCommodity);
    });
});

/* galeria de camiones */
document.addEventListener('DOMContentLoaded', () => {
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

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
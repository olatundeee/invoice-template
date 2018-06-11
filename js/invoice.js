$(document).ready(function() {
    $('.add-new-item').click(function () {
        var itemName = $('#item_sold').val();
        var itemPrice = $('#price_sold').val();
        var itemQuantity = $('#quantity_sold').val();
        var itemTotal = itemPrice * itemQuantity;
        var newItemRow = '<div class="container item-details-output"><div class="col l12 m12 s12"><h5 class="center-align grey lighten-1 item-header item-name"></h5></div><div class="col l4 m4 s12 item-details"><p class="center-align grey lighten-3">Price per Item</p><p class="center-align grey lighten-2 item-details-data item-price"></p></div><div class="col l4 m4 s12 item-details"><p class="center-align grey lighten-3">Quantity</p><p class="center-align grey lighten-2 item-details-data item-quantity"></p></div><div class="col l4 m4 s12 item-details"><p class="center-align grey lighten-3">Total Sold</p><p class="center-align grey lighten-2 item-details-data item-total"></p></div></div>';        
        $('.invoice-sub-header-output').append([newItemRow]);
        $('.item-name').text('Product: ' + itemName);
        $('.item-price').text('$' + itemPrice);
        $('.item-quantity').text(itemQuantity);
        $('.item-total').text('$' + itemTotal);
        $('.item-name').removeClass('item-name');
        $('.item-price').removeClass('item-price');
        $('.item-quantity').removeClass('item-quantity');
        $('.item-total').removeClass('item-total');
    });
});
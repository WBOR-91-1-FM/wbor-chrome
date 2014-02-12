/**
 * Created by Ruben on 1/24/14.
 */
var now = new Date();
var hours = now.getHours();
var day = now.getDay();
if(hours < 11 && day > 0 && day < 6)
    $('#meal').val('Breakfast');
else if(hours < 14) {
    if(day === 0 || day === 6)
        $('#meal').val('Brunch');
    else
        $('#meal').val('Lunch');
}
else $('#meal').val('Dinner');
load_menu();
$('#meal,#unit').change(function(){
    load_menu();
});
function load_menu() {
    $('.menus').html('<div class="spinner">B</div>').load('http://diningwithstrangers.co/extension/get_menu.php?meal='+$('#meal').val()+'&unit='+$('#unit').val(), function() {
        $('.menus').find('strong, hr').remove();
    });
}

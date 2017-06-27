$(document).ready(function(){
    setSelect(activities, '#activity-options');
    setSelect(hotels, '#hotel-options');
    setSelect(restaurants, '#restaurant-options');
    addItem('#hotel-button', '#hotel-options', '#hotel-list');
    addItem('#activity-button', '#activity-options', '#activity-list');
    addItem('#restaurant-button', '#restaurant-options', '#restaurant-list');

});

function setSelect(value, id){
    $(value).each(function(){
        $(id).append($("<option>").attr('value', this.id).text(this.name));
        // $(id).data("location", {longitude: this.place.location[0] , latitude: this.place.location[1] });
    });
}

function addItem(buttonId, selectId, listId){
    $(buttonId).click(function(){
        const icon = "<i class='material-icons'>delete</i>"
        $(listId).append($('<li>').text($(selectId +' option:selected').text()).append($('<a>').addClass('remove-item').html(icon)));
    })
}



$(document).on('click','.remove-item',function() {
    console.log('button clicked');
     $(this).parent().remove();
});

const dayArr = [];
$('#day-button').on('click',function() {
    const num =  dayArr.length + 1;
    const dayBtn =  "<a id='day-button' class='btn-floating btn-small waves-effect waves-teal white'><i class='material-icons'>" + num + "</i></a>";
    dayArr.push(dayArr.length + 1);
    $('#days-div').append(dayBtn);
    console.log(dayArr);
});

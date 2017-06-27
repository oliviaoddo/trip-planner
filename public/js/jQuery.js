$(document).ready(function () {
    setSelect(activities, '#activity-options');
    setSelect(hotels, '#hotel-options');
    setSelect(restaurants, '#restaurant-options');
    addItem('#hotel-button', '#hotel-options', '#hotel-list', 'hotels');
    addItem('#activity-button', '#activity-options', '#activity-list', 'activities');
    addItem('#restaurant-button', '#restaurant-options', '#restaurant-list', 'restaurants');

});

const dayArr = [];

const newDay = {
    activities: [],
    hotels: [],
    restaurants: []
};

function setSelect(value, id) {
    $(value).each(function () {
        $(id).append($("<option>").attr('value', this.id).text(this.name));
        // $(id).data("location", {longitude: this.place.location[0] , latitude: this.place.location[1] });
        // console.log(  $(id).data("location", {longitude: this.place.location[0] , latitude: this.place.location[1] }))
    });
}

function addItem(buttonId, selectId, listId, type) {
    $(buttonId).click(function () {
        const icon = "<i class='material-icons'>delete</i>"
        $(listId).append($('<li>').text($(selectId + ' option:selected').text()).append($('<a>').addClass('remove-item').html(icon)));
        newDay[type].push($(selectId + ' option:selected').text());
        console.log(newDay);
    })
}

$(document).on('click', '.remove-item', function () {
    console.log('button clicked');
    $(this).parent().remove();
});

$('#day-button').on('click', function () {
    const num = dayArr.length + 1;
    const dayBtn = "<a class='btn-floating btn-small waves-effect waves-teal white day'><i class='material-icons'>" + num + "</i></a>";
    var prevDay = Object.assign({}, newDay);
    dayArr.push(prevDay);
    console.log(dayArr);

    newDay.activities = [];
    newDay.hotels = [];
    newDay.restaurants = [];
    // dayArr.push(dayArr.length + 1);
    $('#days-div').append(dayBtn).data('day', num);
    $('.day').last().data('day', num);
    $('#hotel-list').html('');
    $('#activity-list').html('');
    $('#restaurant-list').html('');
});


$(document).on('click', '.day', function () {
    var today = dayArr[$(this).data().day - 1];
    console.log(today);
    $('#hotel-list').html('');
    $('#activity-list').html('');
    $('#restaurant-list').html('');
    $('#hotel-list').append($('<li>').text(today.hotels[0]));
    $('#activity-list').append($('<li>').text(today.activities[0]));
    $('#restaurant-list').append($('<li>').text(today.restaurants[0]));

});


    // $('#day-delete').click(function() {
    //     dayArr.splice(0, 1);
    //     console.log(dayArr);
    // })
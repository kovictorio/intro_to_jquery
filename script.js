
$(function() {
    $('#velox').text('Macrotis');
    $('#zerda').css('border-color', 'purple');
    $('#zerda').css({opacity:'0.5'});
    $('#zerda').slideToggle(1500).slideToggle(1500);
    $('p').css('background-color', 'yellow');
});

$(function() {
    $('.one').css('background-color', 'purple');
    $('.two').text('Changed Text');
});

$(function() {

    $('.two').on('click', function() {
    $('.two').css('font-size', '100px');
        alert("Whoah, that's a big number!");
        alert("Just a regular number, please!");
    $('.two').css('font-size', '24px');
    });
      //*  ('.two').toggle();
});


$(function() {
   $('.three').text('Cool');
});

$(function() {
    let word = ('Cool'); 
    if (word === true) {
        $('.three').text('Power of DOM');
    } 
    else {
        $('.four').text('Power of DOM');
   }
});


//
//$(function() {
//    let x = ('.three');
///    if (x.text = 'Cool') {
//        $('.three').text('Power of DOM');
//    } else {
//        $('.four').text('Power of DOM');
//    }
//});
$('#minus').click(function() {
    $('#output').html(function(i, val) { return val*1-1 });
});

$('#plus').click(function() {
    $('#output').html(function(i, val) { return val*1+1 });
});
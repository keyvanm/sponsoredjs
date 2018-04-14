$(function() {
  $( ".sponsoredjs-popover" ).each(function() {
    var link = $( this ).attr('href');
    var adId = "#" + $( this ).data('ad');
    var $linkObj = $( "<a>Click here to continue</a>" );
    $linkObj.attr('href', link);
    $( adId ).append($linkObj);
    $( this ).webuiPopover({animation: 'pop', url: adId});
  });
});

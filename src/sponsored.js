$(function() {
  $( ".sponsoredjs-popover" ).each(function() {
    var link = $( this ).attr('href');
    if ( !$( this ).data('ad') ) {
      var randomAdId = "ad" + Math.floor(Math.random() * 1000)
      var adImg = $( this ).data('ad-img');
      var adText = $( this ).data('ad-text');
      var adLink = $( this ).data('ad-link');
      var adContent = `
        <div id="${randomAdId}" class="sponsoredjs-content">
          <a href="${adLink}" target="_blank" class="sponsoredjs-ad-link">
            <img class="sponsoredjs-img" src="${adImg}">
            <span class="sponsoredjs-text">
              ${adText}
            </span>
          </a>
        </div>
      `;
      $('body').append(adContent);
      $( this ).attr('data-ad', randomAdId);
    }
    var adId = "#" + $( this ).data('ad');
    var $linkObj = $( "<a class='sponsoredjs-continue'>Click here to continue</a>" );
    $linkObj.attr('href', link);
    $( adId ).append($linkObj);
    $( this ).webuiPopover({ animation: 'pop', url: adId });
  });
});

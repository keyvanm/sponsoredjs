function sponsorify($elem) {
  var link = $elem.attr('href');
  if ( !$elem.data('ad') ) {
    var randomAdId = "ad" + Math.floor(Math.random() * 1000);
    var adImg = $elem.data('ad-img');
    var adText = $elem.data('ad-text');
    var adLink = $elem.data('ad-link');
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
    $elem.attr('data-ad', randomAdId);
  }
  var adId = "#" + $elem.data('ad');
  var $linkObj = $( "<a class='sponsoredjs-continue'>Click here to continue</a>" );
  $linkObj.attr('href', link);
  $( adId ).append($linkObj);
  $elem.webuiPopover({ animation: 'pop', url: adId });
}

$(function() {
  $( ".sponsoredjs-popover" ).each(function() {
    sponsorify($(this));
  });
});

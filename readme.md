# Sponsored.JS

JS library to make links on your webpage into sponsored content.

You can checkout an example [here](https://keyvanm.github.io/sponsoredjs/).

## Getting Started

These instructions will get you turning the links on your website

### Prerequisites

**jQuery**: Add jQuery in your page if not already included. You can do so by using the jQuery CDN:
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Installing
First add scripts and stylesheets for [webui-popover](https://github.com/sandywalker/webui-popover).
For stylesheet, put this line in the `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.webui-popover/1.2.1/jquery.webui-popover.min.css">
```

Add the JS script at the end of the `<body>` tag
```html
<script src="https://cdn.jsdelivr.net/jquery.webui-popover/1.2.1/jquery.webui-popover.min.js"></script>
```

Now add scripts and stylesheets of Sponsored.JS.
For stylesheet, put this line in the `<head>`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/keyvanm/sponsoredjs@0.1.0/dist/sponsored.min.css">
```

Add the JS script at the end of the `<body>` tag
```html
<script src="https://cdn.jsdelivr.net/gh/keyvanm/sponsoredjs@0.1.0/dist/sponsored.min.js"></script>
```

## Creating sponsored links
Add class `ponsoredjs-popover` to the `<a>` tag where your link is. Then add attribute `data-ad-text` with the text you want to show to the users, `data-ad-img` with the link to img src of your ad, and `data-ad-link` for the link you want people to go to when they click on the ad.
```html
<a
  href="https://github.com/keyvanm/sponsoredjs"
  class="sponsoredjs-popover"
  data-ad-text="This link is sponsored by sponsoredjs"
  data-ad-link="https://github.com/keyvanm/sponsoredjs"
  data-ad-img="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png">
  GitHub
</a>
```

## Creating custom content for popover
Create a `<div>` anywhere within `<body>` with class `sponsoredjs-content`, and give it a unique ID.
```html
<div id="ad1" class="sponsoredjs-content">
   <p>This link is sponsored by ACME</p>
</div>
```
Add class `ponsoredjs-popover` to the `<a>` tag where your link is. Then add attribute `data-ad="ad1"`. Use the same ID from the last step.
```html
<a href="https://google.com/" class="sponsoredjs-popover" data-ad="ad1">Link</a>
```

## Built With
* [jQuery](https://jquery.com/)
* [webui-popover](https://github.com/sandywalker/webui-popover)

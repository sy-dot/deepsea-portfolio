# DeepSea - Portfolio Landing

### Written on Bootstrap, SASS(SCSS syntax uses), jQuery

Designed by **[SA7MAN](https://www.youtube.com/@SA7MAN)** | Enhanced by **crytekj**

* * *

* CSS rewritten in SCSS
* Everything is made on variables (variables not in CSS, in SCSS)
* Added some features (you can disable if you wish)
    * Typing effect, lightboxes, modals, skill bars, preloader and additional styles
* Contact form work! (required server)
* Little bit styles improvements

* * *

In some cases, the unique position of elements (mostly masonry) is not compatible with AOS, on screens <=992px, for this use:

```javascript
AOS.init({  
  disable: function() {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  }
});
```

This will disable animations on screens smaller than 992px.

* * *

**[Source repo](https://github.com/SA7MAN/joncarter)**

**For more information check this [video](https://youtu.be/3e8p0R5-b5A)**
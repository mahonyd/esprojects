(function ($, undefined) {

    'use strict';

    // cookie
    var seen = Cookies.get('seen_cookie_message') === 'true',
        cookieDiv = $('.cookie-top-fixed');
    if (!seen) {
        cookieDiv.show();
        Cookies.set('seen_cookie_message', 'true', { expires: 30, path: '/' });
    }

    if (!(window.console && console.log)) {
        console = {
            log: function () { },
            debug: function () { },
            info: function () { },
            warn: function () { },
            error: function () { }
        };
    }

})(window.jQuery);
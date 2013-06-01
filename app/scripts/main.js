require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
        jquery-mobile: '../bower_components/jquery-mobile/jquery'
        // bootstrap: 'vendor/bootstrap'
    }
    // shim: {
    //     bootstrap: {
    //         deps: ['jquery'],
    //         exports: 'jquery'
    //     }
    // }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    // console.log('Running jQuery %s', $().jquery);
});
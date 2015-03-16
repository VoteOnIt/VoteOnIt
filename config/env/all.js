'use strict';

module.exports = {
    app: {
        title: 'VoteOnIt',
        description: 'Vote on things!',
        keywords: 'MongoDB, Express, AngularJS, Node.js'
    },
    port: process.env.PORT || 8080,
    templateEngine: 'swig',
    sessionSecret: 'MEAN',
    sessionCollection: 'sessions',
    assets: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css',
                'public/lib/bootstrap-material-design/dist/css/material.css',
                'public/lib/bootstrap-material-design/dist/css/ripple.css',
                'public/lib/nvd3/build/nv.d3.css'
            ],
            js: [
                'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-cookies/angular-cookies.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-touch/angular-touch.js',
                'public/lib/angular-sanitize/angular-sanitize.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/bootstrap-material-design/dist/js/material.js',
                'public/lib/bootstrap-material-design/dist/js/ripple.js',
                'public/lib/moment/moment.js',
                'public/lib/geolib/dist/geolib.js',
                'public/lib/d3/d3.js',
                'public/lib/nvd3/build/nv.d3.js',
                'public/lib/angular-nvd3/dist/angular-nvd3.js'
            ]
        },
        css: [
            'public/modules/**/css/*.css'
        ],
        js: [
            'public/config.js',
            'public/application.js',
            'public/modules/*/*.js',
            'public/modules/*/*[!tests]*/*.js'
        ],
        tests: [
            'public/lib/angular-mocks/angular-mocks.js',
            'public/modules/*/tests/*.js'
        ]
    }
};

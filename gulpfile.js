var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app/global.scss', 'public/css/app');
    mix.sass('app/web/home.scss', 'public/css/app/web');
    mix.sass('app/web/login.scss', 'public/css/app/web');
});

elixir(function(mix) {
    mix.webpack('web/home.js', 'public/app/web');
});
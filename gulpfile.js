var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app/global.scss', 'public/css/app');
    mix.sass('app/web/home.scss', 'public/css/app/web');
    // mix.sass('gnscs/pages_out/careers.scss', 'public/css/gnscs/pages_out');
    // mix.sass('gnscs/pages_out/about.scss', 'public/css/gnscs/pages_out');
    // mix.sass('gnscs/pages_out/services.scss', 'public/css/gnscs/pages_out');
    // mix.sass('gnscs/pages_out/contactus.scss', 'public/css/gnscs/pages_out');
    // mix.sass('gnscs/pages_out/master.scss', 'public/css/gnscs/pages_out');

    // mix.sass('gnscs/admin/master.scss', 'public/css/gnscs/admin');
});

elixir(function(mix) {
    mix.webpack('web/home.js', 'public/app/web');
    // mix.webpack('pages_out/home.js', 'public/app/pages_out');
    // mix.webpack('pages_out/about.js', 'public/app/pages_out');
    // mix.webpack('pages_out/services.js', 'public/app/pages_out');

    // mix.webpack('admin/ng_admin.js', 'public/app/admin');

    // mix.webpack('global_jquery/global.js', 'public/app/jquery');

    // mix.webpack('bootstrap.js', 'public/js');
});
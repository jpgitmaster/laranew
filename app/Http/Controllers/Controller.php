<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $import = [
    	'stylesheet' 	=> [],
    	'scripts' 		=> [],
    	'ngular' 		=> []
    ];

    public function __construct(){
    	$this->import_css();
    	$this->import_js();
    	$this->import_ng();
    }

    public function import_css(){
    	define('c_bootstrap', 'plugins/bootstrap/css/bootstrap.min.css');
    	define('c_global', 'css/app/global.css');
    }

    public function import_js(){
        define('j_jquery', 'plugins/jquery/jquery.min.js');
        define('j_bootstrap', 'plugins/bootstrap/js/bootstrap.min.js');
    }

    public function import_ng(){
    	define('n_ng', 'plugins/angular/angular.min.js');
    	define('n_ngresource', 'plugins/angular/angular-resource.min.js');

    	define('n_home', 'app/web/home.js');
    }
}

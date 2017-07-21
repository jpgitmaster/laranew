<?php

Route::get('{name?}', 'WebController@index')->where('name', 'home');

Route::get('login', ['as' => 'login', 'uses' => 'WebController@login_v']);
Route::post('login_c', 'WebController@login_c');
Route::post('register', 'WebController@register');


Route::prefix('admin')->group(function () {
	Route::get('dashboard', [
	    'as' => 'dashboard', 'uses' => 'AdminController@dashboard'
	]);
	Route::get('logout', [
	    'as' => 'logout', 'uses' => 'AdminController@logout'
	]);
});
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usr extends Model
{
	protected $table 	= 'users';
    protected $fillable = ['email', 'password'];
    protected $hidden 	= ['password'];

    public $timestamps = false;
}

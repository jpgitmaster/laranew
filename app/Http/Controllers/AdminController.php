<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function __construct(){
    	
    }

    public function dashboard(){
    	if (Auth::check()):
		    return view('admin.dashboard');
		else:
			return redirect()->route('login');
		endif;
    }

    public function logout(){
        Auth::logout();
        return redirect()->route('login');
    }

    
}

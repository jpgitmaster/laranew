<?php

namespace App\Http\Controllers;

use App\Usr;
use Session;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class WebController extends Controller
{
    public function __construct(){
        parent::__construct();
        $this->import = [
            'scripts' => [j_jquery, j_bootstrap],
            'stylesheet' => [c_bootstrap, c_global],
            'ngular'    => [n_ng, n_ngresource, n_home]
        ];
    }

    public function index(){
    	return view('web.home', [
            'scripts'       => $this->import['scripts'],
            'stylesheet'    => $this->import['stylesheet'],
            'ngular'        => $this->import['ngular']
        ]);
    }

    public function login_c(Request $request){
        $input = $request->all();
        $user = json_decode($input['user'], true);
        $msg = [];
        if($user['token'] == Session::token()):
            $validate = Validator::make($user, [
                'email' => 'required',
                'pword' => 'required'
            ]);
            $has_error = $this->hasError($validate);

            if($has_error == true):
                $msg['has_error'] = true;
                $msg['error'] = $validate->messages()->toArray();
            else:
                if (Auth::attempt(['email' => $user['email'], 'password' => $user['pword']])):
                    // Authentication passed...
                    print_r('success');
                endif;
            endif;
            print_r(json_encode($msg, JSON_PRETTY_PRINT));
        endif;
        
    	
    }

    public function login_v(){
    	return view('web.forms.login');
    }

    public function register(Request $request){
    	$input = $request->all();
    	$user = json_decode($input['user'], true);

    	if($user['token'] == Session::token()):
    		$usr = new Usr;
    		$usr->genid 		= '';
    		$usr->email 		= $user['email'];
    		$usr->password 		= Hash::make($user['pword']);
    		$usr->remember 		= 0;
    		$usr->activated 	= 0;
    		$usr->act_created 	= Carbon::now();
    		$usr->last_login 	= Carbon::now();
    		$usr->role 			= 1;
    		$usr->save();
    	endif;
    	// print_r($request->session()->all());
    	// return redirect('profile');
    }

    public function hasError($validate){
        if(isset($validate)):
            if($validate->fails()):
                $result = true;
            else:
                $result = false;
            endif;
            return $result;
        endif;
    }
}

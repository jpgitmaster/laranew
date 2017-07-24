<?php

namespace App\Http\Controllers;

use Session;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Mail\Mailer;
use App\Mail\MailNewRegistrants;

class WebController extends Controller
{
    public function __construct(){
        parent::__construct();
        $this->import = [
            'stylesheet' => [c_ngmotion, c_bootstrap, c_fawesome, c_global],
            'scripts' => [j_jquery, j_bootstrap],
            'ngular'    => [n_ng, n_ngresource, n_nganimate, n_home]
        ];

        $this->replace_names = [
            'email' => 'Email',
            'pword' => 'Password',
            'lemail' => 'Email',
            'lpassword' => 'Password',
            'pword_confirmation' => 'Confirm Password'
        ];
    }

    public function index(){
        if (Auth::check()):
            return redirect()->route('dashboard');
        else:
            return view('web.home', [
                'scripts'       => $this->import['scripts'],
                'stylesheet'    => array_merge($this->import['stylesheet'], array(c_home)),
                'ngular'        => $this->import['ngular']
            ]);
        endif;
    }

    public function login_c(Request $request){
        $input = $request->all();
        $user = json_decode($input['user'], true);

        if($user['token'] == Session::token()):
            $validate = Validator::make($user, [
                'lemail' => 'required|email',
                'lpassword' => 'required'
            ]);
            $validate->setAttributeNames($this->replace_names);
            $has_error = $this->hasError($validate);

            if($has_error == true):
                $msg['has_error'] = true;
                $msg['error'] = $validate->messages()->toArray();
            else:
                if (Auth::attempt(['email' => $user['lemail'], 'password' => $user['lpassword'], 'activated' => 0])):
                    $msg['has_error'] = false;
                endif;
            endif;
            print_r(json_encode($msg, JSON_PRETTY_PRINT));
        endif;
    }

    public function login_v(){
    	return view('web.forms.login', [
            'scripts'       => $this->import['scripts'],
            'stylesheet'    => array_merge($this->import['stylesheet'], array(c_login)),
            'ngular'        => $this->import['ngular']
        ]);
    }

    public function register(Request $request, Mailer $mailer){
    	$input = $request->all();
    	$user = json_decode($input['user'], true);

        if($user['token'] == Session::token()):
            $validate = Validator::make($user, [
                'email' => 'required|email|max:80',
                'pword' => 'required|confirmed',
                'pword_confirmation' => 'required'
            ]);
            $validate->setAttributeNames($this->replace_names);
            $has_error = $this->hasError($validate);

            if($has_error == true):
                $msg['has_error'] = true;
                $msg['error'] = $validate->messages()->toArray();
            else:
                print_r($user['token']);
                // $usr = new User;
                // $usr->genid          = '';
                // $usr->email          = $user['email'];
                // $usr->password       = Hash::make($user['pword']);
                // $usr->remember       = 0;
                // $usr->activated      = 0;
                // $usr->act_created    = Carbon::now();
                // $usr->last_login     = Carbon::now();
                // $usr->role           = 1;
                // $usr->remember_token = $user['token'];
                // $usr->save();
                // if( count($mailer->failures()) > 0 ):
                //     print_r(count($mailer->failures()));
                // else:
                //     $mailer->to($user['email'])
                //         ->send(new MailNewRegistrants($user));
                // endif;
            endif;
            // print_r(json_encode($msg, JSON_PRETTY_PRINT));
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

    public function email_confirmation($token){
        $user = User::where('remember_token', $token)->first();

        if(!is_null($user)){
            // $user->confirmed = 1;
            // $user->token = 1;
            // $user->save();
            return redirect()->route('login')->with('status', 'Your activation is completed.');
        }
        return redirect()->route('login')->with('status', 'Something went wrong.');
    }


}

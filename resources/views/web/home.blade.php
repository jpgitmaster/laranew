<!DOCTYPE html>
<html lang="en" ng-app="ngApp">
<head>
	<meta charset="UTF-8">
	<title>Document</title>

    @if (isset($stylesheet))
      @foreach($stylesheet as $css)
        <link rel="stylesheet" type="text/css" href="{{ URL::asset($css) }}">
      @endforeach
    @endif
</head>
<body>
<div id="wrapper" ng-controller="ctrlApp">
    <div id="header">
        <form ng-submit="usrLogin(lgin)" method="POST" novalidate>
            <input type="hidden" ng-model="lgin.token" ng-init="lgin.token='{{csrf_token()}}'">
            <div class="nptgrp" ng-class="{'err': msg['error']['lemail']}">
                <input type="text" ng-model="lgin.lemail" ng-focus="fcs_lemail = true" ng-blur="fcs_lemail = false" required>
                <label>Email</label>
                <div class="am-flip-x popcntnr" ng-if="msg['error']['lemail'] && fcs_lemail === true" ng-cloak>
                    <div class="popover top">
                        <div class="arrow"></div>
                        <div class="popover-content">
                            <%= msg['error']['lemail'][0] %>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nptgrp" ng-class="{'err': msg['error']['lpassword']}">
                <input type="password" ng-model="lgin.lpassword" ng-focus="fcs_lpassword = true" ng-blur="fcs_lpassword = false" required>
                <label>Password</label>
                <div class="am-flip-x popcntnr" ng-if="msg['error']['lpassword'] && fcs_lpassword === true" ng-cloak>
                    <div class="popover top">
                        <div class="arrow"></div>
                        <div class="popover-content">
                            <%= msg['error']['lpassword'][0] %>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btnblu">
                Login
            </button>
        </form>
    </div>

    <div id="frmRgstr">
        <h1>Register</h1>
        <form ng-submit="usrRegister(rgstr)" method="POST" novalidate>
            <input type="hidden" ng-model="rgstr.token" ng-init="rgstr.token='{{csrf_token()}}'">
            <div class="no-gutter">
                <div class="col-lg-12">
                    <div class="nptgrp" ng-class="{'err': msg['error']['email']}">
                        <input type="text" ng-model="rgstr.email" ng-focus="fcs_email = true" ng-blur="fcs_email = false" required>
                        <label>Email</label>
                        <div class="am-flip-x popcntnr" ng-if="msg['error']['email'] && fcs_email === true" ng-cloak>
                            <div class="popover top">
                                <div class="arrow"></div>
                                <div class="popover-content">
                                    <%= msg['error']['email'][0] %>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="nptgrp" ng-class="{'err': msg['error']['pword']}">
                        <input type="password" ng-model="rgstr.pword" ng-focus="fcs_pword = true" ng-blur="fcs_pword = false" required>
                        <label>Password</label>
                        <div class="am-flip-x popcntnr" ng-if="msg['error']['pword'] && fcs_pword === true" ng-cloak>
                            <div class="popover top">
                                <div class="arrow"></div>
                                <div class="popover-content">
                                    <%= msg['error']['pword'][0] %>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="nptgrp" ng-class="{'err': msg['error']['pword_confirmation']}">
                        <input type="password" ng-model="rgstr.pword_confirmation" ng-focus="fcs_pword_confirmation = true" ng-blur="fcs_pword_confirmation = false" required>
                        <label>Confirm Password</label>
                        <div class="am-flip-x popcntnr" ng-if="msg['error']['pword_confirmation'] && fcs_pword_confirmation === true" ng-cloak>
                            <div class="popover top">
                                <div class="arrow"></div>
                                <div class="popover-content">
                                    <%= msg['error']['pword_confirmation'][0] %>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btnblu">
                        Register
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="clearfix"></div>
    <div id="footerbtm">
      <p>24/7 Global Nursing Solution &amp; Consulting Services LLC © 2016. All Rights Reserved</p>
    </div>
</div>


<!-- JS -->
@if (isset($scripts))
  @foreach($scripts as $js)
    <script src="{{ asset($js) }}"></script>
  @endforeach
@endif


<!-- App -->
@if (isset($ngular))
  @foreach($ngular as $ng)
    <script src="{{ asset($ng) }}"></script>
  @endforeach
@endif
</body>
</html>
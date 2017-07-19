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
        <form action="login_c" method="POST" novalidate style="margin-top: 8px;">
            {{ csrf_field() }}
            <div class="nptgrp">
                <input type="text" name="email" required>
                <label>Email</label>
                <div class="am-flip-x popcntnr">
                    <div class="popover top">
                        <div class="arrow"></div>
                        <div class="popover-content" style="padding: 1px 10px 0 10px; font-size: 12px;">
                            The Password field is required.
                        </div>
                    </div>
                </div>
            </div>
            <div class="nptgrp">
                <input type="text" name="password" required>
                <label>Password</label>
            </div>
            <button type="submit" class="btn btnblu">
                Login
            </button>
        </form>

    </div>

    <div id="frmRgstr">
        <h1>Register</h1>
        <form ng-submit="usrRegister(rg)" method="POST" novalidate>
            <input type="hidden" ng-model="rg.token" ng-init="rg.token='{{csrf_token()}}'">
            <div class="no-gutter">
                <div class="col-lg-12">
                    <div class="nptgrp" ng-class="{'err': msg['error']['email']}">
                        <input type="text" ng-model="rg.email" ng-focus="fcs_email = true" ng-blur="fcs_email = false" required>
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
                        <input type="password" ng-model="rg.pword" ng-focus="fcs_pword = true" ng-blur="fcs_pword = false" required>
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
                        <input type="password" ng-model="rg.pword_confirmation" ng-focus="fcs_pword_confirmation = true" ng-blur="fcs_pword_confirmation = false" required>
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
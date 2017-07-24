
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

<div class="frmlogin">
@if ($status = Session::get('status'))
  {{ $status }}
@endif
	<form action="login_c" method="POST" novalidate>
		<h1>Login</h1>
	    <div class="nptgrp">
	        <input type="text" name="email" value="{{ old('email') }}" required>
	        <label>Email</label>
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
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif


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
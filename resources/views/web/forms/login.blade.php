<h1>Login</h1>
<form ng-submit="usrLogin(usr)" method="POST">
    <input type="hidden" ng-model="usr.token" ng-init="usr.token='{{csrf_token()}}'">
	<div>
		<label>Email</label>
		<input type="text" name="email" value="{{ old('email') }}" required>
	</div>
	<div>
		<label>Password</label>
		<input type="text" ng-model="usr.password">
	</div>
	<button type="submit">
		Login
	</button>
	@if ($errors->any())
	    <div class="alert alert-danger">
	        <ul>
	            @foreach ($errors->all() as $error)
	                <li>{{ $error }}</li>
	            @endforeach
	        </ul>
	    </div>
	@endif
</form>
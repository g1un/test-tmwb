/*validation*/
var login = document.getElementById('enter__login');
var password = document.getElementById('enter__password');
var warning = document.querySelector('.error');
var validation = function(){
	if(login.value == '' || password.value == ''){
		warning.style.display = 'block';
		return false;
	}else{
		warning.style.display = '';
	}
};


/*end of validation*/
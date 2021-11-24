let setError = (id,err)=>{
   const element = document.getElementById(id);
   element.getElementsByClassName('form-error')[0].innerHTML = err; 
}

let removeErrors = () => {
  errors = document.getElementsByClassName("form-error");
  for (let item of errors){
  	item.innerHTML="";
  }
}

let validateForm = () => {
	let value = true;

    removeErrors();

	const fname = document.forms['test-form']["fname"].value;
	const lname = document.forms['test-form']["lname"].value;
	const email = document.forms['test-form']["email"].value;
	const pass1 = document.forms['test-form']["pass1"].value;
	const pass2 = document.forms['test-form']["pass2"].value;
	if(fname.length<4){
		setError("fname","*Length can't be too short!!");
		value = false;
	}
	if(lname.length<4){
		setError("lname","*Length can't be too short!!");
		value = false;
	}
	if(email.length<9 || email.length>30){
		setError("email","*Email length is invalid!!");
		value = false;
	}
	if(pass1.length<8){
		setError("pass1","*Password must contain 8 characters!!");
		value = false;
	}
	else if(pass1 != pass2){
		setError("pass2","*Password doesn't match!!");
		value = false;
	}

	return value;
}


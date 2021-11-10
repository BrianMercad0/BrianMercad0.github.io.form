function validation()
{
	var fname=document.registration.fname;
	var lname=document.registration.lname;
	var email=document.registration.email;
	var mnumber=document.registration.mnumber;

	if(allLettername(fname))
	{
		if(allLetterlast(lname))
		{
			if(gmail(email))
			{
				if(eInfo(mnumber))
					{
					}
			}
		}
	}
	return false;
}	

function allLettername(fname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(fname.value.length==0)
	{
		alert('Please enter first name');
		fname.focus();
		return false;
	}

	else if(fname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		fname.focus();
		return false;
	}
}

function allLetterlast(lname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lname.value.length==0)
	{
		alert('Please enter last name');
		lname.focus();
		return false;
	}
	else if(lname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		fname.focus();
		return false;
		
	}
}

function gmail(email)
{
	var letters = /^[A-Za-z0-9.]+@[A-Za-z-]+.[A-Za-z]{3}$/;
	if(email.value.length == 0)
	{
		alert('Enter Email');
		email.focus();
		return false;
	}
	else if(email.value.match(letters))
	{
		return true
	}
	else
	{
		alert('Email should contain @');
		email.focus();
		return false;
	}
}

function eInfo(mnumber)
{ 
    
    var numbers = /^[0-9]{10}$/;
    if(mnumber.value.length == 0 )
    {
        alert('Please enter mobile number');
        mnumber.focus();
        return false;
    }
    else if(mnumber.value.length > 10)
    {
        alert('Number should not be more than 10 digits');
        mnumber.focus();
        return false;

    }
    else if(mnumber.value.match(numbers))
    {
        alert('Form Has been Submitted');
        window.location.reload();
        return true;
    }
    else
    {
        alert('Please check your number for any errors');
        return false;
    }
}

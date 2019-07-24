function valid()
{
			var username = document.getElementById('docName').value;
			var password = document.getElementById('docPass').value;
			var submit= document.getElementById('submit').value;

			if (username.trim()=="" || password.trim()=="")
			{
					alert("Ooops! you left something");
					return false;
			}
			else if(username.trim()=="Ali" && password.trim()=="patientino" || username.trim()=="Terry" && password.trim()=="patientino" || username.trim()=="Derrick" && password.trim()=="patientino"){
					true;
			}
      else{
        alert("You are not registered");
        return false;
      }
}

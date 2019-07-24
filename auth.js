function saveData(){
var name = document.getElementById("patName").value;
var address = document.getElementById("patAdd").value;
var dateOB = document.getElementById("patDOB").value;

var selectedGender;
document.getElementsByName("gender").forEach(function(elm){
	if (elm.checked){
		selectedGender= elm.value;
		}
	})

var status;
ocument.getElementsByName("ms").forEach(function(elm){
	if (elm.checked){
		status= elm.value;
		}
	})
var nationality = document.getElementById("patNat").value;
var patNum = document.getElementById("patCode").value;
var blood = document.getElementById("patBld").value;
var medical = document.getElementById("patMed").value;
var overall = document.getElementById("patOHS").value;
var submit = document.getElementById("submit").value;

insertData(name.trim(), address.trim(), dateOB.trim(), selectedGender.trim(), status.trim(), nationality.trim(), patNum.trim(), blood.trim(), medical.trim(), overall.trim())

}


function insertData(name.trim(), address.trim(), dateOB.trim(), selectedGender.trim(), status.trim(), nationality.trim(), patNum.trim(), blood.trim(), medical.trim(), overall.trim())
{
		var firebaseRef = firebase.database().ref("users").child("stressed");
		
		firebaseRef.set(
		{
			Name: name, 
			Address: address, 
			DOB: dateOB, 
			Gender: selectedGender, 
			Marital: status, 
			Nationality: nationality, 
			PatientID: patNum, 
			BloodGroup: blood,
			MedicalReport: medical,
			OverallCondition: overall
		}
		function(error) {
    if (error) {
      // The write failed...
      alert("Something went wrong")
    } else {
      // Data saved successfully!
      alert("Successful addition")
    }
  });
}




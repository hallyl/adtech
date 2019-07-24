function getDatabaseRef(){
	console.log('Script called');
	
	var firebaseRef = firebase.database().ref();
	console.log(firebaseRef.ref);
	window.alert(firebaseRef);
	
	console.log('Script finished');
	}
	
//var firebaseRef = firebase.database().ref();

document.getElementById("registerForm").addEventListener('submit', submitForm);

function submitForm(e){
	
	//e.preventDefault();
	
	var Name = getInputVal('');
	var name = getInputVal("patName").value;
var address = getInputVal("patAdd").value;
var dateOB = getInputVal("patDOB").value;

var selectedGender;
getInputVal("gender").forEach(function(elm){
	if (elm.checked){
		selectedGender= elm.value;
		}
	})

var status;
getInputVal("ms").forEach(function(elm){
	if (elm.checked){
		status= elm.value;
		}
	})
var nationality = getInputVal("patNat").value;
var patNum = getInputVal("patCode").value;
var blood = dgetInputVal("patBld").value;
var medical = getInputVal("patMed").value;
var overall = getInputVal("patOHS").value;
var submit = getIputVal("submit").value;

	saveForm(name, address, dateOB, selectedGender, status, nationality, patNum, blood, medical, overall)
	
	document.getElementById('registeredForm').reset();
	}
	
function getInputVal(id){
	return document.getElementById(id).value;
}

function saveForm(name, address, dateOB, selectedGender, status, nationality, patNum, blood, medical, overall){
	var newDataRef = firebase.database().ref().push();
	newDataRef.set({
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
		});
}

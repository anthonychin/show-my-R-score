// (Z Score + Group Strength + 5) x 5
// group strength is (average cegep class -75)/14
// Z score = (Your grade - class average)/standard deviation
var myGrade;
var classAverage;
var highschoolClassAverage;
var standardDeviation;

function calculateRScore () {
	myGrade = parseInt(document.getElementById('my-grade').value);
	classAverage = parseInt(document.getElementById('class-average').value);
	highschoolClassAverage = parseInt(document.getElementById('highschool-class-average').value);
	standardDeviation = parseFloat(document.getElementById('standard-deviation').value);
	if (getGradeLowerOrEqualToOneHundred()) {
		var rScore = (calculateZScore() + calculateGroupStrength() + 5)*5;
		document.getElementById("result").innerHTML = rScore.toFixed(2);
	} else {
		document.getElementById("result").innerHTML = "Error, Please enter a valid number";
	}
}

// Z score cannot exceed 3 or -3
function calculateZScore () {
	var zScore = (myGrade - classAverage)/standardDeviation;
	if (myGrade == 100 && zScore < 2.0) {
		return 2.0;
	} 

	if (zScore > 3.0) {
		return 3.0;
	} else if (zScore < -3.0) {
		return -3.0;
	}
	return zScore;
}

function calculateGroupStrength () {
	var groupStrength = (highschoolClassAverage - 75)/14;
	return groupStrength
}

function getGradeLowerOrEqualToOneHundred () {
	if (myGrade > 100 || classAverage > 100 || highschoolClassAverage > 100 || standardDeviation > 100) {
    return false;
  } else if (myGrade < 0 || classAverage < 0 || highschoolClassAverage < 0 || standardDeviation < 0) {
    return false;
  }
  return true;
}

//http://www.slc.qc.ca/sites/slc/files/documents/the_r_score_presentation.pdf

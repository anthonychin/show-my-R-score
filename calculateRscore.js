
// standard r score avg ranges between 18-40
var myGrade = document.getElementById('my-grade').value;
var classAverage = document.getElementById('class-average').value;
var highschoolClassAverage = document.getElementById('highschool-class-average').value;
var standardDeviation = document.getElementById('standard-deviation').value;

// (Z Score + Group Strength + 5) x 5
// group strength is (average cegep class -75)/14
// Z score = (Your grade - class average)/standard deviation
function calculateRScore () {
	var calculateRScore = (calculateZScore + calculateGroupStrength + 5)*5;
	return calculateRScore;
}

// grade below 50 are not included
// Z score cannot exceed 3 or -3
function calculateZScore () {
	var zScore = (myGrade - classAverage)/standardDeviation
	if (myGrade == 100 && zScore < 2.0) {
		return 2.0;
	} 

	if (zScore) > 3.0 {
		return 3.0;
	} else if (zScore) < 3.0 {
		return -3.0;
	}
	return zScore;
}

function calculateGroupStrength () {
	var groupStrength = (highschoolClassAverage - 75)/14
	return groupStrength
}

$("#response").click(function () {
	alert("hello");
	response.innerHTML = calculateRScore();
});

//http://www.slc.qc.ca/sites/slc/files/documents/the_r_score_presentation.pdf
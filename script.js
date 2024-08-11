document.getElementById('grade-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);

    // Calculate average grade
    const average = (subject1 + subject2 + subject3 + subject4) / 4;

    // Determine letter grade
    let letterGrade = '';
    if (average >= 90) {
        letterGrade = 'A';
    } else if (average >= 80) {
        letterGrade = 'B';
    } else if (average >= 70) {
        letterGrade = 'C';
    } else if (average >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your average grade is ${average.toFixed(2)}% which is a ${letterGrade}.`;
});

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const rollNumberInput = document.getElementById('roll-number');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');
    const studentName = document.getElementById('student-name');
    const studentSubject = document.getElementById('student-subject');
    const studentMarks = document.getElementById('student-marks');
    const studentRemarks = document.getElementById('student-remarks');

    searchButton.addEventListener('click', function() {
        const rollNumber = rollNumberInput.value;

        // Fetch student data from an external JSON file
        fetch('studentData.json')
            .then(response => response.json())
            .then(data => {
                if (data[rollNumber]) {
                    const student = data[rollNumber];
                    studentName.textContent = student.name;
                    studentSubject.textContent = student.subject;
                    studentMarks.textContent = student.marks;
                    studentRemarks.textContent = student.remarks;
                    resultContainer.style.display = 'block';
                } else {
                    alert('Student not found. Please check the roll number.');
                }
            });
    });
});

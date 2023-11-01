const studentData = {
     "101": {
        "name": "John Doe",
        "subject": "Math",
        "marks": 95,
        "remarks": "Excellent"
    },
    "102": {
        "name": "Jane Sdfmith",
        "subject": "Science",
        "marks": 88,
        "remarks": "Very Good"
    },
     "103": {
        "name": "Jane Shjmith",
        "subject": "Science",
        "marks": 89,
        "remarks": "Very Good"
    },
     "104": {
        "name": "Jane Smfgtith",
        "subject": "Science",
        "marks": 90,
        "remarks": "Very Good"
    },
     "105": {
        "name": "Jane Smthith",
        "subject": "Science",
        "marks": 91,
        "remarks": "Very Good"
    },
     "106": {
        "name": "Jane Smtfeith",
        "subject": "Science",
        "marks": 92,
        "remarks": "Very Good"
    },
    "107": {
        "name": "Alice Johnson",
        "subject": "History",
        "marks": 75,
        "remarks": "Good"
    }
};

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
        if (studentData[rollNumber]) {
            const student = studentData[rollNumber];
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

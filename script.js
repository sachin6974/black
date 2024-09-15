function uploadFile() {
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const studentBatch = document.getElementById('studentBatch').value;
    const studentDept = document.getElementById('studentDept').value;
    const subject = document.getElementById('subjectSelect').value;
    const fileInput = document.getElementById('fileInput');

    if (!studentName || !studentId || !studentBatch || !studentDept || !fileInput.files.length) {
        alert('Please fill all fields and select a file.');
        return;
    }

    const file = fileInput.files[0];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.textContent = `${file.name} (Uploaded by: ${studentName}, ID: ${studentId}, Batch: ${studentBatch}, Dept: ${studentDept})`;
    link.download = file.name;
    listItem.appendChild(link);

    document.getElementById(`${subject}List`).appendChild(listItem);

    // Clear input fields
    document.getElementById('studentName').value = '';
    document.getElementById('studentId').value = '';
    document.getElementById('studentBatch').value = '';
    document.getElementById('studentDept').value = '';
    document.getElementById('fileInput').value = '';
}

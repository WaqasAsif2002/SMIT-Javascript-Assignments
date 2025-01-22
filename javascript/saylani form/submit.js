var fullName = localStorage.getItem('fullName');
var course = localStorage.getItem('course');
var city = localStorage.getItem('city');
var phone = localStorage.getItem('phone');
var fatherName = localStorage.getItem('fatherName');
var email = localStorage.getItem('email');
var gender = localStorage.getItem('gender');
var cnic = localStorage.getItem('cnic');
var fatherCnic = localStorage.getItem('fatherCnic');
var address = localStorage.getItem('address');
document.getElementById('formdata').innerHTML = `
    <h3>${fullName} - Form Submitted Successfully</h3>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>Field</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Course</td>
            <td>${course}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>${city}</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>${phone}</td>
        </tr>
        <tr>
            <td>Father's Name</td>
            <td>${fatherName}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>${gender}</td>
        </tr>
        <tr>
            <td>CNIC</td>
            <td>${cnic}</td>
        </tr>
        <tr>
            <td>Father's CNIC</td>
            <td>${fatherCnic}</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>${address}</td>
        </tr>
    </table>
`;

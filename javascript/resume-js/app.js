function redirect() {
    
window.location.href = 'index1.html'

    var name = document.getElementById('name').value;
    var fname = document.getElementById('father-name').value;
    var cnic = document.getElementById('cnic').value;
    var qualification = document.getElementById('qualification').value;
  
    fullresume(name, fname, cnic, qualification);
  }
  
  function fullresume(name, fname, cnic, qualification) {
    
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h1>Resume</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Father's Name:</strong> ${fname}</p>
      <p><strong>CNIC:</strong> ${cnic}</p>
      <p><strong>Qualification:</strong> ${qualification}</p>
    `;
  }
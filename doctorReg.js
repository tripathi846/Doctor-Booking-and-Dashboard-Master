async function doctorReg() {
    // Get the input data using querySelector
    const name = document.querySelector('#name').value;
    const expertise = document.querySelector('#expertise').value.split(',');
    const experience = parseInt(document.querySelector('#experience').value);
    const imageUrl = document.querySelector('#imageUrl').value;
  
    // Create a JSON object from the input data
    const doctorData = {
      name,
      expertise,
      experience,
      imageUrl
    };
  
    // Send a POST request to the JSON URL
    try {
      const response = await fetch('http://localhost:4000/Doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctorData)
      });
  
      // Check if the response was successful
      if (response.ok) {
        alert('Form data submitted successfully!');
        console.log('Form data submitted successfully!');
      } else {
        alert(`Error submitting form data: ${response.status}`);
        console.error('Error submitting form data:', response.status);
      }
    } catch (error) {
      alert(`Error submitting form data: ${error}`);
      console.error('Error submitting form data:', error);
    }
  }
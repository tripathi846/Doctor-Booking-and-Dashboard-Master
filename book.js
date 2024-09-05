async function populateSelect() {
    try {
      const response = await fetch('http://localhost:4000/Doctors');
      const doctors = await response.json();
  
      const selectElement = document.querySelector('select[name="doctor"]');
  
      doctors.forEach((doctor) => {
        const option = document.createElement('option');
        option.value = doctor.name;
        option.text = doctor.name;
        selectElement.appendChild(option);
      });
    } catch (error) {
      console.error('Error populating select:', error);
    }
  }
  
  populateSelect();



  async function bookAppointment() {
    // Get the form data using querySelector
    const name = document.querySelector('input[name="name"]').value;
    const phone = parseInt(document.querySelector('input[name="phone"]').value);
    const email = document.querySelector('input[name="email"]').value;
    const specialization = document.querySelector('select[name="Specialization"]').value;
    const doctor = document.querySelector('select[name="doctor"]').value;
    const date = document.querySelector('input[name="data"]').value;
  
    // Check if all fields are filled
    if (!name || !phone || !email || specialization === "none" || doctor === "Doctors" || !date) {
      alert("Please fill in all required fields!");
      return;
    }
  
    // Create a JSON object from the form data
    const appointmentData = {
      name: name,
      phone: phone,
      email: email,
      specialization: specialization,
      doctor: doctor,
      date: date
    };
  
    // Send a POST request to the JSON URL
    try {
      const response = await fetch('http://localhost:4000/Appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
      });
  
      // Check if the response was successful
      if (response.ok) {
        alert('Appointment booked successfully!');
        console.log('Appointment booked successfully!');
      } else {
        alert(`Error booking appointment: ${response.status}`);
        console.error('Error booking appointment:', response.status);
      }
    } catch (error) {
      alert(`Error booking appointment: ${error}`);
      console.error('Error booking appointment:', error);
    }
  }
  
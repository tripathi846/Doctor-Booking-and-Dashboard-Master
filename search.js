async function getDoctors() {
    try {
      const response = await fetch('http://localhost:4000/Doctors');
      const doctors = await response.json();
  
      const doctorHTML = doctors.map((doctor) => {
        return `
          <div class="box">
              <img src="${doctor.imageUrl}" alt="">
              <h3>${doctor.name}</h3>
              <span>${doctor.expertise}</span>
              <h5>${doctor.experience} Year Experience</h5>

              <br>
              <a href="./book.html" class="btn"> Booking <span class="fas fa-chevron-right"></span> </a>
          </div>
        `;
      }).join('');
  
      const doctorContainer = document.querySelector('.box-container');
      doctorContainer.innerHTML = doctorHTML;
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }
  
  getDoctors();


//   search bar doctor search
function searchDoctors() {
    const searchInput = document.querySelector('input[type="text"]');
    const boxContainer = document.querySelector('.box-container1');
  
    searchInput.addEventListener('input', (e) => {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      if (searchTerm === '') {
        boxContainer.innerHTML = ''; // Clear the box container if search input is empty
        return;
      }
  
      fetch('http://localhost:4000/Doctors')
        .then(response => response.json())
        .then(data => {
          const doctors = data; // assume the API returns an array of doctor objects
          const filteredDoctors = doctors.filter((doctor) => {
            return (doctor.name.toLowerCase().includes(searchTerm) || 
                   (typeof doctor.expertise === 'string' && doctor.expertise.toLowerCase().includes(searchTerm)));
          });
  
          if (filteredDoctors.length > 0) {
            const doctorHTML = filteredDoctors.map((doctor) => {
              return `
                <div class="box1">
                    <img src="${doctor.imageUrl}" alt="">
                    <h3>${doctor.name}</h3>
                    <span>${doctor.expertise}</span>
                    <br>
                    <a href="./book.html" class="btn"> Booking <span class="fas fa-chevron-right"></span> </a>
                </div>
              `;
            }).join('');
  
            boxContainer.innerHTML = doctorHTML; // Set the HTML content of the box container
          } else {
            boxContainer.innerHTML = '<h1 style="text-align:center;margin-bottom:50px;">No results found.</h1>'; // Display a message if no results are found
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  }
 // Call the function to initialize the search functionality
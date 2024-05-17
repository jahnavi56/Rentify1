// Function to switch between login and registration forms
function form1() {
    const loginForm = document.getElementById('loginForm');
    console.log(loginForm)
    const registerForm = document.getElementById('registerForm');
  
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
  }
  
  // Function to handle user registration
  async function registerUser(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber })
      });
  
      const data = await response.json();
      console.log('User registered successfully:', data);
  
      // Optionally, you can redirect the user to a dashboard or login page
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  }
  
  // Event listener for form submission
  document.getElementById('registerForm').addEventListener('submit', registerUser);
  


// Fetch properties from backend and display them
async function fetchProperties() {
    try {
      const response = await fetch('/api/properties');
      const properties = await response.json();
  
      // Display properties on the page
      const propertiesSection = document.getElementById('properties');
      propertiesSection.innerHTML = '';
  
      properties.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.classList.add('property');
  
        propertyElement.innerHTML = `
          <h3>${property.location}</h3>
          <p>Area: ${property.area}</p>
          <p>Bedrooms: ${property.bedrooms}</p>
          <p>Bathrooms: ${property.bathrooms}</p>
          <p>Amenities: ${property.amenities.join(', ')}</p>
        `;
  
        propertiesSection.appendChild(propertyElement);
      });
    } catch (error) {
      console.error('Error fetching properties:', error.message);
    }
  }
  
  // Event listener for page load
  window.addEventListener('DOMContentLoaded', () => {
    // Fetch properties when the page loads
    fetchProperties();
  });
  
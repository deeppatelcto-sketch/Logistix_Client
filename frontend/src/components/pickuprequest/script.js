document.addEventListener('DOMContentLoaded', () => {

  //---SIDEBAR: OPEN/CLOSE---// 

    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    const body = document.body;

    toggleBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      toggleIcon.classList.toggle('rotated'); // Toggle rotation class

      if (sidebar.classList.contains('collapsed')) {
        body.classList.add('sidebar-collapsed');
      } else {
        body.classList.remove('sidebar-collapsed');
      }
    });


  //---FORM: OPEN/CLOSE---//

  const addRequestBtn = document.getElementById('addRequestBtn');
  const formOverlay = document.getElementById('formOverlay');
  const closeForm = document.getElementById('closeForm');
  const form = document.querySelector('.form');
  const pickupRequestForm = document.getElementById('pickupRequestForm');

  addRequestBtn?.addEventListener('click', () => {
    formOverlay.style.display = 'flex';
    form.classList.remove('fade-out');
    form.classList.add('fade-in');
  });

  const hideForm = () => {
    form.classList.remove('fade-in');
    form.classList.add('fade-out');

    setTimeout(() => {
      formOverlay.style.display = 'none';
      form.classList.remove('fade-out');
      pickupRequestForm.reset();
    }, 300);
  };

  closeForm?.addEventListener('click', hideForm);

  window.addEventListener('click', (e) => {
    if (e.target === formOverlay) {
      hideForm();
    }
  });

  //---FORM SUBMIT: POST DATA ONLY---//

  const API_URL = 'http://192.168.1.6:8000/createpickupreq'; // Update with your local server IP if needed

  pickupRequestForm?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
      partner: document.getElementById('partner').value,
      warehouse: document.getElementById('wareHouse').value,
      packageCount: document.getElementById('packageCount').value,
      pickupDate: document.getElementById('pickupDate').value,
      pickupTime: document.getElementById('pickupTime').value,
    };

    console.log("Submitting data:", data); // optional for debug

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${API_KEY}` // Optional, if your API requires token
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      alert('Pickup request submitted successfully!');
      hideForm();
    } catch (error) {
      console.error('Fetch failed:', error);
      alert('Submission failed. Please check if your server is running.');
    }
  });
});

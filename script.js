// Add JS hereconst btnDaftar = document.getElementById("btnDaftar");
const alertBox = document.createElement("div");
alertBox.classList.add("alert", "alert-success", "d-none");
alertBox.innerHTML = "<strong>Pendaftaran berhasil!</strong>";
const spinner = document.createElement("div");
spinner.classList.add(
  "spinner-border",
  "spinner-border-sm",
  "text-primary",
  "d-none"
);

btnDaftar.addEventListener("click", () => {
  // Simulasikan proses pendaftaran (misalnya, AJAX request)
  btnDaftar.disabled = true;
  btnDaftar.appendChild(spinner);
  spinner.classList.remove("d-none"); // Show the spinner immediately

  // Replace this with your actual form validation and submission logic
  setTimeout(() => {
    btnDaftar.removeChild(spinner);
    btnDaftar.disabled = false;

    // Simulate successful registration
    alertBox.classList.remove("d-none");
    document.body.appendChild(alertBox); // Add the alert to the body

    // Hide the alert after a few seconds
    setTimeout(() => {
      alertBox.classList.add("d-none");
      document.body.removeChild(alertBox); // Remove the alert from the body
    }, 3000); // Adjust the timeout as needed (3 seconds in this case)
  }, 2000); // Simulate a 2-second delay for processing (adjust as needed)

  // Handle potential errors during registration (optional)
  // You can add an "else" block here to show an error alert if the registration fails
});


const modal = document.getElementById('formModal');
const form = modal.querySelector('form'); // Assuming there's a form within the modal

modal.addEventListener('hidden.bs-modal', () => {
  // Reset form fields
  form.querySelectorAll('input, textarea').forEach(element => {
    if (element.type === 'checkbox') {
      element.checked = false;
    } else {
      element.value = '';
    }
  });

  // Clear alert messages (if any)
  const alertElements = modal.querySelectorAll('.alert'); // Replace with your specific selector
  alertElements.forEach(alertElement => alertElement.remove());
});

document.getElementById(visitorForm).addEventListener(submit, function (e) {
  e.preventDefault();

   Clear previous errors
  document.querySelectorAll(.error).forEach(el = el.textContent = );
  document.getElementById(successMessage).textContent = ;

   Get values
  const fullName = document.getElementById(fullName).value.trim();
  const phone = document.getElementById(phone).value.trim();
  const email = document.getElementById(email).value.trim();
  const aadhar = document.getElementById(aadhar).value.trim();
  const checkin = document.getElementById(checkin).value;
  const checkout = document.getElementById(checkout).value;
  const purpose = document.getElementById(purpose).value.trim();

  let valid = true;

   Validation
  if (!fullName) {
    document.getElementById(nameError).textContent = Full name is required.;
    valid = false;
  }

  if (!^d{10}$.test(phone)) {
    document.getElementById(phoneError).textContent = Phone must be 10 digits.;
    valid = false;
  }

  if (!^S+@S+.S+$.test(email)) {
    document.getElementById(emailError).textContent = Invalid email format.;
    valid = false;
  }

  if (!^d{12}$.test(aadhar)) {
    document.getElementById(aadharError).textContent = Aadhar must be 12 digits.;
    valid = false;
  }

  if (!valid) return;

   Store in localStorage
  const submission = { fullName, phone, email, aadhar, checkin, checkout, purpose };
  const submissions = JSON.parse(localStorage.getItem(submissions)  []);
  submissions.push(submission);
  localStorage.setItem(submissions, JSON.stringify(submissions));

   Show success and reset
  document.getElementById(successMessage).textContent = Data saved successfully!;
  document.getElementById(visitorForm).reset();
});
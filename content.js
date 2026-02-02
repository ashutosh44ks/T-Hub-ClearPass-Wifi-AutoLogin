const credentials = {
  email: "",
  password: ""
};

const emailValue = credentials.email;
const passwordValue = credentials.password;

(() => {
  const targetOrigin = "https://clearpass.t-hub.co/";
  if (!window.location.href.startsWith(targetOrigin)) return;

  const dispatch = (element, type) => {
    if (!element) return;
    const event = new Event(type, { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
  };

  const fillAndSubmit = () => {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const checkbox = document.querySelector('input[type="checkbox"]');
    const submitButton = document.querySelector(
      'input[type="submit"], button[type="submit"]',
    );

    if (!emailInput || !passwordInput) return false;

    if (emailInput.value !== emailValue) {
      emailInput.value = emailValue;
      dispatch(emailInput, "input");
      dispatch(emailInput, "change");
    }

    if (passwordInput.value !== passwordValue) {
      passwordInput.value = passwordValue;
      dispatch(passwordInput, "input");
      dispatch(passwordInput, "change");
    }

    if (checkbox && !checkbox.checked) {
      checkbox.checked = true;
      dispatch(checkbox, "input");
      dispatch(checkbox, "change");
    }

    // // Trigger the form's validation function to re-enable submit button
    // if (form && typeof form.Nwa_OnFieldsChanged === "function") {
    //   form.Nwa_OnFieldsChanged();
    // }

    console.log("Attempting to submit the form", submitButton);
    if (submitButton) {
      document.querySelector('form').submit()
      // submitButton.click();
      return true;
    }
    return false;
  };

  let attempts = 0;
  const maxAttempts = 10;
  const interval = setInterval(() => {
    attempts += 1;
    console.log(`Filling attempt #${attempts}`);
    const done = fillAndSubmit();
    if (done || attempts >= maxAttempts) clearInterval(interval);
  }, 1000);
})();

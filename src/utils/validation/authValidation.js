// Email validation
export const validateEmail = (email) => {
  if (!email.trim()) {
    return "ایمیل الزامی است";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "ایمیل معتبر نیست";
  }
  return "";
};

// Password validation
export const validatePassword = (password, minLength = 6) => {
  if (!password) {
    return "رمز عبور الزامی است";
  }
  if (password.length < minLength) {
    return `رمز عبور باید حداقل ${minLength} کاراکتر باشد`;
  }
  return "";
};

// Confirm password validation
export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "رمز عبور و تکرار آن یکسان نیستند";
  }
  return "";
};

// Name validation
export const validateName = (name, fieldName = "نام") => {
  if (!name.trim()) {
    return `${fieldName} الزامی است`;
  }
  return "";
};

// Phone validation (Iranian phone numbers)
export const validatePhone = (phone) => {
  if (!phone.trim()) {
    return "شماره تلفن الزامی است";
  }
  if (!/^09\d{9}$/.test(phone)) {
    return "شماره تلفن معتبر نیست";
  }
  return "";
};

// Terms agreement validation
export const validateTerms = (agreeToTerms) => {
  if (!agreeToTerms) {
    return "قبول قوانین و مقررات الزامی است";
  }
  return "";
};

// Signup form validation
export const validateSignupForm = (formData) => {
  const errors = {};

  // Validate names
  errors.firstName = validateName(formData.firstName, "نام");
  errors.lastName = validateName(formData.lastName, "نام خانوادگی");

  // Validate email
  errors.email = validateEmail(formData.email);

  // Validate phone
  errors.phone = validatePhone(formData.phone);

  // Validate password
  errors.password = validatePassword(formData.password);

  // Validate confirm password
  errors.confirmPassword = validateConfirmPassword(formData.password, formData.confirmPassword);

  // Validate terms
  errors.agreeToTerms = validateTerms(formData.agreeToTerms);

  return errors;
};

// Login form validation
export const validateLoginForm = (formData) => {
  const errors = {};

  // Validate email
  errors.email = validateEmail(formData.email);

  // Validate password
  errors.password = validatePassword(formData.password, 1); // Minimum 1 character for login

  return errors;
};

// Check if form has errors
export const hasErrors = (errors) => {
  return Object.values(errors).some(error => error !== "");
};

// Clear specific field error
export const clearFieldError = (errors, fieldName, setErrors) => {
  if (errors[fieldName]) {
    setErrors(prev => ({
      ...prev,
      [fieldName]: ""
    }));
  }
};

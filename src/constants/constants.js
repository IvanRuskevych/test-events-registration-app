export const INITIAL_STATES = {
  LOGIN: {
    email: '',
    password: '',
  },
  REQUEST_EMAIL: {
    email: '',
  },
  RESET_PSW: {
    password: '',
  },
};

export const FIELDS_PATTERN = {
  FIRSTNAME: '',
  LASTNAME: '',
  PHONE: /^\+?\d{12}$/i,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/i,
};

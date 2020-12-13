export const ValidationPatterns = {
  phone: /^[0-9]*$/,
  number: /^[0-9]*$/,
  notNumber: /^([^0-9]*)$/,
  email: /^([^\W])[+-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]{2,6}$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,640}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
};


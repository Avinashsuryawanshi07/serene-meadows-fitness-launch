export const PHONE = "9623103101";
export const PHONE_INTL = "+919623103101";
export const WA_NUMBER = "919623103101";
export const ADDRESS = "Serene Meadows, Nashik, Maharashtra 422010";
export const BUSINESS_NAME = "GO FIT";
export const TRAINER = "Ajinkya Sangale";

export const waLink = (msg = "Hi, I want to book a fitness consultation with GO FIT") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${PHONE_INTL}`;

export const SOCIALS = {
  instagram: "https://www.instagram.com/ajinkya.sangle/",
  facebook: "https://facebook.com/",
  whatsapp: waLink(),
};

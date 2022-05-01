import en from "./en-US";
import hi from "./hi-IN";

const allLocalesMap = {
  ...en,
  ...hi,
};

export const getTranslatedMessage = (currentLocale, id) => {
  return allLocalesMap[currentLocale][id];
};

export default allLocalesMap;

import en from "./en-US";
import hi from "./hi-IN";
import ma from "./ma-IN";
import ka from "./ka-IN";
import pu from "./pu-IN";

const allLocalesMap = {
  ...en,
  ...hi,
  ...ma,
  ...ka,
  ...pu,
};

export const getTranslatedMessage = (currentLocale, id) => {
  return allLocalesMap[currentLocale][id];
};

export default allLocalesMap;

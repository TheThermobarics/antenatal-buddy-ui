import React, { useState } from "react";
import { connect } from "react-redux";
import { setLanguageSelected } from "../actions/helper";
import { LOCALES } from "../i18nProvider";
import { KEYS } from "../i18nProvider/constants";
import { getTranslatedMessage } from "../i18nProvider/messages";

import Navbar from "../components/DashboardComponents/Navbar";

const ChangeLanguage = ({ setLanguageSelected, language }) => {
  const [lang, setLang] = useState(language);
  let submitForm = () => {
    console.log(lang);
    console.log(language);
    setLanguageSelected(lang);
  };

  return (
    <>
      <Navbar selectedRoute="language" />
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            {getTranslatedMessage(language, KEYS.CHANGE_LANGUAGE)}
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4  sm:px-0">
            <section class="pt-8 px-4 pb-4">
              <div>
                <div className="flex items-center mb-4">
                  <input
                    id="country-option-1"
                    type="radio"
                    name="countries"
                    defaultValue={LOCALES.ENGLISH_US}
                    onClick={() => setLang(LOCALES.ENGLISH_US)}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="country-option-1"
                    className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    English - India
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="country-option-2"
                    type="radio"
                    name="countries"
                    defaultValue={LOCALES.HINDI_IN}
                    onClick={() => setLang(LOCALES.HINDI_IN)}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="country-option-2"
                    className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Hindi - India
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <button
                    onClick={() => submitForm()}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  language: state.auth.language,
});

export default connect(mapStateToProps, { setLanguageSelected })(
  ChangeLanguage
);

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin": "To admin view",
      "shop": "Our shops",
      "contact": "Contact us",
      "login": "Log in",
      "cart": "To cart",
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "add-product": "Add product",
      "maintain-products": "Maintain products",

      "sort-az" : "Sort A - Z",
      "sort-za" : "Sort Z - A",
      "sort-price-increasing" : "Sort price increasing",
      "sort-price-decreasing" : "Sort price decreasing",
      "add-to-cart" : "Add to cart",
      "just-now": "Just now",
      "product-added": "Product added",
      "cart-is-empty" : "Cart is empty",
      "products-in-cart" : "Products in cart",
      "empty-cart" : "Empty cart",

      "image" : "Image",
      "name" : "Name",
      "price" : "Price",
      "description" : "Description",
      "category" : "Category",
      "active" : "Active",
      "add" : "Add",
    }
  },
  ee: {
    translation: {
      "admin": "Admin vaatesse",
      "shop": "Meie poed",
      "contact": "Võta ühendust",
      "login": "Logi sisse",
      "cart": "Ostukorvi",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-product": "Lisa toode",
      "maintain-products": "Halda tooteid",

      "sort-az" : "Sorteeri A - Z",
      "sort-za" : "Sorteeri Z - A",
      "sort-price-increasing" : "Odavamad eespool",
      "sort-price-decreasing" : "Kallimad eespool",
      "add-to-cart" : "Lisa ostukorvi",
      "just-now": "Just nüüd",
      "product-added": "Toode lisatud",
      "cart-is-empty" : "Ostukorv on tühi",
      "products-in-cart" : "Tooteid ostukorvis",
      "empty-cart" : "Tühjenda ostukorv",

      "image" : "Pilt",
      "name" : "Nimi",
      "price" : "Hind",
      "description" : "Kirjeldus",
      "category" : "Kategooria",
      "active" : "Aktiivne",
      "add" : "Lisa",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
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
      "products": "Products",

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
      "product-removed" : "Product removed",
      "total-sum" : "Total sum",
      "product-details" : "Product details",
      "product-not-found" : "Product not found",

      "index" : "Index",
      "image" : "Image",
      "name" : "Name",
      "price" : "Price",
      "description" : "Description",
      "category" : "Category",
      "active" : "Active",
      "add" : "Add",
      "remove" : "Remove",
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
      "products": "Tooted",

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
      "product-removed" : "Toode eemaldatud",
      "total-sum" : "Summa kokku",
      "product-details" : "Toote detailid",
      "product-not-found" : "Toodet ei leitud",

      "index" : "Indeks",
      "image" : "Pilt",
      "name" : "Nimi",
      "price" : "Hind",
      "description" : "Kirjeldus",
      "category" : "Kategooria",
      "active" : "Aktiivne",
      "add" : "Lisa",
      "remove" : "Eemalda",
    }
  },
  de: {
    translation: {
      "admin": "Zur Admin-Ansicht",
      "shop": "Unsere Geschäfte",
      "contact": "Kontaktiere uns",
      "login": "Anmeldung",
      "cart": "Einkaufswagen",
      "maintain-categories": "Kategorien pflegen",
      "maintain-shops": "Geschäfte unterhalten",
      "add-product": "Produkt hinzufügen",
      "maintain-products": "Produkte pflegen",
      "products": "Produkte",

      "sort-az" : "Sortieren  A - Z",
      "sort-za" : "Sortieren  Z - A",
      "sort-price-increasing" : "Preis niedrig bis hoch",
      "sort-price-decreasing" : "Preis hoch nach niedrig",
      "add-to-cart" : "Zum Warenkorb",
      "just-now": "Soeben",
      "product-added": "Produkt hinzugefügt",
      "cart-is-empty" : "Warenkorb leer",
      "products-in-cart" : "Produkte im Warenkorb",
      "empty-cart" : "Leeren Sie den Warenkorb",
      "product-removed" : "Produkt entfernt",
      "total-sum" : "Gesamtsumme",
      "product-details" : "Produktdetails",
      "product-not-found" : "Produkt nicht gefunden",

      "index" : "Index",
      "image" : "Bild",
      "name" : "Name",
      "price" : "Preis",
      "description" : "Beschreibung",
      "category" : "Kategorie",
      "active" : "Aktiv",
      "add" : "Hinzufügen",
      "remove" : "Remove",
    }
  },
  fr: {
    translation: {
      "admin": "Vue administrateur",
      "shop": "Nos boutiques",
      "contact": "Contactez-nous",
      "login": "Connexion",
      "cart": "Vers le panier",
      "maintain-categories": "Maintenir les catégories",
      "maintain-shops": "Entretenir les boutiques",
      "add-product": "Ajouter un produit",
      "maintain-products": "Maintenir les produits",
      "products": "Produits",

      "sort-az" : "Trier de A à Z",
      "sort-za" : "Trier de Z à A",
      "sort-price-increasing" : "Trier le prix augmente",
      "sort-price-decreasing" : "Trier le prix décroissant",
      "add-to-cart" : "Add to cart",
      "just-now": "Juste maintenant",
      "product-added": "Produit ajouté",
      "cart-is-empty" : "Le panier est vide",
      "products-in-cart" : "Produits dans le panier",
      "empty-cart" : "Panier vide",
      "product-removed" : "Produit supprimé",
      "total-sum" : "Somme totale",
      "product-details" : "Détails du produit",
      "product-not-found" : "Produit non trouvé",

      "index" : "Indice",
      "image" : "Image",
      "name" : "Nom",
      "price" : "Prix",
      "description" : "Description",
      "category" : "Catégorie",
      "active" : "Active",
      "add" : "Ajouter",
      "remove" : "Retirer",
    }
  },
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
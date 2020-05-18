// A collection of hardcoded data to be used by the App to simulate how the website would look like when we have a real database
// The methods here could be used as an interface for said database.
// Feel free to add to this if needed.

export function getProducts() {
  return [
    {
      id: 7,
      section: "Bröd",
      name: "Bröd hårt",
      url:
        "https://bakeassetsprod.blob.core.windows.net/editorial/2016/01/Knadfritt-surdegsbrod.jpg",
    },
    {
      id: 8,
      section: "Bröd",
      name: "Bröd mjukt",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Knaeckebroed.jpg",
    },
    {
      id: 9,
      section: "Mejeri",
      name: "Påläggsost",
      url:
        "https://cdn.natmat.se/content/shopimages/large/54256-200063000000001735.jpg",
    },
    {
      id: 10,
      section: "Frukt och grönt",
      name: "Apelsiner",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Spinach_produce-1.jpg",
    },
    {
      id: 11,
      section: "Kött",
      name: "Kött fryst",
      url:
        "https://vignette.wikia.nocookie.net/bacon/images/3/33/Buy_pork_streaky_bacon_from_online_butcher.jpg/revision/latest/scale-to-width-down/340?cb=20110507120600",
    },
    {
      id: 12,
      section: "Fryst",
      name: "Potatis fryst",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Peas_in_pods_-_Studio.jpg",
    },
    {
      id: 13,
      section: "Frukt och grönt",
      name: "Äpple",
      url:
        "https://d2rfo6yapuixuu.cloudfront.net/h7a/hdd/8985445564446/07311042016953.jpg_1507668936582_master_axfood_400",
    },
    {
      id: 14,
      section: "Mejeri",
      name: "Ägg",
      url:
        "https://www.valio.se/sites/default/files/styles/list_small/public/field/image/product/mjolk_latt_eko_1.png?itok=JMxNE1NA",
    },
    {
      id: 15,
      section: "Fryst",
      name: "Bär fryst",
      url:
        "https://assets.icanet.se/t_product_large_v1,f_auto/7318690118053.jpg",
    },
    {
      id: 16,
      section: "Kött",
      name: "Gris",
      url:
        "https://melins.se/wp-content/uploads/2018/01/skinka-skivad-20181102-097A4515.jpg",
    },
  ];
}

export function getOrders() {
  return JSON.parse(localStorage.getItem("orderList"));
}

export function getOrder(i) {
  return getOrders().props.orders[i];
}

export function getCustomer() {
  return { name: "Börje", mail: "börje@mail.com", telefon: "031" };
}

export function getCustomer2() {
  return { name: "Ingjerd", mail: "Ingjerd@mail.com", telefon: "032" };
}

// section = avdelning
export function getSections() {
  return ["Mejeri", "Frukt och grönt", "Fryst", "Bröd", "Kött"];
}

export function getProductGroups() {
  return [
    "Gris",
    "Potatis fryst",
    "Apelsiner",
    "Äpple",
    "Bröd hårt",
    "Bär fryst",
    "Ägg",
    "Kött fryst",
    "Påläggsost",
    "Bröd mjukt",
  ];
}
//Innan du frågar, ja de finns två "Äpple"

// A collection of hardcoded data to be used by the App to simulate how the website would look like when we have a real database
// The methods here could be used as an interface for said database.
// Feel free to add to this if needed.

export function getProducts() {
  return [
    // { id: 0, section: "", name: "Ris", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Brun_ris.jpg/1280px-Brun_ris.jpg" },
    // { id: 1, section: "", name: "Yoghurt", url: "https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg" },
    // { id: 2, section: "", name: "Nocco", url: "https://www.tingstad.com/fixed/images/Main/1570702879/21366260.png" },
    // { id: 3, section: "", name: "Bärs", url: "http://1.bp.blogspot.com/-3xy02lE8HnM/UY0z7NvGpVI/AAAAAAAAGqw/mTmitY-MF2o/s1600/bild-2.JPG" },
    // { id: 4, section: "", name: "Kaviar", url: "https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg" },
    // { id: 5, section: "", name: "Vodka", url: "https://upload.wikimedia.org/wikipedia/commons/6/65/Absolut_vodka.jpg" },
    // { id: 6, section: "", name: "Mjöl", url: "https://www.bohuslaningen.se/image/policy:1.6591695:1529070430/Aklh7j2p4Dpk1OWXu8tvW-h2ZWg.jpg?f=Regular&w=960&$p$f$w=7e0687f" },
    {
      id: 7,
      section: "Bröd",
      name: "Surdegsbröd",
      url:
        "https://bakeassetsprod.blob.core.windows.net/editorial/2016/01/Knadfritt-surdegsbrod.jpg",
    },
    {
      id: 8,
      section: "Bröd",
      name: "Knäckebröd",
      url:
        "https://lh3.googleusercontent.com/proxy/zbPCsbufxGnP6z8Qd0om4IVYnpGz1sVdnKcX65-CXZPQBLiaQwQANsSiN0cdw7E2OvzvaNCobyDihOPBnUTkfgTRQqxvtuY5Zvcx9YOghVuKCji3KyELrmE3wL2sZM2YAkY8InD_sQ",
    },
    {
      id: 9,
      section: "Mejeri",
      name: "Västerbottenost",
      url:
        "https://cdn.natmat.se/content/shopimages/large/54256-200063000000001735.jpg",
    },
    {
      id: 10,
      section: "Frukt och grönt",
      name: "Spenat",
      url:
        "https://lh3.googleusercontent.com/proxy/n9amMQQyMOtSRInmKChYWQbotkaiTYxSf8A34h7ig8FZgR79NTV8fTyqQLV-Tp0E4ZVukUXayWGVE1zqK6XlIIkv5_LwkLZovhxDchZ2jZr7TGcW2OAliQvX4M7yogY27UT8UkBs0EY",
    },
    {
      id: 11,
      section: "Kött",
      name: "Bacon",
      url:
        "https://vignette.wikia.nocookie.net/bacon/images/3/33/Buy_pork_streaky_bacon_from_online_butcher.jpg/revision/latest/scale-to-width-down/340?cb=20110507120600",
    },
    {
      id: 12,
      section: "Fryst",
      name: "Ärtor",
      url:
        "https://lh3.googleusercontent.com/proxy/PUFaBZezeHPjFxxWv9-1d28gavdOLm3t1ubJBWZMz-uKb2HDzgjnZXwI-88xbdGXmRXSFb29v1W2ystkCNUViK9mI4Mx60vnPpSnOwg4uAAp0vO2XjNliXr3NpYHSuHBkjg",
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
      name: "Laktosfri mjölk",
      url:
        "https://www.valio.se/sites/default/files/styles/list_small/public/field/image/product/mjolk_latt_eko_1.png?itok=JMxNE1NA",
    },
    {
      id: 15,
      section: "Fryst",
      name: "Fryst kyckling",
      url:
        "https://assets.icanet.se/t_product_large_v1,f_auto/7318690118053.jpg",
    },
    {
      id: 16,
      section: "Kött",
      name: "Skinka",
      url:
        "https://melins.se/wp-content/uploads/2018/01/skinka-skivad-20181102-097A4515.jpg",
    },
  ];
}

export function getOrders() {
  return [
    { id: 0, order: { customer: getCustomer(), products: getProducts() } },
    { id: 1, order: { customer: getCustomer2(), products: getProducts() } },
  ];
}

export function getOrder(i) {
  return getOrders()[i];
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

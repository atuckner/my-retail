const data = require('../fixtures/item-data.json');

export default {
  title: data.CatalogEntryView[0].title,
  primaryImageSrc: data.CatalogEntryView[0].Images[0].PrimaryImage[0].image,
  price: data.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue,
  purchasingChannelCode: data.CatalogEntryView[0].purchasingChannelCode
}

var data = {
  document : {
    numero: 1234,
    date: '01/01/1995',
    client: "2ALPE",
    reference: 5678,
    adress: "6th Ave"
  },
  client: {
    phone: "0123456789",
    cellphone: "0612345789",
    interlocutor: "Mr. Smith",
    email: "DUPONT@contact.fr",
    commercialContact: "Mr. Smith"
  },
  ligne : [
    {
      code:'1206008034',
      designation:'LASER PRINTER (REF)',
      quantity:'1.000',
      unity:'U',
      publicPrice:'',
      R:'',
      RC:'',
      netUnitPrice:'353.31',
      totalExclTaxes:'353.31',
      T:'1',
      type: "normal"
    },
    {
      code:'1206008034',
      designation:'WOODEN DESK ',
      quantity:'1.000',
      unity:'U',
      publicPrice:'',
      R:'',
      RC:'',
      netUnitPrice:'256.99',
      totalExclTaxes:'256.99',
      T:'1',
      type: "normal"
    },
    {
      code:'1234',
      designation:'COMPUTER',
      quantity:'1.000',
      unity:'U',
      publicPrice:'',
      R:'',
      RC:'',
      netUnitPrice:'1000.00',
      totalExclTaxes:'1000.00',
      T:'1',
      type: "normal"
    },
    {
      code:'12341',
      designation:'COMPUTER TOWER',
      quantity:'1.000',
      unity:'U',
      T:'1',
      type: "nomenclature"
    },
    {
      code:'12342',
      designation:'SCREEN',
      quantity:'1.000',
      unity:'U',
      T:'1',
      type: "nomenclature"
    },
    {
      comment: 'Deferred delivery for the rest of the invoice',
      type: "commentaire"
    },
    {
      code:'1206008034',
      designation:'OFFICE CHAIRS',
      quantity:'2.000',
      unity:'U',
      publicPrice:'',
      R:'',
      RC:'',
      netUnitPrice:'160.99',
      totalExclTaxes:'160.99',
      T:'1',
      type: "normal"
    }
  ],
  info : {
    week: "12",
    weight: "5kg",
    postage: "advanced port",
    payment: "Transfer 30 days from the end of the month"
  },
  vat: [
    {
      index: "1",
      rate: "10",
      baseVAT: "100",
      amountVAT: "10",
      billTotalET: "100",
      billTotalVAT: "15.5",
      billTotalNet: "115.5",
      type: "normal"
    },
    {
      index: "2",
      rate: "5.5",
      baseVAT: "100.00",
      amountVAT: "5.5",
      type: "normal"
    }
  ],
  agency: "N.Y."
};

module.exports = data;

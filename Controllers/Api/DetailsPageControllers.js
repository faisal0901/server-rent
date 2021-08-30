const {
  Cars,
  CarsImage,
  CarsFeature,
  Address,
  Country,
  City,
  Rating,
  Users,
} = require("../../models");
module.exports = {
  detailPage: async (req, res) => {
    try {
      const sqlOption = {
        where: {
          id: req.params.id,
        },
        attributes: [
          "id",
          "carName",
          "carRealiseDate",
          "carEngine",
          "carGas",
          "carHoursePower",
          "price",
        ],
        include: [
          {
            model: CarsImage,
          },
          {
            model: CarsFeature,
          },
          {
            model: Address,

            include: [
              {
                model: City,
                include: [Country],
              },
            ],
          },
        ],
      };

      const cars = await Cars.findAll(sqlOption);
      const mapped = [];

      cars.map(async (v, i) => {
        mapped.push({
          id: v.id,
          carName: v.carName,
          carRealiseDate: v.carRealiseDate,
          carEngine: v.carEngine,
          carGas: v.carGas,
          carHoursePower: v.carHoursePower,
          price: v.price,
          images: v.CarsImages,
          feature: v.CarsFeatures,
          address: {
            carCity: v.Addresses[0].City.name,
            carCountry: v.Addresses[0].City.Country.name,
            street_name: v.Addresses[0].street_name,
            zipcode: v.Addresses[0].zipcode,
            phone_number: v.Addresses[0].phone_number,
            mobile_number: v?.Addresses?.[0].mobile_number ?? null,
            longtitude: v.Addresses[0].longtitude,
            latitude: v.Addresses[0].latitude,
            note: v.Addresses[0].note,
          },
        });
      });
      let rating = await Rating.findAll({
        where: {
          car_id: req.params.id,
        },
        include: [
          { model: Users, attributes: ["name", "avatar", "profession"] },
        ],
      });
      return res.json({ cars: mapped, rating });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};

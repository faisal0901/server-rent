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
  homePage: async (req, res) => {
    try {
      const car_ids = req.query.car_id || [];

      const sqlOption = {
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
            attributes: ["city_id"],
            include: [
              {
                model: City,
                include: [Country],
              },
            ],
          },
        ],
      };
      if (car_ids.length) {
        sqlOption.where = {
          id: car_ids,
        };
      }
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
          carCity: v.Addresses[0].City.name,
          carCountry: v.Addresses[0].City.Country.name,
        });
      });
      for (let i = 0; i < mapped.length; i++) {
        let rating = await Rating.findAll({
          where: {
            car_id: mapped[i].id,
          },
          include: Users,
        });

        if (rating === []) {
          mapped[i].rating = undefined;
        } else {
          let arr = [];
          for (let j = 0; j < rating.length; j++) {
            arr.push(rating[j].rating);
          }
          // sum arr
          let sumArr = arr.reduce((acc, current) => {
            return acc + current;
          }, 0);
          mapped[i].rating = sumArr / arr.length;
        }
      }
      return res.json({ cars: mapped });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};

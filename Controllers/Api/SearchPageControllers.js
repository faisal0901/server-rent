const {
  Cars,
  CarsImage,
  CarsFeature,
  Address,
  Country,
  City,
} = require("../../models");
module.exports = {
  searchPage: async (req, res) => {
    const dataPerpage = 3;
    const carsData = await Cars.findAll();
    const activePage = +req.query.page || 1;
    const dataOffset = dataPerpage * activePage - dataPerpage;
    const totalData = carsData.length;
    const totalPage = Math.ceil(totalData / dataPerpage);

    try {
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
            where: {
              city_id: req.params.id,
            },
            include: [
              {
                model: City,
                include: [Country],
              },
            ],
          },
        ],
      };
      if (activePage >= 1) {
        sqlOption.limit = dataPerpage;
        sqlOption.offset = dataOffset;
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
          address: {
            carCity: v.Addresses[0].City.name,
            carCountry: v.Addresses[0].City.Country.name,
            street_name: v.Addresses[0].street_name,
            zipcode: v.Addresses[0].zipcode,
            phone_number: v.Addresses[0].phone_number,
            mobile_number: v.Addresses[0].mobile_number,
            longtitude: v.Addresses[0].longtitude,
            latitude: v.Addresses[0].latitude,
            note: v.Addresses[0].note,
          },
        });
      });

      return res.json({
        cars: mapped,
        totalPage,
        activePage,
        nextPage: activePage >= totalPage ? null : activePage + 1,
        prevPage: activePage === 1 ? null : activePage - 1,
      });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};

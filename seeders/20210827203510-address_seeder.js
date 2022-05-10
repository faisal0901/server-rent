"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "address",
      [
        {
          street_name: "Jalan Radar Auri",
          city_id:1,
          zipcode: 16452,
          phone_number: "08123819491",
          mobile_number: "08123819491",
          longtitude: 106.875252,
          latitude: -6.370749,
          note: "front of masjid",
          cars_id: 3,
        },
        {
          street_name: "Jalan margonda raya no 102",
          city_id:2,
          zipcode: 16452,
          phone_number: "0812931923",
          mobile_number: "021912994",
          longtitude: 106.832436,
          latitude: -6.37411,
          note: "Front Mall Margocity",
          cars_id: 4,
        },
        {
          street_name: "Jalan Raya Bogor KM21",
          city_id:3,
          zipcode: 16951,
          phone_number: "08123132121",
          mobile_number: "02148834828",
          longtitude: 106.856361,
          latitude: -6.416706,
          note: null,
          cars_id: 5,
        },
        {
          street_name: "Jalan Stm Mandiri Depok\r\n",
          city_id:2,
          zipcode: 16431,
          phone_number: "088218374",
          mobile_number: "088218374",
          longtitude: 106.829971,
          latitude: -6.388951,
          note: null,
          cars_id: 6,
        },
        {
          street_name: "jalan swadaya 2 no 102 ",
          city_id:2,
          zipcode: 16452,
          phone_number: "0812399221",
          mobile_number: "081231321",
          longtitude: 106.87942299652356,
          latitude: -6.367216641127404,
          note: null,
          cars_id: 7,
        },
        {
          street_name: "Jalan tipar tengah no 41",
          city_id:2,
          zipcode: 16452,
          phone_number: "088218374",
          mobile_number: "088218374",
          longtitude: 106.87274496665627,
          latitude: -6.368744064269678,
          note: null,
          cars_id: 8,
        },
        {
          street_name: "Jalan Griya Cimanggis",
          city_id:2,
          zipcode: 16452,
          phone_number: "081928212",
          mobile_number: "08912842",
          longtitude: 106.86924874360342,
          latitude: -6.360954591514247,
          note: "permata puri 3",
          cars_id: 9,
        },
        {
          street_name: "Jalan abdurahman",
          city_id:1,
          zipcode: 13720,
          phone_number: "081928212123",
          mobile_number: "0891284212",
          longtitude: 106.88408425419506,
          latitude: -6.363897101918306,
          note: null,
          cars_id: 3,
        },
        {
          street_name: "Setu Cipayung",
         city_id:1,
          zipcode: 13720,
          phone_number: "081983910381",
          mobile_number: "089516543215",
          longtitude: 106.9013634808237,
          latitude: -6.328565614601164,
          note: null,
          cars_id: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('address', null, {});
     */
  },
};

// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3' //forgot to cars-dealer
    },
    useNullAsDefault:true,
    migrations:{
      directory: "../data/migrations"
    },
    seeds:{
      directory: "../data/seeds"
    }
  },

  staging: {
   
  },

  production: {
   
  }

};

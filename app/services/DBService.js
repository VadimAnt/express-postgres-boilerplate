let connection = null;

module.exports = {
  connect(config) {
    
    return connection;
  },

  getConnection() {
    if (connection) {
      return connection;
    }
    return false;
  },

  model(name, cls, schema) {
    try {
      
      return connection.model(name, initSchema);
    } catch (error) {
      throw error;
    }
  },
};

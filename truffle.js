module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
      
        ganache: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*"
        },
        
        develop: { 
          host: "127.0.0.1", 
          port: 7545, 
          network_id: '*' 
        },

        chainskills: {
          host: "127.0.0.1", 
          port: 8545, 
          network_id: '4224',
          gas: 4700000
        }
      }
  
  };
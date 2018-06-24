console.log(web3); // {eth: .., shh: ...} // it's here!


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  web3.setProvider(new web3.providers.HttpProvider('http://host.url', 0, BasicAuthUsername, BasicAuthPassword));
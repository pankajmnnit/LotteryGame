const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider(
	 'disorder siren pink couch position wealth current disagree dress deny net lucky',
	 'https://rinkeby.infura.io/e74be1eb922c45c1adf37684bc961620'
	 );
const web3 = new Web3(provider);

//asysnc can be used inside function
const deploy=async()=>{
	const accounts=await web3.eth.getAccounts();

   console.log('attempting to deploy from acct',accounts[0]);

  const result= await new web3.eth.Contract(JSON.parse(interface)).
   deploy({data:bytecode}).
   send({gas:'1000000',from:accounts[0]});
   console.log(interface);

   console.log('Contract deployed to',result.options.address);
};
deploy();
 

import web3 from './web3';

const address = '0x98f0a12c642a7185b11762b27df17984cdb951a0';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_itemName",
				"type": "string"
			},
			{
				"name": "_count",
				"type": "uint32"
			},
			{
				"name": "_receiver",
				"type": "address"
			}
		],
		"name": "_sendItem",
		"outputs": [
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "sender",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_count",
				"type": "uint32"
			},
			{
				"name": "_code",
				"type": "uint32"
			}
		],
		"name": "_additem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_code",
				"type": "uint32"
			}
		],
		"name": "_viewItem",
		"outputs": [
			{
				"name": "itemcount",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint32"
			}
		],
		"name": "itemToOwner",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "count",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			}
		],
		"name": "_sendMoney",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_count",
				"type": "uint32"
			},
			{
				"name": "_code",
				"type": "uint32"
			},
			{
				"name": "cost",
				"type": "uint32"
			}
		],
		"name": "_addnewitem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint32"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			}
		],
		"name": "Deposit",
		"type": "event"
	}
];

export  {abi,address};

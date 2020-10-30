pragma solidity ^0.4.25;

contract factory {
     event Deposit(
        address indexed _from,
        uint32 _value,
        address indexed _to
    );
    address public manager;
    struct Item {
        string name; //Name of the item example wheat
        uint32 count; // Kgs of a particular item
    }

    mapping (address => mapping(uint32=>Item)) public itemToOwner;
    mapping(string => uint32) itemnameToCode;
    mapping(uint32 => uint32) itemcodeToPrice;

   constructor () public payable  {
        manager = msg.sender;
    }
    //Add a new item to the farmer's account with quantity
    function _addnewitem(string _name, uint32 _count, uint32 _code, uint32 cost) public {
        itemnameToCode[_name] = _code;
        itemcodeToPrice[_code] = cost;
        itemToOwner[msg.sender][_code]= Item(_name,_count);
    }
    //Modify the amount or quantity of an item
    function _additem(uint32 _count, uint32 _code) public{
        itemToOwner[msg.sender][_code].count += _count;
    }

    //Transfer items to local government center
    //Issues with conversion factor
    function  _sendItem  (string _itemName,uint32 _count, address _receiver) public returns (uint price, address sender) {
        uint32 code = itemnameToCode[_itemName];
        itemToOwner[msg.sender][code].count-=_count;
        itemToOwner[_receiver][code].count+=_count;
        emit Deposit(msg.sender,itemcodeToPrice[code]*_count,_receiver);
        return (itemcodeToPrice[code]*_count, msg.sender);
    }
    function _viewItem(uint32 _code) public view returns(uint32 itemcount){
        return(itemToOwner[msg.sender][_code].count);
    }
    function _sendMoney(address sender) public payable {
        sender.transfer(msg.value);
    }
}

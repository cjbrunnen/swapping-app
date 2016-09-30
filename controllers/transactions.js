module.exports = {
  create:     transactionsCreate,
  swishback:  transactionsSwishback,
  approve:    transactionsApprove,
  reject:     transactionsReject,
  cancel:     transactionsCancel
};

const Transaction = require('../models/transaction');

function transactionsCreate(req, res){
  const transaction = new Transaction(req.body);
}

function transactionsSwishback(){

}

function transactionsApprove(){

}

function transactionsReject(){

}

function transactionsCancel(){

}

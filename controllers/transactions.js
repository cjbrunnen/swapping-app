module.exports = {
  create:     transactionsCreate,
  swishback:  transactionsSwishback,
  approve:    transactionsApprove,
  reject:     transactionsReject,
  cancel:     transactionsCancel
};

const Transaction = require('../models/transaction');

function transactionsCreate(req, res){
  const transaction = new Transaction(req.body.transaction);
  transaction.save((err, transaction) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(201).json({ transaction });
  });
}

function transactionsSwishback(req, res){
  Transaction.findByIdAndUpdate(req.params.id, req.body.transaction, { new: true }, (err, transaction) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (!transaction) return res.status(404).json({ message: "Swish not found" });
    return res.status(200).json({ transaction });
  });
}

function transactionsApprove(){

}

function transactionsReject(){

}

function transactionsCancel(){

}

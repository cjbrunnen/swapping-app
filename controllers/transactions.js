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
    if (err) return res.status(500).json({ err });
    if (!transaction) return res.status(404).json({ message: "Swish not found" });
    return res.status(200).json({ transaction });
  });
}

// Change 'status' to 3 and make items no longer visible.
// Find all transactons with initial_item and set 'status' to 4.
function transactionsApprove(){

}

// Change 'status' to 4.
function transactionsReject(){
  Transaction.findByIdAndUpdate(req.params.id, { status: 4 }, (err, transaction) => {
    console.log("working");
    if (err) return res.status(500).json({ err });
    if (!transaction) return res.status(404).json({ message: "Swish not found" });
    return res.status(200).json({ transaction });
  });
}

function transactionsCancel(){

}

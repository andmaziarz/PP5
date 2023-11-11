function Supplier(accountNumber){
    this.accountNumber = accountNumber
    this.bills = []
}

Supplier.prototype = new Customer()
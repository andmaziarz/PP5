"use strict";
class Supplier extends Customer {
    constructor(accountNumber) {
        super(); // Jeśli klasa Customer ma swój konstruktor, konieczne jest wywołanie super()
        this.accountNumber = accountNumber;
        this.bills = [];
    }
}

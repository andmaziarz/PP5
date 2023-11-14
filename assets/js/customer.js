"use strict";
class Customer {
    constructor() {
        this.nip = 0;
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.zipCode = 0;
        this.comments = "";
        this.industry = "";
        this.active = false;
        this.name = "";
    }
    getAddress() {
        return `${this.city} ${this.street} ${this.houseNumber} ${this.zipCode}`;
    }
}

"use strict";
class Customer {
    constructor() {
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.zipCode = "";
        this.comments = "";
        this.industry = "";
        this.active = false;
        this.name = "";
    }
    getAddress() {
        return `${this.city} ${this.street} ${this.houseNumber} ${this.zipCode}`;
    }
}

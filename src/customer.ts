class Customer {
  nip: string = "";
  city: string = "";
  street: string = "";
  houseNumber: string = "";
  zipCode: string = "";
  comments: string = "";
  industry: string = "";
  active: boolean = false;
  name: string = "";

  constructor() {}

  getAddress(): string {
      return `${this.city} ${this.street} ${this.houseNumber} ${this.zipCode}`;
  }
}

class Customer {
  nip: number = 0;
  city: string = "";
  street: string = "";
  houseNumber: string = "";
  zipCode: number = 0;
  comments: string = "";
  industry: string = "";
  active: boolean = false;
  name: string = "";

  constructor() {}

  getAddress(): string {
      return `${this.city} ${this.street} ${this.houseNumber} ${this.zipCode}`;
  }
}

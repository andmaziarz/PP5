class Customer{
  constructor(){}
  nip = 0;
  city = "";
  street = "";
  houseNumber = "";
  zipCode = 0;
  comments = "";
  industry = "";
  active = false;
  name = "";

  getAddress(){
    return this.city+' '+this.street+' '+this.houseNumber+' '+this.zipCode
  }
}
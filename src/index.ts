const customerList: Customer[] = [];

      function save() {
        
        let newCustomer = new Customer()
        newCustomer.name = getElementById("company-name").value
        newCustomer.nip = getElementById("nip").value
        newCustomer.city = getElementById("city").value
        newCustomer.street = getElementById("street").value
        newCustomer.houseNumber = getElementById("house-number").value
        newCustomer.zipCode = getElementById("zipcode").value
        newCustomer.comments = getElementById("comments").value
        newCustomer.industry = getElementById("industry").value
        newCustomer.active = getElementById("active").checked

        customerList.push(newCustomer);

        let ul = getElementById("customer-list");
        ul.innerHTML +=
          `<li class="list-group-item">` + newCustomer.nip+' ('+newCustomer.getAddress() + `)</li>`;
      
        console.log(newCustomer);
        console.log(customerList)
      }

      function submit() {
        let newCustomer = {
          name: "Adam",
          nip: "1234",
          city: "Mrągowo",
          street: "Majowa",
          houseNumber: "8",
          zipCode: "99999",
          comments: "1234567",
          industry: "Mleczarska",
          active: true,
        };
        getElementById("company-name").value = newCustomer.name;
        getElementById("nip").value = newCustomer.nip;
        getElementById("city").value = newCustomer.city;
        getElementById("street").value = newCustomer.street;
        getElementById("house-number").value = newCustomer.houseNumber;
        getElementById("zipcode").value = newCustomer.zipCode;
        getElementById("comments").value = newCustomer.comments;
        getElementById("industry").value = newCustomer.industry;
        getElementById("active").checked = newCustomer.active;
      }

      function showForm() {
        getElementById("client-form").style.display = "block";
        getElementById("client-list").style.display = "none";
      }
      function showList() {
        getElementById("client-form").style.display = "none";
        getElementById("client-list").style.display = "block";
      }

      function getElementById(elementName: string): HTMLInputElement{
        return getElementById(elementName) as HTMLInputElement;
      }
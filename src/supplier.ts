class Supplier extends Customer {
    invoices: Invoice[];
    accountNumber: number;
    bills: any[]; // Tutaj można również użyć bardziej konkretnego typu, np. Bill[] jeśli jest taki typ zdefiniowany

    constructor(
        accountNumber: number
    ) 
    {
        super(); // Jeśli klasa Customer ma swój konstruktor, konieczne jest wywołanie super()
        this.accountNumber = accountNumber;
        this.bills = [];
        this.invoices = [];
    }
}

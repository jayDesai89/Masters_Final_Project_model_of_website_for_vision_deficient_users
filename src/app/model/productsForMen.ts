export class ProductsForMen {
    public menProducts: MenProducts;

    constructor() {
        this.menProducts = new MenProducts;
    }
}

export class MenProducts {
    public availableProducts: AvailableProducts;
    public tshirt: Tshirt;

    constructor() {
        this.availableProducts = new AvailableProducts;
        this.tshirt = new Tshirt;
    }
}

export class AvailableProducts {
    public type: string;
    public id: 0;

    constructor() {
        this.type = '';
        this.id = 0;
    }
}

export class Tshirt {
    public productType: string;
    public id: number;
    public companyName: string;
    public type: string;
    public color: string;
    public availableColor: AvailableColor;
    public availableSize: AvailableSize;
    public price: number;
    public discription: Discription;

    constructor() {
        this.productType = '';
        this.id = 0;
        this.companyName = '';
        this.type = '';
        this.color = '';
        this.availableColor = new AvailableColor;
        this.availableSize = new AvailableSize;
        this.price = 0;
        this.discription = new Discription;
    }
}

export class AvailableColor {
    constructor() { }
}

export class AvailableSize {
    constructor() { }
}

export class Discription {
    constructor() { }
}

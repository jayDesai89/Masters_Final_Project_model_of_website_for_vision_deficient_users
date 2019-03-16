export class Category {
    public categories: Categories;

    constructor() {
        this.categories = new Categories;
    }
}


export class Categories {
    public productCategories: ProductCategories;

    constructor() {
        this.productCategories = new ProductCategories;
    }

}
export class ProductCategories {
    public type: string;
    public id: number;

    constructor() {
        this.type = '';
        this.id = 0;
    }
}

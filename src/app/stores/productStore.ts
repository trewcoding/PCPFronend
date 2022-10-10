import agent from "../api/agent";
import { makeAutoObservable, runInAction } from "mobx"
import { Products } from "../models/products";
import { Data } from "../models/data";

export default class ProductStore {
    productRegistry = new Map<string, Products>();
    productRegistryData = new Map<string, Data>();
    //selectedProduct: Data | undefined = undefined
    loading = false;
    loadingInitial = true;
    brandListTemp = new Array<string>();

    constructor() {
        makeAutoObservable(this)
    }


    get productsArray() {
        return Array.from(this.productRegistry.values())
    }

    get groupedProducts() {
        return Object.entries(
            this.productsArray.reduce((products, product) => {
                const brand = product.brand;
                products[brand] = products[brand] ? [...products[brand], product] : [product];
                return products;
            }, {} as { [key: string]: Products[] })
        )
    }

    get brandsList() {
        return new Set<string>(
            Object.values(this.productsArray.reduce((brandNames, brandName) => {
                const brand = brandName.brand;
                brandNames = this.brandListTemp.push(brand)
                //this.brandList.add(brand);
                return this.brandListTemp
            }, {})
            )
        )

    }

    get groupedCategories() {
        return Object.entries(
            this.productsArray.sort().reduce((products, product) => {
                const productCategory = product.productCategory;
                products[productCategory] = products[productCategory] ? [...products[productCategory], product] : [product];
                return products;
            }, {} as { [key: string]: Products[] })
        )
    }

    private setProducts = (product: Products) => {
        this.productRegistry.set(product.productId, product);
    }

    loadAllProducts = async () => {
        this.loadingInitial = true;
        try {
            const products = await agent.ProductInformation.getAllProducts();
            products.forEach(product => {
                this.setProducts(product);
            })
        } catch (error) {
            console.log(error);
        }
    };

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
}
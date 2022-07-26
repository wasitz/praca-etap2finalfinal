import axios from "axios";

export class ContactService{
    static serverURL = `http://localhost:9000`;

    static getAllProducts() {
        let dataURL = `${this.serverURL}/products`;
        return axios.get(dataURL);

    }

    static getProduct(productId) {
        let dataURL = `${this.serverURL}/products/${productId}`;
        return axios.get(dataURL);

    }

    static createProduct(product){
        let dataURL = `${this.serverURL}/products`;
        return axios.post(dataURL, product);

    }

    static updateProduct(product, productId){
        let dataURL = `${this.serverURL}/products/${productId}`;
        return axios.put(dataURL, product);

    }

    static deleteProduct(productId){
        let dataURL = `${this.serverURL}/products/${productId}`;
        return axios.delete(dataURL);

    }

    static getAllGroups() {
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(product) {
        let groupId = product.groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL);

    }
}
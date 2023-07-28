import { products } from "./products";


export function getData() {
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if (error) {
                reject("no se encontro");
            } else {
                resolve(products);
            }
        }, 1000);
    });
}

export function getDataById(id) {
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if (error) {
                reject("no se encontro");
            } else {
                const product = products.find((item) => item.id === id);
                if (product) {
                    resolve(product);
                } else {
                    reject(`Producto con ID ${id} no encontrado`);
                }
            }
        }, 1000);
    });
}


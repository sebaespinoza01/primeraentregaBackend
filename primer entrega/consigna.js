class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        const codeExists = this.products.some((product) => product.code === code);
        if (codeExists) {
            console.error("El código ya existe. Debe ser único.");
            return;
        }

        const product = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            console.error("Producto no encontrado.");
            return null;
        }
        return product;
    }
}

const productManager = new ProductManager();
productManager.addProduct("Producto 1", "Descripción 1", 19.99, "imagen1.jpg", "P1", 10);
productManager.addProduct("Producto 2", "Descripción 2", 29.99, "imagen2.jpg", "P2", 15);
console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));

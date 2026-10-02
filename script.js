// ÚROVEŇ 1 – Objekt
let product = {
    name: "Laptop",
    price: 1200,
    description: "Výkonný pracovní notebook.",
    printInfo() {
        return `Produkt: ${this.name} – cena: ${this.price} Kč`
    }
}

document.querySelector('#vypis-objektu').innerHTML = product.printInfo()


// ÚROVEŇ 2 – Procházení vlastností
let vypisVlastnosti = document.querySelector('#vypis-vlastnosti')

for (let key in product) {
    if (typeof product[key] !== "function") {
        vypisVlastnosti.innerHTML += `${key}: ${product[key]}\n`
    }
}


// ÚROVEŇ 3 – Třída
class Product {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }

    print() {
        return `Název: ${this.name}\nCena: ${this.price}\nPopis: ${this.description}\n`
    }
}

let p1 = new Product("Asus", 25000, "Kompaktní pracovní notebook.")
let p2 = new Product("Xiaomi", 12000, "Telefon střední třídy.")
let p3 = new Product("Dell", 10000, "Kancelářský OLED monitor.")

let vypisTridy = document.querySelector('#vypis-tridy')

let produkty = [p1, p2, p3]

for (let item of produkty) {
    vypisTridy.innerHTML += item.print() + "\n"
}

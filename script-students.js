// ======================================================================
// ÚROVEŇ 1 – Objekt
// ======================================================================
// TODO 1: Vytvoř objekt s názvem "product", který bude mít vlastnosti:
//         name, price, description.
// Syntaxe: let objekt = { vlastnost: "hodnota" };
// ----------------------------------------------------------------------
let product = {
    // SEM DOPLŇ VLASTNOSTI (name, price, description)
    // TODO: zadej název, cenu a popis produktu
}

// TODO 2: Přidej do objektu metodu "printInfo()", která vrátí text:
//         "Produkt: XYZ – cena: 123 Kč" (použij klíčové slovo "this")
// Syntaxe: printInfo() { return `... ${this.vlastnost} ...`; }


// TODO 3: Zavolej metodu printInfo() a výsledek vypiš do <pre id="vypis-objektu">.
// Syntaxe: document.querySelector('#vypis-objektu').innerHTML = ...


// ======================================================================
// ÚROVEŇ 2 – Procházení vlastností
// ======================================================================
let vypisVlastnosti = document.querySelector('#vypis-vlastnosti')

// TODO 1 & 2: Pomocí cyklu "for...in" projdi všechny vlastnosti objektu "product".
//             Vypiš pouze ty, které NEJSOU funkce (typeof product[key] !== "function").
// Syntaxe: for (let key in product) { if (...) { ... } }


// BONUS:
// - Použij Object.entries(product) a vypiš klíč + hodnotu v jednom řádku.


// ======================================================================
// ÚROVEŇ 3 – Třída a instance
// ======================================================================

// TODO 1: Vytvoř třídu "Product" s konstruktorem a metodu "print()".
// Syntaxe: class JmenoTridy { constructor(param) { this.param = param; } print() { ... } }
class Product {
    constructor(name, price, description) {
        // TODO: přiřaď parametry do this
    }

    print() {
        // TODO: vrať naformátovaný řetězec o produktu
    }
}

// TODO 2: Pomocí "new Product(...)" vytvoř alespoň 3 různé produkty.
// Syntaxe: let p1 = new Product("Nazev", cena, "Popis");


// TODO 3: Vypiš je do <pre id="vypis-tridy"> (můžeš vytvořit pole a projet ho cyklem for...of).
let vypisTridy = document.querySelector('#vypis-tridy')

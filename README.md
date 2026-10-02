# OOP – Továrna na produkty

Tento vzdělávací projekt je interaktivním playgroundem zaměřeným na objektově orientované programování (OOP) v jazyce JavaScript. Studenti se postupně seznámí s vytvářením objektů, prací s klíčovým slovem `this`, procházením vlastností pomocí cyklů a definováním vlastních tříd a instancí.

## Cíl cvičení
Naučit studenty základy objektového modelu v JavaScriptu od prostých literálů objektů až po návrh vlastních tříd (`class`) a instancí (`new`).

## Úrovně obtížnosti

- 🥉 **Úroveň 1: Objekt produktu**
  - Vytvoření jednoduchého objektu s vlastnostmi (`name`, `price`, `description`) a metodou využívající klíčové slovo `this`.
  - Výpis do určeného elementu v DOM (`#vypis-objektu`).
- 🥈 **Úroveň 2: Procházení vlastností**
  - Dynamické procházení vlastností objektu pomocí cyklu `for...in`.
  - Filtrování položek pomocí operátoru `typeof` (vynechání metod).
  - *Bonus:* Využití metody `Object.entries()`.
- 🥇 **Úroveň 3: Třídy a instance**
  - Definice vlastní třídy `Product` s konstruktorem a výpisovou metodou.
  - Vytvoření instancí pomocí klíčového slova `new`.
  - *Super Bonus:* Uložení instancí do pole a jejich hromadný výpis pomocí `for...of`.

## 🧩 Struktura projektu

```text
├── index.html              # Vstupní stránka s instrukcemi a výpisy
├── script.js               # Plně funkční vzorové řešení (pro lektora)
├── script-students.js      # Studentská verze s TODO úkoly a nápovědou
├── style.css               # Čisté a responzivní styly
├── README.md               # Kompletní metodická příručka
└── LICENSE                 # MIT License
```

## 🚀 Jak používat projekt
1. Otevři soubor [`index.html`](index.html:1) v prohlížeči nebo přes Live Server.
2. Prostuduj si zadání v hlavičce HTML nebo v komentářích.
3. Doplň chybějící kód do souboru [`script-students.js`](script-students.js:1).

## 🎯 Co se uživatel naučí
- Definovat objekty a přistupovat k jejich vlastnostem.
- Používat kontext `this` uvnitř metod objektu.
- Procházet objekty pomocí cyklu `for...in` a pracovat s typy dat (`typeof`).
- Vytvářet a instanciovat vlastní třídy (`class`) pomocí konstruktoru a klíčového slova `new`.

## ⚙️ Použité technologie
- **HTML5** & **CSS3** (Responzivní rozvržení)
- **JavaScript (ES6+)** – Objekty, metody, `this`, `for...in`, `class`, `constructor`, pole.

## 📜 Licence
Tento projekt je šířen pod licencí MIT. Podrobnosti naleznete v souboru [LICENSE](LICENSE).

---
✉️ **Autor**: [VlkSamotar.cz](https://vlksamotar.cz) | Informatika | Trading | Elektrotechnika

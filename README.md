# Unlimitech Shop

Projekt rekrutacyjny -- frontend layout sklepu internetowego.

## 📂 Zawartość repozytorium

Repozytorium zawiera: - `index.html` -- główny plik projektu - `/less`
-- style projektu w LESS - `/css` -- wygenerowane style CSS - `/js` --
skrypty JavaScript - `/img` -- pliki graficzne - `README.md` --
instrukcja uruchomienia projektu

## 🚀 Uruchomienie projektu

1.  Sklonuj repozytorium:

    ```bash
    git clone https://github.com/GiorgiB04/unlimitech-shop.git
    cd unlimitech-shop
    ```

2.  Zainstaluj zależności:

    ```bash
    npm install
    ```

3.  Zbuduj CSS z LESS:

    ```bash
    npm run build:css
    ```

4.  Uruchom tryb „watch" (automatyczna kompilacja LESS → CSS):

    ```bash
    npm run watch:css
    ```

5.  Otwórz `index.html` w przeglądarce.

## 🌍 Deployment

Projekt jest dostępny online pod adresem:  
👉 [https://unlimitech-shop.vercel.app](https://unlimitech-shop.vercel.app)

## 📝 Struktura commitów (Conventional Commits)

W projekcie używamy [Conventional
Commits](https://www.conventionalcommits.org/):

- `feat:` -- nowa funkcjonalność\
- `fix:` -- poprawki błędów\
- `style:` -- zmiany w stylach (CSS/LESS)\
- `refactor:` -- zmiany w kodzie bez nowych funkcji

### Przykłady commitów:

    feat: add header layout
    fix: correct spacing in slider
    style: update button hover state
    refactor: simplify jQuery logic

---

✉️ Autor: **GiorgiB04**

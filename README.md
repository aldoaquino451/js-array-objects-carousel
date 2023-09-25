Carosello Array di Oggetti
===

## Esercizio

**Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando gli oggetti.
Alla slide aggiungere un titolo e un testo

**Bonus 1:**
Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.


**Bonus 2:**
E se volessi un bottone per invertire la “direzione” del carosello?

**Bonus 3:**
Al click della thumb cambia l’immagine attiva


## JavaScript

1. Creo con template literale un unico container dove inserire tutti i tag come nell'html, e trammite ciclo forEach:
   - prendo il valore della chiave immagine e lo inserisco nel source dell'immagine (con classe hide)
   - il valore di testo e titolo lo inserisco all'interno del div text (con classe hide)

2. il primo div container di default sarà visibile

3. al click il container corrente che contiene immgine e testo non sarù visibile e renderemo visibile quello succ/prec

Al click della thumb cambia l’immagine attiva

1. funzione con ciclo foreach in cui mettiamo 
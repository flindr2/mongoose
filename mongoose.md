---
marp: true
theme: default
class: invert
paginate: true
---

# Mongoose

## Backendutveckling del 2

---

### Förra föreläsningen

- Introduktion MongoDB
- Övningar Mongo Shell

---

# Dagens agenda

- Mongoose
  - Vad är det?
  - Connection
  - Schema
  - Model
  - Queries
- Komma igång med Workbook - fortsättning imorgon under workshopdagen

---

# Mongoose

- **npm-paket**
- ODM – Object document mapping
- Ansluter mot MongoDB
- Mappar Document i databasen mot Object i JavaScript / TypeScript
- Mer info: [https://mongoosejs.com/](https://mongoosejs.com/)

```npm install mongoose```

---

# Mongoose - Connection

- För att ansluta mot MongoDB krävs en anslutning
- Connection string är en URI som innehåller all information om databasen man ska ansluta till, t.ex:
  - Host (i exemplet localhost)
  - Port (i exemplet 27017)
  - Databasnamn (i exemplet zoo)

---

# Mongoose - Schema

- I kod definieras ett **schema**
- Varje schema mappas mot ett dokument i MongoDB
- Eftersom vi använder TypeScript måste vi också skapa ett interface som motsvarar schemat

---

# Mongoose - Model

- För att använda ett schema måste vi skapa en **model** utifrån det
- Även här refererar vi till **interfacet** vi har skapat

---

# Mongoose - Queries

- När vi skapat ett schema och en model kan vi använda **queries** för att:
  - Hämta
  - Lägga till
  - Uppdatera
  - Ta bort

---

# Mongoose - Queries

- I Mongoose-dokumentationen finns exempel på alla queries:
  - [https://mongoosejs.com/docs/queries.html](https://mongoosejs.com/docs/queries.html)

---

# Demo

---

# Workbook

- Nu är det dags för er att skapa ett REST-api med Mongoose
- Följ instruktionerna som ligger i readme i Workbook-repot:
  - [https://github.com/jonatanhallenberg/mongoose-workbook](https://github.com/jonatanhallenberg/mongoose-workbook)

---

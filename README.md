# U05-beforeAW-WH40k-API

## Assignment:

In this task you will develop and deploy a REST API with Node, Express and MongoDB. You will use your knowledge of JavaScript, Document Databases, Git and GitHub to build and version control the project. Your goal is to create an API with CRUD operations, within a self-selected theme that makes the project more fun and also document your endpoints in a professional way in a README file (with examples of cURL calls both locally and against your deployed server).

And this is only focus on backend.

### Extra assignment:

#### Typescript:

There is no requirement to use more than traditional JavaScript in the U05, but it is actually of great advantage to write the project in TypeScript. In this work, you must submit a short PDF that goes through what you have done to create your project in TypeScript. You must bring i.a. what additional files, folders and configurations you have had to create and how you have created them. Otherwise, the U05 needs to be made in TypeScript to be approved for this task.

#### Extra functions:

The requirement for passing in the U05an includes a fairly simple API. In order to show your forefoot and take the opportunity to learn more, you may have the opportunity to add one or more extra functions (e.g., search, filtering, or sorting) in this voluntary work.


## Warhammer 40k API

### First, what is Warhammer 40k?

Warhammer 40,000 (Warhammer 40K) is a tabletop miniature wargame set in a dark, dystopian sci-fi universe where various factions battle for dominance across the galaxy. Players assemble, paint, and command armies of intricately detailed miniatures representing factions like the Imperium of Man, Chaos, Eldar, Orks, and more. The game combines strategy, dice-based mechanics, and deep lore, emphasizing tactical warfare and narrative-driven battles. Its grimdark setting, where there is "only war," is known for its rich storytelling, massive battles, and an ever-evolving universe shaped by novels, codexes, and community engagement.

### The API

This API will provide a comprehensive database of all Warhammer 40K figures, offering detailed information on each model, including faction, unit type, stats, and abilities. Users can retrieve data to assist with army building, game strategy, and collection management. The API will support filtering by faction, unit role, and keywords, ensuring quick and easy access to relevant figures. Whether for gameplay reference or lore exploration, this API will be an essential tool for Warhammer 40K enthusiasts.


## Getting Started

- Clone the project from GitHub
  ```
    git clone https://github.com/beforeAW/U05-beforeaw-WH40k-API.git
- Install all required packages
  ```
    npm run i
- Copy the .env file from .env.example
  ```
    cp .env.example .env
- Run nodemon
  ```
    npm run dev
## RESTful API Design

### Object Modeling

Some examples of object modeling:

### **Unit**
```typescript
export interface Unit extends Document {
    name: string;
    figure: Types.ObjectId[] | Figure[];
    faction: Types.ObjectId | Faction;
    subfaction: Types.ObjectId | Subfaction;
    abilities: Types.ObjectId[] | Ability[];
    keywords: Types.ObjectId[] | Keyword[];
}
```

### **Ability**
```typescript
export interface Ability extends Document {
    name: string;
    description: string;
}
```
---

### Resource URIs

### **Factions**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| All factions | `/factions` | Get all factions |
| Specific faction | `/factions/{id}` | Get a specific faction |
| Create faction | `/factions` | Create a new faction |
| Create factions in bulk | `/factions/bulk` | Create multiple factions at once |
| Update faction | `/factions/{id}` | Update an existing faction |
| Delete faction | `/factions/{id}` | Delete a faction |

### **Subfactions**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| All subfactions | `/subfactions` | Get all subfactions |
| Specific subfaction | `/subfactions/{id}` | Get a specific subfaction |
| Create subfaction | `/subfactions` | Create a new subfaction |
| Create subfactions in bulk | `/subfactions/bulk` | Create multiple subfactions at once |
| Update subfaction | `/subfactions/{id}` | Update an existing subfaction |
| Delete subfaction | `/subfactions/{id}` | Delete a subfaction |

### **Units**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| All units | `/units` | Get all units |
| Specific unit | `/units/{id}` | Get a specific unit |
| Create unit | `/units` | Create a new unit |
| Create units in bulk | `/units/bulk` | Create multiple units at once |
| Update unit | `/units/{id}` | Update an existing unit |
| Delete unit | `/units/{id}` | Delete a unit |
| Search units | `/units/search` | Search for units by criteria |

### **Weapons**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| All weapons | `/weapons` | Get all weapons |
| Specific weapon | `/weapons/{id}` | Get a specific weapon |
| Create weapon | `/weapons` | Create a new weapon |
| Create weapons in bulk | `/weapons/bulk` | Create multiple weapons at once |
| Update weapon | `/weapons/{id}` | Update an existing weapon |
| Delete weapon | `/weapons/{id}` | Delete a weapon |

### **Weapon Profiles**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| All weapon profiles | `/weapon-profiles` | Get all weapon profiles |
| Specific weapon profile | `/weapon-profiles/{id}` | Get a specific weapon profile |
| Create weapon profile | `/weapon-profiles` | Create a new weapon profile |
| Create weapon profiles in bulk | `/weapon-profiles/bulk` | Create multiple weapon profiles at once |
| Update weapon profile | `/weapon-profiles/{id}` | Update an existing weapon profile |
| Delete weapon profile | `/weapon-profiles/{id}` | Delete a weapon profile |

### **Abilities**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| All abilities | `/abilities` | Get all abilities |
| Specific ability | `/abilities/{id}` | Get a specific ability |
| Create ability | `/abilities` | Create a new ability |
| Create abilities in bulk | `/abilities/bulk` | Create multiple abilities at once |
| Update ability | `/abilities/{id}` | Update an existing ability |
| Delete ability | `/abilities/{id}` | Delete an ability |

### **Keywords**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| All keywords | `/keywords` | Get all keywords |
| Specific keyword | `/keywords/{id}` | Get a specific keyword |
| Create keyword | `/keywords` | Create a new keyword |
| Create keywords in bulk | `/keywords/bulk` | Create multiple keywords at once |
| Update keyword | `/keywords/{id}` | Update an existing keyword |
| Delete keyword | `/keywords/{id}` | Delete a keyword |

### **User Management**  
| Resource | URI Format | Description |
|----------|-----------|-------------|
| Register user | `/auth/register` | Register a new user |
| Login user | `/auth/login` | Login a user |
| Get all users (Admin only) | `/users` | Retrieve all users |
| Get paginated users (Admin only) | `/users/paginate` | Retrieve paginated user results |
| Specific user | `/users/{id}` | Get a specific user |
| Update user (Admin only) | `/users/{id}` | Update user information |
| Delete user (Admin only) | `/users/{id}` | Delete a user |

### Resource Representations

Example how you can use json for dummydata

### **Unit**
```json
{
    "name": "Space Marine",
    "figure": ["60d21b4667d0d8992e610c85"],
    "faction": "60d21b4967d0d8992e610c86",
    "subfaction": "60d21b4b67d0d8992e610c87",
    "abilities": ["60d21b4e67d0d8992e610c88"],
    "keywords": ["Infantry", "Core"]
}
```

### **Ability**
```json
{
    "name": "Bolter Discipline",
    "description": "Allows a unit to fire twice if it remains stationary."
}
```

### **User**
```json
{
    "email": "user@example.com",
    "password": "securepassword",
    "username": "warrior42",
}
```

---
### Assigning HTTP Methods

### **Factions**
```http
GET /factions
POST /factions
GET /factions/{id}
PUT /factions/{id}
DELETE /factions/{id}
```

### **Subfactions**
```http
GET /subfactions
POST /subfactions
GET /subfactions/{id}
PUT /subfactions/{id}
DELETE /subfactions/{id}
```

### **Units**
```http
GET /units
POST /units
GET /units/{id}
PUT /units/{id}
DELETE /units/{id}
GET /units?name=value
```

### **Weapons**
```http
GET /weapons
POST /weapons
GET /weapons/{id}
PUT /weapons/{id}
DELETE /weapons/{id}
```

### **Weapon Profiles**
```http
GET /weapon-profiles
POST /weapon-profiles
GET /weapon-profiles/{id}
PUT /weapon-profiles/{id}
DELETE /weapon-profiles/{id}
```

### **Abilities**
```http
GET /abilities
POST /abilities
GET /abilities/{id}
PUT /abilities/{id}
DELETE /abilities/{id}
```

### **Keywords**
```http
GET /keywords
POST /keywords
GET /keywords/{id}
PUT /keywords/{id}
DELETE /keywords/{id}
```

### **User Management**
```http
POST /auth/register
POST /auth/login
GET /users
GET /users/{id}
PUT /users/{id}
DELETE /users/{id}
```

---

## cURL commands

some dummydata cURL commands 

### **Get All Factions**
```sh
curl -X GET http://localhost:3000/api/factions
```

### **Get a Specific Unit**
```sh
curl -X GET http://localhost:3000/api/units/12345
```

### **Create a New Weapon**
```sh
curl -X POST http://localhost:3000/api/weapons \
     -H "Content-Type: application/json" \
     -d '{"name": "Boltgun", "type": "ranged", "damage": "D6"}'
```

### **Update an Ability**
```sh
curl -X PUT http://localhost:3000/api/abilities/6789 \
     -H "Content-Type: application/json" \
     -d '{"name": "Fearless"}'
```

### **Delete a Keyword**
```sh
curl -X DELETE http://localhost:3000/api/keywords/4567
```

### **Search for Units**
```sh
curl -X GET "http://localhost:3000/api/units/search?name=Space Marine"
```

### **Paginate Users**
```sh
curl -X GET "http://localhost:3000/api/users/paginate?page=1&limit=10"
```

---

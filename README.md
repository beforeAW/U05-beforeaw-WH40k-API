# U05-beforeAW-WH40k-API

## Assignment:

In this task you will develop and deploy a REST API with Node, Express and MongoDB. You will use your knowledge of JavaScript, Document Databases, Git and GitHub to build and version control the project. Your goal is to create an API with CRUD operations, within a self-selected theme that makes the project more fun and also document your endpoints in a professional way in a README file (with examples of cURL calls both locally and against your deployed server).

And this is only focus on backend.

### Extra assignment:

#### Typescript:

There is no requirement to use more than traditional JavaScript in the U05, but it is actually of great advantage to write the project in TypeScript. In this work, you must submit a short PDF that goes through what you have done to create your project in TypeScript. You must bring i.a. what additional files, folders and configurations you have had to create and how you have created them. Otherwise, the U05 needs to be made in TypeScript to be approved for this task.

#### Extra functions:

The requirement for passing in the U05an includes a fairly simple API. In order to show your forefoot and take the opportunity to learn extra, in this voluntary work you may have the opportunity to add one or more extra functions (e.g. search, filtering or sorting).


## Warhammer 40k API

### First what is Warhammer 40k?

Warhammer 40,000 (Warhammer 40K) is a tabletop miniature wargame set in a dark, dystopian sci-fi universe where various factions battle for dominance across the galaxy. Players assemble, paint, and command armies of intricately detailed miniatures, representing factions like the Imperium of Man, Chaos, Eldar, Orks, and more. The game combines strategy, dice-based mechanics, and deep lore, emphasizing tactical warfare and narrative-driven battles. Its grimdark setting, where there is "only war," is known for its rich storytelling, massive battles, and an ever-evolving universe shaped by novels, codexes, and community engagement.

### The API

This API will provide a comprehensive database of all Warhammer 40K figures, offering detailed information on each model, including faction, unit type, stats and abilities. Users can retrieve data to assist with army building, game strategy, and collection management. The API will support filtering by faction, unit role, and keywords, ensuring quick and easy access to relevant figures. Whether for gameplay reference or lore exploration, this API will serve as an essential tool for Warhammer 40K enthusiasts.

## RESTful API Design

### Object Modeling

### Resource URIs

<table>
  <tr>
    <th>Resurs</th>
    <th>URI-format</th>
    <th>Description:</th>
  </tr>
  <tr>
    <td>Factions</td>
    <td>/factions</td>
    <td>Get all factions</td>
  </tr>
  <tr>
    <td>Faction</td>
    <td>/factions/{id}</td>
    <td>Get a specific faction</td>
  </tr>
  <tr>
    <td>Subfactions</td>
    <td>/factions/subfactions</td>
    <td>Get all subfactions</td>
  </tr>
  <tr>
    <td>Subfaction</td>
    <td>/factions/subfactions/{id}</td>
    <td>Get a specific subfaction</td>
  </tr>
  <tr>
    <td>Units</td>
    <td>/units</td>
    <td>Get all units</td>
  </tr>
  <tr>
    <td>Unit</td>
    <td>/units/{id}</td>
    <td>Get a specific unit</td>
  </tr>
    <tr>
    <td>Weaponsprofiles</td>
    <td>/weaponsprofiles</td>
    <td>Get all weaponsprofiles</td>
  </tr>
    <tr>
    <td>Weaponsprofile</td>
    <td>/weaponsprofiles/{id}</td>
    <td>Get a specific weaponsprofile</td>
  </tr>
  <tr>
    <td>Meleeweapons</td>
    <td>/meleeweapons</td>
    <td>Get all meleeweapons</td>
  </tr>
  <tr>
    <td>Meleeweapon</td>
    <td>/meleeweapons/{id}</td>
    <td>Get a specific meleeweapon</td>
  </tr>
  <tr>
    <td>Rangedweapons</td>
    <td>/rangedweapons</td>
    <td>Get all rangedweapons</td>
  </tr>
    <tr>
    <td>Rangedweapon</td>
    <td>/rangedweapons/{id}</td>
    <td>Get a specific rangedweapon</td>
  </tr>
    <tr>
    <td>Abilities</td>
    <td>/abilities</td>
    <td>Get all abilities</td>
  </tr>
    <tr>
    <td>Ability</td>
    <td>/abilities/{id}</td>
    <td>Get a specific ability</td>
  </tr>
    <tr>
    <td>Keywords</td>
    <td>/keywords</td>
    <td>Get all keywords</td>
  </tr>
  <tr>
    <td>Keyword</td>
    <td>/keywords/{id}</td>
    <td>Get a specific keyword</td>
  </tr>
</table>

### Resource Representations

### Assigning HTTP Methods

<table>
  <tr>
      <th>Resource</th>
      <th>URI Format</th>
      <th>HTTP Method</th>
      <th>Description</th>
  </tr>
  <tr>
      <td>Factions</td>
      <td>/factions</td>
      <td>GET</td>
      <td>Get all factions</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions</td>
      <td>POST</td>
      <td>Create a new faction</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions/{id}</td>
      <td>GET</td>
      <td>Get a specific faction</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions/{id}</td>
      <td>PUT</td>
      <td>Update an existing faction</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions/{id}</td>
      <td>DELETE</td>
      <td>Delete a faction</td>
  </tr>
  <tr>
      <td>Subfactions</td>
      <td>/factions/subfactions</td>
      <td>GET</td>
      <td>Get all subfactions</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions/subfactions</td>
      <td>POST</td>
      <td>Create a new subfaction</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions/subfactions/{id}</td>
      <td>GET</td>
      <td>Get a specific subfaction</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions/subfactions/{id}</td>
      <td>PUT</td>
      <td>Update an existing subfaction</td>
  </tr>
  <tr>
      <td></td>
      <td>/factions/subfactions/{id}</td>
      <td>DELETE</td>
      <td>Delete a subfaction</td>
  </tr>
  <tr>
      <td>Units</td>
      <td>/units</td>
      <td>GET</td>
      <td>Get all units</td>
  </tr>
  <tr>
      <td></td>
      <td>/units</td>
      <td>POST</td>
      <td>Create a new unit</td>
  </tr>
  <tr>
      <td></td>
      <td>/units/{id}</td>
      <td>GET</td>
      <td>Get a specific unit</td>
  </tr>
  <tr>
      <td></td>
      <td>/units/{id}</td>
      <td>PUT</td>
      <td>Update an existing unit</td>
  </tr>
  <tr>
      <td></td>
      <td>/units/{id}</td>
      <td>DELETE</td>
      <td>Delete a unit</td>
  </tr>
  <tr>
      <td>Weaponsprofiles</td>
      <td>/weaponsprofiles</td>
      <td>GET</td>
      <td>Get all weapons profiles</td>
  </tr>
  <tr>
      <td></td>
      <td>/weaponsprofiles</td>
      <td>POST</td>
      <td>Create a new weapons profile</td>
  </tr>
  <tr>
      <td></td>
      <td>/weaponsprofiles/{id}</td>
      <td>GET</td>
      <td>Get a specific weapons profile</td>
  </tr>
  <tr>
      <td></td>
      <td>/weaponsprofiles/{id}</td>
      <td>PUT</td>
      <td>Update an existing weapons profile</td>
  </tr>
  <tr>
      <td></td>
      <td>/weaponsprofiles/{id}</td>
      <td>DELETE</td>
      <td>Delete a weapons profile</td>
  </tr>
  <tr>
      <td>Meleeweapons</td>
      <td>/meleeweapons</td>
      <td>GET</td>
      <td>Get all melee weapons</td>
  </tr>
  <tr>
      <td></td>
      <td>/meleeweapons</td>
      <td>POST</td>
      <td>Create a new melee weapon</td>
  </tr>
  <tr>
      <td></td>
      <td>/meleeweapons/{id}</td>
      <td>GET</td>
      <td>Get a specific melee weapon</td>
  </tr>
  <tr>
      <td></td>
      <td>/meleeweapons/{id}</td>
      <td>PUT</td>
      <td>Update an existing melee weapon</td>
  </tr>
  <tr>
      <td></td>
      <td>/meleeweapons/{id}</td>
      <td>DELETE</td>
      <td>Delete a melee weapon</td>
  </tr>
  <tr>
      <td>Rangedweapons</td>
      <td>/rangedweapons</td>
      <td>GET</td>
      <td>Get all ranged weapons</td>
  </tr>
  <tr>
      <td></td>
      <td>/rangedweapons</td>
      <td>POST</td>
      <td>Create a new ranged weapon</td>
  </tr>
  <tr>
      <td></td>
      <td>/rangedweapons/{id}</td>
      <td>GET</td>
      <td>Get a specific ranged weapon</td>
  </tr>
  <tr>
      <td></td>
      <td>/rangedweapons/{id}</td>
      <td>PUT</td>
      <td>Update an existing ranged weapon</td>
  </tr>
  <tr>
      <td></td>
      <td>/rangedweapons/{id}</td>
      <td>DELETE</td>
      <td>Delete a ranged weapon</td>
  </tr>
  <tr>
      <td>Abilities</td>
      <td>/abilities</td>
      <td>GET</td>
      <td>Get all abilities</td>
  </tr>
  <tr>
      <td></td>
      <td>/abilities</td>
      <td>POST</td>
      <td>Create a new ability</td>
  </tr>
  <tr>
      <td></td>
      <td>/abilities/{id}</td>
      <td>GET</td>
      <td>Get a specific ability</td>
  </tr>
  <tr>
      <td></td>
      <td>/abilities/{id}</td>
      <td>PUT</td>
      <td>Update an existing ability</td>
  </tr>
  <tr>
      <td></td>
      <td>/abilities/{id}</td>
      <td>DELETE</td>
      <td>Delete an ability</td>
  </tr>
</table>

## cURL commands
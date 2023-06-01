/* DATENSTRUKTUREN */

/* Primitives */ // Variablen

// let a; // Definition oder Deklaration können, datentypen unten, Wertzuweisung können

// Wertzuweisung / Assignment // Werte können überschrieben werden, Datentyp wechseln
// a = 2; // number 
// a = true; // boolean (true, false)
// a = "Hallo"; // string 

//   console.log(typeof a);        // gibt den Datentyp an
//   console.log(a);



/* Arrays */  

// man soll array anlegen können, jeweilige Werte anzeigen können
// Navigation über INDEX, fängt mit 0 an

// let arr;
// // arr = new Array();  // Möglichkeit
// arr = [false,true,true,false];   // Literalschreibweise verwenden
// console.log(arr);
// console.log(arr[0]);  //gibt erstes Element aus
// console.log(arr[3]);
// console.log(arr.length); //gibt die Länge an
// console.log(arr[arr.length-1]); //gibt letztes Element aus
// console.log(arr[5]); //undefined, weil nicht vorhanden

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);



/* Daten-Objekte */

// Navigation über Bezeichner (keys): mit nem punkt, dann Bezeichner

// let obj = {x:"Hi", y:20};
// console.log(obj);
// console.log(obj.x);  // gibt den Wert x von obj aus
// console.log(obj.y);

// let obj = {  // ervschiedene Datentypen können in Objekt untergebracht werden, auch objekte in objekten, Hierarchie, navigieren mit Punkten:
//         val0: 10,
//         sub1:{
//             val1: "hi",
//             val2: 2
//             }
//     };

// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val2); //  nested objects
// console.log(obj.sub1.val1);
// console.log(obj.sub1);
// {{{{}}}} nested object



/*DOM*/

//keine DOM Aufgaben, aber Document Object Model, wird nach laden der html Seite angelegt, auch mit Hierarchien, ist Anwendung der Objektstrukturen, 

// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite  
// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"



/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/
// siehe pp Ordner 03, script_01 if, if else, if else if, switch case
https://vscode.dev/github/emcc01/03_Entscheidungsstrukturen/blob/main/script_01.js


/* FUNKTIONEN */

// siehe Ordner pp 05, script 01, 
https://vscode.dev/github/emcc01/05_Funktionen/blob/main/script_01.js


// rechner();

//siehe Ordner pp 06 script 1;



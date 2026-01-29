# Lern-Periode-13
09.01.2026



## Planung - 09.01.2026

&nbsp;


### Eingrenzung von 3 Technologien

Da der Fokus auf einer Technologie liegt, welche mich so gut wie möglich auf mein Praktikum vorbereitet, habe ich Gemini gefragt, welche der Beispieltechnologien aus dem Auftrag am besten zu meiner Zukünftigen Praktikumsstelle passen. Anhand dieser Antwort habe ich mich dann über die 3 Vorschläge Informtiert. Zuerst habe ich überprüft ob der Vorschlag Sinn ergab, danach habe ich mich über die Technologie und Möglichkeiten Informtiert.             
            
&nbsp;

**1. React.js**             
- React ist das weitverbreitetste JS-Framework für interaktive Benutzeroberflächen. Andere Frameworks verfolgen die selbe Denkensweise wie React, was für ein Lernen von React spricht, um andere Frameworks und Librarys schneller lernen zu können.           
- React besitzt eine grosse Anzahl an Tutorials, Dokumentation usw., was das Finden eines Einsteigerprojekts einfach macht. (https://www.geeksforgeeks.org/reactjs/reactjs-projects/)              
- Ich habe schon mal mittels React Native eine Mobilapplikation erstellt, jedoch noch keine Webapplikation mit HTML/CSS und React.                 

&nbsp;


**2. Three.js**   
- Ist eine JS-Library, mit welcher man 3D-Renderings erstellen kann in Web-Applikationen. (https://www.geeksforgeeks.org/javascript/three-js/)             
- Three.js kann man in React benutzen, es gibt dafür eine Bibliothek. (https://r3f.docs.pmnd.rs/getting-started/introduction)

&nbsp;


**3. Godot**                   
- Game Engine für Game-Design und auch XR (VR/AR)         
- Ist gut, um die Logik von Game-Engines zu verstehen, beginnerfreundlich. (https://www.tiktok.com/@indieopp/video/7585982222897843511)             
- Ist ähnlich wie die Unity Engine, mit welcher ich schon gearbeitet habe.                 
           


---

### Entscheidung            

Ich entscheide mich für React.js, da mir dies aus meiner Sicht die meisten Vorteile gibt für weitere Projekte und es sehr weit verbreitet ist. Wenn ich React beherrsche, kann ich Three.js zusammen mit React anwenden. Ausserdem haben andere Frameworks wie Vue oder Angular die selbe Denkweise wie React, heisst, wenn ich React verstehe, fällt es mir einfacher, die anderen Frameworks zu lernen, da ich das Prinzip einmal schon verstanden habe.

Der Grund wieso ich nicht Godot gewählt habe, ist, da ich in der letzten Lernperiode erst gerade mit Unity gearbeitet habe und nicht direkt noch einmal eine neue Game Engine lernen will.        

&nbsp;

### Heute Habe ich...                                 
Ich habe ein neues „helloWorld“-Projekt erstellt. Der grösste Aufwand war das Erstellen des Projektes und das Installieren der richtigen Pakete. Als dann die App lief, konnte ich schon anfangen, etwas herumzuprobieren und zu testen, wie sich React verhält. Danach habe ich nach einem geeigneten Übungsprojekt gesucht für die kommenden Sitzungen.

Ich habe nach einem Projekt gesucht, welches mich anspricht, jedoch waren die meisten gut erklärt und nur aus Code bestehend, deshalb habe ich mich für das von React selber bereitgestellte Beginner-Projekt „Tic-Tac-Toe“ entschieden. In diesem Tutorial wird erklärt, wie die Einzelheiten von React funktionieren. Da das Ziel das Lernen ist und nicht, dass unbedingt ein cooles Projekt im Fokus steht, war mir der „Verstehen“-Part wichtiger. (https://react.dev/learn/tutorial-tic-tac-toe)

&nbsp;

&nbsp;

## 16.01.2026


**Arbeitspakete**
- [x] Erstellen des statischen Spielfeldes (3x3).
- [x] Die Logik für die einzlenen Felder implementieren, damit erkannt wird wann es aufgewählt ist
- [x] Die Möglichkeit hinzufügen, dass dem Feld ein "X" hinzugefügt wird wenn es ausgewählt wird. 
- [x] Klick Funktion damit das Programm reagiert wenn man mit der Maus auf ein Quadrat klickt. 


&nbsp;

**Heute habe ich...**
Heute habe ich mit dem Tutorial angefangen und gelernt, was Components, State, Props usw. in React sind. Ich habe das Spielfeld implementiert und möglich gemacht, dass durch einen Klick des Users der State verändert wird und ein X im Feld angezeigt wird. Parallel dazu habe ich mit Notizen angefangen, um die Dinge, die ich gelernt habe, zu verinnerlichen.
        

&nbsp;

&nbsp;

## 23.01.2026


**Arbeitspakete**
- [x] Den Spielstand zentral im "Board" speichern, statt in jedem einzelnen Feld.
- [x] Die Felder so umbauen, dass sie ihren Wert vom Board empfangen und nicht mehr selbst speichern.
- [x] Programmieren, dass sich "X" und "O" bei jedem Klick automatisch abwechseln.
- [x] Eine Sperre einbauen, damit man nicht auf bereits belegte Felder klicken kann.
- [x] Eine Text-Anzeige über dem Spielfeld hinzufügen: "Nächster Spieler" oder "Gewinner".


&nbsp;

**Heute habe ich...**      
Als erstes habe ich die Beziehung zwischen Board und den Squares überarbeitet. Da Square nur ein Child von Board ist, hat Board die ganze Logik und Square soll nur mit einer onClick-Funktion die Funktionen in Board auslösen. Dadurch ist Square unabhängig von der gesamten Zustandsverwaltung. Anschliessend habe ich in der handleClick-Funktion das Abwechseln zwischen „X“ und „O“ eingefügt sowie das Überprüfen, ob jemand gewonnen hat. Danach habe ich zusätzlich noch eine Ausgabe hinzugefügt, die den Gewinner ausgibt.
        

&nbsp;

&nbsp;

## 30.01.2026


**Arbeitspakete*** 
- [x] Die Spielhistorie (Spielzüge) speichern
- [x] Es möglich machen, dass Züge angezeigt werden können.
- [x] Es möglich machen, zu diesen Zügen zurückzuspringen
- [x] Zwischeneinstieg: es möglich machen, von einem beliebigen Spielzug erneut weiterzuspielen und alle anderen Züge zu überschreiben



&nbsp;

**Heute habe ich...**    
Ich habe mich um den letzten Teil des Tutorials gekümmert, das Speichern der Spielzüge und die Möglichkeit, zwischen den Spielzügen hin und her zu springen. Jeder Spielzug wurde in einer Kopie des vorherigen Spielzuges gespeichert, somit konnte man von jedem Spielzug aus erneut starten zu spielen.


&nbsp;

&nbsp;

## Reflexion
Das Tutorial hat mir ein Grundverständnis davon gegeben, wie man React benutzt und welche Möglichkeiten es bietet, die normales Web-Development nicht hat. Durch das Tutorial war das Lernen verständlicher und hat Spass gemacht. Leider konnte ich keine eigenen Ideen zum Tutorialprojekt beitragen, da ich nebenbei noch Notizen gemacht habe zu Funktionen von React, welche ich als eigenes Journal für später verwenden kann. Dadurch kann ich das Gelernte schnell wieder aufrufen, wenn ich etwas nicht mehr weiss.

&nbsp;


---

&nbsp;

# Tutorial
Das ist ein erstelles Tutorial welches kurz im Bezug zum Tic-Tac-Toe Tutorial gewisse Funktionen des Codes erklärt. 
[ReactTutorialAddition.md](https://github.com/Fynn8962/Lern-Periode-13/blob/main/ReactTutorialAddition.md)

# Cheat Sheet
In einer Word Datei habe ich im Laufe des Prozesses alle neuen Funktionen und Dinge die ich nicht kannte Dokumentier um diese besser zu verstehen. Das schreiben in eigenen Worten und unterlegen mit Screenshots half dabei beim Lernprozess von React. 
[React.CheatSheet.pdf](https://github.com/Fynn8962/Lern-Periode-13/blob/main/ReactCheatSheet.pdf)


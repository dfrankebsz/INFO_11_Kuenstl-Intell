# NeuroQuest – Künstliche Intelligenz & neuronale Netze

Interaktiver Lernkurs für die 11. Klasse am beruflichen Gymnasium. Schwerpunkt: Eingabe- und Ausgabeschichten, verborgene Schichten, Wichtungen und Aktivierungsfunktionen.

## Deployment mit GitHub + Netlify

1. ZIP entpacken und den Ordnerinhalt in ein neues GitHub-Repository hochladen.
2. In Netlify **Add new site → Import an existing project** wählen und das GitHub-Repository verbinden.
3. Netlify erkennt `netlify.toml`. Build command bleibt leer; Publish directory ist `.`.
4. Unter **Site configuration → Environment variables** eine Variable `TEACHER_CODE` mit einem selbst gewählten Lehrercode anlegen.
5. Neu deployen.

Der Kurs verwendet **Netlify Functions + Netlify Blobs**. Supabase und ein allgemeiner AUTH-Schlüssel werden nicht benötigt.

## Konten

- Gastmodus: Fortschritt wird lokal im Browser gespeichert.
- Schülerkonto: Klasse + Nickname + Passwort; Fortschritt wird in Netlify Blobs gespeichert.
- Lehrerkonto: zusätzlich `TEACHER_CODE`; Lehrkräfte sehen nur die bei der Anmeldung angegebene Klasse.
- Im Lehrerbereich können Fortschritte zurückgesetzt, Nutzer gelöscht und Passwörter neu gesetzt werden.
- Passwörter werden mit `scrypt` + Salt gehasht gespeichert.

## Inhalte

1. KI & Blackbox
2. Eingabe- und Ausgabeschicht
3. Künstliches Neuron und Verbindungen
4. Verborgene Schichten
5. Lernprodukt 1: „Öffnen Sie die Blackbox am Fall“
6. Wichtungen
7. Aktivierungsfunktionen
8. Zusammenspiel
9. Vollständiges Netz
10. Anwendungen, Training & Grenzen
11. Lernprodukt 2: „Entwerfen Sie Ihre eigene Unternehmens-KI“

Der Kurs enthält 72 Pflichtaufgaben plus Bonus-Challenges. Die interne AFB-Verteilung ist 25 % / 50 % / 25 %, wird den Lernenden aber nicht angezeigt.

## Lernprodukte

**Lernprodukt 1** ist jetzt fallbezogen: Die Lernenden wählen einen von vier Unternehmensfällen und erklären daran Eingabe, Eingabeschicht, künstliche Neuronen, Verbindungen, verborgene Schicht, Ausgabeschicht und konkrete Ausgabe. Ein nicht auswählbares Musik-App-Beispiel dient als Muster. Das Ergebnis kann als PDF gedruckt werden.

**Lernprodukt 2** ist ein KI-Designer: Die Lernenden wählen einen Unternehmensfall, definieren drei Eingaben, qualitative Wichtungen, eine Aktivierungsfunktion und eine Ausgabe. Ein Live-Schaubild wird im Kurs erzeugt und kann über den Browser-Druckdialog als PDF gespeichert werden. Die Musterlösung nutzt bewusst einen anderen Fall (Frühstücksnachfrage im Hotel).

## Hinweise

- Die Kursoberfläche ist responsiv und für Desktop, Tablet und Smartphone ausgelegt.
- Drag-and-Drop-Aufgaben besitzen Touch-Alternativen.
- Freitext wird nicht automatisch inhaltlich bewertet. Lernende vergleichen mit der Musterlösung und markieren selbst als korrekt.
- Bei jeder Musterlösung erscheint zunächst die Rückfrage, ob noch einmal selbst versucht werden soll.
- Der Service Worker ermöglicht das erneute Öffnen bereits geladener Kursdateien auch bei instabiler Verbindung; Serverfunktionen benötigen für Synchronisation weiterhin eine Verbindung.

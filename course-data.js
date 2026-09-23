export const COURSE_META = {
  "id": "neuroquest-ki-v1",
  "title": "NeuroQuest: Wie neuronale Netze funktionieren",
  "subtitle": "Eingabe- und Ausgabeschichten · verborgene Schichten · Wichtungen · Aktivierungsfunktionen",
  "caseTitle": "ShopSmart fragt: Warum bekommt jeder Kunde andere Empfehlungen?",
  "caseText": "Du begleitest das E-Commerce-Team von ShopSmart. Der Onlineshop möchte besser verstehen, wie ein vereinfachtes neuronales Netz aus Kundendaten eine Empfehlung erzeugen kann. Im Kurs öffnest du die KI-Blackbox Schritt für Schritt – und entwirfst am Ende selbst ein einfaches Unternehmens-KI-Modell."
};

export const SHOP_ITEMS = [
  {
    "id": "bg-sky",
    "kind": "background",
    "label": "Neural Sky",
    "icon": "☁️",
    "threshold": 100,
    "value": "sky"
  },
  {
    "id": "avatar-brain",
    "kind": "avatar",
    "label": "Denk-Profi",
    "icon": "🧠",
    "threshold": 180,
    "value": "🧠"
  },
  {
    "id": "pet-bot",
    "kind": "pet",
    "label": "Mini-Bot",
    "icon": "🤖",
    "threshold": 280,
    "value": "🤖"
  },
  {
    "id": "bg-mint",
    "kind": "background",
    "label": "Hidden Mint",
    "icon": "🌿",
    "threshold": 400,
    "value": "mint"
  },
  {
    "id": "avatar-scientist",
    "kind": "avatar",
    "label": "KI-Forscher/in",
    "icon": "🧑‍🔬",
    "threshold": 540,
    "value": "🧑‍🔬"
  },
  {
    "id": "pet-fox",
    "kind": "pet",
    "label": "Gewichte-Fuchs",
    "icon": "🦊",
    "threshold": 690,
    "value": "🦊"
  },
  {
    "id": "bg-sunset",
    "kind": "background",
    "label": "Activation Sunset",
    "icon": "🌅",
    "threshold": 840,
    "value": "sunset"
  },
  {
    "id": "avatar-robot",
    "kind": "avatar",
    "label": "Neuro-Bot",
    "icon": "🦾",
    "threshold": 1020,
    "value": "🦾"
  },
  {
    "id": "pet-owl",
    "kind": "pet",
    "label": "Hidden-Eule",
    "icon": "🦉",
    "threshold": 1200,
    "value": "🦉"
  },
  {
    "id": "bg-night",
    "kind": "background",
    "label": "Deep Night",
    "icon": "🌙",
    "threshold": 1380,
    "value": "night"
  },
  {
    "id": "avatar-ninja",
    "kind": "avatar",
    "label": "Netz-Ninja",
    "icon": "🥷",
    "threshold": 1560,
    "value": "🥷"
  },
  {
    "id": "pet-dragon",
    "kind": "pet",
    "label": "ReLU-Drache",
    "icon": "🐉",
    "threshold": 1740,
    "value": "🐉"
  },
  {
    "id": "bg-lavender",
    "kind": "background",
    "label": "Neuron Lavender",
    "icon": "🪻",
    "threshold": 1920,
    "value": "lavender"
  },
  {
    "id": "avatar-rocket",
    "kind": "avatar",
    "label": "KI-Designer/in",
    "icon": "🚀",
    "threshold": 2100,
    "value": "🚀"
  },
  {
    "id": "pet-unicorn",
    "kind": "pet",
    "label": "Sigmoid-Einhorn",
    "icon": "🦄",
    "threshold": 2280,
    "value": "🦄"
  },
  {
    "id": "bg-ice",
    "kind": "background",
    "label": "Model Ice",
    "icon": "❄️",
    "threshold": 2460,
    "value": "ice"
  }
];

export const SECTIONS = [
  {
    "id": "start",
    "nav": "Start",
    "icon": "🛍️",
    "title": "Mission Start: Was passiert in der KI-Blackbox?",
    "kicker": "ShopSmart & die Produktempfehlung",
    "content": "\n<div class=\"hero-case ai-hero\"><img class=\"hero-illustration\" src=\"/assets/shopsmart-ai.svg\" alt=\"Onlineshop und vereinfachtes neuronales Netz\"><div><span class=\"eyebrow\">Beispielfall</span><h3>ShopSmart personalisiert seinen Onlineshop</h3><p>Zwei Kunden öffnen denselben Shop – aber nur eine Person sieht die Empfehlung <strong>„TrailFlex Pro könnte dir gefallen“</strong>. Als mögliche Informationen liegen beispielsweise <strong>angesehene Produktkategorien</strong>, <strong>bisherige Käufe</strong> und <strong>Klickverhalten</strong> vor.</p><div class=\"product-facts\"><span>🛒 E-Commerce</span><span>👀 Nutzungsdaten</span><span>🎯 Produktempfehlung</span></div></div></div>\n<div class=\"plenum-card\"><span class=\"card-icon\">🗣️</span><div><span class=\"eyebrow\">Stopp · Plenumsfrage</span><h3>Was müsste innerhalb der Blackbox passieren, damit aus mehreren Informationen eine Empfehlung entsteht?</h3><p>Sammelt Vermutungen. Denkt besonders darüber nach, ob alle Informationen gleich wichtig sein müssen und wie ein System entscheidet, welches Signal weitergegeben wird.</p></div></div>\n<div class=\"blackbox-flow\"><div class=\"flow-node\">📥 Eingaben<br><small>Kundendaten</small></div><div class=\"flow-arrow\">→</div><div class=\"black-box\">?</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">📤 Ausgabe<br><small>Empfehlung</small></div></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Künstliche Intelligenz</div><p><strong>Künstliche Intelligenz (KI)</strong> bezeichnet Computersysteme, die Aufgaben bearbeiten, bei denen Fähigkeiten wie <strong>Erkennen, Zuordnen, Vorhersagen oder Entscheiden</strong> benötigt werden. Der Begriff ist breit: Nicht jedes KI-System ist ein neuronales Netz.</p></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Künstliches neuronales Netz</div><p>Ein <strong>künstliches neuronales Netz</strong> besteht aus miteinander verbundenen <strong>künstlichen Neuronen</strong>, die Eingaben schrittweise verarbeiten und daraus eine <strong>Ausgabe</strong> erzeugen.</p></div>\n<div class=\"real-world-strip\"><div><span>📷</span><b>Bilderkennung</b><small>Bilddaten → erkannte Klasse</small></div><div><span>✉️</span><b>Spam-Erkennung</b><small>E-Mail → Spam / kein Spam</small></div><div><span>🎧</span><b>Sprachverarbeitung</b><small>Audiosignal → Text / Bedeutung</small></div></div>\n<div class=\"info-note\"><strong>Reales Lernwerkzeug:</strong> Googles <em>Teachable Machine</em> lässt im Browser Modelle für Bilder, Geräusche und Posen trainieren. Es eignet sich gut, um zu sehen, dass ein Modell aus Beispielen lernt – ohne dass du für diesen Kurs programmieren musst.</div>\n<div class=\"source-row\"><a class=\"source-link\" href=\"https://teachablemachine.withgoogle.com/\" target=\"_blank\" rel=\"noopener\">🧪 Teachable Machine öffnen</a><a class=\"source-link\" href=\"https://www.ibm.com/think/topics/neural-networks\" target=\"_blank\" rel=\"noopener\">📚 IBM: Neural Networks</a></div>\n",
    "tasks": [
      {
        "id": "start-1",
        "section": "start",
        "title": "KI oder neuronales Netz?",
        "type": "single",
        "prompt": "Welche Aussage ist fachlich am treffendsten?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "Jede KI ist automatisch ein neuronales Netz."
          ],
          [
            "b",
            "Neuronale Netze sind eine mögliche Methode innerhalb der KI."
          ],
          [
            "c",
            "Neuronale Netze funktionieren ohne Eingaben."
          ],
          [
            "d",
            "KI bedeutet nur Robotik."
          ]
        ],
        "correct": "b",
        "solution": "Neuronale Netze sind eine mögliche Methode innerhalb der Künstlichen Intelligenz.",
        "explanation": "KI ist ein Oberbegriff. Neuronale Netze sind eine bestimmte Modellklasse innerhalb des maschinellen Lernens."
      },
      {
        "id": "start-2",
        "section": "start",
        "title": "Grundprinzip",
        "type": "order",
        "prompt": "Bringe das stark vereinfachte Grundprinzip in die richtige Reihenfolge.",
        "xp": 20,
        "afb": 1,
        "items": [
          [
            "a",
            "Ausgabe"
          ],
          [
            "b",
            "Verarbeitung"
          ],
          [
            "c",
            "Eingabe"
          ]
        ],
        "correct": [
          "c",
          "b",
          "a"
        ],
        "solution": "Eingabe → Verarbeitung → Ausgabe.",
        "explanation": "Dieses Grundschema wird im Kurs schrittweise verfeinert."
      },
      {
        "id": "start-3",
        "section": "start",
        "title": "ShopSmart ordnen",
        "type": "matching",
        "prompt": "Ordne die Beispiele als Eingabe oder Ausgabe ein.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "angesehene Produktkategorie",
            "Eingabe"
          ],
          [
            "bisherige Käufe",
            "Eingabe"
          ],
          [
            "„TrailFlex Pro empfehlen“",
            "Ausgabe"
          ],
          [
            "Spam / kein Spam",
            "Ausgabe"
          ]
        ],
        "solution": "Produktkategorie und Käufe sind Eingaben; Empfehlung und Klassifikation sind Ausgaben.",
        "explanation": "Eingaben liefern Informationen für das Modell, die Ausgabe ist das Ergebnis."
      },
      {
        "id": "start-4",
        "section": "start",
        "title": "Blackbox-Hypothesen",
        "type": "multi",
        "prompt": "Welche Vermutungen über die Blackbox sind grundsätzlich sinnvoll?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Einige Eingangsinformationen können stärker wirken als andere."
          ],
          [
            "b",
            "Informationen können über mehrere Verarbeitungsschritte weitergegeben werden."
          ],
          [
            "c",
            "Das System braucht keinerlei Regeln oder gelernte Parameter."
          ],
          [
            "d",
            "Am Ende muss ein Ergebnis ausgegeben werden."
          ]
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "solution": "Sinnvoll sind a, b und d.",
        "explanation": "Wichtungen, Schichten und eine Ausgabe gehören zu den zentralen Ideen dieses Kurses."
      },
      {
        "id": "start-5",
        "section": "start",
        "title": "Anwendung erkennen",
        "type": "matching",
        "prompt": "Ordne jedem Anwendungsfall eine plausible Ausgabe zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "Foto eines Bauteils",
            "fehlerhaft / in Ordnung"
          ],
          [
            "E-Mail",
            "Spam / kein Spam"
          ],
          [
            "Audiosignal",
            "erkannter Text"
          ],
          [
            "Kundenverhalten",
            "Produktempfehlung"
          ]
        ],
        "solution": "Bauteil → Qualitätsklasse; E-Mail → Spamklassifikation; Audio → Text; Kundenverhalten → Empfehlung.",
        "explanation": "Die konkrete Ausgabe hängt von der Aufgabe des Systems ab."
      },
      {
        "id": "start-6",
        "section": "start",
        "title": "Blackbox erklären",
        "type": "free",
        "prompt": "Erkläre in eigenen Worten, warum die Bezeichnung „Blackbox“ für ein komplexes KI-System verwendet werden kann, ohne zu behaupten, das System sei geheim.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Formuliere eine kurze Erklärung.",
        "solution": "Bei komplexen KI-Systemen kann die interne Verarbeitung für Menschen schwer nachvollziehbar sein. „Blackbox“ bedeutet hier, dass der Weg von Eingaben zu Ausgaben nicht immer leicht verständlich oder transparent ist – nicht, dass die Technik geheim sein muss.",
        "criteria": [
          "Du unterscheidest „schwer nachvollziehbar“ von „geheim“.",
          "Du beziehst dich auf den Weg von Eingabe zu Ausgabe."
        ]
      },
      {
        "id": "start-b",
        "section": "start",
        "title": "Bonus: Teachable Machine",
        "type": "free",
        "prompt": "Öffne optional Teachable Machine. Beschreibe, welche Eingaben du dort sammeln kannst und welche Art von Ausgabe das Modell liefert.",
        "xp": 45,
        "afb": 2,
        "placeholder": "Notiere deine Beobachtung in 2–4 Sätzen.",
        "solution": "Teachable Machine kann beispielsweise Bild-, Audio- oder Posebeispiele als Trainingsdaten nutzen. Nach dem Training ordnet das Modell neue Eingaben den gelernten Klassen zu und zeigt typischerweise Konfidenzwerte für die Klassen.",
        "criteria": [
          "Du nennst eine Eingabeart.",
          "Du beschreibst die Ausgabe als Klassenzuordnung bzw. Konfidenz."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "inout",
    "nav": "Ein- & Ausgabe",
    "icon": "📥",
    "title": "Kapitel 2: Eingabe- und Ausgabeschicht",
    "kicker": "Welche Informationen kommen hinein – was kommt heraus?",
    "content": "\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Eingabeschicht</div><p>Die <strong>Eingabeschicht</strong> nimmt die <strong>Merkmale bzw. Daten</strong> auf, die dem neuronalen Netz zur Verarbeitung übergeben werden.</p></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Merkmal</div><p>Ein <strong>Merkmal</strong> ist eine <strong>messbare oder codierte Eigenschaft</strong>, die als Eingabe verwendet wird – zum Beispiel Preis, Klickhäufigkeit, Bildpixel oder Anzahl vorheriger Käufe.</p></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Ausgabeschicht</div><p>Die <strong>Ausgabeschicht</strong> liefert das <strong>Ergebnis der Verarbeitung</strong>. Das können Kategorien, Zahlenwerte oder mehrere Ausgabewerte sein.</p></div>\n<div class=\"io-example-grid\"><div class=\"io-card\"><span>🖼️</span><b>Bilderkennung</b><p><strong>Eingabe:</strong> Bilddaten<br><strong>Ausgabe:</strong> z. B. „Hund“ / „Katze“</p></div><div class=\"io-card\"><span>📦</span><b>Qualitätskontrolle</b><p><strong>Eingabe:</strong> Kamerabild eines Produkts<br><strong>Ausgabe:</strong> „fehlerhaft“ / „in Ordnung“</p></div><div class=\"io-card\"><span>🛒</span><b>ShopSmart</b><p><strong>Eingabe:</strong> Kunden- und Produktmerkmale<br><strong>Ausgabe:</strong> Empfehlungswert oder Produktauswahl</p></div></div>\n<div class=\"info-note\"><strong>Wichtig:</strong> Ein neuronales Netz verarbeitet intern Zahlen. Kategorien, Texte oder Bilder müssen daher in einer Form vorliegen, die das Modell numerisch verarbeiten kann. Wie diese Vorverarbeitung technisch geschieht, ist nicht Schwerpunkt dieses Kurses.</div>\n<div class=\"flow-diagram big\"><div class=\"flow-node\">Merkmale<br><small>z. B. 3 Eingaben</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Eingabeschicht</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Netzwerk</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Ausgabeschicht</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Ergebnis</div></div>\n",
    "tasks": [
      {
        "id": "io-1",
        "section": "inout",
        "title": "Definition sichern",
        "type": "single",
        "prompt": "Welche Aufgabe hat die Eingabeschicht?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "Sie nimmt die Merkmale auf."
          ],
          [
            "b",
            "Sie speichert ausschließlich die fertige Ausgabe."
          ],
          [
            "c",
            "Sie ersetzt alle verborgenen Schichten."
          ],
          [
            "d",
            "Sie vergibt zufällig das Ergebnis."
          ]
        ],
        "correct": "a",
        "solution": "Die Eingabeschicht nimmt die Merkmale bzw. Eingangsdaten auf.",
        "explanation": "Sie bildet den Startpunkt der Informationsverarbeitung im Netz."
      },
      {
        "id": "io-2",
        "section": "inout",
        "title": "Ausgabe erkennen",
        "type": "single",
        "prompt": "Was ist bei einer KI zur Erkennung beschädigter Pakete eine plausible Ausgabe?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "Kamerabild des Pakets"
          ],
          [
            "b",
            "„beschädigt“ / „unbeschädigt“"
          ],
          [
            "c",
            "Pixelwerte"
          ],
          [
            "d",
            "Lichtverhältnisse"
          ]
        ],
        "correct": "b",
        "solution": "„beschädigt“ / „unbeschädigt“ ist eine plausible Ausgabe.",
        "explanation": "Bild und Pixelwerte sind Eingaben; die Klassifikation ist das Ergebnis."
      },
      {
        "id": "io-3",
        "section": "inout",
        "title": "Praxisfälle",
        "type": "matching",
        "prompt": "Ordne Eingabe und Ausgabe dem passenden System zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "Temperatur, Wochentag, Besucherzahl",
            "Absatzprognose"
          ],
          [
            "Foto eines Produkts",
            "Qualitätsklasse"
          ],
          [
            "Text einer Nachricht",
            "Spam-Klasse"
          ],
          [
            "Nutzer- und Produktmerkmale",
            "Produktempfehlung"
          ]
        ],
        "solution": "Die Merkmale werden passend zur jeweiligen Aufgabe gewählt.",
        "explanation": "Die Eingabeschicht muss genau die Daten aufnehmen, die für die gewünschte Ausgabe relevant sein können."
      },
      {
        "id": "io-4",
        "section": "inout",
        "title": "Sinnvolle Merkmale",
        "type": "multi",
        "prompt": "ShopSmart möchte Laufschuh-Empfehlungen erzeugen. Welche Merkmale könnten grundsätzlich relevant sein?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "angesehene Sportkategorien"
          ],
          [
            "b",
            "vorherige Käufe"
          ],
          [
            "c",
            "Interaktionen mit Laufschuhen"
          ],
          [
            "d",
            "zufällige Bildschirmposition des Mauszeigers beim Login"
          ]
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "solution": "a, b und c sind plausible Merkmale.",
        "explanation": "Merkmale sollten einen nachvollziehbaren Bezug zur Aufgabe haben."
      },
      {
        "id": "io-5",
        "section": "inout",
        "title": "Ein- oder Ausgabe?",
        "type": "order",
        "prompt": "Ordne den Ablauf von links nach rechts.",
        "xp": 30,
        "afb": 2,
        "items": [
          [
            "a",
            "Produktempfehlung"
          ],
          [
            "b",
            "Klickverhalten"
          ],
          [
            "c",
            "Eingabeschicht"
          ],
          [
            "d",
            "Ausgabeschicht"
          ],
          [
            "e",
            "interne Verarbeitung"
          ]
        ],
        "correct": [
          "b",
          "c",
          "e",
          "d",
          "a"
        ],
        "solution": "Klickverhalten → Eingabeschicht → interne Verarbeitung → Ausgabeschicht → Produktempfehlung.",
        "explanation": "Die Schichten beschreiben Stationen des Informationsflusses."
      },
      {
        "id": "io-6",
        "section": "inout",
        "title": "Ungeeignete Eingaben beurteilen",
        "type": "free",
        "prompt": "Ein Unternehmen will die Lieferverzögerung einer Bestellung einschätzen und nutzt als Eingabe nur die Lieblingsfarbe des Kunden. Beurteile diese Wahl.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Begründe in 2–4 Sätzen.",
        "solution": "Die Lieblingsfarbe hat keinen erkennbaren sachlichen Zusammenhang mit einer Lieferverzögerung und wäre daher als Merkmal kaum sinnvoll. Plausibler wären etwa aktueller Versandstatus, Entfernung, Auslastung oder Verkehrsdaten.",
        "criteria": [
          "Du beurteilst die Relevanz des Merkmals.",
          "Du nennst mindestens ein plausibleres Merkmal."
        ]
      },
      {
        "id": "io-7",
        "section": "inout",
        "title": "Mehrere Ausgaben",
        "type": "free",
        "prompt": "Erkläre, warum ein Bilderkennungsnetz mehr als einen Ausgabewert besitzen kann, obwohl am Ende nur eine Klasse angezeigt wird.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Erkläre die Idee ohne mathematische Details.",
        "solution": "Ein Netz kann für mehrere mögliche Klassen jeweils einen Ausgabewert erzeugen, zum Beispiel für „Katze“, „Hund“ und „Fahrrad“. Die Anwendung kann anschließend die Klasse mit dem stärksten Wert auswählen.",
        "criteria": [
          "Du erwähnst mehrere mögliche Klassen.",
          "Du erklärst, dass mehrere Ausgabewerte verglichen werden können."
        ]
      },
      {
        "id": "io-b",
        "section": "inout",
        "title": "Bonus: Modell-Idee",
        "type": "free",
        "prompt": "Denke dir eine KI-Anwendung aus deinem Alltag aus. Nenne drei mögliche Eingaben und eine Ausgabe.",
        "xp": 45,
        "afb": 3,
        "placeholder": "Anwendung, drei Eingaben, eine Ausgabe.",
        "solution": "Beispiel: Musikempfehlung – Eingaben: bisher gehörte Titel, übersprungene Titel, bevorzugte Genres; Ausgabe: empfohlener Song. Andere fachlich plausible Lösungen sind möglich.",
        "criteria": [
          "Drei plausible Eingaben.",
          "Eine klare Ausgabe.",
          "Ein nachvollziehbarer Zusammenhang."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "neuron",
    "nav": "Neuron",
    "icon": "🔵",
    "title": "Kapitel 3: Das künstliche Neuron und seine Verbindungen",
    "kicker": "Die kleinste Verarbeitungseinheit im Modell",
    "content": "\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Künstliches Neuron</div><p>Ein <strong>künstliches Neuron</strong> erhält <strong>Eingangssignale</strong>, verarbeitet sie und erzeugt daraus ein <strong>Ausgangssignal</strong>.</p></div>\n<div class=\"neuron-diagram\"><div class=\"inputs\"><span>Eingabe 1</span><span>Eingabe 2</span><span>Eingabe 3</span></div><div class=\"arrows\">━━▶<br>━━▶<br>━━▶</div><div class=\"neuron-node\">Neuron</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Signal</div></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Verbindung</div><p>Über <strong>Verbindungen</strong> werden Werte von einem Neuron an Neuronen der nächsten Schicht weitergegeben. Diese Verbindungen besitzen <strong>Wichtungen</strong>, die ihren Einfluss verändern.</p></div>\n<div class=\"real-world-card\"><div><span class=\"eyebrow\">Vom einzelnen Neuron zum Netz</span><h3>Viele einfache Einheiten arbeiten zusammen</h3><p>Ein einzelnes künstliches Neuron ist nur ein vereinfachter Rechenschritt. Erst durch die Verbindung vieler Neuronen in Schichten entsteht ein neuronales Netz, das komplexere Zusammenhänge verarbeiten kann.</p></div><img src=\"/assets/network.svg\" alt=\"Schematisches neuronales Netz\"></div>\n<div class=\"info-note\"><strong>Keine Biologiestunde:</strong> Der Name „Neuron“ ist vom biologischen Vorbild inspiriert. Ein künstliches Neuron ist aber ein mathematisch-technisches Modell und kein echtes Nervenzellmodell.</div>\n",
    "tasks": [
      {
        "id": "neuron-1",
        "section": "neuron",
        "title": "Neuron definieren",
        "type": "text",
        "prompt": "Ergänze den Fachbegriff: Eine Verarbeitungseinheit, die Eingangssignale verarbeitet und ein Ausgangssignal erzeugt, heißt …",
        "xp": 20,
        "afb": 1,
        "accepted": [
          "künstliches Neuron",
          "Neuron"
        ],
        "solution": "künstliches Neuron",
        "explanation": "Das künstliche Neuron ist eine grundlegende Verarbeitungseinheit im Netzwerk."
      },
      {
        "id": "neuron-2",
        "section": "neuron",
        "title": "Signalweg",
        "type": "order",
        "prompt": "Bringe den Signalweg durch ein einzelnes Neuron in die richtige Reihenfolge.",
        "xp": 30,
        "afb": 1,
        "items": [
          [
            "a",
            "Ausgangssignal"
          ],
          [
            "b",
            "Verarbeitung im Neuron"
          ],
          [
            "c",
            "Eingangssignale"
          ]
        ],
        "correct": [
          "c",
          "b",
          "a"
        ],
        "solution": "Eingangssignale → Verarbeitung im Neuron → Ausgangssignal.",
        "explanation": "Das ist das minimale Funktionsmodell."
      },
      {
        "id": "neuron-3",
        "section": "neuron",
        "title": "Netz lesen",
        "type": "matching",
        "prompt": "Ordne die Begriffe ihrem Ort im vereinfachten Netz zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "linke Seite",
            "Eingabeschicht"
          ],
          [
            "mittlere Knoten",
            "verborgene Schicht"
          ],
          [
            "rechte Seite",
            "Ausgabeschicht"
          ],
          [
            "Linien zwischen Knoten",
            "Verbindungen"
          ]
        ],
        "solution": "Links Eingabe, Mitte verborgen, rechts Ausgabe, Linien sind Verbindungen.",
        "explanation": "Ein Netzdiagramm lässt sich über seine Schichten und Verbindungen lesen."
      },
      {
        "id": "neuron-4",
        "section": "neuron",
        "title": "Verbindungen verstehen",
        "type": "multi",
        "prompt": "Welche Aussagen zu Verbindungen sind richtig?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Sie übertragen Werte zwischen Neuronen."
          ],
          [
            "b",
            "Sie können unterschiedlich gewichtet sein."
          ],
          [
            "c",
            "Alle Verbindungen müssen immer gleich stark sein."
          ],
          [
            "d",
            "Sie verbinden Verarbeitungseinheiten verschiedener Schichten."
          ]
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "solution": "a, b und d sind richtig.",
        "explanation": "Unterschiedliche Wichtungen sind gerade ein zentrales Merkmal neuronaler Netze."
      },
      {
        "id": "neuron-5",
        "section": "neuron",
        "title": "Modellgrenze",
        "type": "free",
        "prompt": "Erkläre, warum ein künstliches Neuron nicht einfach mit einer biologischen Nervenzelle gleichgesetzt werden sollte.",
        "xp": 40,
        "afb": 2,
        "placeholder": "Formuliere 2–3 Sätze.",
        "solution": "Ein künstliches Neuron ist eine stark vereinfachte mathematische Verarbeitungseinheit. Der Begriff ist biologisch inspiriert, bildet aber die komplexe Funktionsweise echter Nervenzellen nicht vollständig ab.",
        "criteria": [
          "Du nennst die Vereinfachung.",
          "Du vermeidest die Gleichsetzung mit einer echten Nervenzelle."
        ]
      },
      {
        "id": "neuron-6",
        "section": "neuron",
        "title": "Ein Neuron reicht?",
        "type": "free",
        "prompt": "Begründe, warum für komplexere Aufgaben viele miteinander verbundene Neuronen sinnvoll sein können.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Begründe anhand einer komplexeren Aufgabe.",
        "solution": "Komplexe Aufgaben beruhen auf vielen Merkmalen und Zwischenschritten. Mehrere verbundene Neuronen können Informationen in mehreren Stufen kombinieren und daraus komplexere Muster abbilden.",
        "criteria": [
          "Du erwähnst mehrere Merkmale oder Verarbeitungsschritte.",
          "Du stellst den Bezug zur Vernetzung her."
        ]
      },
      {
        "id": "neuron-b",
        "section": "neuron",
        "title": "Bonus: Netz beobachten",
        "type": "free",
        "prompt": "Öffne optional TensorFlow Playground. Beschreibe, was du dort an Neuronen, Verbindungen und Schichten erkennen kannst.",
        "xp": 45,
        "afb": 2,
        "placeholder": "Notiere drei Beobachtungen.",
        "solution": "Im Playground sind Eingabemerkmale, verborgene Schichten, Neuronen, Verbindungen und eine Ausgabefläche sichtbar. Die Darstellung zeigt außerdem unterschiedlich starke bzw. positive und negative Gewichte.",
        "criteria": [
          "Du erkennst mindestens zwei Schichtarten.",
          "Du erwähnst Verbindungen oder Gewichte."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "hidden",
    "nav": "Hidden Layer",
    "icon": "🧩",
    "title": "Kapitel 4: Verborgene Schichten",
    "kicker": "Wo Informationen weiterverarbeitet werden",
    "content": "\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Verborgene Schicht</div><p>Eine <strong>verborgene Schicht</strong> liegt zwischen <strong>Eingabe- und Ausgabeschicht</strong>. Ihre Neuronen kombinieren und verarbeiten die Signale der vorherigen Schicht weiter.</p></div>\n<div class=\"warning-note\"><strong>Typisches Missverständnis:</strong> „Verborgen“ bedeutet <strong>nicht geheim</strong>. Die Schicht heißt so, weil sie weder die direkte Eingabe von außen noch die direkt sichtbare Ausgabe des Netzes darstellt.</div>\n<img class=\"wide-diagram\" src=\"/assets/network.svg\" alt=\"Neuronales Netz mit Eingabeschicht, verborgener Schicht und Ausgabeschicht\">\n<h3 class=\"section-subtitle\">Was kann eine verborgene Schicht leisten?</h3><p>Sie erzeugt aus den Signalen der vorherigen Schicht neue interne Darstellungen. Bei einer Bilderkennung können frühe Verarbeitungsschritte beispielsweise einfache Strukturen berücksichtigen; spätere Schichten können komplexere Kombinationen dieser Signale verarbeiten. Das ist eine <strong>didaktische Vereinfachung</strong>: Ein einzelnes Neuron lässt sich nicht pauschal als „Ohr-Erkenner“ oder „Rad-Erkenner“ beschriften.</p>\n<div class=\"flow-diagram big\"><div class=\"flow-node\">Eingabe</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Hidden 1<br><small>kombinieren</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Hidden 2<br><small>weiterverarbeiten</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Ausgabe</div></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Zusatzbegriff · Deep Learning</div><p><strong>Deep Learning</strong> arbeitet mit neuronalen Netzen mit <strong>mehreren Verarbeitungsschichten</strong>. Für diesen Kurs genügt die Grundidee; die genaue Architektur moderner Deep-Learning-Modelle ist nicht Prüfungsgegenstand.</p></div>\n",
    "tasks": [
      {
        "id": "hidden-1",
        "section": "hidden",
        "title": "Verborgene Schicht erkennen",
        "type": "single",
        "prompt": "Wo befindet sich eine verborgene Schicht?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "Zwischen Eingabe- und Ausgabeschicht"
          ],
          [
            "b",
            "Nur außerhalb des Netzes"
          ],
          [
            "c",
            "Immer vor der Eingabeschicht"
          ],
          [
            "d",
            "Nur nach der Ausgabeschicht"
          ]
        ],
        "correct": "a",
        "solution": "Zwischen Eingabe- und Ausgabeschicht.",
        "explanation": "Sie gehört zur internen Verarbeitung des Netzes."
      },
      {
        "id": "hidden-2",
        "section": "hidden",
        "title": "„Verborgen“ richtig deuten",
        "type": "boolean",
        "prompt": "Eine verborgene Schicht heißt so, weil ihre Funktionsweise grundsätzlich geheim gehalten werden muss.",
        "xp": 20,
        "afb": 1,
        "correct": false,
        "solution": "Falsch.",
        "explanation": "„Verborgen“ bezieht sich auf die Position innerhalb des Netzes, nicht auf Geheimhaltung."
      },
      {
        "id": "hidden-3",
        "section": "hidden",
        "title": "Schichten sortieren",
        "type": "order",
        "prompt": "Ordne die Schichten eines einfachen Feedforward-Netzes.",
        "xp": 30,
        "afb": 2,
        "items": [
          [
            "a",
            "Ausgabeschicht"
          ],
          [
            "b",
            "verborgene Schicht"
          ],
          [
            "c",
            "Eingabeschicht"
          ]
        ],
        "correct": [
          "c",
          "b",
          "a"
        ],
        "solution": "Eingabeschicht → verborgene Schicht → Ausgabeschicht.",
        "explanation": "Informationen werden von der Eingabe zur Ausgabe weitergereicht."
      },
      {
        "id": "hidden-4",
        "section": "hidden",
        "title": "Funktionen zuordnen",
        "type": "matching",
        "prompt": "Ordne die Funktion der passenden Schicht zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "nimmt ursprüngliche Merkmale auf",
            "Eingabeschicht"
          ],
          [
            "kombiniert interne Signale weiter",
            "verborgene Schicht"
          ],
          [
            "liefert das Ergebnis",
            "Ausgabeschicht"
          ]
        ],
        "solution": "Eingabe nimmt auf; verborgen verarbeitet weiter; Ausgabe liefert Ergebnis.",
        "explanation": "Diese Dreiteilung ist ein Kernmodell des Kurses."
      },
      {
        "id": "hidden-5",
        "section": "hidden",
        "title": "Mehrere Hidden Layer",
        "type": "multi",
        "prompt": "Welche Aussagen sind fachlich sinnvoll?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Ein Netz kann mehrere verborgene Schichten besitzen."
          ],
          [
            "b",
            "Mehrere Schichten erlauben mehrere Verarbeitungsschritte."
          ],
          [
            "c",
            "Jede verborgene Schicht hat immer exakt drei Neuronen."
          ],
          [
            "d",
            "Deep Learning nutzt Netze mit mehreren Verarbeitungsschichten."
          ]
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "solution": "a, b und d sind richtig.",
        "explanation": "Die Anzahl der Schichten und Neuronen hängt vom Modell ab."
      },
      {
        "id": "hidden-6",
        "section": "hidden",
        "title": "Bilderkennung erklären",
        "type": "free",
        "prompt": "Erkläre vereinfacht, warum verborgene Schichten bei einer Bilderkennung sinnvoll sind.",
        "xp": 40,
        "afb": 2,
        "placeholder": "2–4 Sätze reichen.",
        "solution": "Bilddaten enthalten sehr viele Einzelinformationen. Verborgene Schichten können Signale schrittweise kombinieren und daraus zunehmend komplexe interne Muster bilden, bevor die Ausgabeschicht eine Klasse liefert.",
        "criteria": [
          "Du erwähnst schrittweise Verarbeitung.",
          "Du beschreibst das Kombinieren von Signalen."
        ]
      },
      {
        "id": "hidden-7",
        "section": "hidden",
        "title": "Fehlerhafte Erklärung korrigieren",
        "type": "free",
        "prompt": "Korrigiere die Aussage: „Die verborgene Schicht speichert einfach die Eingabedaten und gibt sie unverändert weiter.“",
        "xp": 40,
        "afb": 3,
        "placeholder": "Formuliere eine fachlich bessere Aussage.",
        "solution": "Eine verborgene Schicht verarbeitet und kombiniert die Signale der vorherigen Schicht. Sie gibt die Eingaben daher nicht einfach unverändert weiter, sondern erzeugt neue interne Werte bzw. Darstellungen.",
        "criteria": [
          "Du widersprichst dem bloßen Speichern.",
          "Du nennst Verarbeitung oder Kombination."
        ]
      },
      {
        "id": "hidden-b",
        "section": "hidden",
        "title": "Bonus: Schichten vergleichen",
        "type": "free",
        "prompt": "Vergleiche ein Netz mit einer verborgenen Schicht und ein Netz mit mehreren verborgenen Schichten. Nenne einen möglichen Vorteil und eine mögliche Herausforderung der tieferen Variante.",
        "xp": 45,
        "afb": 3,
        "placeholder": "Vorteil und Herausforderung kurz erläutern.",
        "solution": "Mehrere Schichten können komplexere Verarbeitungsschritte ermöglichen. Gleichzeitig wird das Modell meist komplexer und seine internen Entscheidungen können schwerer nachvollziehbar sein.",
        "criteria": [
          "Du nennst einen plausiblen Vorteil.",
          "Du nennst eine plausible Herausforderung."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "product1",
    "nav": "Lernprodukt 1",
    "icon": "🧠",
    "title": "Lernprodukt 1: Öffne die Blackbox",
    "kicker": "Ein vorhandenes Netz verständlich erklären",
    "content": "\n<div class=\"hero-case product-hero\"><img class=\"hero-illustration\" src=\"/assets/network.svg\" alt=\"Neuronales Netz\"><div><span class=\"eyebrow\">Lernprodukt</span><h3>Qualitätskontrolle bei einem Versandunternehmen</h3><p>Eine Kamera fotografiert Pakete. Ein vereinfachtes neuronales Netz soll ein Bild als <strong>„sichtbar beschädigt“</strong> oder <strong>„unauffällig“</strong> einordnen. Du beschriftest die Blackbox und erklärst den Informationsweg.</p></div></div>\n<div class=\"info-note\"><strong>Ziel:</strong> Du musst noch keine Wichtungen berechnen. Zeige, dass du Eingabeschicht, verborgene Schicht, Ausgabeschicht, Neuronen und Verbindungen sicher erklären kannst.</div>\n",
    "tasks": [
      {
        "id": "p1-1",
        "section": "product1",
        "title": "Bausteine wiederholen",
        "type": "matching",
        "prompt": "Ordne die Begriffe ihren Funktionen zu.",
        "xp": 20,
        "afb": 1,
        "pairs": [
          [
            "Eingabeschicht",
            "nimmt Bildmerkmale auf"
          ],
          [
            "verborgene Schicht",
            "verarbeitet Signale intern weiter"
          ],
          [
            "Ausgabeschicht",
            "liefert die Klassifikation"
          ],
          [
            "Verbindungen",
            "geben Werte zwischen Neuronen weiter"
          ]
        ],
        "solution": "Eingabe nimmt auf; Hidden verarbeitet; Ausgabe klassifiziert; Verbindungen übertragen Werte.",
        "explanation": "Damit sind die Bausteine für das Lernprodukt geklärt."
      },
      {
        "id": "p1-2",
        "section": "product1",
        "title": "Paket-KI lesen",
        "type": "single",
        "prompt": "Welche Ausgabe passt zum beschriebenen System?",
        "xp": 25,
        "afb": 2,
        "options": [
          [
            "a",
            "Bildpixel"
          ],
          [
            "b",
            "sichtbar beschädigt / unauffällig"
          ],
          [
            "c",
            "Kameramodell"
          ],
          [
            "d",
            "Paketgewicht"
          ]
        ],
        "correct": "b",
        "solution": "„sichtbar beschädigt / unauffällig“.",
        "explanation": "Das System soll eine Klassifikation liefern."
      },
      {
        "id": "p1-3",
        "section": "product1",
        "title": "Hidden Layer beschreiben",
        "type": "free",
        "prompt": "Formuliere einen Satz, der die Aufgabe der verborgenen Schicht im Paket-Beispiel korrekt beschreibt.",
        "xp": 30,
        "afb": 2,
        "placeholder": "Ein fachlich präziser Satz.",
        "solution": "Die verborgene Schicht kombiniert und verarbeitet Merkmale des Bildes weiter, bevor die Ausgabeschicht die Klassifikation erzeugt.",
        "criteria": [
          "Verarbeitung/Kombination wird genannt.",
          "Kein falsches Versprechen, dass einzelne Neuronen exakt bestimmte Schäden „verstehen“."
        ]
      },
      {
        "id": "p1-4",
        "section": "product1",
        "title": "Lernprodukt: Blackbox-Karte",
        "type": "product",
        "prompt": "Fülle die Blackbox-Karte aus. Vergleiche anschließend mit der Musterlösung und markiere dein Lernprodukt selbst als erledigt.",
        "xp": 55,
        "afb": 3,
        "productTitle": "Öffne die Blackbox · Paketkontrolle",
        "productSubtitle": "Beschrifte das vorhandene Netz und erkläre den Informationsweg.",
        "productIcon": "🧩",
        "fields": [
          {
            "key": "input",
            "label": "Eingabe: Was erhält das Netz?",
            "kind": "input",
            "placeholder": "Art der Eingabe nennen",
            "minChars": 5
          },
          {
            "key": "inputLayer",
            "label": "Aufgabe der Eingabeschicht",
            "kind": "textarea",
            "placeholder": "Kurz erklären, was die Eingabeschicht aufnimmt.",
            "minChars": 20
          },
          {
            "key": "hidden",
            "label": "Aufgabe der verborgenen Schicht",
            "kind": "textarea",
            "placeholder": "Kurz erklären, was intern mit Signalen geschieht.",
            "minChars": 20
          },
          {
            "key": "output",
            "label": "Ausgabe des Netzes",
            "kind": "input",
            "placeholder": "Welche Ausgabe soll entstehen?",
            "minChars": 5
          },
          {
            "key": "flow",
            "label": "Informationsweg in einem Satz",
            "kind": "textarea",
            "placeholder": "Beschreibe den Weg von der Eingabe zur Ausgabe.",
            "minChars": 35
          }
        ],
        "solution": "Beispiel: Eingabe = Kamerabild bzw. daraus bereitgestellte Bildmerkmale. Eingabeschicht = nimmt die Eingabewerte auf. Verborgene Schicht = kombiniert und verarbeitet Signale intern weiter. Ausgabeschicht = liefert z. B. „sichtbar beschädigt“ oder „unauffällig“. Informationsweg: Bilddaten → Eingabeschicht → interne Verarbeitung in verborgenen Neuronen → Ausgabeschicht → Klassifikation.",
        "criteria": [
          "Eingabe und Ausgabe passen zum Fall.",
          "Alle drei Schichtarten werden korrekt beschrieben.",
          "Der Informationsfluss ist nachvollziehbar."
        ]
      },
      {
        "id": "p1-b",
        "section": "product1",
        "title": "Bonus: Blackbox verbessern",
        "type": "free",
        "prompt": "Welche zusätzliche Information könnte neben dem Kamerabild hilfreich sein – und warum? Trenne dabei klar zwischen dem neuronalen Netz und einem gesamten Unternehmenssystem.",
        "xp": 45,
        "afb": 3,
        "placeholder": "Eine Zusatzinformation mit Begründung.",
        "solution": "Beispielsweise könnte ein Gesamtsystem zusätzlich Sensordaten wie Stoßmessungen nutzen. Ob diese Daten in genau dasselbe neuronale Netz eingehen, hängt vom Systemdesign ab. Wichtig ist die Unterscheidung zwischen dem einzelnen Modell und dem gesamten Informationssystem.",
        "criteria": [
          "Du nennst eine plausible Zusatzinformation.",
          "Du unterscheidest Modell und Gesamtsystem."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "weights",
    "nav": "Wichtungen",
    "icon": "🎚️",
    "title": "Kapitel 5: Wichtungen – manche Signale wirken stärker",
    "kicker": "Einfluss von Verbindungen verstehen",
    "content": "\n<div class=\"plenum-card\"><span class=\"card-icon\">⚖️</span><div><span class=\"eyebrow\">Denkfrage</span><h3>Sind für eine Produktempfehlung alle Informationen gleich wichtig?</h3><p>Vergleicht: „Kunde hat das Produkt fünfmal angesehen“, „Kunde kaufte ähnliche Produkte“ und „Kunde änderte die Fenstergröße“. Welche Information sollte vermutlich stärker wirken?</p></div></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Wichtung</div><p>Eine <strong>Wichtung</strong> bestimmt, <strong>wie stark eine Verbindung bzw. ein Eingangssignal die weitere Verarbeitung beeinflusst</strong>. Große Beträge können einen stärkeren Einfluss bedeuten; das Vorzeichen kann die Richtung des Einflusses verändern.</p></div>\n<div class=\"weight-lines\"><div><span>Interesse</span><i class=\"w9\"></i><b>0,9</b></div><div><span>Bewertung</span><i class=\"w5\"></i><b>0,5</b></div><div><span>Preisvorteil</span><i class=\"w2\"></i><b>0,2</b></div></div>\n<div class=\"info-note\"><strong>Lesen statt Formeln pauken:</strong> Im Kurs nutzt du einfache Zahlen, um die Wirkung von Wichtungen zu verstehen. Du musst keine komplexen Netze berechnen.</div>\n<h3 class=\"section-subtitle\">Mini-Rechenidee</h3><p>Für ein einzelnes vereinfachtes Neuron kann man sich vorstellen, dass Eingangswerte mit ihren Wichtungen multipliziert und anschließend zusammengeführt werden:</p>\n<div class=\"formula-card\"><strong>vereinfachter Eingangswert:</strong> <span>x₁ · w₁ + x₂ · w₂ + …</span></div>\n<p>Beispiel: <strong>1 · 0,8 + 0,5 · 0,4 = 1,0</strong>. Entscheidend ist hier nicht die Formel selbst, sondern die Beobachtung: Ändert sich eine Wichtung, kann sich auch das Ergebnis verändern.</p>\n<div class=\"interactive-lab\" id=\"weightLab\"><div><span class=\"eyebrow\">Experiment · Gewicht-Labor</span><h3>Verändere die Wichtungen</h3><p>Die Eingaben bleiben fest: Interesse = 1,0 · Bewertung = 0,7 · Preisvorteil = 0,5. Verändere nur die Wichtungen.</p></div><div class=\"lab-grid\"><label>Interesse <input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.8\" data-w=\"0\"><output>0.8</output></label><label>Bewertung <input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.5\" data-w=\"1\"><output>0.5</output></label><label>Preisvorteil <input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.2\" data-w=\"2\"><output>0.2</output></label></div><div class=\"lab-result\"><span>gewichtete Summe</span><strong id=\"weightSum\">1.25</strong><span>bei Schwelle 1,0</span><b id=\"weightDecision\">Ausgabe: 1</b></div></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Woher kommen Wichtungen?</div><p>Bei einem trainierten neuronalen Netz werden die <strong>Wichtungen während des Trainings angepasst</strong>. Vereinfacht werden Vorhersagen mit gewünschten Ergebnissen verglichen und Parameter so verändert, dass die Fehler kleiner werden. Ein Programmierer legt in realen Netzen nicht jede einzelne Wichtung von Hand fest.</p></div>\n",
    "tasks": [
      {
        "id": "w-1",
        "section": "weights",
        "title": "Stärksten Einfluss erkennen",
        "type": "single",
        "prompt": "Welche Verbindung besitzt in der Darstellung den stärksten positiven Einfluss?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "Gewicht 0,9"
          ],
          [
            "b",
            "Gewicht 0,5"
          ],
          [
            "c",
            "Gewicht 0,2"
          ],
          [
            "d",
            "Alle gleich"
          ]
        ],
        "correct": "a",
        "solution": "0,9 ist der größte der gezeigten positiven Gewichtswerte.",
        "explanation": "Bei gleichen Eingangswerten wirkt eine größere positive Wichtung stärker."
      },
      {
        "id": "w-2",
        "section": "weights",
        "title": "Wichtung definieren",
        "type": "text",
        "prompt": "Ergänze den Fachbegriff: Der Zahlenwert, der bestimmt, wie stark eine Verbindung die Verarbeitung beeinflusst, heißt …",
        "xp": 20,
        "afb": 1,
        "accepted": [
          "Wichtung",
          "Gewicht",
          "weight"
        ],
        "solution": "Wichtung (Gewicht).",
        "explanation": "Wichtungen sind veränderbare Parameter des Netzes."
      },
      {
        "id": "w-3",
        "section": "weights",
        "title": "Mini-Rechnung",
        "type": "number",
        "prompt": "Berechne: Eingang 1 = 1 mit Gewicht 0,8; Eingang 2 = 0,5 mit Gewicht 0,4. Wie groß ist 1·0,8 + 0,5·0,4?",
        "xp": 30,
        "afb": 2,
        "correct": 1.0,
        "tolerance": 0.001,
        "solution": "1,0",
        "explanation": "0,8 + 0,2 = 1,0."
      },
      {
        "id": "w-4",
        "section": "weights",
        "title": "Vorher / Nachher",
        "type": "single",
        "prompt": "Die Eingaben bleiben gleich. Gewicht A steigt von 0,2 auf 0,9. Was ist die direkteste Aussage?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Eingabe A beeinflusst die weitere Verarbeitung nun stärker."
          ],
          [
            "b",
            "Eingabe A verschwindet."
          ],
          [
            "c",
            "Die Ausgabeschicht wird automatisch entfernt."
          ],
          [
            "d",
            "Das Netz hat keine Wichtungen mehr."
          ]
        ],
        "correct": "a",
        "solution": "Eingabe A beeinflusst die Verarbeitung nun stärker.",
        "explanation": "Eine höhere Wichtung verstärkt bei gleichem Eingangswert den Beitrag dieser Verbindung."
      },
      {
        "id": "w-5",
        "section": "weights",
        "title": "Zwei Ausgaben vergleichen",
        "type": "single",
        "prompt": "Ein vereinfachtes Neuron nutzt eine Schwelle von 0,8. Fall A ergibt durch seine Wichtungen eine Summe von 0,9; Fall B ergibt 0,5. Welche Ausgabe passt bei einer 0/1-Schwellenfunktion?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "A → 1, B → 0"
          ],
          [
            "b",
            "A → 0, B → 1"
          ],
          [
            "c",
            "beide → 1"
          ],
          [
            "d",
            "beide → 0"
          ]
        ],
        "correct": "a",
        "solution": "A → 1, B → 0.",
        "explanation": "Nur Fall A erreicht oder überschreitet die Schwelle 0,8."
      },
      {
        "id": "w-6",
        "section": "weights",
        "title": "Gewichte und Training",
        "type": "order",
        "prompt": "Bringe das vereinfachte Trainingsprinzip in eine sinnvolle Reihenfolge.",
        "xp": 30,
        "afb": 2,
        "items": [
          [
            "a",
            "Wichtungen werden angepasst"
          ],
          [
            "b",
            "Modell erzeugt eine Ausgabe"
          ],
          [
            "c",
            "Trainingsbeispiel wird eingegeben"
          ],
          [
            "d",
            "Ausgabe wird mit gewünschtem Ergebnis verglichen"
          ]
        ],
        "correct": [
          "c",
          "b",
          "d",
          "a"
        ],
        "solution": "Trainingsbeispiel → Ausgabe → Vergleich → Wichtungen anpassen.",
        "explanation": "Das ist eine stark vereinfachte Darstellung des Lernprozesses."
      },
      {
        "id": "w-7",
        "section": "weights",
        "title": "Negative Wichtung",
        "type": "free",
        "prompt": "Erkläre, was eine negative Wichtung vereinfacht bedeuten kann, ohne eine konkrete Formel zu berechnen.",
        "xp": 40,
        "afb": 3,
        "placeholder": "2–3 Sätze.",
        "solution": "Eine negative Wichtung kann dazu führen, dass ein Eingangssignal den Gesamtwert in die entgegengesetzte Richtung beeinflusst bzw. die Aktivierung eines nachfolgenden Neurons verringert. Die genaue Wirkung hängt vom restlichen Netz und der Aktivierungsfunktion ab.",
        "criteria": [
          "Du nennst einen entgegenwirkenden Einfluss.",
          "Du vermeidest die Aussage „negativ = falsch“."
        ]
      },
      {
        "id": "w-8",
        "section": "weights",
        "title": "Gewichte beurteilen",
        "type": "free",
        "prompt": "ShopSmart gewichtet die zufällige Bildschirmbreite stärker als wiederholte Klicks auf Laufschuhe. Beurteile diese Modellidee.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Beurteile die Plausibilität und begründe.",
        "solution": "Die Gewichtung wäre ohne weitere Begründung kaum plausibel, weil wiederholte Interaktionen mit Laufschuhen einen direkten Bezug zur Empfehlungsaufgabe haben, die zufällige Bildschirmbreite dagegen vermutlich nicht. In einem realen Modell müssten Relevanz und Datenqualität empirisch geprüft werden.",
        "criteria": [
          "Du stellst einen Bezug zur Aufgabe her.",
          "Du begründest, warum das relevante Merkmal stärker wirken sollte."
        ]
      },
      {
        "id": "w-b",
        "section": "weights",
        "title": "Bonus: Gewichte im Playground",
        "type": "free",
        "prompt": "Öffne optional TensorFlow Playground. Beobachte die Linien zwischen Neuronen und beschreibe, wie das Tool Gewichte sichtbar macht.",
        "xp": 45,
        "afb": 2,
        "placeholder": "2–4 Beobachtungen.",
        "solution": "TensorFlow Playground visualisiert Verbindungen farblich und über ihre Stärke. Positive und negative Gewichte werden unterschiedlich dargestellt; stärkere Verbindungen erscheinen deutlicher. Die genaue Darstellung ist eine Visualisierung des Modells.",
        "criteria": [
          "Du beschreibst mindestens eine visuelle Eigenschaft.",
          "Du stellst den Bezug zu Gewichten her."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "activation",
    "nav": "Aktivierung",
    "icon": "⚡",
    "title": "Kapitel 6: Aktivierungsfunktionen",
    "kicker": "Welches Signal gibt ein Neuron weiter?",
    "content": "\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Aktivierungsfunktion</div><p>Eine <strong>Aktivierungsfunktion</strong> bestimmt, <strong>welchen Ausgabewert ein künstliches Neuron aus seinem berechneten Eingangswert erzeugt und weitergibt</strong>.</p></div>\n<img class=\"wide-diagram\" src=\"/assets/activation.svg\" alt=\"Vereinfachte Graphen von Schwellenfunktion, ReLU und Sigmoid\">\n<div class=\"activation-grid\"><div><span>🚦</span><h4>Schwellenfunktion</h4><p>Unterhalb einer festgelegten Schwelle wird z. B. <strong>0</strong> ausgegeben, ab der Schwelle <strong>1</strong>.</p></div><div><span>📐</span><h4>ReLU</h4><p>In der Standardform werden <strong>negative Werte zu 0</strong>; positive Werte werden <strong>weitergegeben</strong>.</p></div><div><span>〰️</span><h4>Sigmoid</h4><p>Die Funktion liefert einen Wert <strong>zwischen 0 und 1</strong>. Große positive Eingaben liegen nahe 1, große negative nahe 0.</p></div></div>\n<div class=\"info-note\"><strong>Prüfungsrelevant ist die Funktion, nicht das Auswendiglernen komplizierter Formeln.</strong> Du sollst erklären können, warum eine Aktivierungsfunktion gebraucht wird und typische Ausgaben einfacher Funktionen erkennen.</div>\n<div class=\"interactive-lab\" id=\"activationLab\"><div><span class=\"eyebrow\">Experiment · Aktivierungs-Labor</span><h3>Ein Eingangswert – drei Funktionen</h3><p>Bewege den Regler und vergleiche die Ausgaben.</p></div><label class=\"activation-slider\">Eingangswert z <input type=\"range\" min=\"-3\" max=\"3\" step=\"0.1\" value=\"0.5\" id=\"activationInput\"><output id=\"activationInputOut\">0.5</output></label><div class=\"activation-results\"><div><span>Schwelle 0</span><b id=\"thresholdOut\">1</b></div><div><span>ReLU</span><b id=\"reluOut\">0.5</b></div><div><span>Sigmoid</span><b id=\"sigmoidOut\">0.62</b></div></div></div>\n<div class=\"source-row\"><a class=\"source-link\" href=\"https://www.tensorflow.org/api_docs/python/tf/keras/activations/relu\" target=\"_blank\" rel=\"noopener\">📘 TensorFlow: ReLU</a><a class=\"source-link\" href=\"https://www.tensorflow.org/api_docs/python/tf/keras/activations/sigmoid\" target=\"_blank\" rel=\"noopener\">📘 TensorFlow: Sigmoid</a></div>\n",
    "tasks": [
      {
        "id": "a-1",
        "section": "activation",
        "title": "Aufgabe der Aktivierungsfunktion",
        "type": "single",
        "prompt": "Welche Beschreibung trifft die Aktivierungsfunktion am besten?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "Sie bestimmt, welchen Ausgabewert das Neuron weitergibt."
          ],
          [
            "b",
            "Sie speichert die Login-Daten."
          ],
          [
            "c",
            "Sie ersetzt die Eingabeschicht."
          ],
          [
            "d",
            "Sie löscht alle Wichtungen."
          ]
        ],
        "correct": "a",
        "solution": "Sie bestimmt aus dem berechneten Eingangswert den Ausgabewert des Neurons.",
        "explanation": "Damit beeinflusst sie, welche Signale in die nächste Schicht gelangen."
      },
      {
        "id": "a-2",
        "section": "activation",
        "title": "Funktionen unterscheiden",
        "type": "matching",
        "prompt": "Ordne die typische Eigenschaft der Aktivierungsfunktion zu.",
        "xp": 20,
        "afb": 1,
        "pairs": [
          [
            "Schwellenfunktion",
            "z. B. 0 oder 1"
          ],
          [
            "ReLU",
            "negative Werte werden in der Standardform 0"
          ],
          [
            "Sigmoid",
            "Ausgabe zwischen 0 und 1"
          ]
        ],
        "solution": "Schwelle → diskrete 0/1-Ausgabe; ReLU → negative Werte 0; Sigmoid → zwischen 0 und 1.",
        "explanation": "Diese drei Funktionen illustrieren unterschiedliche Ausgabeverhalten."
      },
      {
        "id": "a-3",
        "section": "activation",
        "title": "Schwelle anwenden",
        "type": "matching",
        "prompt": "Schwellenwert = 0,5. Ordne die Ausgaben zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "Eingang 0,2",
            "Ausgabe 0"
          ],
          [
            "Eingang 0,5",
            "Ausgabe 1"
          ],
          [
            "Eingang 0,9",
            "Ausgabe 1"
          ]
        ],
        "solution": "0,2 → 0; 0,5 → 1; 0,9 → 1.",
        "explanation": "Ab der Schwelle 0,5 wird 1 ausgegeben."
      },
      {
        "id": "a-4",
        "section": "activation",
        "title": "ReLU lesen",
        "type": "matching",
        "prompt": "Ordne die Standard-ReLU-Ausgabe zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "-2",
            "0"
          ],
          [
            "-0,5",
            "0"
          ],
          [
            "1",
            "1"
          ],
          [
            "3",
            "3"
          ]
        ],
        "solution": "Negative Werte → 0; positive Werte bleiben erhalten.",
        "explanation": "Standard-ReLU entspricht vereinfacht max(0, x)."
      },
      {
        "id": "a-5",
        "section": "activation",
        "title": "Sigmoid interpretieren",
        "type": "single",
        "prompt": "Welche Ausgabe kann eine Sigmoidfunktion typischerweise liefern?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "0,73"
          ],
          [
            "b",
            "5,8"
          ],
          [
            "c",
            "-3"
          ],
          [
            "d",
            "nur exakt 0 oder 1"
          ]
        ],
        "correct": "a",
        "solution": "0,73.",
        "explanation": "Die Sigmoidfunktion liefert Werte zwischen 0 und 1."
      },
      {
        "id": "a-6",
        "section": "activation",
        "title": "Passende Funktion",
        "type": "single",
        "prompt": "Ein vereinfachtes Unterrichtsmodell soll ausschließlich zwischen „Signal aus“ und „Signal an“ unterscheiden. Welche Funktion ist dafür am anschaulichsten?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Schwellenfunktion"
          ],
          [
            "b",
            "beliebige Webseite"
          ],
          [
            "c",
            "keine Aktivierungsfunktion"
          ],
          [
            "d",
            "Dateikompression"
          ]
        ],
        "correct": "a",
        "solution": "Eine Schwellenfunktion ist für ein einfaches 0/1-Modell besonders anschaulich.",
        "explanation": "Sie zeigt direkt, wie ein Grenzwert eine diskrete Ausgabe erzeugen kann."
      },
      {
        "id": "a-7",
        "section": "activation",
        "title": "Warum nicht nur linear?",
        "type": "free",
        "prompt": "Erkläre auf dem Niveau dieses Kurses, warum Aktivierungsfunktionen mehr leisten als eine bloße Weitergabe des unveränderten Eingangswerts.",
        "xp": 40,
        "afb": 3,
        "placeholder": "2–4 Sätze.",
        "solution": "Aktivierungsfunktionen verändern den berechneten Wert nach einer festgelegten Regel. Dadurch kann ein Neuron z. B. nur ab einer Schwelle reagieren, negative Werte abschneiden oder Werte in einen bestimmten Bereich bringen. So entsteht eine zusätzliche nichtlineare Verarbeitung.",
        "criteria": [
          "Du nennst eine konkrete Veränderung des Eingangswerts.",
          "Du stellst den Bezug zur Ausgabe des Neurons her."
        ]
      },
      {
        "id": "a-8",
        "section": "activation",
        "title": "Funktion wechseln",
        "type": "free",
        "prompt": "Ein Neuron erhält den Wert -1. Vergleiche die Ausgabe bei Standard-ReLU und bei einer Schwellenfunktion mit Schwelle 0 (Ausgabe 0 unterhalb, 1 ab Schwelle).",
        "xp": 40,
        "afb": 3,
        "placeholder": "Nenne beide Ausgaben und erkläre kurz.",
        "solution": "ReLU(-1) = 0. Bei der beschriebenen Schwellenfunktion liegt -1 unter 0, also ist die Ausgabe ebenfalls 0. Die Funktionen können bei anderen Eingangswerten unterschiedlich reagieren.",
        "criteria": [
          "ReLU-Ausgabe 0.",
          "Schwellen-Ausgabe 0.",
          "Kurze Erklärung über die jeweilige Regel."
        ]
      },
      {
        "id": "a-b",
        "section": "activation",
        "title": "Bonus: Graphen erklären",
        "type": "free",
        "prompt": "Erkläre anhand der drei Graphen, woran man Schwellenfunktion, ReLU und Sigmoid optisch unterscheiden kann.",
        "xp": 45,
        "afb": 3,
        "placeholder": "Beschreibe die Form der drei Graphen.",
        "solution": "Die Schwellenfunktion springt an einem Grenzwert von 0 auf 1. ReLU liegt für negative Werte bei 0 und steigt für positive Werte geradlinig. Sigmoid verläuft S-förmig und nähert sich 0 bzw. 1 an.",
        "criteria": [
          "Alle drei Graphformen werden unterschieden.",
          "Die Beschreibung passt zur Funktion."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "interplay",
    "nav": "Zusammenspiel",
    "icon": "🔗",
    "title": "Kapitel 7: Wichtungen und Aktivierungsfunktionen zusammendenken",
    "kicker": "Vom Eingangssignal zum weitergegebenen Wert",
    "content": "\n<div class=\"flow-diagram big\"><div class=\"flow-node\">Eingaben<br><small>x₁, x₂, …</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Wichtungen<br><small>Einfluss verändern</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Neuron<br><small>Werte zusammenführen</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Aktivierungsfunktion<br><small>Ausgabewert bestimmen</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Signal weitergeben</div></div>\n<div class=\"concept-grid two\"><div class=\"question-card\"><span>W</span><h4>Wichtungen</h4><p>Bestimmen, <strong>wie stark</strong> verschiedene Eingangssignale einwirken.</p></div><div class=\"question-card\"><span>A</span><h4>Aktivierungsfunktion</h4><p>Bestimmt, <strong>welcher Ausgabewert</strong> aus dem zusammengeführten Eingang entsteht.</p></div></div>\n<div class=\"case-card\"><span class=\"eyebrow\">Mini-Fall</span><h3>Gleiche Eingaben – andere Wichtungen</h3><p>Ein vereinfachtes Neuron erhält immer dieselben Eingaben. In Variante A führen die Wichtungen zu 0,9, in Variante B zu 0,4. Bei einer Schwelle von 0,6 entsteht dadurch <strong>A → 1</strong> und <strong>B → 0</strong>.</p><p>Damit wird sichtbar: <strong>Wichtungen beeinflussen den berechneten Eingang; die Aktivierungsfunktion übersetzt diesen Wert in die Ausgabe des Neurons.</strong></p></div>\n",
    "tasks": [
      {
        "id": "i-1",
        "section": "interplay",
        "title": "Reihenfolge sichern",
        "type": "order",
        "prompt": "Ordne den vereinfachten Ablauf.",
        "xp": 20,
        "afb": 1,
        "items": [
          [
            "a",
            "Aktivierungsfunktion"
          ],
          [
            "b",
            "Eingaben"
          ],
          [
            "c",
            "Signal weitergeben"
          ],
          [
            "d",
            "gewichtete Verarbeitung"
          ]
        ],
        "correct": [
          "b",
          "d",
          "a",
          "c"
        ],
        "solution": "Eingaben → gewichtete Verarbeitung → Aktivierungsfunktion → Signal weitergeben.",
        "explanation": "Wichtungen wirken vor der Aktivierungsfunktion auf die Verarbeitung."
      },
      {
        "id": "i-2",
        "section": "interplay",
        "title": "W oder A?",
        "type": "matching",
        "prompt": "Ordne die Aussage dem passenden Begriff zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "bestimmt die Stärke des Einflusses einer Verbindung",
            "Wichtung"
          ],
          [
            "bestimmt den Ausgabewert eines Neurons",
            "Aktivierungsfunktion"
          ],
          [
            "kann während des Trainings angepasst werden",
            "Wichtung"
          ],
          [
            "kann z. B. ReLU sein",
            "Aktivierungsfunktion"
          ]
        ],
        "solution": "Einflussstärke → Wichtung; Ausgaberegel → Aktivierungsfunktion.",
        "explanation": "Die Begriffe erfüllen unterschiedliche Aufgaben."
      },
      {
        "id": "i-3",
        "section": "interplay",
        "title": "Ausgabe erkennen",
        "type": "single",
        "prompt": "Schwelle = 0,6. Die gewichtete Verarbeitung ergibt 0,75. Welche 0/1-Ausgabe entsteht?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "1"
          ],
          [
            "b",
            "0"
          ],
          [
            "c",
            "0,75 bleibt immer unverändert"
          ],
          [
            "d",
            "nicht bestimmbar"
          ]
        ],
        "correct": "a",
        "solution": "1.",
        "explanation": "0,75 überschreitet die Schwelle 0,6."
      },
      {
        "id": "i-4",
        "section": "interplay",
        "title": "Gewicht ändern",
        "type": "single",
        "prompt": "Die Aktivierungsfunktion bleibt gleich, aber eine wichtige positive Wichtung wird stark verkleinert. Was kann passieren?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Der zusammengeführte Eingangswert sinkt und die Aktivierung kann wechseln."
          ],
          [
            "b",
            "Die Eingabeschicht verschwindet."
          ],
          [
            "c",
            "Die Funktion wird automatisch zu Sigmoid."
          ],
          [
            "d",
            "Wichtungen haben keinen Einfluss."
          ]
        ],
        "correct": "a",
        "solution": "Der Eingangswert kann sinken und dadurch kann sich die Ausgabe der Aktivierungsfunktion ändern.",
        "explanation": "Genau dieses Zusammenspiel ist zentral."
      },
      {
        "id": "i-5",
        "section": "interplay",
        "title": "Funktion ändern",
        "type": "single",
        "prompt": "Die Wichtungen bleiben gleich. Statt ReLU wird eine 0/1-Schwellenfunktion verwendet. Was ist sicher?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Die Regel für den Ausgabewert des Neurons ändert sich."
          ],
          [
            "b",
            "Alle Wichtungen werden automatisch 0."
          ],
          [
            "c",
            "Die Eingaben werden gelöscht."
          ],
          [
            "d",
            "Das Netz hat keine Ausgabe mehr."
          ]
        ],
        "correct": "a",
        "solution": "Die Regel für die Ausgabe des Neurons ändert sich.",
        "explanation": "Die Aktivierungsfunktion bestimmt die Transformation des berechneten Eingangswerts."
      },
      {
        "id": "i-6",
        "section": "interplay",
        "title": "Zentrale Erklärung",
        "type": "free",
        "prompt": "Erkläre in eigenen Worten den Unterschied zwischen Wichtung und Aktivierungsfunktion.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Formuliere 2–4 Sätze.",
        "solution": "Wichtungen bestimmen, wie stark einzelne Eingangssignale in die Verarbeitung eingehen. Die Aktivierungsfunktion setzt den daraus berechneten Wert nach einer bestimmten Regel in den Ausgabewert des Neurons um.",
        "criteria": [
          "Einflussstärke wird den Wichtungen zugeordnet.",
          "Ausgaberegel wird der Aktivierungsfunktion zugeordnet."
        ]
      },
      {
        "id": "i-7",
        "section": "interplay",
        "title": "Fehleranalyse",
        "type": "free",
        "prompt": "Ein Schüler sagt: „Die Aktivierungsfunktion legt fest, welches Eingabemerkmal am wichtigsten ist.“ Korrigiere die Aussage.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Korrigiere präzise.",
        "solution": "Welche Eingaben stärker wirken, wird über Wichtungen beeinflusst. Die Aktivierungsfunktion bestimmt dagegen, wie der zusammengeführte Eingangswert eines Neurons in einen Ausgabewert übersetzt wird.",
        "criteria": [
          "Du ordnest „wichtig/starker Einfluss“ den Wichtungen zu.",
          "Du beschreibst die Aktivierungsfunktion korrekt."
        ]
      },
      {
        "id": "i-b",
        "section": "interplay",
        "title": "Bonus: Zwei Varianten",
        "type": "free",
        "prompt": "Erfinde zwei Gewichtskonfigurationen für dieselben drei Eingaben, die bei einer Schwelle von 1,0 zu unterschiedlichen 0/1-Ausgaben führen. Eine kurze Rechnung genügt.",
        "xp": 45,
        "afb": 3,
        "placeholder": "Variante A und B mit einfacher Summe.",
        "solution": "Beispiel bei Eingaben 1, 1, 1: A: 0,5+0,4+0,3=1,2 → Ausgabe 1. B: 0,2+0,3+0,1=0,6 → Ausgabe 0. Andere korrekte Beispiele sind möglich.",
        "criteria": [
          "Gleiche Eingaben in beiden Varianten.",
          "Eine Summe ≥ 1,0 und eine < 1,0."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "fullnet",
    "nav": "Gesamtnetz",
    "icon": "🕸️",
    "title": "Kapitel 8: Das vollständige neuronale Netz",
    "kicker": "Alle Bausteine in einem Modell",
    "content": "\n<img class=\"wide-diagram\" src=\"/assets/network.svg\" alt=\"Vollständiges vereinfachtes neuronales Netz\">\n<div class=\"flow-diagram big final-flow\"><div class=\"flow-node\">📥 Eingabeschicht</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">🎚️ gewichtete Verbindungen</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">🧩 verborgene Schicht<br><small>Neuronen + Aktivierung</small></div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">🎚️ weitere Wichtungen</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">📤 Ausgabeschicht</div></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Merksatz · Informationsfluss</div><p>Die <strong>Eingabeschicht</strong> nimmt Merkmale auf. Über <strong>gewichtete Verbindungen</strong> gelangen Signale zu Neuronen in <strong>verborgenen Schichten</strong>. Dort bestimmen <strong>Aktivierungsfunktionen</strong> die weitergegebenen Werte. Die <strong>Ausgabeschicht</strong> liefert schließlich das Ergebnis.</p></div>\n<div class=\"info-note\"><strong>Wichtig:</strong> Das Schaubild ist ein vereinfachtes Feedforward-Modell. Moderne KI-Systeme können sehr viel komplexer aufgebaut sein. Für dieses Thema geht es um die grundlegenden Funktionsbausteine.</div>\n",
    "tasks": [
      {
        "id": "f-1",
        "section": "fullnet",
        "title": "Bausteine benennen",
        "type": "matching",
        "prompt": "Ordne den Begriff der passenden Funktion zu.",
        "xp": 20,
        "afb": 1,
        "pairs": [
          [
            "Eingabeschicht",
            "nimmt Merkmale auf"
          ],
          [
            "Wichtung",
            "verändert Einflussstärke"
          ],
          [
            "verborgene Schicht",
            "verarbeitet intern weiter"
          ],
          [
            "Aktivierungsfunktion",
            "bestimmt Neuron-Ausgabe"
          ],
          [
            "Ausgabeschicht",
            "liefert Ergebnis"
          ]
        ],
        "solution": "Die fünf Zuordnungen entsprechen dem zentralen Gesamtmodell.",
        "explanation": "Diese Begriffe sollten sicher unterschieden werden können."
      },
      {
        "id": "f-2",
        "section": "fullnet",
        "title": "Kompletter Ablauf",
        "type": "order",
        "prompt": "Bringe die Bausteine in eine plausible Reihenfolge.",
        "xp": 30,
        "afb": 2,
        "items": [
          [
            "a",
            "Ausgabeschicht"
          ],
          [
            "b",
            "Eingabeschicht"
          ],
          [
            "c",
            "Aktivierungsfunktion in Hidden-Neuronen"
          ],
          [
            "d",
            "gewichtete Verbindungen"
          ],
          [
            "e",
            "verborgene Schicht"
          ]
        ],
        "correct": [
          "b",
          "d",
          "e",
          "c",
          "a"
        ],
        "solution": "Eingabeschicht → gewichtete Verbindungen → verborgene Schicht → Aktivierungsfunktionen → Ausgabeschicht.",
        "explanation": "Im realen Netz sind Gewichtung und Aktivierung an vielen Neuronen beteiligt; die Reihenfolge ist hier didaktisch vereinfacht."
      },
      {
        "id": "f-3",
        "section": "fullnet",
        "title": "ShopSmart verfolgen",
        "type": "matching",
        "prompt": "Ordne ShopSmart-Beispiele dem Netzbaustein zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "Interesse an Laufschuhen",
            "Eingabe"
          ],
          [
            "stärkerer Einfluss eines Merkmals",
            "Wichtung"
          ],
          [
            "interne Kombination mehrerer Signale",
            "verborgene Schicht"
          ],
          [
            "Regel für das Weitergeben eines Neuronwerts",
            "Aktivierungsfunktion"
          ],
          [
            "Empfehlungswert",
            "Ausgabe"
          ]
        ],
        "solution": "Interesse → Eingabe; Einfluss → Wichtung; interne Kombination → Hidden; Ausgaberegel → Aktivierung; Empfehlungswert → Ausgabe.",
        "explanation": "Der Fall lässt sich nun vollständig auf die Bausteine abbilden."
      },
      {
        "id": "f-4",
        "section": "fullnet",
        "title": "Was ändert sich?",
        "type": "single",
        "prompt": "Wenn nur eine Wichtung verändert wird, welcher Bereich bleibt definitionsgemäß unverändert?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Die Bedeutung der Eingabeschicht als Aufnahme der Merkmale"
          ],
          [
            "b",
            "Der Einfluss dieser Verbindung"
          ],
          [
            "c",
            "Der berechnete Wert kann sich ändern"
          ],
          [
            "d",
            "Die spätere Aktivierung kann sich ändern"
          ]
        ],
        "correct": "a",
        "solution": "Die Aufgabe der Eingabeschicht bleibt unverändert.",
        "explanation": "Wichtungen verändern Einflussstärken, nicht die Definition der Eingabeschicht."
      },
      {
        "id": "f-5",
        "section": "fullnet",
        "title": "Ausgabe erklären",
        "type": "free",
        "prompt": "Beschreibe den Weg einer Information durch ein einfaches neuronales Netz in 4–6 Sätzen.",
        "xp": 40,
        "afb": 2,
        "placeholder": "Beginne bei der Eingabeschicht und ende bei der Ausgabe.",
        "solution": "Die Eingabeschicht nimmt die Merkmale als Werte auf. Über Verbindungen gelangen die Werte zu Neuronen der nächsten Schicht. Wichtungen beeinflussen, wie stark die einzelnen Signale wirken. In verborgenen Schichten werden Signale kombiniert und Aktivierungsfunktionen bestimmen die weitergegebenen Werte. Dieser Prozess kann sich über mehrere Schichten wiederholen. Die Ausgabeschicht liefert schließlich das Ergebnis.",
        "criteria": [
          "Alle fünf Kernbegriffe kommen fachlich passend vor.",
          "Die Reihenfolge ist nachvollziehbar."
        ]
      },
      {
        "id": "f-6",
        "section": "fullnet",
        "title": "Fehler im Schaubild",
        "type": "free",
        "prompt": "Ein Schaubild zeigt: Ausgabeschicht → Eingabeschicht → verborgene Schicht. Erkläre, was daran für das hier behandelte Feedforward-Grundmodell falsch ist.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Korrigiere die Reihenfolge und begründe.",
        "solution": "Im vereinfachten Feedforward-Modell beginnt der Informationsfluss an der Eingabeschicht, geht durch eine oder mehrere verborgene Schichten und endet an der Ausgabeschicht. Die dargestellte Reihenfolge ist daher umgedreht bzw. falsch angeordnet.",
        "criteria": [
          "Korrekte Reihenfolge.",
          "Bezug zum Informationsfluss."
        ]
      },
      {
        "id": "f-7",
        "section": "fullnet",
        "title": "Blackbox geöffnet",
        "type": "free",
        "prompt": "Greife die Einstiegsfrage auf: Was passiert innerhalb der Blackbox von ShopSmart? Nutze mindestens vier Fachbegriffe.",
        "xp": 40,
        "afb": 3,
        "placeholder": "Erkläre die Blackbox mit Fachbegriffen.",
        "solution": "ShopSmart stellt Merkmale in der Eingabeschicht bereit. Über gewichtete Verbindungen gelangen die Werte in verborgene Schichten, in denen Neuronen Signale kombinieren. Aktivierungsfunktionen bestimmen die weitergegebenen Werte. Am Ende liefert die Ausgabeschicht einen Empfehlungswert bzw. eine Empfehlung.",
        "criteria": [
          "Mindestens vier Fachbegriffe korrekt verwendet.",
          "Von Eingabe zu Ausgabe erklärt."
        ]
      },
      {
        "id": "f-b",
        "section": "fullnet",
        "title": "Bonus: Netz zeichnen",
        "type": "free",
        "prompt": "Skizziere auf Papier ein Netz mit drei Eingabeneuronen, zwei verborgenen Schichten und zwei Ausgabeneuronen. Beschreibe anschließend, wo Wichtungen und Aktivierungsfunktionen vorkommen.",
        "xp": 45,
        "afb": 3,
        "placeholder": "Hier nur kurze Beschreibung deiner Skizze notieren.",
        "solution": "Wichtungen gehören zu den Verbindungen zwischen Neuronen. Aktivierungsfunktionen werden in den verarbeitenden Neuronen angewendet und bestimmen deren Ausgabewerte. Die Skizze sollte Eingabe → Hidden 1 → Hidden 2 → Ausgabe zeigen.",
        "criteria": [
          "Schichten korrekt angeordnet.",
          "Wichtungen und Aktivierungsfunktionen korrekt verortet."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "applications",
    "nav": "Praxis & Grenzen",
    "icon": "🏭",
    "title": "Kapitel 9: Anwendungen, Training und Grenzen",
    "kicker": "Was neuronale Netze leisten – und was nicht",
    "content": "\n<div class=\"application-grid\"><div><span>🏭</span><h4>Qualitätskontrolle</h4><p>Kamerabilder können zur Klassifikation von Produkten genutzt werden.</p></div><div><span>📩</span><h4>Nachrichten</h4><p>Textmerkmale können für Spam- oder Kategorienerkennung dienen.</p></div><div><span>🛒</span><h4>Empfehlungen</h4><p>Nutzer- und Produktmerkmale können in Empfehlungssystemen verarbeitet werden.</p></div><div><span>🗣️</span><h4>Sprache</h4><p>Audiodaten können in sprachbezogenen KI-Systemen verarbeitet werden.</p></div></div>\n<div class=\"definition-card\"><div class=\"definition-label\">Definition · Training</div><p>Beim <strong>Training</strong> werden Modellparameter wie <strong>Wichtungen</strong> anhand von Beispieldaten angepasst, damit die Ausgaben des Netzes besser zu den gewünschten Ergebnissen passen.</p></div>\n<div class=\"flow-diagram big\"><div class=\"flow-node\">Trainingsdaten</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Vorhersage</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Vergleich mit Ziel</div><div class=\"flow-arrow\">→</div><div class=\"flow-node\">Wichtungen anpassen</div></div>\n<div class=\"myth-grid\"><div class=\"myth\"><span>⚠️</span><b>Fehler sind möglich</b><p>Ein neuronales Netz liefert keine Garantie auf richtige Ergebnisse.</p></div><div class=\"myth\"><span>🧪</span><b>Datenqualität zählt</b><p>Ungeeignete oder einseitige Trainingsdaten können zu ungeeigneten Ergebnissen beitragen.</p></div><div class=\"myth\"><span>🔍</span><b>Nachvollziehbarkeit</b><p>Bei komplexen Netzen kann schwer zu erklären sein, wie genau ein einzelnes Ergebnis zustande kam.</p></div><div class=\"myth\"><span>🧠</span><b>Kein menschliches Verständnis</b><p>Eine Ausgabe bedeutet nicht automatisch, dass das Modell einen Sachverhalt wie ein Mensch „versteht“.</p></div></div>\n<div class=\"source-row\"><a class=\"source-link\" href=\"https://playground.tensorflow.org/\" target=\"_blank\" rel=\"noopener\">🧠 TensorFlow Playground</a><a class=\"source-link\" href=\"https://teachablemachine.withgoogle.com/\" target=\"_blank\" rel=\"noopener\">🧪 Teachable Machine</a></div>\n",
    "tasks": [
      {
        "id": "app-1",
        "section": "applications",
        "title": "Training verstehen",
        "type": "single",
        "prompt": "Was wird beim Training eines neuronalen Netzes typischerweise angepasst?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "unter anderem die Wichtungen"
          ],
          [
            "b",
            "die Definition von „Byte“"
          ],
          [
            "c",
            "das Betriebssystem des Nutzers"
          ],
          [
            "d",
            "die physische Bildschirmgröße"
          ]
        ],
        "correct": "a",
        "solution": "Unter anderem werden die Wichtungen angepasst.",
        "explanation": "Dadurch kann sich der Einfluss von Verbindungen verändern."
      },
      {
        "id": "app-2",
        "section": "applications",
        "title": "Grenzen kennen",
        "type": "multi",
        "prompt": "Welche Aussagen sind richtig?",
        "xp": 20,
        "afb": 1,
        "options": [
          [
            "a",
            "Neuronale Netze können Fehler machen."
          ],
          [
            "b",
            "Trainingsdaten können die Modellqualität beeinflussen."
          ],
          [
            "c",
            "Eine KI-Ausgabe beweist automatisch menschliches Verständnis."
          ],
          [
            "d",
            "Komplexe Modelle können schwer nachvollziehbar sein."
          ]
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "solution": "a, b und d sind richtig.",
        "explanation": "KI-Systeme sind technische Modelle mit Grenzen."
      },
      {
        "id": "app-3",
        "section": "applications",
        "title": "Praxis zuordnen",
        "type": "matching",
        "prompt": "Ordne den Anwendungsfall einer plausiblen Eingabe/Ausgabe-Kombination zu.",
        "xp": 30,
        "afb": 2,
        "pairs": [
          [
            "Qualitätskontrolle",
            "Kamerabild → Fehlerklasse"
          ],
          [
            "Spam-Erkennung",
            "E-Mail → Spam / kein Spam"
          ],
          [
            "Empfehlung",
            "Nutzermerkmale → Empfehlung"
          ],
          [
            "Spracherkennung",
            "Audiosignal → Text"
          ]
        ],
        "solution": "Die vier Zuordnungen zeigen unterschiedliche Lebens- und Berufskontexte.",
        "explanation": "Das Schichtenprinzip bleibt ähnlich, die Daten und Ausgaben unterscheiden sich."
      },
      {
        "id": "app-4",
        "section": "applications",
        "title": "Training sortieren",
        "type": "order",
        "prompt": "Bringe den stark vereinfachten Trainingsablauf in Reihenfolge.",
        "xp": 30,
        "afb": 2,
        "items": [
          [
            "a",
            "Wichtungen anpassen"
          ],
          [
            "b",
            "Ausgabe erzeugen"
          ],
          [
            "c",
            "Trainingsbeispiel eingeben"
          ],
          [
            "d",
            "mit Ziel vergleichen"
          ]
        ],
        "correct": [
          "c",
          "b",
          "d",
          "a"
        ],
        "solution": "Trainingsbeispiel → Ausgabe → Vergleich → Wichtungen anpassen.",
        "explanation": "Training verändert Parameter aufgrund von Rückmeldungen über Fehler."
      },
      {
        "id": "app-5",
        "section": "applications",
        "title": "Neue Daten",
        "type": "single",
        "prompt": "Ein trainiertes Modell erhält einen neuen Fall, dessen Ergebnis noch unbekannt ist. Was geschieht grundsätzlich?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "Das Netz verarbeitet die Eingaben mit seinen gelernten Parametern und erzeugt eine Ausgabe."
          ],
          [
            "b",
            "Alle Wichtungen werden sofort gelöscht."
          ],
          [
            "c",
            "Es kann nur Trainingsdaten wiederholen."
          ],
          [
            "d",
            "Es benötigt zwingend einen Menschen für jede einzelne Multiplikation."
          ]
        ],
        "correct": "a",
        "solution": "Das Netz verarbeitet neue Eingaben mit den gelernten Parametern.",
        "explanation": "Das ist der Zweck eines trainierten Modells: auf neue Fälle angewendet zu werden."
      },
      {
        "id": "app-6",
        "section": "applications",
        "title": "Fehlerquelle beurteilen",
        "type": "free",
        "prompt": "Ein Bilderkennungsmodell wurde fast nur mit hellen Produktfotos trainiert und soll nun dunkle Lagerbilder erkennen. Welche Schwierigkeit könnte auftreten?",
        "xp": 40,
        "afb": 3,
        "placeholder": "Erkläre den Zusammenhang zwischen Trainingsdaten und neuer Situation.",
        "solution": "Das Modell könnte bei den dunklen Lagerbildern schlechter funktionieren, wenn solche Bedingungen in den Trainingsdaten kaum vertreten waren. Trainingsdaten sollten die relevanten Einsatzbedingungen möglichst angemessen abdecken.",
        "criteria": [
          "Du beziehst dich auf die Verteilung/Qualität der Trainingsdaten.",
          "Du leitest eine mögliche schlechtere Leistung ab."
        ]
      },
      {
        "id": "app-7",
        "section": "applications",
        "title": "Verantwortlich formulieren",
        "type": "free",
        "prompt": "Beurteile die Aussage: „Wenn ein neuronales Netz eine hohe Ausgabe liefert, ist die Entscheidung automatisch richtig.“",
        "xp": 40,
        "afb": 3,
        "placeholder": "Begründe fachlich.",
        "solution": "Die Aussage ist falsch. Ein hoher Modellwert ist ein Ergebnis der gelernten Verarbeitung, aber Modelle können Fehler machen, unpassende Daten erhalten oder auf ungewohnte Situationen treffen. Ausgaben müssen deshalb im jeweiligen Anwendungskontext bewertet werden.",
        "criteria": [
          "Du widersprichst der Garantie.",
          "Du nennst mindestens einen Grund für mögliche Fehler."
        ]
      },
      {
        "id": "app-b",
        "section": "applications",
        "title": "Bonus: Reales Tool reflektieren",
        "type": "free",
        "prompt": "Teste optional ein Beispiel in Teachable Machine oder beobachte TensorFlow Playground. Welche Grenze oder Unsicherheit fällt dir beim Experiment auf?",
        "xp": 45,
        "afb": 3,
        "placeholder": "Beobachtung + kurze Erklärung.",
        "solution": "Mögliche Beobachtungen: Mit wenigen oder einseitigen Beispielen werden Ergebnisse instabil; ähnliche Klassen werden verwechselt; Änderungen an Daten oder Netzstruktur verändern die Ausgabe. Entscheidend ist eine nachvollziehbare Beobachtung.",
        "criteria": [
          "Konkrete Beobachtung.",
          "Bezug zu Daten, Training oder Modellverhalten."
        ],
        "bonus": true
      }
    ]
  },
  {
    "id": "final",
    "nav": "Finale",
    "icon": "🏆",
    "title": "Finale: Entwirf deine eigene Unternehmens-KI",
    "kicker": "Vom Verständnis zum einfachen Modell",
    "content": "\n<div class=\"hero-case final-mission\"><img class=\"hero-illustration\" src=\"/assets/shopsmart-ai.svg\" alt=\"KI-Design als Schaubild\"><div><span class=\"eyebrow\">Abschluss-Lernprodukt</span><h3>Du wirst zum KI-Designer</h3><p>Wähle einen Unternehmensfall. Lege sinnvolle <strong>Eingaben</strong>, eine <strong>Ausgabe</strong>, unterschiedliche <strong>Wichtungen</strong> und eine einfache <strong>Aktivierungsfunktion</strong> fest. Der Kurs baut daraus automatisch ein Schaubild.</p></div></div>\n<div class=\"case-options\"><div>🛒 Produktempfehlung im Onlineshop</div><div>📩 Kundenanfragen kategorisieren</div><div>🏭 Qualitätskontrolle per Bild</div><div>🚚 Risiko verspäteter Lieferung</div><div>🎟️ Gutschein-Einlösung einschätzen</div><div>🛡️ Spam-Nachrichten erkennen</div></div>\n<h3 class=\"section-subtitle\">Musterlösung – ein anderer Fall</h3>\n<div class=\"model-solution-card\"><span class=\"eyebrow\">Nicht als Schülerfall auswählbar</span><h3>Hotel: Hohe Frühstücksnachfrage erkennen</h3><div class=\"ai-design-preview sample\"><div class=\"design-inputs\"><span>Auslastung<br><b>hoch</b></span><span>Wochentag<br><b>mittel</b></span><span>Vorbestellungen<br><b>hoch</b></span></div><div class=\"design-arrow\">→</div><div class=\"design-hidden\">verborgene Verarbeitung<br><small>Signale kombinieren</small></div><div class=\"design-arrow\">→</div><div class=\"design-activation\">Schwelle<br><small>stark genug?</small></div><div class=\"design-arrow\">→</div><div class=\"design-output\">hohe Nachfrage<br><b>ja / nein</b></div></div><p><strong>Begründung:</strong> Belegung und Vorbestellungen erhalten eine hohe Wichtung, weil sie direkt mit der erwarteten Zahl der Frühstücksgäste zusammenhängen. Der Wochentag erhält eine mittlere Wichtung. Eine einfache Schwellenfunktion liefert „hohe Nachfrage“, wenn das kombinierte Signal stark genug ist. In einem realen System würden die Wichtungen aus Trainingsdaten gelernt und nicht einfach von Hand festgelegt.</p></div>\n<div class=\"info-note\"><strong>Anspruch:</strong> Dein Modell muss fachlich plausibel und verständlich sein – nicht technisch perfekt. Die Wichtungen „niedrig / mittel / hoch“ dienen als qualitative Darstellung.</div>\n",
    "tasks": [
      {
        "id": "fin-1",
        "section": "final",
        "title": "Planungsschritte",
        "type": "order",
        "prompt": "Bringe die Schritte für dein Lernprodukt in eine sinnvolle Reihenfolge.",
        "xp": 20,
        "afb": 1,
        "items": [
          [
            "a",
            "Ausgabe festlegen"
          ],
          [
            "b",
            "Unternehmensproblem wählen"
          ],
          [
            "c",
            "Eingaben bestimmen"
          ],
          [
            "d",
            "Wichtungen begründen"
          ],
          [
            "e",
            "Aktivierungsfunktion wählen"
          ]
        ],
        "correct": [
          "b",
          "c",
          "a",
          "d",
          "e"
        ],
        "solution": "Problem wählen → Eingaben bestimmen → Ausgabe festlegen → Wichtungen begründen → Aktivierungsfunktion wählen.",
        "explanation": "Erst wenn Aufgabe, Ein- und Ausgabe klar sind, lassen sich Wichtungen sinnvoll begründen."
      },
      {
        "id": "fin-2",
        "section": "final",
        "title": "Plausible Eingaben",
        "type": "multi",
        "prompt": "Für das Szenario „Risiko verspäteter Lieferung“: Welche Eingaben sind grundsätzlich plausibel?",
        "xp": 30,
        "afb": 2,
        "options": [
          [
            "a",
            "aktueller Versandstatus"
          ],
          [
            "b",
            "Entfernung zum Ziel"
          ],
          [
            "c",
            "Auslastung des Logistiksystems"
          ],
          [
            "d",
            "Lieblingsfarbe des Kunden"
          ]
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "solution": "Versandstatus, Entfernung und Auslastung sind plausibel; Lieblingsfarbe nicht.",
        "explanation": "Eingaben sollten einen sachlichen Bezug zur Zielausgabe haben."
      },
      {
        "id": "fin-3",
        "section": "final",
        "title": "Wichtung begründen",
        "type": "free",
        "prompt": "Wähle einen der angebotenen Fälle und begründe, welches Merkmal du hoch und welches du eher niedrig gewichten würdest.",
        "xp": 35,
        "afb": 2,
        "placeholder": "Fall nennen; ein hohes und ein niedriges Gewicht begründen.",
        "solution": "Beispiel Lieferverzögerung: „aktueller Versandstatus“ hoch, weil er direkt den Prozessfortschritt beschreibt; ein weniger direktes Merkmal eher niedrig. Andere schlüssig begründete Lösungen sind möglich.",
        "criteria": [
          "Ein Fall wird genannt.",
          "Zwei unterschiedliche Gewichtungen werden begründet."
        ]
      },
      {
        "id": "fin-4",
        "section": "final",
        "title": "Modellgrenze",
        "type": "free",
        "prompt": "Nenne eine Grenze, die du bei deinem eigenen vereinfachten KI-Modell ausdrücklich angeben solltest.",
        "xp": 35,
        "afb": 3,
        "placeholder": "Eine konkrete Grenze mit kurzer Erklärung.",
        "solution": "Mögliche Grenzen: stark vereinfachte Eingaben, qualitative statt gelernte Wichtungen, fehlende Trainingsdaten, mögliche Fehlklassifikationen oder fehlende Einflussfaktoren. Entscheidend ist eine konkrete Begründung.",
        "criteria": [
          "Konkrete Grenze.",
          "Bezug zum eigenen Modell."
        ]
      },
      {
        "id": "fin-5",
        "section": "final",
        "title": "Lernprodukt: Unternehmens-KI",
        "type": "product",
        "prompt": "Entwirf dein eigenes vereinfachtes KI-Modell. Dein Schaubild aktualisiert sich aus deinen Angaben und kann anschließend als PDF gedruckt werden.",
        "xp": 70,
        "afb": 3,
        "productKind": "aiDesign",
        "productTitle": "Meine Unternehmens-KI",
        "productSubtitle": "Eingaben → Wichtungen → verborgene Verarbeitung → Aktivierung → Ausgabe",
        "productIcon": "🚀",
        "fields": [
          {
            "key": "case",
            "label": "1 · Unternehmensproblem",
            "kind": "select",
            "options": [
              "Produktempfehlung im Onlineshop",
              "Kundenanfragen kategorisieren",
              "Qualitätskontrolle per Bild",
              "Risiko verspäteter Lieferung",
              "Gutschein-Einlösung einschätzen",
              "Spam-Nachrichten erkennen"
            ],
            "minChars": 3
          },
          {
            "key": "input1",
            "label": "2 · Eingabe 1",
            "kind": "input",
            "placeholder": "Merkmal 1",
            "minChars": 2
          },
          {
            "key": "weight1",
            "label": "Wichtung von Eingabe 1",
            "kind": "select",
            "options": [
              "niedrig",
              "mittel",
              "hoch"
            ],
            "minChars": 2
          },
          {
            "key": "input2",
            "label": "3 · Eingabe 2",
            "kind": "input",
            "placeholder": "Merkmal 2",
            "minChars": 2
          },
          {
            "key": "weight2",
            "label": "Wichtung von Eingabe 2",
            "kind": "select",
            "options": [
              "niedrig",
              "mittel",
              "hoch"
            ],
            "minChars": 2
          },
          {
            "key": "input3",
            "label": "4 · Eingabe 3",
            "kind": "input",
            "placeholder": "Merkmal 3",
            "minChars": 2
          },
          {
            "key": "weight3",
            "label": "Wichtung von Eingabe 3",
            "kind": "select",
            "options": [
              "niedrig",
              "mittel",
              "hoch"
            ],
            "minChars": 2
          },
          {
            "key": "hidden",
            "label": "5 · Was soll die verborgene Schicht grundsätzlich verarbeiten?",
            "kind": "textarea",
            "placeholder": "Beschreibe knapp, welche Signale hier kombiniert werden.",
            "minChars": 20
          },
          {
            "key": "activation",
            "label": "6 · Aktivierungsfunktion",
            "kind": "select",
            "options": [
              "einfache Schwellenfunktion",
              "ReLU",
              "Sigmoid"
            ],
            "minChars": 3
          },
          {
            "key": "output",
            "label": "7 · Gewünschte Ausgabe",
            "kind": "input",
            "placeholder": "z. B. Kategorie / Wert / Ja-Nein-Ausgabe",
            "minChars": 3
          },
          {
            "key": "reason",
            "label": "8 · Warum sind deine Wichtungen sinnvoll?",
            "kind": "textarea",
            "placeholder": "Begründe die unterschiedlichen Einflussstärken.",
            "minChars": 35
          },
          {
            "key": "limit",
            "label": "9 · Eine Grenze deines Modells",
            "kind": "textarea",
            "placeholder": "Nenne eine konkrete Vereinfachung oder mögliche Fehlerquelle.",
            "minChars": 20
          }
        ],
        "solution": "Musterlösung siehe Hotel-Beispiel oberhalb des Lernprodukts. Für deinen gewählten Fall gibt es mehrere plausible Lösungen. Prüfe: Passen die drei Eingaben wirklich zum Problem? Ist die Ausgabe eindeutig? Sind unterschiedliche Wichtungen begründet? Ist die Aktivierungsfunktion korrekt beschrieben? Enthält das Schaubild Eingabe → Wichtungen → verborgene Verarbeitung → Aktivierung → Ausgabe? Nennst du eine Grenze?",
        "criteria": [
          "Drei plausible Eingaben.",
          "Eindeutige Ausgabe.",
          "Wichtungen unterscheiden sich sinnvoll und sind begründet.",
          "Aktivierungsfunktion passend benannt.",
          "Verborgene Verarbeitung verständlich beschrieben.",
          "Mindestens eine Grenze genannt."
        ]
      },
      {
        "id": "fin-b",
        "section": "final",
        "title": "Bonus: Modell kritisch prüfen",
        "type": "free",
        "prompt": "Tausche dein Modell gedanklich mit einer anderen Gruppe. Formuliere zwei Fragen, mit denen du prüfen würdest, ob deren Eingaben, Wichtungen und Ausgabe sinnvoll zusammenpassen.",
        "xp": 45,
        "afb": 3,
        "placeholder": "Zwei Prüffragen formulieren.",
        "solution": "Beispiele: „Hat jede Eingabe einen nachvollziehbaren Bezug zur gewünschten Ausgabe?“ „Warum ist Merkmal A höher gewichtet als Merkmal B?“ „Passt die gewählte Aktivierungsfunktion zur gewünschten Art der Ausgabe?“",
        "criteria": [
          "Mindestens zwei fachliche Prüffragen.",
          "Bezug zu Eingaben/Wichtungen/Ausgabe oder Aktivierung."
        ],
        "bonus": true
      }
    ]
  }
];

export const ALL_TASKS = SECTIONS.flatMap(s=>s.tasks);
export const TASK_XP = Object.fromEntries(ALL_TASKS.map(t=>[t.id,t.xp]));
export const CORE_TASK_IDS = ALL_TASKS.filter(t=>!t.bonus).map(t=>t.id);
export const MAX_XP = ALL_TASKS.reduce((sum,t)=>sum+t.xp,0);

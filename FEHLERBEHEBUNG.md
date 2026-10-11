# GRWM 2.2 – KI-Fix (Beta)

- Hintergrundentfernung startet automatisch bei Fotoauswahl.
- Nach 90 Sekunden erscheint eine Fehlermeldung statt endlosem Laden.
- Das Originalfoto bleibt erhalten, wenn das Modell nicht funktioniert.
- KI-Erkennung der Kategorie bleibt ein separater Knopf.
- Service-Worker-Cache auf v2-2 geändert, um veraltete Dateien auszutauschen.

WICHTIG: Browsermodelle brauchen eine Internetverbindung beim ersten Start und können auf Smartphones scheitern. Das Zeitlimit bricht eine bereits laufende WASM-Berechnung technisch nicht ab. Der Fix ist nicht auf einem Samsung getestet.

Vor dem GitHub-Upload Backup der Garderobe exportieren. Alle Dateien im Hauptverzeichnis hochladen und Änderungen committen. Nach Deployment App neu öffnen.

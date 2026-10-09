# GRWM – Android PWA, Version 1

## Was bereits funktioniert
- Bilder und Kleidungsdaten lokal in IndexedDB speichern, bearbeiten und löschen.
- Marke, Größe, Kategorien (einschließlich Schmuck und Jackentypen), Farbe, Stil, Jahreszeit, Wärme und Wetterschutz.
- Bildergalerie, Suche, kombinierbare Filter und Detailansicht.
- Outfit-Vorschläge nach Regeln, Anlass, Saison und mit einem oder mehreren festgepinnten Teilen; Outfits speichern.
- Standortbasierte Wetteranzeige via Open-Meteo nach expliziter Aktivierung, einfache Wetter-Kleidungstipps.
- Startbildschirm, Widgets ein-/ausblenden und umsortieren, sechs Designs, Dark/White/System-Modus, Akzentfarbe.
- Backup-Export/-Import mit Fotos.

## Android installieren
Die Dateien müssen gemeinsam auf einer HTTPS-Webadresse bereitgestellt werden (z. B. statisches Hosting). Dann die Adresse in Chrome auf Android öffnen und im Browsermenü **App installieren** / **Zum Startbildschirm hinzufügen** auswählen. `index.html` einfach aus dem ZIP zu öffnen, ist keine zuverlässige Installation. Für automatische Standortermittlung ist HTTPS oder localhost nötig. Ein nativer APK-Build ist noch nicht enthalten.

## Datenschutz
Fotos und Kleidungsdaten werden im Browser-Speicher des Geräts abgelegt, nicht an einen Server gesendet. Die Wetterfunktion fragt nach Erlaubnis, ermittelt die Koordinaten bei Abruf und sendet sie an `api.open-meteo.com`; Standortkoordinaten werden nicht dauerhaft in der App gespeichert. Browserdaten-Löschung kann den Kleiderschrank löschen: regelmäßig Backups exportieren.

## Grenzen dieser Version
Die Outfit-Engine ist regelbasiert, keine angebundene Online-KI. Keine KI-Bilderkennung, kein echtes Modelltraining, keine Hintergrund-Ortung, keine Android-APK. Wetter benötigt Internet und Geolocation-Freigabe. Widgets lassen sich über Pfeile umsortieren, nicht per Drag-and-drop skalieren. Ein einzelner Artikel kann mehreren Outfits zugeordnet sein.

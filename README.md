# Just Kids with Dreams – Webseite

**Kein Heim. Ein Zuhause.**

Statische Webseite der Just Kids with Dreams gUG, eines Projekts der stationären Kinder- und Jugendhilfe in Dortmund und Düsseldorf. Reines HTML, CSS und JavaScript, ohne Build-Schritt und ohne externe Abhängigkeiten.

## Struktur

```
index.html               Startseite
ueber-uns.html           Über uns
wohngruppen.html         Wohngruppen
therapiecampus.html      Vision Therapiecampus
bildung.html             Bildung & Zukunft
karriere.html            Karriere
jugendaemter.html        Für Jugendämter
spenden.html             Spenden
unternehmen.html         Für Unternehmen
impact-partner.html      Impact-Partner
wohngruppe-1.html        Kampagne Wohngruppe 1: Einkaufsliste, Spenden, Förderpartner (Link im Footer)
partner-wohngruppe-1.html  Investoren Wohngruppe 1 (noindex, nicht verlinkt, nur persönlich weitergeben)
ehrenamt.html            Zeit spenden
partner.html             Partner & Netzwerk
transparenz.html         Transparenz
faq.html                 Häufige Fragen
kontakt.html             Kontakt
impressum.html           Impressum (Platzhalter)
datenschutz.html         Datenschutz (Platzhalter)
barrierefreiheit.html    Barrierefreiheit
assets/css/style.css     Gestaltung nach JKWD Corporate Design v2.0
assets/css/kampagne.css  Zusatz für die beiden Wohngruppe-1-Seiten
assets/js/main.js        Menü, Dropdown, Akkordeons, Formulare, Spenden-Widget
assets/img/              Symbolbilder (WebP), Link-Vorschau, App-Icon
assets/logos/            JKWD-Logos, Der Paritätische, Partnerlogos
assets/fonts/            Poppins und Lora, lokal gehostet
```

## Lokal ansehen

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Veröffentlichen mit GitHub Pages

1. Repository anlegen und alle Dateien hochladen (Repository zunächst **privat** lassen).
2. *Settings → Pages → Deploy from a branch → main / root*.
3. Eigene Domain unter *Settings → Pages → Custom domain* eintragen.

## Vor dem Go-live erledigen

- [ ] Impressum und Datenschutzerklärung einfügen (Impressumspflicht nach § 5 DDG, erst nach Eintragung der gUG)
- [ ] Adresse, E-Mail und Telefon in `kontakt.html` und im Footer aller Seiten eintragen
- [ ] Spendenkonto in `spenden.html` einbinden, sobald eingerichtet
- [ ] Formulare und Newsletter an einen Versanddienst anbinden (derzeit nur Bestätigungstext)
- [ ] Wohngruppe 1: Spendenstand (`IST`) und Finanzierungsstand (`FINANZIERT`, `INVESTOREN`) im Script der jeweiligen Seite pflegen, Planwerte der Mittelverwendung eintragen
- [ ] `og:image` in allen Seiten auf die absolute Adresse setzen, z. B. `https://www.DOMAIN.de/assets/img/13_link-vorschau-1200x630.jpg`
- [ ] `robots.txt` auf `Allow: /` umstellen (derzeit sind Suchmaschinen ausgesperrt)
- [ ] Freigaben: Investorenseite partner-wohngruppe-1.html (René: Darlehensnehmerin, Zinsstaffel, Risikohinweis), Impact-Partner-Seite (René), Partnernennungen und Logos (schriftlich abgelegt), Paritätischer-Mitgliedslogo NRW
- [ ] Beispielbeträge auf der Spendenseite und Stellenangebote final abstimmen

## Hinweise

- Alle Fotos sind KI-generierte Symbolbilder. Es werden keine erkennbaren Gesichter betreuter Kinder gezeigt.
- Partnerlogos werden mit Genehmigung der jeweiligen Rechteinhaber verwendet und dürfen nicht anderweitig genutzt werden.
- Schriften: SIL Open Font License 1.1, siehe `assets/fonts/LICENSE-FONTS.txt`.

© 2026 Just Kids with Dreams gUG (haftungsbeschränkt). Alle Rechte vorbehalten.

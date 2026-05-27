# 3R-EN Website

Website voor Erna de Koster — Rust, Reinheid en Regelmaat in de Kinderopvang.

## Mapstructuur

```
3R-EN/
├── index.html        ← hoofdpagina
├── css/
│   └── style.css     ← alle opmaak/stijlen
├── js/
│   └── main.js       ← animaties en formulierlogica
├── images/           ← plaats hier foto's en logo
│   └── (logo.png, foto-erna.jpg, etc.)
└── README.md
```

## Aanpassingen doorvoeren

- **Teksten wijzigen** → open `index.html` in een teksteditor (bijv. VS Code)
- **Kleuren of lettertype aanpassen** → open `css/style.css`
- **Logo of foto toevoegen** → zet het bestand in de map `images/` en verwijs ernaar in `index.html`

## Foto toevoegen aan de hero

Sla de foto van Erna op als `images/erna.jpg` en vervang in `index.html`:

```html
<!-- Vervang deze placeholder: -->
<div class="hero-photo-placeholder"></div>

<!-- Door: -->
<img src="images/erna.jpg" alt="Erna de Koster" />
```

## Contactformulier instellen via Netlify

1. Voeg aan het `<form>`-element toe: `data-netlify="true" name="contact"`
2. Voeg een verborgen veld toe: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify detecteert het formulier automatisch na je eerste deploy.
4. Instellingen → Forms → Notifications om e-mailmeldingen in te stellen.

## Deployen via GitHub + Netlify

1. Maak een nieuw repository aan op [github.com](https://github.com)
2. Upload alle bestanden (of gebruik Git):
   ```
   git init
   git add .
   git commit -m "Eerste versie 3R-EN website"
   git remote add origin https://github.com/jouwgebruikersnaam/3r-en.git
   git push -u origin main
   ```
3. Ga naar [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
4. Kies je GitHub-repository → klik op "Deploy site"
5. Klaar! Elke keer dat je een wijziging pusht naar GitHub, wordt de site automatisch bijgewerkt.

## Eigen domeinnaam koppelen (optioneel)

In Netlify: Site settings → Domain management → Add custom domain.

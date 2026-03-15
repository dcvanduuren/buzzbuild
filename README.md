# Buzzbuild AG - High-End Aannemersbedrijf

Dit is de website voor Buzzbuild, een aannemersbedrijf gespecialiseerd in hoogwaardige badkamerrenovaties in de regio Eindhoven.

## Projectstructuur

Het project is modulair opgezet voor optimale leesbaarheid en onderhoudbaarheid door toekomstige developers.

### 📂 Directory Overzicht

- `src/components/Layout/`: Bevat structurele componenten zoals `Header`, `Footer` en `BackgroundGlows`.
- `src/components/Sections/`: Bevat de verschillende secties van de single-page applicatie (Hero, Mission, Projects, etc.).
- `src/components/UI/`: Herbruikbare UI elementen zoals `Icons` en de `FAQ` component.
- `src/components/SEO/`: Centraal beheer van SEO meta-tags en Schema.org data via `SchemaManager`.
- `public/assets/images/optimized/`: Bevat alle geoptimaliseerde WebP afbeeldingen (full-size en thumbnails).
- `scripts/`: Bevat automatiseringstools zoals de image optimizer.

## Belangrijke Workflows

### 🖼️ Afbeeldingen Optimaliseren
Om de snelheid en SEO van de site te waarborgen, moeten alle nieuwe afbeeldingen geoptimaliseerd worden:
1. Plaats nieuwe JPG/PNG afbeeldingen in `public/assets/images/`.
2. Voer het volgende commando uit:
   ```bash
   node scripts/optimize-images.mjs
   ```
3. De geoptimaliseerde `.webp` versies verschijnen in de `optimized/` map.
4. Update de paden in de betreffende componenten (meestal `src/components/Sections/Projects.tsx`).

### 🌍 SEO & Geotargeting
De site is geoptimaliseerd voor lokaal bereik (Eindhoven, Veldhoven, Best).
- Teksten worden beheerd in `src/translations.ts`.
- Technische SEO (JSON-LD) wordt beheerd in `src/components/SEO/SchemaManager.tsx`.

## Ontwikkeling

```bash
# Start dev server
npm run dev

# Bouw voor productie
npm run build
```

---
*Onderhouden door Buzzbuild Development.*

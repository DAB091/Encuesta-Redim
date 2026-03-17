# Dashboard · Encuesta a Docentes

Dashboard en tiempo real para visualizar respuestas de Google Forms.
**Sin API Key de Google.** Lee la hoja directamente mediante exportación CSV pública.

## Requisito previo

Tu Google Sheet debe tener permisos de lectura pública:
- Archivo → Compartir → Cualquier persona con el enlace → Lector

## Deploy en Netlify

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "Dashboard inicial"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

### 2. Conectar con Netlify
1. Entrá a netlify.com → Add new site → Import from Git
2. Seleccioná tu repositorio
3. Dejá el build settings vacío (netlify.toml lo configura)
4. Deploy site

### 3. Configurar variables de entorno
En Netlify → Site configuration → Environment variables:

| Variable   | Valor |
|------------|-------|
| SHEET_ID   | ID de tu hoja (está en la URL de Google Sheets) |
| SHEET_GID  | 0 (o el número al final de la URL de la pestaña) |

### 4. Hacer redeploy
Luego de agregar las variables → Deploys → Trigger deploy

### 5. Activar tiempo real
Abrí el dashboard → panel de conexión → "Activar tiempo real"

## Seguridad
- No hay API Key que proteger
- La Netlify Function actúa de proxy para evitar problemas de CORS
- El .gitignore excluye el .env local

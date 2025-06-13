# ☕ Cafetería App

Sistema de contabilidad, ventas y créditos para una cafetería escolar.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación Rápida](#instalación-rápida)
- [Uso y Comandos](#uso-y-comandos)
- [Modelo de Datos](#modelo-de-datos)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Descripción

**Cafetería App** es una aplicación web diseñada para gestionar ventas, créditos, pagos e inventario en una cafetería escolar, donde los créditos y deudas se asignan a los padres/tutores de los estudiantes. Incluye panel de control, reportes y manejo multiusuario.

---

## Tecnologías

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express
- **Base de Datos:** PostgreSQL / SQLite / MySQL (según ambiente)
- **Control de versiones:** Git + GitHub

---

## Estructura del Proyecto

```text
cafeteria-app/
├── backend/   # API REST, lógica del servidor y base de datos
├── frontend/  # Aplicación web del usuario (React)
├── README.md
└── .gitignore
```

---

## Instalación Rápida

### 1. Clona el repositorio

```bash
git clone https://github.com/Ronald2/cafeteria-app.git
cd cafeteria-app
```

### 2. Instalación del Frontend

```bash
cd frontend
npm install
# Para desarrollo
npm run dev
```

### 3. Instalación del Backend

```bash
cd ../backend
npm install
# Para desarrollo
node src/app.js
```

> **Nota:** Configura las variables de entorno y la conexión a la base de datos en `backend/.env`.

---

## Uso y Comandos

### Frontend

- `npm run dev` — Inicia la app en modo desarrollo
- `npm run build` — Compila la app para producción

### Backend

- `node src/app.js` — Inicia la API
- `nodemon src/app.js` — (si tienes nodemon instalado para hot-reload)

---

## Modelo de Datos (simplificado)

| Entidad     | Campos principales                                      |
|-------------|--------------------------------------------------------|
| Padres      | id, nombre, teléfono, email                            |
| Estudiantes | id, nombre, grado, padre_id                            |
| Productos   | id, nombre, precio                                     |
| Ventas      | id, estudiante_id, padre_id, productos, total, método, fecha |
| Créditos    | id, padre_id, total, fecha, estado                     |
| Pagos       | id, credito_id, padre_id, monto, fecha                 |
| Inventario  | id, producto_id, stock, fecha_actualización            |
| Usuarios    | id, nombre, rol, password_hash                         |

---

## Contribuir

1. Haz un fork de este repo
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -am 'feat: agrega nueva funcionalidad'
   ```
4. Haz push a tu rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request

---

## Licencia

Este proyecto está licenciado bajo la MIT License.

---

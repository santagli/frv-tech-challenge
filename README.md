# 🚀 Challenge Técnico Frontend - Frávega Tech

Este repositorio contiene la resolución del challenge técnico para **Frávega Tech**.  
La aplicación está desarrollada en **Next.js (page router)** y consume la **API de GitHub Users** para listar, buscar y marcar usuarios como favoritos.

---

## 🎯 Objetivo

Crear una aplicación web que permita:  
✅ Buscar usuarios en GitHub mediante la API.  
✅ Listar los usuarios con sus nombres y avatares.  
✅ Marcar usuarios como favoritos (sin persistencia).  
✅ Mostrar detalles de un usuario seleccionado.

---

## 📌 Requisitos

### 🏠 **Home (CSR)**

- Obtener una **lista inicial** de usuarios desde la API de GitHub.
- Mostrar los usuarios en una lista con **nombres y avatares**.
- Implementar un **buscador** que filtre usuarios **haciendo peticiones a la API**.
- Cada usuario debe tener un **enlace a su página de detalle**.
- Permitir marcar y desmarcar usuarios como **favoritos** (sin necesidad de persistir).

### 👤 **Página de Detalle del Usuario (SSR)**

- Mostrar los **detalles del usuario seleccionado** desde la lista.
  - Nombre, avatar, bio y repositorios.
- Indicar si el usuario está en **favoritos** y permitir **agregar o eliminar** de la lista.

### 🎨 **Estilo**

Se puede usar:

- **CSS puro**
- **Styled-components**
- **Librerías de componentes** como Material-UI, Mantine, etc.

---

## 🔗 API Utilizada

La aplicación consume los siguientes endpoints de GitHub:

- **Lista de usuarios:**
  ```bash
  GET https://api.github.com/users
  ```
- **Buscar usuarios por nombre:**
  ```bash
  GET https://api.github.com/search/users?q={term}
  ```
- **Detalle de un usuario:**
  ```bash
  GET https://api.github.com/users/{username}
  ```

---

## 🛠️ Instalación y Ejecución

Para correr el proyecto localmente, seguí estos pasos:

### 1️⃣ **Clonar el repositorio**

```bash
git clone https://github.com/santagli/frv-tech-challenge.git
cd fravega-challenge
```

### 2️⃣ **Instalar dependencias**

```bash
npm install
# o
yarn install
```

### 3️⃣ **Ejecutar el proyecto**

```bash
npm run dev
# o
yarn dev
```

La aplicación se ejecutará en `http://localhost:3000`.

---

## 💂️️ Estructura del Proyecto

```
📂 src
 ├── 📂 components      # Componentes reutilizables
 │   ├── FavoriteButton.tsx
 │   ├── RepositoriesList.tsx
 │   ├── UserProfile.tsx
 │   ├── UserStats.tsx
 │   ├── ErrorMessage.tsx
 │   └── ...
 ├── 📂 context         # Contexto global (favoritos)
 ├── 📂 pages           # Páginas principales (Home, Detalle)
 ├── 📂 hooks           # Hooks custom
 └── 📂 types           # Tipado de datos
```

---

## 🚀 Posibles Mejoras Futuras

- 📌 Utilizar **App Router** en lugar de **Page Router** ya que es la solución que propone Next (Se hizo con page router por solicitud del proyecto)
- 📌 Agregar **unit test** por cuestiones de tiempo no se agregaron.
- 📌 Implementar **servicio** para persistir favoritos.

---

## 📅 Notas Finales

Cualquier duda escribime
🤝 **¡Gracias por revisar este challenge!**

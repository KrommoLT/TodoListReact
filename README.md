# TodoListReact

Aplicación de gestión de tareas desarrollada con **React (Functional Components + Hooks)** como parte de mi portfolio frontend.

El objetivo del proyecto es demostrar buenas prácticas en desarrollo con React, manejo eficiente del estado y construcción de interfaces limpias y reutilizables.

---

## 🎯 Objetivo del Proyecto

Construir una aplicación SPA sencilla pero bien estructurada que permita:

- Crear nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Actualizar dinámicamente la UI en función del estado

Este proyecto pone el foco en la **arquitectura de componentes, manejo del estado y experiencia de usuario**.

---

## 🛠️ Tecnologías Utilizadas

- **React**
- **JavaScript (ES6+)**
- **React Hooks (useState)**
- **CSS**
- **Node & npm**
- **Git / GitHub**

---

## 🧠 Conceptos de React Aplicados

- Componentes funcionales
- Props para comunicación entre componentes
- Manejo de estado con `useState`
- Renderizado condicional
- List rendering con `map()`
- Manejo de eventos
- Actualización inmutable del estado

---

## 🏗️ Arquitectura

La aplicación está dividida en componentes reutilizables para mantener el código limpio y escalable.

Ejemplo de estructura:

src/
├── components/
│ ├── TodoItem.jsx
│ ├── TodoList.jsx
│ └── TodoForm.jsx
├── App.js
└── index.js


Se sigue una separación clara entre:
- Lógica de estado
- Presentación
- Manejo de eventos

---

💡 Decisiones Técnicas

Uso de componentes funcionales en lugar de clases para alinearme con las prácticas modernas de React.

Actualización inmutable del estado para evitar efectos secundarios.

Estructura modular para facilitar futuras ampliaciones (ej: persistencia en localStorage o backend).
---
📈 Posibles Mejoras Futuras

Persistencia de tareas en localStorage

Integración con backend (Node/Express)

Filtros (All / Completed / Pending)

Testing con Jest y React Testing Library

Futuro Deploy en Vercel o Netlify
---
👨‍💻 Sobre el Autor

Desarrollador frontend en formación con foco en React y desarrollo web moderno.
Interesado en construir interfaces limpias, mantenibles y orientadas a la experiencia de usuario.
---
## 🚀 Cómo ejecutar el proyecto

```bash
git clone https://github.com/KrommoLT/TodoListReact.git
cd TodoListReact
npm install
npm start

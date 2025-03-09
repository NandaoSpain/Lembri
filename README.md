# TODO List App

Una aplicación de lista de tareas (TODO List) construida con **React** y **TypeScript**, utilizando **Zod** para la validación de formularios, **useState** y **useEffect** para la gestión de estado y **Jest** para pruebas.

## 🚀 Funcionalidades

- 📌 **Añadir** una nueva tarea
- ✅ **Marcar y desmarcar** una tarea como completada
- ❌ **Eliminar** una tarea de la lista
- 📊 **Mostrar el progreso** de finalización de las tareas

---

## 🛠️ Tecnologías Utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) (Validación de formularios)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tailwind CSS](https://tailwindcss.com/) (Estilización)

---

## 📦 Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/todo-list-react.git
   cd todo-list-react
   ```

2. Instala las dependencias:
   ```sh
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   # o
   yarn dev
   ```

---

## 📜 Uso

1. Escribe una nueva tarea en el campo de entrada y presiona **Añadir**.
2. Haz clic en la casilla de verificación para marcar/desmarcar una tarea como completada.
3. Haz clic en el botón **Eliminar** para quitar una tarea de la lista.
4. La barra de progreso mostrará el porcentaje de tareas completadas.

---

## 🧪 Pruebas

Ejecutar las pruebas automatizadas:
```sh
npm test
# o
yarn test
```

Las pruebas incluyen:
- Renderizado de los componentes
- Adición y eliminación de tareas
- Marcado y desmarcado como completado
- Actualización del progreso

---

## 📂 Estructura del Proyecto

```
📦 todo-list-react
├── 📂 src
│   ├── 📂 components
│   │   ├── 📄 Task.tsx
│   │   ├── 📄 TaskList.tsx
│   │   ├── 📄 ProgressBar.tsx
│   │   └── 📄 TaskForm.tsx
│   ├── 📂 hooks
│   │   └── 📄 useTasks.ts
│   ├── 📂 utils
│   │   └── 📄 validation.ts
│   ├── 📄 App.tsx
│   ├── 📄 main.tsx
│   ├── 📄 styles.css
│   └── 📂 tests
│       ├── 📄 Task.test.tsx
│       ├── 📄 TaskList.test.tsx
│       └── 📄 App.test.tsx
└── 📄 README.md
```

---

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License**. Siéntete libre de usarlo y modificarlo según sea necesario.

---

Hecho con ❤️ por [Fernando](https://github.com/NandaoSpain) 🚀


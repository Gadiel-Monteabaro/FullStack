{

    // Establecemos las opciones para compilar nuestro proyecto
    "compilerOptions": {
      "outDir": "./dist", // una vez que compile lo va a crear en esa carpeta
      "rootDir": "./src", // donde encontrar los archivos
      "lib": ["ESNext"], // soporte a la version de js que se va acompilar
      "strict": false, // true - no nos permite ningún any
      "sourceMap": true, // trabajo con debuguer
      "esModuleInterop": true, // poder importar librerias con common js
      "declaration": true
    },
    "include": ["src/**/*.ts"] // los tipos de archivos que vamos a compilar
  }
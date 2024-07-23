FROM node:14

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Instalar TypeScript globalmente
RUN npm install -g typescript

# Copiar el resto del código de la aplicación
COPY . .

# Compilar TypeScript
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 3001

# Comando para ejecutar la aplicación compilada
CMD ["node", "dist/index.js"]

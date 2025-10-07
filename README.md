# Calculadora Científica

Una aplicación móvil desarrollada con Ionic Angular que incluye un sistema de login y una calculadora científica completa.
Integrantes: Daniel Mejía, Edwin Sarango

## Características

### Sistema de Autenticación
- **Login con credenciales quemadas:**
  - Usuario: `admin`
  - Contraseña: `admin123`
- Pantalla de error para credenciales incorrectas
- Navegación automática según el resultado del login

### Calculadora Científica
- **Operaciones básicas:** suma, resta, multiplicación, división
- **Funciones científicas:**
  - Trigonométricas: sin, cos, tan
  - Logarítmicas: log, ln
  - Potenciación: x^y
  - Raíz cuadrada: √
  - Constantes: π, e
  - Porcentaje: %
 
- **Interfaz intuitiva:**
  - Pantalla grande y clara
  - Animaciones suaves
 
## Ejemplos del aplicativo
- Login
<img width="399" height="867" alt="image" src="https://github.com/user-attachments/assets/bca123f5-4953-4c53-81b7-ac2d3b874dd9" />

- Error
<img width="400" height="875" alt="image" src="https://github.com/user-attachments/assets/90a52a7c-7e21-4d1a-b607-573bf2d3f80d" />

##Operaciones

- Ejecución
<img width="398" height="873" alt="image" src="https://github.com/user-attachments/assets/81003c77-6e2d-4176-a061-6d4986300c01" />

- Ejemplo de operación (multiplicación)
<img width="395" height="877" alt="image" src="https://github.com/user-attachments/assets/c7e4d34c-f21e-4079-902c-c1bb0ac5760a" />

- Ejemplo de operación científica (Raiz)
<img width="402" height="880" alt="image" src="https://github.com/user-attachments/assets/18a21ba3-f182-4e20-8744-095d9500a3d8" />
  
- Ejemplo de operación avanzada (Coseno)
<img width="403" height="875" alt="image" src="https://github.com/user-attachments/assets/9fa03eb8-48fe-49ca-82d3-058c7a5e7ced" />




## Estructura del Proyecto

```
src/app/
├── login/           # Página de inicio de sesión
├── error/           # Página de error para login fallido
├── home/            # Pagina de la lógica de la calculadora
└── app.routes.ts    # Configuración de rutas
```

## Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   ionic serve
   ```

3. **Construir para producción:**
   ```bash
   ionic build
   ```

## Flujo de la Aplicación

1. **Pantalla de Login** (`/login`)
   - Formulario con campos de usuario y contraseña
   - Muestra las credenciales de prueba
   - Validación contra credenciales quemadas

2. **Pantalla de Error** (`/error`)
   - Se muestra cuando las credenciales son incorrectas
   - Botón para volver al login
   - Recordatorio de las credenciales correctas

3. **Calculadora Científica** (`/home`)
   - Acceso solo después de login exitoso
   - Funciones básicas y científicas

## Credenciales de Prueba

- **Usuario:** admin
- **Contraseña:** admin123

## Funciones de la Calculadora

### Operaciones Básicas
- `+` Suma
- `-` Resta
- `×` Multiplicación
- `÷` División
- `=` Igual

### Funciones Científicas
- `sin` Seno (en grados)
- `cos` Coseno (en grados)
- `tan` Tangente (en grados)
- `log` Logaritmo base 10
- `ln` Logaritmo natural
- `√` Raíz cuadrada
- `x^y` Potenciación
- `π` Constante Pi
- `e` Constante de Euler
- `%` Porcentaje

### Controles
- `C` Limpiar todo


## Desarrollo

La aplicación está estructurada con componentes standalone de Angular y utiliza el sistema de routing para la navegación entre páginas. El servicio de autenticación maneja el estado de login de forma reactiva.

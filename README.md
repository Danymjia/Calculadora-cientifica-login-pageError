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

![50adf0ac-77cd-4646-ad47-cb55e7054e6b](https://github.com/user-attachments/assets/8a161014-f677-40b5-81c1-b7e99adf0353)

- Error
![97a90942-ff35-4549-a5f9-7096c5240444](https://github.com/user-attachments/assets/9cad4b28-6816-4eaa-b19f-d5dbd15a5758)


##Operaciones

- Ejecución
![WhatsApp Image 2025-10-07 at 4 58 10 PM](https://github.com/user-attachments/assets/155236b4-e7a2-48ae-8974-383c6c0b6d09)

- Ejemplo de operación (multiplicación)
 
![f02a3d8d-9bb4-4831-a043-a5b2b36da163](https://github.com/user-attachments/assets/5c024cb7-642c-473f-bf47-93daf7ad4041)

- Ejemplo de operación científica (Raiz)

![421c0148-6cf5-4441-9fa2-bfd400ea9908](https://github.com/user-attachments/assets/b528fc70-7111-4df8-b9b3-fd5fba7b2a84)

- Ejemplo de operación avanzada (Coseno)

![56e27cf0-ed96-46e5-bb8b-4e5275d59d6e](https://github.com/user-attachments/assets/8ce686c3-c854-49fd-8463-eaf8e5501b81)




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

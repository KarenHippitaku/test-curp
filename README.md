# Validador de CURP

## Objetivo
Aplicar las pruebas necesarias para comprobar un CURP válido a través de un programa sencillo en Node.js

## Datos a evaluar

### Válidos
- Patrón general: ABCD-123456-ABC-DEF-12
- 18 dígitos en total
- 10 letras y 8 números
- Letras mayúsculas
**Primer bloque de 3 letras**
  - La primera letra sólo puede ser H o M
  - Las últimas dos letras deben corresponder a alguna de las 32 combinaciones que identifican los estados o en el caso de extranjeros (NE).

### Inválidos
- Caracteres especiales (Ñ, letras acentuadas, etc.)
**Bloque de 4 letras**
  - Combinaciones que resulten en palabras antisonantes
**Bloque de 6 números**
  - Combinaciones no correspondientes a fechas dentro del formato AA-MM-DD

## Requisitos del proyecto
-Debe leer archivos .txt
-Debe validar CURP, si los contiene
-Debe marcar el tipo de error en caso de CURP inválida

# Blockchain en JavaScript

Este proyecto implementa una simple cadena de bloques (blockchain) utilizando JavaScript. Se ha utilizado la librería `cryptoJs` para funciones criptográficas como la función hash SHA256.


## Instalación

Para ejecutar este proyecto, asegúrate de tener Node.js instalado en tu sistema. Primero, clona este repositorio y luego instala las dependencias utilizando npm:

```bash
npm install
```

Asegúrate de tener la librería `cryptoJs` instalada. Si no la tienes, puedes instalarla utilizando el siguiente comando:

```bash
npm install --save crypto-js
```

## Ejecución
Para ejecutar el código y ver la cadena de bloques en funcionamiento, utiliza el siguiente comando:

```bash 
npm run dev
```

## Funcionamiento

La clase `Block` representa cada bloque de la cadena y contiene los siguientes atributos:

- `index`: El índice del bloque en la cadena.
- `timestamp`: La marca de tiempo en que se creó el bloque.
- `data`: Los datos que el bloque almacena (pueden ser transacciones, mensajes, etc.).
- `previousHash`: El hash del bloque anterior en la cadena.
- `hash`: El hash calculado del bloque actual.

La clase `Blockchain` es responsable de crear y mantener la cadena de bloques. Contiene los siguientes métodos:

- `createGenesisBlock()`: Crea el bloque de génesis, el primer bloque de la cadena.
- `getLastetBlock()`: Obtiene el último bloque agregado a la cadena.
- `addBlock(newBlock)`: Agrega un nuevo bloque a la cadena después de realizar las verificaciones necesarias.
- `isChainValid()`: Verifica la integridad de la cadena asegurándose de que los bloques no se hayan modificado.

## Licencia
Este proyecto está bajo la licencia [MIT](https://choosealicense.com/licenses/mit/).
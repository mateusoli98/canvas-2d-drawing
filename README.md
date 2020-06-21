### Canvas 2D drawing

> Está bliblioteca irá permitir que você possa criar desenhos em forma de linha direto do seu browser

- Instalação

```shell
npm i canvas-2d-drawing
```

- Como utilizar ?
    
    Em seu HTML adicione a tag canvas passando um id, onde o mesmo será utilizado como parâmetro na execução da função _canvas2dDrawing_ dentro do arquivo _JavaScript_. Defina também qual será o tamanho do seu canvas utilizando css.

    ```html
    <canvas id="nameCanvas" style="width: 500px; height: 500px;"></canvas>
    ```

    Para iniciar o seu _Canvas 2d Drawing_ ultilize a função _canvas2dDrawing_ passando um objeto contendo o id do seu canvas:

    ```html
    <script src="canvas-2d-drawing"></script>
    <script>
        canvas2dDrawing({
            id: "teste"
        });
    </script>
    ```

    >Desta forma o seu canvas está pronto.

- Para alterar a espessura da linha e sua cor, adicione o objeto _line_, contendo um _width_ e _color_:

  ```js
    canvas2dDrawing({
        id: "nameCanvas",
        line: {
            width: 5,
            color: "blue"
        }
    });
    ```
    >O canvas inicia por padrâo com width = 3 e color = "black"

Ps: as cores também podem ser em hexadecimal, RGB ou RGBA, exemplo:
  
 1. Hexadecimal 
  
  ```js
    canvas2dDrawing({
        ...
        line: {
            ...
            color: "#dddddd"
        }
    });
   ```
2. RGB
  ```js
    canvas2dDrawing({
        ...
        line: {
            ...
            color: "rgb(0,0,0)"
        }
    });
   ```

2. RGBA

  ```js
    canvas2dDrawing({
        ...
        line: {
            ...
            color: "rgba(0,0,0,0.5)"
        }
    });
    ```


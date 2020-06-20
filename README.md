### Canvas 2D drawing

> Está bliblioteca irá permitir que você possa criar desenhos em forma de linha direto do seu browser

- Instalação

```shell
npm i canvas-2d-drawing
```

- Como uilizar ?
    Em seu HTML adicione a tag canvas passando um id, onde o mesmo será utilizado como parâmetro na execução do metodo _canvas2dDrawing_ dentro do arquivo _JavaScript_. Defina também qual será o tamanho do seu canvas utilizando css.

    ```html
    <canvas id="nameCanvas" style="width: 500px; height: 500px;"></canvas>
    ```

    Em seu arquivo JavaScript importe o método

    ```js
    const { canvas2dDrawing } = require("canvas-2d-drawing");
    ```

    Para iniciar o seu _Canvas 2d Drawing_ ultilize o método _canvas2dDrawing_ passando um objeto contendo o id do seu canvas:

    ```js
    canvas2dDrawing({
        id: "nameCanvas"
    });
    ```

    >Desta forma o seu canvas está pronto.

- Para alterar a espessura da linha e sua cor, adicione o objeto _line_:

  ```js
    canvas2dDrawing({
        id: "nameCanvas",
        line: {
            width: 5,
            color: "blue"
        }
    });
    ```
    >O padrâo é  width : 3 e color : "black"

>Ps: as cores também podem ser em hexadecimal, rgb ou rgba

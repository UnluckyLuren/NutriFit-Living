const containerPrincipal=document.getElementById("displayPreparation"),linkPreparation=document.querySelectorAll(".openInformation"),closePreparation=document.getElementById("closePreparation"),container=document.getElementById("container"),linkBebidas=document.getElementById("linkBebidas"),titleJugo=document.getElementById("imgChangeTitle"),titleSmotthie=document.getElementById("titleBebRep"),divCreation=()=>{containerPrincipal.style.display="none",closePreparation.style.display="inline";return document.createElement("div")};closePreparation.addEventListener("click",(()=>{const e=container.lastChild;container.removeChild(e),containerPrincipal.style.display="flex",closePreparation.style.display="none"})),linkPreparation[0].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n      \n      <h1 class="ingredientes">Preparacion</h1>\n      <pre class="textoI">\n          <br>\n          - Licua todos los ingredientes\n      \n          - verter la mezcla en un sarten con un poco de aceite\n      \n          - voltear cada 2 minutos\n      \n          - Agregar decoraciones al gusto\n      \n          </pre>',container.append(e)})),linkPreparation[1].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n   \n    <h1 class="ingredientes">Preparacion</h1>\n    <pre class="textoI">\n        <br>\n        - Pela y corta las manzanas y \n          mételas al micro 3-5 minutos para asarlas\n\n        -  mezcla y bate todos los ingredientes\n          (menos la manzana para decorar)\n        \n        -  Pon en un molde de horno\n           añade una manzana encima en láminas con canela\n        \n        - Hornea a 200 grados 30 minutos (calor arriba y abajo)\n    \n        </pre>\n    ',container.append(e)})),linkPreparation[2].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n    \n    <h1 class="ingredientes">Preparacion</h1>\n    <pre class="textoI">\n        <br>\n        - Licua todos los ingredientes\n    \n        - verter la mezcla en un sarten con un poco de aceite\n    \n        - voltear cada 2 minutos\n    \n        - Agregar decoraciones al gusto\n    \n        </pre>',container.append(e)})),linkPreparation[3].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        \n    <h1 class="ingredientes">Preparacion</h1>\n    <pre class="textoI">\n        <br>\n        - Licua todos los ingredientes\n\n        - Extender en sartén precalentado y engrasado\n\n        - Rellenarla con yogurt griego \n          (con esencia vainilla y endulzante a tu gusto) \n          y crema de avellana o la crema que tengas en casa.\n\n        - Le cortamos en forma de RADIO \n          para poder doblarla en 4\n        </pre>\n\n    ',container.append(e)})),linkPreparation[4].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            -  Mezclar todos los ingredientes \n               y meter al microondas por 1 minuto \n               (puede ser un poco más según tu micro)\n        \n            </pre>\n        ',container.append(e)})),linkPreparation[5].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            -  Llevar los frutos rojos al microondas\n               por 30 segundos\n            \n            - Revuelva la chia\n            </pre>\n       ',container.append(e)})),linkPreparation[6].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            - Empieza formando capas\n    \n               •GALLETA MARÍA SIN AZÚCAR\n               •YOGURT GRIEGO\n               •FRUTOS ROJOS MACHACADOS\n    \n            - Baña todo en chocolate Turin 70% cacao\n    \n            - Congelador mínimo 2 horas\n            </pre>\n        ',container.append(e)})),linkPreparation[7].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            - LICUA:\n    \n              1/2 tza de harina de avena\n              2 claras o 1 huevo\n              Canela al gusto\n              1 tapa de Vainilla\n              Monk fruit\n              1/2 tza de betabel\n              1/4 tza de leche vegetal\n    \n            - Pasa todo a un sartén con FUEGO BAJO!!! \n              Cocina por ambos lados y agrega el topping \n              de tu preferencia \n    \n            </pre>\n        ',container.append(e)})),linkPreparation[8].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            - Prepara un recipiente de vidrio\n    \n            - Forma capas:\n            \n              •Galletas maria sin azúcar \n              •Mezcla de yogurt\n              •Nueces\n              •Plátano\n              •Cajeta sin azúcar \n    \n            - Metelo al refrigerador o al congelador  por 10 minutos\n            </pre> \n       ',container.append(e)})),linkPreparation[9].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            - LICUA:\n    \n              •1 tza de yogurt griego\n              •1/4 tza de leche de coco con vainilla\n              •10 limones (depende de lo ácido que te guste a ti)\n              •2 cdas de monk fruit\n              •1 tapa de vainilla\n              •1 sobre de grenetina previamente hidratado\n    \n            - Forma la base\n    \n              •1 tza de harina de avena\n              •1/2 tza de ghee\n              •1 cda de monk fruit\n            \n    \n            - Junta la base con el relleno y al refrigerador \n              mínimo 4 horas  \n            </pre>\n        ',container.append(e)})),linkPreparation[10].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            - Mezclar:\n               \n              1 huevo\n              Vainilla\n              Monkfruit\n              Leche de almendras sin azucar\n    \n            - Partir el pan a la mitad\n    \n            - Pasar las medias noches cero cero \n              por la mezcla y llevar al sarten\n            \n            - Reyenar con chocolate \n    \n            </pre>\n        ',container.append(e)})),linkPreparation[11].addEventListener("click",(()=>{const e=divCreation();e.innerHTML=' \n        <h1 class="ingredientes">Preparacion</h1>\n        <pre class="textoI">\n            <br>\n            - En un recipiente redondo para microondas \n              agregamos 1cda de ghee y llevamos \n              por 10 seg al micro.\n              Engrasar con este ghee todo el recipiente y \n              lo que sobre lo dejamos dentro.\n    \n            - En otro recipiente trituramos las galletas y\n              las agregamos al recipiente donde esta el \n              ghee derretido, mezclamos todo muy bien y \n              con ayuda de una cuchara aplastamos hasta \n              formar una capa de galletas muy comprimidas \n              (esta será la base de nuestro cheese cake).\n    \n            - En otro recipiente agregar el queso crema,\n              extracto de vainilla, monk fruit granulado y\n              extracto de vainilla, esta mezcla agregarla al \n              recipiente donde esta la capa de galletas.\n              Llevamos al microondas por 3 min a potencia\n              media pero en intervalos de 20 seg, abrimos el\n              micro dejamos que se ventile unos segundo y \n              volvemos a poner 20 seg hasta tener los 3 min. \n              (es para que el queso no se derrame ).\n               No olvides que sea a potencia media\n            \n            - Una vez que se cocine el cheesecake, \n              dejarlo enfriar y después llevarlo 30 min \n              al refrigerador, desmoldar con cuidado y \n              decorar como se ve en el video.\n              Puedes comerlo directamente del recipiente \n              sin desmoldar\n    \n            </pre>\n        ',container.append(e)})),linkBebidas.addEventListener("click",(()=>{const e=document.getElementById("textBebJugoVerde"),n=document.getElementById("textSmotthie"),a=document.getElementById("imgChangeBeb"),r=document.getElementById("imgBebRep");a.src="/recetario/bebidas/Jugo verde.jpg",titleJugo.textContent="Jugo verde",e.innerHTML="  \n      • 1 taza de agua\n      <br> \n      •½ pepino\n      <br> \n      •1 hoja de acelga\n      <br>\n      •2 rebanadas de piña\n      <br>\n      • ½ taza de agua de coco\n      <br>\n      •½ pieza de apio\n      <br>\n      •1 taza de jugo de manzana\n      <br>\n      •1 manzana\n      <br>\n      •3 hojitas de menta",r.src="/recetario/bebidas/smotthies de fresa.jpg",titleSmotthie.textContent="Smotthie de fresa",n.innerHTML="\n      •1 yogur griego\n      <br>\n      •3 huevos\n      <br>\n      • 2 manzanas amarillas para el relleno\n      <br>\n      •1 manzana (de la que más te guste) para decorar\n      <br>\n      •170 gr de harina de avena\n      <br>\n      •1 cucharada de aceite de coco\n      <br>\n      •canela al gusto\n      <br>\n      •Esencia de vainilla (opcional)"}));
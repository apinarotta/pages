<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swappie kopio sivusto </title>
</head>
<body>
    <h1 style="text-align: center;">IPhone SE 2022 </h1>
    <h2 style="text-align: center;">
        hinta: <span id="hinta">175</span> €
    </h2>
    <img style="display: block; margin: auto; width: 200px;"
    id="iphone"
    src="https://assets.swappie.com/cdn-cgi/image/width=100,height=100,dpr=2,fit=contain,format=auto/swappie-iphone-se-2022-starlight.png?v=1bc6b737"
    alt="iPhone SE 2022">
    <h3 style="text-align: center;">väri</h3>
 <div style="text-align: center;">  
    <button onclick="vaihdaVari('valkoinen')">Valkoinen</button>
    <button onclick="vaihdaVari('musta')">Musta</button>
    <button onclick="vaihdaVari('punainen')">Punainen</button>
 </div>
    <script>
        function vaihdaVari(vari) {
            const iphone = document.getElementById("iphone");
            const hinta = document.getElementById("hinta");
            if (vari === "valkoinen") {
                iphone.src = "https://assets.swappie.com/cdn-cgi/image/width=100,height=100,dpr=2,fit=contain,format=auto/swappie-iphone-se-2022-starlight.png?v=1bc6b737";
                hinta.textContent = 175;
            }
            else if (vari === "musta") {
                iphone.src = "https://assets.swappie.com/cdn-cgi/image/width=100,height=100,dpr=2,fit=contain,format=auto/swappie-iphone-se-2022-midnight.png?v=1bc6b737";
                hinta.textContent = 185;
            }
            else if (vari === "punainen") {
                iphone.src = "https://assets.swappie.com/cdn-cgi/image/width=100,height=100,dpr=2,fit=contain,format=auto/swappie-iphone-se-2022-red.png?v=1bc6b737";
                hinta.textContent = 185;
            }
        }
     </script>
</body>
</html>

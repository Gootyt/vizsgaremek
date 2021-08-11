## **1. Az alkalmazás célja**

Az alkalmazás feladata, hogy a könyveket, kölcsönzések, felhasználók adatait nyilvántartsa és kezelje.

## **2. Az alkalmazás telepítése**

- A célgépre le kell klónozni az adott GitHub repository tartalmát.
- Telepíteni kell az alkalmazás függőségeit az `npm i` paranccsal.
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.

## **3. Az alkalmazás konfigurálása**

A config.service.ts (frontend\src\app\service) állományban be kell állítani az API végpont elérési útvonalát:  

alapértelmezett: http://localhost:3000)

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása:

- El kell indítani a Docker Desktop alkalmazást.
- A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot.  
(Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend.) 


## **5. A végpontok dokumentációja**

Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/Gootyt/vizsgaremek/blob/main/README.md)
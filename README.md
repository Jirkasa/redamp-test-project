# Redamp - Testovací aplikace

## Instalace a spuštění
Pro spuštění této aplikace lokálně si můžete stáhnout tento repozitář. Po stažení nainstalujte NPM balíčky příkazem `npm install` a projekt spusťte pomocí příkazu `npm run dev`.

## Soubor struktura projektu

### Kořenová složka
V následující tabulce jsou popsány některé soubory a složky, které se nacházejí v kořenové složce projektu. Hlavní je složka src, která obsahuje zdrojový kód aplikace.
| Soubor / Složka | Popis |
| --------------- | ----- |
| index.html | HTML stránka aplikace |
| public/ | Složka se statickými assety. |
| src/ | Složka obsahující zdrojové soubory aplikace. |

### Složka src
Složka src obsahuje následující soubory a složky:
| Soubor / Složka | Popis |
| ------ | ----- |
| components/ | Obsahuje znovupoužitelné komponenty. |
| features/ | Obsahuje komponenty podle různých funkcí aplikace (v tomto případě jen pro import CSV souboru). |
| hooks/ | Obsahuje custom hooky. |
| icons/ | Obsahuje SVG ikony. |
| styles/ | Obsahuje globální CSS styly. |
| utils/ | Obsahuje různé utility metody atp. |
| App.tsx | Hlavní komponenta aplikace. |
| main.tsx | Vstupní bod aplikace. |
| store.ts | Obsahuje nakonfigurovaný Redux store. |
| types.ts | Obsahuje nadefinované typy, se kterými se v aplikaci pracuje. |
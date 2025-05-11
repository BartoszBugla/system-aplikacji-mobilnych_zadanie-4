DOTYCZY ĆWICZENIA nr 4
 
Wymagania funkcjonalne aplikacji:
Twoja aplikacja powinna:
[x]Być stworzona bez użycia frameworków typu React/Vue/Angular.
Zawierać:
[] co najmniej 3 widoki lub podstrony (np. strona główna, strona z formularzem, strona z danymi z API),
obsługę formularza z lokalnym zapisem danych w IndexedDB,
[] integrację z zewnętrznym API (np. OpenWeather, NewsAPI, itp.),
[] możliwość działania offline (cache wybranych zasobów + fallback przy braku sieci),
[x] własne ikony (co najmniej dwie rozdzielczości: 192x192 i 512x512),
[x] manifest.json z pełną konfiguracją,
[] własny service worker z użyciem przynajmniej jednej strategii buforowania (np. cache-first, network-first, stale-while-revalidate).
[x]Wymagania dotyczące hostingu:
Aplikacja musi być w pełni działająca online na jednym z darmowych hostingów: Netlify, Firebase Hosting, GitHub Pages lub innym zaakceptowanym przez prowadzącego.
[x]Hosting musi obsługiwać HTTPS i umożliwiać uruchamianie Service Workera.

Wymagania dotyczące sprawozdania (PDF):
Format:
Plik PDF, minimum 5 stron A4, zawierający:
### Wstęp
Krótkie wprowadzenie do tematu PWA i cel projektu.
### Opis funkcjonalności aplikacji
Jakie funkcje zawiera aplikacja, jakie problemy rozwiązuje, jak działa offline.
### Opis techniczny krok po kroku
[] Konfiguracja środowiska (edytory, biblioteki, narzędzia),
[] Struktura projektu,
[] Tworzenie i podłączenie manifestu,
[] Tworzenie i rejestracja service workera,
[] Integracja z API,
[] Strategia cache i konfiguracja offline,
[] Wdrożenie na hostingu – konfiguracja, błędy, obejścia.
### Opis trudności i ich rozwiązań
[] Minimum 3 opisane problemy, które wystąpiły w trakcie pracy (np. problemy z cache, nieprawidłowe działanie SW, błędy MIME, problemy z IndexedDB),
[] Jak zostały rozwiązane i czego nauczyło to autora.
### Podsumowanie
[] Co działa dobrze, co wymaga poprawy, czego się nauczyłeś.
### Załączniki
[] Link do działającej aplikacji,
[] Link do repozytorium GitHub z kodem źródłowym,
[] Zrzuty ekranu pokazujące aplikację w trybie offline i online,
[] Screenshoty z Lighthouse (wynik PWA >90 punktów wymagany).
[x]Co jest zabronione:
Używanie gotowych templatek lub frameworków SPA (np. React),
Generowanie kodu przez chaty AI bez pełnego zrozumienia i modyfikacji,
Kopiowanie kodu z tutoriali 1:1 bez własnej modyfikacji,
Brak działającego hostingu – aplikacja musi być dostępna online.
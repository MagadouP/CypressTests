Feature:    Wyszukiwanie produktu w sklepie erakiety.com, umieszczenie w koszyku i sprawdzenie zawartości koszyka
  Given     Użytkownik akceptuje ciasteczka i przechodzi na stronę główną erakiety.com
    And     Użytkownik widzi pole wyszukiwarki produktów.
   
Scenario: Wyszukiwanie produktu
    Given Użytkownik jest na stronie głównej erakiety.com
    When  Użytkownik wpisuje nazwę produktu w okno wyszukiwarki.
    Then  Użytkownikowi wyświetla się lista produktów pasujących do zapytania.

Scenario: Wybieranie produktu
    Given Użytkownik widzi listę produktów pasujących do zapytania.
    When  Użytkownik wybiera produkt z listy.
    Then  Użytkownikowi wyświetla się strona ze szczegółami produktu, który wybrał.

Scenario: Dodawanie produktu do koszyka
    Given Użytkownik znajduje się na stronie ze szczegółami produktu, który wybrał.
    When  Użytkownik klika w przycisk "Dodaj do koszyka".
    Then  Produkt zostaje dodany do koszyka co potwierdza się krótko wyświetlanym okienkiem o dodaniu produktu oraz ikonką z liczbą dodanych produktów przy koszyku.

Scenario: Sprawdzanie zawartości koszyka.
    Given Użytkownik znajduje się na stronie koszyka.
    When  Użytkownik sprawdza zawartość koszyka.
    Then  System wyświetla listę produktów znajdujących się w koszyku, ich krótki opis, ilość i cenę.

Scenario: Zatwierdzenie zawartości koszyka i przejście do procesu zamówienia.
    Given Użytkownik znajduje się na stronie koszyka.
    When  Użytkownik akceptuje zawartość koszyka poprzez naciśnięcie przycisku "Przejdź dalej".
    Then  System przenosi użytkownika na stronę, na której można wybrać zamówić produkt bez lub z rejestracją użytkownika.


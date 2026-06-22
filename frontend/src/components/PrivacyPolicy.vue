<script setup></script>

<template>
  <section class="section" id="privacy">
    <h1 class="section__header">Polityka prywatności</h1>
    <div class="privacy --box">
      <div class="privacy__content">
        <h2 class="section__header">Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest Paweł Heleniak, właściciel strony internetowej
          pawelheleniak.pl.
        </p>
        <p>
          W sprawach związanych z przetwarzaniem danych osobowych można skontaktować się pod
          adresem: kontakt@pawelheleniak.pl
        </p>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Jakie dane są zbierane</h2>
        <p>Za pośrednictwem formularza kontaktowego użytkownik może przekazać następujące dane:</p>
        <ul>
          <li>imię i nazwisko,</li>
          <li>adres e-mail,</li>
          <li>treść wiadomości.</li>
        </ul>
        <p>
          Podanie danych jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi na przesłane
          zapytanie.
        </p>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Cel przetwarzania danych</h2>
        <p>Dane osobowe są przetwarzane wyłącznie w celu:</p>
        <ul>
          <li>udzielenia odpowiedzi na przesłane zapytanie,</li>
          <li>kontaktu w sprawie współpracy lub realizacji usług,</li>
          <li>prowadzenia dalszej korespondencji związanej z zapytaniem użytkownika.</li>
        </ul>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Podstawa prawna przetwarzania</h2>
        <p>
          Dane osobowe są przetwarzane na podstawie art. 6 ust. 1 lit. f RODO, czyli prawnie
          uzasadnionego interesu administratora polegającego na obsłudze korespondencji i zapytań
          kierowanych za pomocą formularza kontaktowego.
        </p>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Przechowywanie danych</h2>
        <p>
          Dane są przechowywane przez okres niezbędny do prowadzenia korespondencji oraz realizacji
          ewentualnej współpracy. Po ustaniu celu przetwarzania dane mogą zostać usunięte.
        </p>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Udostępnianie danych</h2>
        <p>Dane nie są sprzedawane ani udostępniane podmiotom trzecim w celach marketingowych.</p>
        <p>
          W zakresie niezbędnym do działania strony dane mogą być przetwarzane przez dostawców usług
          technicznych, takich jak hosting, infrastruktura serwerowa lub usługi poczty
          elektronicznej.
        </p>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Prawa użytkownika</h2>
        <p>Każdej osobie, której dane dotyczą, przysługuje prawo do:</p>
        <ul>
          <li>dostępu do swoich danych,</li>
          <li>sprostowania danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania danych.</li>
        </ul>
        <p>
          W celu skorzystania z powyższych praw należy skontaktować się pod adresem:
          kontakt@pawelheleniak.pl
        </p>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Pliki cookies</h2>
        <p>Strona nie wykorzystuje plików cookies w celach analitycznych ani marketingowych.</p>
      </div>

      <div class="privacy__content">
        <h2 class="section__header">Zmiany polityki prywatności</h2>
        <p>
          Administrator zastrzega sobie możliwość aktualizacji niniejszej polityki prywatności w
          przypadku zmian funkcjonalności strony, sposobu przetwarzania danych lub obowiązujących
          przepisów prawa.
        </p>
      </div>
      <div class="privacy__content">
        <h2 class="section__header">Kontakt</h2>
        <p>
          Wszelkie pytania dotyczące niniejszej Polityki Prywatności można kierować na adres e-mail:
          kontakt@pawelheleniak.pl lub telefonicznie pod numerem +48661011470.
        </p>
      </div>
      <div class="privacy__content">
        <p>Data ostatniej aktualizacji: 23.06.2026 r.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 0;
}
.privacy {
  &__content {
    margin-top: 6.4rem;
    &:first-child {
      margin-top: 0;
    }
    ul {
      list-style: disc;
      margin-left: 2rem;
      margin-block: 1rem;
      li {
        &::marker {
          color: var(--primary);
        }
      }
    }
  }
}
</style>

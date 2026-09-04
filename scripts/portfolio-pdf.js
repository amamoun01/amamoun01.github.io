(() => {
  const BUTTON_ID = "portfolio-pdf-download";

  function isFrench() {
    return (
      document.documentElement.lang
        ?.toLowerCase()
        .startsWith("fr") ||
      window.location.pathname.startsWith("/fr/")
    );
  }

  function createPdfButton() {
    if (document.getElementById(BUTTON_ID)) {
      return;
    }

    const french = isFrench();

    const link = document.createElement("a");

    link.id = BUTTON_ID;
    link.className = "portfolio-pdf-button";

    link.href = new URL(
      french
        ? "/assets/pdf/amamoun-portfolio-fr.pdf"
        : "/assets/pdf/amamoun-portfolio-en.pdf",
      document.baseURI
    ).href;

    link.download = french
      ? "amamoun-portfolio-fr.pdf"
      : "amamoun-portfolio-en.pdf";

    const label = french
      ? "Télécharger le portfolio en PDF"
      : "Download portfolio as PDF";

    link.setAttribute("aria-label", label);
    link.setAttribute("title", label);

    link.innerHTML = `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M5 20h14v-2H5v2z
             M19 9h-4V3H9v6H5
             l7 7 7-7z"
        />
      </svg>
    `;

    document.body.appendChild(link);
  }

  createPdfButton();

  if (
    typeof document$ !== "undefined" &&
    document$?.subscribe
  ) {
    document$.subscribe(() => {
      createPdfButton();
    });
  }
})();

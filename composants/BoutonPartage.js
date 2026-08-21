"use client";

import { useState } from "react";

export default function BoutonPartage() {
  const [etat, setEtat] = useState("pret");

  function afficherConfirmation() {
    setEtat("copie");
    window.setTimeout(() => setEtat("pret"), 2200);
  }

  function copierLien(url) {
    if (navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(url).then(afficherConfirmation);
    }

    const zone = document.createElement("textarea");
    zone.value = url;
    zone.setAttribute("readonly", "");
    zone.style.position = "fixed";
    zone.style.opacity = "0";
    document.body.appendChild(zone);
    zone.select();
    document.execCommand("copy");
    document.body.removeChild(zone);
    afficherConfirmation();
    return Promise.resolve();
  }

  async function partager() {
    const url = window.location.origin;
    const donnees = {
      title: "Portfolio — Kablankan Tiemele",
      text: "Découvrez mon portfolio : projets, compétences Full Stack, backend et infrastructure.",
      url
    };

    if (navigator.share) {
      try {
        await navigator.share(donnees);
        return;
      } catch (erreur) {
        if (erreur?.name === "AbortError") return;
      }
    }

    try {
      await copierLien(url);
    } catch {
      setEtat("erreur");
      window.setTimeout(() => setEtat("pret"), 2200);
    }
  }

  const libelle =
    etat === "copie"
      ? "Lien copié ✓"
      : etat === "erreur"
        ? "Copie impossible"
        : "Partager mon portfolio ↗";

  return (
    <button
      type="button"
      className="bouton bouton-secondaire bouton-partage"
      onClick={partager}
      aria-label="Partager le portfolio"
    >
      {libelle}
    </button>
  );
}

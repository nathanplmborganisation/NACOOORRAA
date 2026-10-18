import { filterValidDocuments } from "../utils/documentFilter";
import { DocumentFile } from "../types";

// Test de filtrage des documents
// Vérifie que :
// - un document sélectionné avec du contenu est conservé
// - un document vide est exclu
// - un document non sélectionné est exclu
export function testEmptyDocumentFiltering() {
  const documents: DocumentFile[] = [
    { id: "1", title: "CV Nathan", type: "CV", content: "Expérience en finance", fileName: "cv.pdf", uploadedAt: "2024-01-01" },
    { id: "2", title: "Document vide", type: "CV", content: "", fileName: "empty.txt", uploadedAt: "2024-01-02" },
    { id: "3", title: "Non sélectionné", type: "CV", content: "Contenu valide", fileName: "other.pdf", uploadedAt: "2024-01-03" }
  ];
  const selectedDocIds = ["1", "2"];

  const result = filterValidDocuments(documents, selectedDocIds);

  // Vérification 1 : conservation d'un document sélectionné avec du contenu
  if (result.length !== 1) {
    throw new Error(`Test failed: Expected 1 document, got ${result.length}. Should have filtered out the empty document.`);
  }

  // Vérification 2 : exclusion d'un document vide
  if (result.some(d => d.id === "2")) {
    throw new Error("Test failed: Empty document should have been filtered out.");
  }

  // Vérification 3 : exclusion d'un document non sélectionné
  if (result.some(d => d.id === "3")) {
    throw new Error("Test failed: Unselected document should have been filtered out.");
  }

  // Vérification 4 : le document conservé est bien celui avec contenu
  if (result[0].id !== "1") {
    throw new Error("Test failed: Expected document with id '1' to be preserved.");
  }

  console.log("✅ Test passed: All document filtering conditions met.");
}

// Exécution automatique du test
testEmptyDocumentFiltering();

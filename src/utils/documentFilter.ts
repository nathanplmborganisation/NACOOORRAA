import { DocumentFile } from "../types";

/**
 * Filtre les documents valides et non vides
 * @param documents - Liste des documents à filtrer
 * @param selectedIds - IDs des documents sélectionnés
 * @returns Documents filtrés (sélectionnés et non vides)
 */
export const filterValidDocuments = (
  documents: DocumentFile[],
  selectedIds: string[]
): DocumentFile[] => {
  return documents
    .filter(d => selectedIds.includes(d.id))
    .filter(d => (d.content || "").trim().length > 0);
};

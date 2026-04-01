/**
 * Convert date from USA format (YYYY-MM-DD) to PT-BR format (DD/MM/YYYY)
 * @param {string} dateUSA - Date in format YYYY-MM-DD
 * @returns {string} Date in format DD/MM/YYYY
 */
export const toDatePtBr = (dateUSA) => {
  if (!dateUSA) return '';
  const [year, month, day] = dateUSA.split('-');
  return `${day}/${month}/${year}`;
};

/**
 * Convert date from PT-BR format (DD/MM/YYYY) to USA format (YYYY-MM-DD)
 * @param {string} datePtBr - Date in format DD/MM/YYYY
 * @returns {string} Date in format YYYY-MM-DD
 */
export const toDateUSA = (datePtBr) => {
  if (!datePtBr) return '';
  const [day, month, year] = datePtBr.split('/');
  return `${year}-${month}-${day}`;
};

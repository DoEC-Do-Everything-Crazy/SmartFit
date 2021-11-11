/**
 *
 * @param _
 * @param index
 * @returns return unique key, this function use for Flatlist
 */
export const keyExtractor = (_, index) => `${index}${Date.now()}`;

/**
 * format balance
 */
export const balanceFormat = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: true,
});

import db from '../db';

export default {
  getProductsData: () => db.items,
  getSelectedItem: (id) => db.items.filter((item) => item.id === id),
};

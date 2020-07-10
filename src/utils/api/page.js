import db from '../db';

export default {
  getPageData: (group) => db.pagesData[group],
};

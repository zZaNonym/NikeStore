import { pageApi } from '../../utils/api';

const actions = {
  setIsLoading: (bool) => ({
    type: 'SET_IS_LOADING',
    payload: bool,
  }),
  setPageData: (data) => ({
    type: 'SET_PAGE_DATA',
    payload: data,
  }),
  fetchPageData: (group) => (dispatch) => {
    dispatch(actions.setPageData(pageApi.getPageData(group)));

    return true;
  },
};

export default actions;

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@services/store';

import { setLabels } from '@services/reducers/labels';
import LabelsActions from '@services/actions/labels';
import { setNavigationId } from '@services/reducers/navigation';
import navigationCategories from '@constants/navigation-categories';

const useLabelsList = () => {
  const [
    labels,
    projects,
    navigation,
  ] = useAppSelector(state => [
    state.labels.data,
    state.projects.data,
    state.navigation,
  ]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllLabels();
  }, []);

  const getAllLabels = async () => {
    try {
      const labels = await LabelsActions.getAll();
      dispatch(setLabels(labels));
      console.log(labels);
    } catch(error) {
      console.log('GetAllLabelsError:', error);
    }
  }

  const setNavigationById = (id: number) => {
    dispatch(setNavigationId({ id, categoryName: navigationCategories.LABEL }));
  }

  return {
    // states
    labels,
    projects,
    navigation,
    // reducers
    setNavigationById,
  }
}

export default useLabelsList;
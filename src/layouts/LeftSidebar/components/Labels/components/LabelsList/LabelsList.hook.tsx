import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@services/store';

import { setLabels } from '@services/reducers/labels';
import LabelsActions from '@services/actions/labels';
import { setNavigationId } from '@services/reducers/navigation';

const useLabelsList = () => {
  const [
    labels,
    projects,
  ] = useAppSelector(state => [
    state.labels.data,
    state.projects.data,
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
    dispatch(setNavigationId(id));
  }

  return {
    // states
    labels,
    projects,
    // reducers
    setNavigationById,
  }
}

export default useLabelsList;
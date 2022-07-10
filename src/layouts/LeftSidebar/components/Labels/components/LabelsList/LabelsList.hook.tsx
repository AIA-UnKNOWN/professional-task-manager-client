import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@services/store';

import { setLabels } from '@services/reducers/labels';
import LabelsActions from '@services/actions/labels';

const useLabelsList = () => {
  const [ labels ] = useAppSelector(state => [
    state.labels.data,
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

  return {
    labels,
  }
}

export default useLabelsList;
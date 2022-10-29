import { useAppDispatch, useAppSelector } from '@services/store';

import LabelActions from '@services/actions/labels';
import { setLabels } from '@services/reducers/labels';

const useLabels = () => {
  const dispatch = useAppDispatch();
  const [labels] = useAppSelector(state => [state.labels]);

  const createLabel = async (label) => {
    const { status, data } = await LabelActions.create(label);
    if (status !== 201) return;
    dispatch(setLabels([ ...labels.data, data ]));
  }

  return {
    // Functions
    createLabel,
  }
}

export default useLabels;
import Swal from 'sweetalert2'; 

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

  const deleteLabel = async (labelId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const { data, status } = await LabelActions.deleteLabel(labelId);
          if (data !== 'OK' || status !== 200) return;
          dispatch(setLabels(labels.data.filter(label => label.id !== labelId)));
          Swal.fire(
            'Deleted!',
            'Label has been deleted.',
            'success'
          );
        } catch(error) {
          console.log('DeleteLabelError', error);
        }
      }
    })
  }

  return {
    // Functions
    createLabel,
    deleteLabel,
  }
}

export default useLabels;
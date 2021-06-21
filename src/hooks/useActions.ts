import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/actions';

export const useActions = () => {
    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators(ActionCreators, dispatch), [dispatch]);
    return actions;
};


/* manage the old state and deploy incoming state,e.i UI related state isLoading*/
export interface State {
  isLoading: boolean;
}
const initialState = {
  isLoading: false
};
/*state=initialState default value */
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return {
        isLoading: true
      };
    case 'STOP_LOADING':
      return {
        isLoading: false
      };
    default:
      return state;
  }
}

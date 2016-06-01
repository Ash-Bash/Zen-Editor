export default function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_EXISTING_PROJECT_DIRECTORY':
      state.inputDir = action.dir;
    default:
      return state;
  }

}

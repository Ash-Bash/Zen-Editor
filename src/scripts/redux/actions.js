export default actions = {
  // Sets The Project Directory Path
  openProjectDirectory(path) {
    return {
      type: 'OPEN_EXISTING_PROJECT_DIRECTORY',
      dir: path
    }
  }
}

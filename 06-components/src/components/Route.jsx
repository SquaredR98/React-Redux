import useNavigation from "../hooks/useNavigation";

const Route = ({path, children}) => {
  const { currentPath } = useNavigation();

  if(currentPath === path) {
    return children
  }

  return null;
}

export default Route
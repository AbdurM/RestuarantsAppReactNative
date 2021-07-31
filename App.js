import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import ShowImageScreen from "./src/screens/ShowImage";
import ShowRestuarantLocationScreen from "./src/screens/ShowRestuarantLocationScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  ShowImage: ShowImageScreen,
  ShowRestuarantLocation: ShowRestuarantLocationScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Finder'
  }
});

export default createAppContainer(navigator);
import { Navigation } from "react-native-navigation";
import App from "./App";

Navigation.registerComponent("navigation.playground.WelcomeScreen", () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "navigation.playground.WelcomeScreen",
                    options: { bottomTab: { text: "Messages" } }
                  }
                }
              ]
            }
          },
          {
            component: {
              name: "navigation.playground.WelcomeScreen",
              options: { bottomTab: { text: "Home" } }
            }
          },
          {
            component: {
              name: "navigation.playground.WelcomeScreen",
              options: { bottomTab: { text: "Feed" } }
            }
          },
          {
            component: {
              name: "navigation.playground.WelcomeScreen",
              options: { bottomTab: { text: "Store" } }
            }
          }
        ]
      }
    }
  });
});

import { Navigation } from "react-native-navigation";

import App from "./App";
import List from "./List";

Navigation.registerComponent("app", () => App);
Navigation.registerComponent("list", () => List);

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
                    name: "app",
                    options: { bottomTab: { text: "Messages" } }
                  }
                }
              ]
            }
          },
          {
            component: {
              name: "app",
              options: { bottomTab: { text: "Home" } }
            }
          },
          {
            component: {
              name: "app",
              options: { bottomTab: { text: "Feed" } }
            }
          }
        ]
      }
    }
  });
});

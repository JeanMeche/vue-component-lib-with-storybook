/** @jsx h */
import { h } from "vue";
import { MyButton } from "./components/Button/Button";

export const App = {
  render() {
    return (
      <div class="p-2">
        <h1>Vue3 Jsx Babel</h1>
        <MyButton label="Some Title" />
      </div>
    );
  }
};

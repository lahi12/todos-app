import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router-dom";
import TodosPage from "./pages/TodosPage/TodosPage";
import TodoReminders from "./pages/RemaindersPage/TodoReminders";
import TodoSummaryPage from "./pages/SummaryPage/TodoSummaryPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/todos" exact component={TodosPage} />
        <Route path="/todos/:id" exact component={TodoSummaryPage} />
        <Route path="/reminders" exact component={TodoReminders} />
        <Redirect exact to="/todos" />
      </Switch>
    </div>
  );
}

export default App;

import FieldEditor from "./components/FieldEditor";
import MicroserviceList from "./components/MicroserviceList";
import OptionsSidebar from "./components/OptionsSidebar";

export default function Root(props) {
  return (
    <div>
      <section>{props.name} is mounted!</section>
      <MicroserviceList />
      <OptionsSidebar />
      <FieldEditor />
    </div>
  );
}

import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
      <> 
        <h2>Home</h2>
        <div className="d-flex">
          <div style={{ flex: '1 1 auto' }}>{/* allow Modulelist to expand */}
            <ModuleList />
          </div>
          <div style={{ flex: '0 1 auto' }}>{/* not allow Modulelist to expand */}
            <Status />
          </div>
        </div>
      </>
  );
}
export default Home;
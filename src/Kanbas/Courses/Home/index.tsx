import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
      <> 
        <h2>Home</h2>
        <div className="d-flex">
          <div className="flex-fill" style={{ flex: '1 1 auto'}}>{/* allow Modulelist to expand */}
            <ModuleList />
          </div>
          <div  className="flex-grow-0 me-2 d-none d-lg-block" style={{ flex: '0 1 auto' }}>{/* not allow Modulelist to expand */}
            <Status />
          </div>
        </div>
      </>
  );
}
export default Home;
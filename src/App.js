import { Routes, Route } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import StreamCreate from "./components/streams/StreamCreate";
import Header from "./components/header/header";

function App() {
  return (
    <div className="ui container">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit" element={<StreamEdit />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/show" element={<StreamShow />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

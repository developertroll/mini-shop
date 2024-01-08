import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RevertButton from "./RevertButton";

function TopMenu(props) {
  return (
    <div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" fill>
        {/* 현재 제공하는 메뉴가 없기 때문에 임시로 임의탭 설정 */}
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
      <RevertButton />
    </div>
  );
}

export default TopMenu;

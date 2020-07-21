import React, { useState, useEffect } from "react";
import AppBar from "./Components/AppBar";
import Drawer from "./Components/Drawer";
import Mainview from "./Components/Main";
import { useHistory } from "react-router-dom";
import Api from "../../Helper/Api";
import { LStorage, userKey, tokenKey } from "../../Helper/LocalStorage";

const Index = () => {
  const token = LStorage.getItem(tokenKey);
  const userDatas = LStorage.getItem(userKey);
  useEffect(() => {
    if (!token) {
      history.push("/");
    } else {
      getLinkDatas();
    }
  }, [token]);
  const history = useHistory();
  const [linkDatas, setlinkDatas] = useState([]);
  const [isOpenDrawer, setisOpenDrawer] = useState(false);
  const getLinkDatas = async () => {
    await Api.get("/shorter/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setlinkDatas(response.data.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div>
      <AppBar
        onClickMenu={() => {
          setisOpenDrawer(true);
        }}
        onLogout={() => {
          LStorage.clearAll();
          history.push("/");
        }}
      />
      <Drawer
        openDrawer={isOpenDrawer}
        closeDrawer={() => {
          setisOpenDrawer(false);
        }}
      />
      <Mainview linkdatas={linkDatas} />
    </div>
  );
};

export default Index;

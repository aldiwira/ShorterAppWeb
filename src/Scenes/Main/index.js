import React, { useState, useEffect } from "react";
import AppBar from "./Components/AppBar";
import Drawer from "./Components/Drawer";
import Mainview from "./Components/Main";
import SnackBar from "./Components/SnackBar";
import { useHistory } from "react-router-dom";
import Api from "../../Helper/Api";
import { LStorage, userKey, tokenKey } from "../../Helper/LocalStorage";

const Index = () => {
  const token = LStorage.getItem(tokenKey);
  const userDatas = LStorage.getItem(userKey);
  useEffect(() => {
    setisLoadingContent(true);
    if (!token) {
      history.push("/");
    } else {
      getLinkDatas();
    }
  }, [token]);
  const history = useHistory();
  const [linkDatas, setlinkDatas] = useState([]);
  const [isOpenDrawer, setisOpenDrawer] = useState(false);
  const [isOpenCreateLink, setisOpenCreateLink] = useState(false);
  const [isLoadingContent, setisLoadingContent] = useState(false);
  const [isOpenSnack, setisOpenSnack] = useState(false);
  const [MassageSnack, setMassageSnack] = useState(null);

  const getLinkDatas = async () => {
    await Api.get("/shorter/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setTimeout(() => {
          setlinkDatas(response.data.data);
          setisLoadingContent(false);
        }, 1000);
      })
      .catch((errors) => {
        setisOpenSnack(true);
        let error = errors.response.data.massage;
        setMassageSnack(error);
      });
  };

  const doLogout = async () => {
    setisLoadingContent(true);
    await Api.post(
      "/logout/",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        setTimeout(() => {
          setisLoadingContent(false);
          LStorage.clearAll();
          history.push("/");
        }, 1000);
      })
      .catch((errors) => {
        setisOpenSnack(true);
        let error = errors.response.data.massage;
        setMassageSnack(error);
      });
  };

  return (
    <div>
      <AppBar
        onClickMenu={() => {
          setisOpenDrawer(true);
        }}
        onCreateClick={() => {
          setisOpenCreateLink(true);
        }}
        onLogout={doLogout.bind(this)}
      />
      <Drawer
        userDatas={userDatas}
        tokenDatas={token}
        openDrawer={isOpenDrawer}
        closeDrawer={() => {
          setisOpenDrawer(false);
        }}
        openCreateLink={isOpenCreateLink}
        closeCreateLink={() => {
          setisOpenCreateLink(false);
        }}
      />
      <SnackBar
        openSnack={isOpenSnack}
        closeSnack={() => setisOpenSnack(false)}
        massageSnack={MassageSnack}
      />
      <Mainview linkdatas={linkDatas} isLoadingContent={isLoadingContent} />
    </div>
  );
};

export default Index;

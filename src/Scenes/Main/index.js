import React, { useState, useEffect } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import AppBar from "./Components/AppBar";
import Drawer from "./Components/Drawer";
import Mainview from "./Components/Main";
import SnackBar from "./Components/SnackBar";
import { useHistory } from "react-router-dom";
import Api from "../../Helper/Api";
import { LStorage, userKey, tokenKey } from "../../Helper/LocalStorage";

const Index = () => {
  useEffect(() => {
    setisLoadingContent(true);
    if (!token) {
      setMassageSnack("Redirect to login page");
      setisOpenSnack(true);
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    } else {
      getLinkDatas();
    }
  }, []);

  const token = LStorage.getItem(tokenKey);
  const userDatas = LStorage.getItem(userKey);
  const history = useHistory();
  const [linkDatas, setlinkDatas] = useState([]);
  const [isOpenDrawer, setisOpenDrawer] = useState(false);
  const [isOpenCreateLink, setisOpenCreateLink] = useState(false);
  const [isLoadingContent, setisLoadingContent] = useState(false);
  const [isOpenSnack, setisOpenSnack] = useState(false);
  const [MassageSnack, setMassageSnack] = useState(null);

  const getLinkDatas = async () => {
    setisLoadingContent(true);
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
        if (errors.request) {
          setMassageSnack("Can't connect to database");
          setisOpenSnack(true);
        }
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
    <ThemeProvider theme={theme}>
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
          fetchLink={getLinkDatas.bind(this)}
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
        <Mainview
          linkdatas={linkDatas}
          fetchLink={getLinkDatas.bind(this)}
          isLoadingContent={isLoadingContent}
        />
      </div>
    </ThemeProvider>
  );
};

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default Index;

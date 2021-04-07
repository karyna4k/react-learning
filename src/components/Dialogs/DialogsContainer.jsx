import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onNewMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            updateNewMessageText={onNewMessageChange}
            addMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

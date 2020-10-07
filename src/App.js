import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

import "./App.css";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";
function App() {
    const [input, setInput] = useState("");
    const [messages, setmessages] = useState([]);
    const [userName, setUserName] = useState("");
    useEffect(() => {
        setUserName(prompt("Enter your Name"));
    }, []);

    useEffect(() => {
        db.collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setmessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        message: doc.data(),
                    }))
                );
            });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        if (input !== "") {
            db.collection("messages").add({
                message: input,
                username: userName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setInput("");
        }
    };
    return (
        <div className="App">
            <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
            <h1>Facebook Messenger Clone Developed By Waleed</h1>
            <h3>Welcome {userName}</h3>
            <form className="app__form">
                <FormControl className="app__formControl">
                    <Input
                        className="app__input"
                        value={input}
                        placeholder="Enter a message....."
                        onChange={(event) => setInput(event.target.value)}
                    />

                    <IconButton
                        className="app__iconButton"
                        variant="contained"
                        color="primary"
                        type="submit"
                        id="sendMessage"
                        onClick={sendMessage}
                        disabled={!input}
                    >
                        <SendIcon />
                    </IconButton>
                </FormControl>
            </form>
            <FlipMove>
                {messages.map(({ message, id }) => (
                    <Message key={id} username={userName} message={message} />
                ))}
            </FlipMove>
        </div>
    );
}

export default App;

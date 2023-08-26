import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { useState } from "react";
import { database } from "./firebaseConfig";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(database, "contact"), {
        name,
        number,
      });
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setNumber("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async () => {
    const q = query(collection(database, "contact"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <div className="container">
      <Card variant="outlined">
        <CardContent>
          <Typography color="text.secondary" gutterBottom textAlign="center">
            Contact Info
          </Typography>
          <TextField
            label="Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <TextField
            label="Number"
            variant="standard"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleSubmit}>
            Add Contact
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;

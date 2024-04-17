import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };
  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed == true) {
      str += "0123456789";
    }
    if (charAllowed == true) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, length]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 bg-gray-900 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={6}
              max={40}
              value={length}
              name=""
              id=""
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prevBool) => !prevBool);
              }}
              type="checkbox"
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prevBool) => !prevBool);
              }}
              type="checkbox"
              name=""
              id=""
            />
            <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

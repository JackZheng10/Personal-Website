function App() {
  if (typeof window !== "undefined") {
    //redirect to home page. doesnt work w build so figure out another way. should be easy
    window.location = "/about";
  }
}

export default App;

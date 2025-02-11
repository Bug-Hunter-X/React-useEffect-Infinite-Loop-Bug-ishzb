```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Component rendered with count:', count);
    // Incorrectly updating state inside useEffect without dependencies will lead to an infinite loop.
    setCount(count + 1);
  }, []); // <-- Missing dependency array causes infinite loop

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
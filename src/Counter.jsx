export default function Counter({ count, handlePlusClick }) {
  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={handlePlusClick}>+1</button>
    </>
  );
}

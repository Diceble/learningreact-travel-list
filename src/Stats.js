export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats"> Start adding some items to your packing list 🚀</p>
    );

  const numberOfItems = items.length;
  const amountPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((amountPacked / numberOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everthing! Ready to go ✈️"
          : `💼You have ${numberOfItems} items on your list, and you already packed${" "}
        ${amountPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}

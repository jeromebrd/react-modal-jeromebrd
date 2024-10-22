# React Modal By jeromebrd

A simple React modal component with customizable text.

## Installation

```bash
npm install react-modal-jeromebrd
```

## Usage

```jsx
import Modal from 'react-modal-jeromebrd';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)}>Hello World!</Modal>}
    </>
  );
}
```

## Props

- **onClose (_required_):** A function that will be called when the modal should be closed (e.g., when the user clicks the close button).
- **children (_optional_):** Content to display inside the modal. (type : string|node)

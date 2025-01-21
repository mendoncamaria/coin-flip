import { useState } from 'react';
import Coin from './Coin.tsx'; // Assuming Coin.tsx is your component for displaying the coin

interface CoinProps {
  side: 'head' | 'tail';
  imgSrc: string;
}

const FlipCoin = () => {
  const [currFace, setCurrFace] = useState<CoinProps | null>(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);

  const defaultProps = {
    coins: [
      {
        side: 'head',
        imgSrc:
          'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg',
      },
      {
        side: 'tail',
        imgSrc:
          'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg',
      },
    ],
  };

  const choice = (arr: CoinProps[]): CoinProps => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  };

  const flipCoin = () => {
    const newFace = choice(defaultProps.coins as CoinProps[]); // Type assertion
    setCurrFace(newFace);
    setTotalFlips(totalFlips + 1);
    setHeads(newFace.side === 'head' ? heads + 1 : heads);
  };

  return (
    <div>
      <h2>Let's flip a coin</h2>
      {currFace && <Coin info={currFace} />}
      <button onClick={flipCoin}>Flip Me!</button>
      <p>
        Out of {totalFlips} flips, there have been {heads} heads and{' '}
        {totalFlips - heads} tails
      </p>
    </div>
  );
};

export default FlipCoin;
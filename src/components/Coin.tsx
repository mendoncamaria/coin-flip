interface CoinProps {
  info: {
    side: 'head' | 'tail';
    imgSrc: string;
  };
}

const Coin = ({ info }: CoinProps) => {
  return (
    <div className="Coin">
      <img
        style={{ width: '200px', height: '200px' }}
        src={info.imgSrc}
      />
    </div>
  );
};

export default Coin;